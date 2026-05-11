'use client'

import Image from 'next/image'
import { gsap } from '@/utils/gsapConfig'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import teamConfig from '@/db/team.json'

interface TeamMember {
  name: string
  role: string
  info?: string[]
  imageSrc: string
  golden?: boolean
}

function extractImageUrl(src: string): string {
  const firstUrl = src.split(',')[0]?.trim()
  return firstUrl.replace(/\s+\d+w$/, '')
}

function MemberCard({ member, setSelectedMember }: { member: TeamMember; setSelectedMember: (m: TeamMember) => void }) {
  return (
    <div className="group w-55 shrink-0">
      <div className="relative size-55 overflow-hidden">
        <Image
          src={extractImageUrl(member.imageSrc)}
          alt={member.name}
          fill
          loading="eager"
          sizes="320px"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />

        {member.info && (
          <button
            onClick={() => setSelectedMember(member)}
            className="absolute inset-0 flex justify-center items-center bg-bg/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none"
          >
            [<span className="px-2">info</span>]
          </button>
        )}
      </div>

      <div className="font-medium text-sm normal-case leading-tight">
        <h5 className={`${member.golden ? 'text-yellow-500' : ''}`}>{member.name}</h5>
        <h6 className="text-main">{member.role}</h6>
      </div>
    </div>
  )
}

function Modal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [member])

  // in
  useLayoutEffect(() => {
    if (!member || isClosing || !containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } })
      tl.fromTo('.modal-card', { alpha: 0 }, { alpha: 1, delay: 0.3 })
      tl.fromTo('.modal-backdrop', { alpha: 0 }, { alpha: 1 })
    }, containerRef)

    return () => ctx.revert()
  }, [member, isClosing])

  // exit
  const handleClose = () => {
    if (!containerRef.current) return

    setIsClosing(true)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.in' } })
      tl.to('.modal-card', { alpha: 0 })
      tl.to('.modal-backdrop', {
        alpha: 0,
        onComplete: () => {
          setIsClosing(false)
          onClose()
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }

  const handleWheel = (e: React.WheelEvent) => {
    const content = contentRef.current
    if (!content) return

    const isScrollingUp = e.deltaY < 0
    const isScrollingDown = e.deltaY > 0
    const isAtTop = content.scrollTop === 0
    const isAtBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1

    // Allow scrolling within modal content
    if ((isScrollingUp && !isAtTop) || (isScrollingDown && !isAtBottom)) {
      e.stopPropagation()
    }
  }

  if (!member) return null

  return (
    <div ref={containerRef} onClick={handleClose} className="z-50 fixed inset-0 flex justify-center items-center bg-bg/99 modal-backdrop">
      <div onClick={(e) => e.stopPropagation()} className="flex max-lg:flex-col lg:max-w-8/12 max-lg:size-full aspect-video bg-text text-bg modal-card">
        <button onClick={handleClose} className="lg:hidden self-end hover:bg-text m-4 cursor-pointer">
          [<span className="hover:text-bg tracking-wide px-6">close</span>]
        </button>

        <div className="relative lg:w-1/2 max-lg:w-full max-lg:h-1/2">
          <Image src={extractImageUrl(member.imageSrc)} alt={member.name} fill sizes="100dvw" loading="eager" className="object-cover max-lg:object-contain" />
        </div>

        <div
          ref={contentRef}
          onWheel={handleWheel}
          className="flex flex-col justify-between lg:w-1/2 max-lg:w-full max-lg:h-1/2 overflow-y-auto overscroll-contain normal-case p-8"
        >
          <div className="font-bold text-2xl mb-44">
            <h5 className={`${member.golden ? 'text-yellow-500' : ''}`}>{member.name}</h5>
            <h6 className="text-main/50">{member.role}</h6>
          </div>

          <div className="space-y-4 font-medium text-balance leading-snug pr-12">
            {member.info?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleClose} className="max-lg:hidden top-5 right-6 absolute hover:bg-text cursor-pointer">
        [<span className="hover:text-bg tracking-wide px-6">close</span>]
      </button>
    </div>
  )
}

export default function MeetTheTeam() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', 'Partners + Directors', 'Senior Associates', 'Associates', 'Support Leads']
  const getCategoryForRole = (role: string): string => {
    if (role.includes('Partner') || role.includes('Director')) return 'Partners + Directors'
    if (role.includes('Senior Associate')) return 'Senior Associates'
    if (role.includes('Associate')) return 'Associates'
    return 'Support Leads'
  }
  const filteredTeam = selectedCategory === 'all' ? teamConfig.team : teamConfig.team.filter((m) => getCategoryForRole(m.role) === selectedCategory)

  const midPoint = Math.ceil(filteredTeam.length / 2)
  const firstRow = filteredTeam.slice(0, midPoint)
  const secondRow = filteredTeam.slice(midPoint)

  const updateScrollState = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  // Check initial scroll state
  useEffect(() => {
    updateScrollState()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 636
    const targetScroll = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    gsap.to(scrollRef.current, {
      scrollLeft: targetScroll,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: updateScrollState,
    })
  }

  return (
    <div className="relative w-dvw overflow-hidden bg-bg text-text py-4 fl-ps-4/5">
      <h5 className="font-bold max-lg:text-5xl text-6xl tracking-wide">Meet the team</h5>
      <hr className="text-main/50 scale-x-105 mt-12" />

      <div className="flex justify-between items-center py-8 lg:fl-pe-4/5">
        <div style={{ scrollbarWidth: 'none' }} className="flex gap-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`outline-none lowercase cursor-pointer whitespace-nowrap ${selectedCategory === category ? '' : 'text-main/60'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-lg:hidden flex gap-6">
          <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed">
            prev
          </button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight} className="disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed">
            next
          </button>
        </div>
      </div>

      <div ref={scrollRef} onScroll={updateScrollState} style={{ scrollbarWidth: 'none' }} className="overflow-x-auto fl-pe-4/5">
        <div className="flex flex-col gap-4 w-max">
          {/* Row 1 */}
          <div className="flex gap-3">
            {firstRow.map((member, index) => (
              <MemberCard key={`row1-${index}`} member={member as TeamMember} setSelectedMember={setSelectedMember} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-3">
            {secondRow.map((member, index) => (
              <MemberCard key={`row2-${index}`} member={member as TeamMember} setSelectedMember={setSelectedMember} />
            ))}
          </div>
        </div>
      </div>

      <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}
