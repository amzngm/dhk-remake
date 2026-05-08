'use client'

import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import awardsData from '@/db/awards.json'

type Award = {
  title: string
  title2: string
  award: string
  date?: string
  imageSrc: string
}

const awards: Award[] = awardsData.awards

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const ySetters = useRef<(gsap.QuickToFunc | null)[]>([])
  const [displayCount, setDisplayCount] = useState(10)

  useGSAP(
    () => {
      gsap.set(imageRefs.current, { yPercent: -50 })

      ySetters.current = imageRefs.current.map((el) => (el ? gsap.quickTo(el, 'y', { duration: 0.6, ease: 'expo.out' }) : null))
    },
    { dependencies: [displayCount], scope: sectionRef }
  )

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
    imageRefs.current.forEach((imageRef, index) => {
      if (!imageRef || !ySetters.current[index]) return

      const li = imageRef.parentElement
      if (!li) return

      const liRect = li.getBoundingClientRect()
      const y = e.clientY - liRect.top
      ySetters.current[index]!(y)
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative w-dvw bg-bg text-text fl-px-4/5 py-44">
      <div className="flex max-lg:flex-col justify-between items-start gap-44 max-lg:gap-24 size-full">
        <h4 className="font-semibold fl-text-4xl/7xl leading-none tracking-wide shrink">Awards</h4>

        <ul onMouseMove={handleMouseMove} className="flex flex-col justify-between gap-2 w-full max-w-5xl max-lg:fl-text-base/lg text-lg normal-case">
          {awards.slice(0, displayCount).map((award: Award, index: number) => (
            <li key={index} className="group relative flex justify-between text-main/50 hover:text-text cursor-pointer">
              <div className="flex justify-between fl-gap-2/22">
                <span>{award.date}</span>
                <h6>
                  <span>{award.title}</span>
                  <span className="hidden lg:group-hover:block">{award.title2}</span>
                </h6>
              </div>

              <h6 className="max-lg:hidden">{award.award}</h6>
              <span className="lg:hidden fl-text-sm/xl whitespace-nowrap">[ + ]</span>

              <div
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className="max-lg:hidden top-0 right-[105%] absolute size-45 bg-main opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Image src={award.imageSrc} alt={award.title} fill sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover" />
              </div>
            </li>
          ))}

          <button
            onClick={() => {
              setDisplayCount((prev) => Math.min(prev + 5, awards.length))
            }}
            className="w-fit hover:bg-text lowercase mt-24 cursor-pointer"
          >
            [<span className="hover:text-bg fl-px-1/8"> Load more</span>]
          </button>
        </ul>
      </div>
    </section>
  )
}
