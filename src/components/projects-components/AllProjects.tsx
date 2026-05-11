'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import MouseFollower, { useMouseFollower } from '@/components/shared/MouseFollower'
import AnimText from '@/components/ui/unstyled/AnimText'
import allProjects from '@/db/projects.json'
import BackToTopBtn from '@/components/shared/BackToTopBtn'
import AnimIn from '@/components/ui/unstyled/AnimIn'

function ProjectGridItem({ project }: { project: (typeof allProjects.projects)[number] }) {
  const { setIsHovering } = useMouseFollower()

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group flex max-lg:flex-col-reverse project-grid-item cursor-pointer"
    >
      <div className="flex justify-between w-full lg:max-w-[25%] lg:text-main group-hover:text-text normal-case max-lg:py-4 pe-2">
        <div>
          <AnimText as="h3" className="mb-1">
            {project.title}
          </AnimText>
          <AnimText as="p" className="hidden lg:group-hover:block text-main">
            {project.tagline}
          </AnimText>
          <AnimText as="p" className="hidden lg:group-hover:block text-main">
            - {project.services}
          </AnimText>
        </div>

        <AnimText>{project.year}</AnimText>
      </div>

      <div className="relative w-full lg:max-w-[75%] aspect-video">
        <Image src={project.imageSrc} alt={project.title} fill loading="eager" className="object-cover" />
      </div>
    </Link>
  )
}

function ProjectListItem({ project, index }: { project: (typeof allProjects.projects)[number]; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group w-full cursor-pointer project-list-item">
      <div className="grid grid-cols-12 max-lg:grid-cols-2 w-full lg:max-w-[75%] text-main/60 group-data-[active=true]:text-text group-hover:text-text normal-case ms-auto py-4 lg:py-2">
        <AnimText className="max-lg:hidden col-span-1">0{index + 1}</AnimText>

        <AnimText as="h3" className="lg:col-span-4">
          {project.title}
        </AnimText>

        <AnimText as="p" className="max-lg:hidden col-span-3">
          {project.services}
        </AnimText>

        <div className="flex justify-end gap-2 lg:col-span-4">
          <AnimText as="p">{project.tagline}</AnimText>
          <AnimText>{project.year}</AnimText>
        </div>

        {project.imageGallery.slice(0, 4).map((image, index) => (
          <div key={index} className="hidden lg:group-hover:block relative aspect-video">
            <Image src={image.src} alt={image.imageDesc || ''} fill loading="eager" className="object-cover" />
          </div>
        ))}
      </div>
    </Link>
  )
}

export default function AllProjects() {
  const [isGrid, setIsGrid] = useState(true)
  const [hasShownList, setHasShownList] = useState(false)

  const filters = [
    'all projects',
    'architecture',
    'interior design',
    'urban design',
    'sustainable',
    'retail',
    'residential',
    'public + education',
    'office',
    'mixed-use',
    'hospitality',
  ]
  const [selectedFilter, setSelectedFilter] = useState('all projects')

  const filteredProjects = allProjects.projects.filter((project) => {
    if (selectedFilter === 'all projects') return true
    const s = (project.services || '').toLowerCase()
    const t = (project.tags || '').toLowerCase()
    return s.includes(selectedFilter) || t.includes(selectedFilter)
  })

  const toggle = () => {
    setIsGrid((prev) => !prev)
    setHasShownList(true)
  }

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLAnchorElement>('.project-grid-item')
      const mm = gsap.matchMedia()

      items.forEach((item) => {
        mm.add('(min-width: 1024px)', () => {
          gsap.from(item, {
            height: 140,
            ease: 'none',

            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            },
          })
        })
      })

      const listItems = gsap.utils.toArray<HTMLAnchorElement>('.project-list-item')
      listItems.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 55%',
            end: 'bottom 56%',
            onEnter: () => item.setAttribute('data-active', 'true'),
            onLeave: () => item.setAttribute('data-active', 'false'),
            onEnterBack: () => item.setAttribute('data-active', 'true'),
            onLeaveBack: () => item.setAttribute('data-active', 'false'),
          },
        })
      })
    },
    { dependencies: [isGrid, selectedFilter] }
  )

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.filter-item',
        start: 'top -20%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.to('.filter-item', {
      opacity: 0,
      height: 0,
      paddingBottom: 0,
      pointerEvents: 'none',
      duration: 0,
    })
    tl.to(
      '.filter-icon',
      {
        rotate: 360,
        duration: 0,
      },
      '<'
    )
  })

  return (
    <MouseFollower className="w-dvw" text="[ view project ]">
      <div className="top-5 z-10 sticky flex flex-col flex-wrap max-lg:items-center lg:content-end w-[70%] lg:w-full lg:max-w-[32.5%] h-fit overflow-hidden max-lg:mx-auto lg:me-auto">
        {filters.map((filter, index) => (
          <AnimText
            as="button"
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`relative flex items-center max-lg:w-full max-lg:max-w-2xl tracking-wide max-sm:max-w-sm max-lg:ms-auto max-sm:me-auto ps-10 pb-2 cursor-pointer ${index !== 0 ? 'filter-item' : ''}`}
          >
            {selectedFilter === filter && (
              <span className="-left-9 absolute filter-icon whitespace-nowrap rotate-180 me-2">
                [{' '}
                <svg className="inline-block size-3 mt-1">
                  <path d="M11 1L6 6L1 1" stroke="currentColor" strokeWidth="2"></path>
                </svg>{' '}
                ]
              </span>
            )}
            <span>{filter}</span>
          </AnimText>
        ))}
      </div>

      <section className={`relative w-dvw min-h-dvh bg-bg text-text py-4 ${isGrid ? 'fl-ps-4/5 pe-0 max-lg:fl-px-4/5' : 'fl-px-4/5'}`}>
        <div className="flex max-lg:flex-col-reverse justify-between items-start h-60 max-lg:min-h-80 my-12">
          <div className="flex max-lg:flex-col-reverse justify-between lg:items-end w-full max-lg:h-full">
            <button onClick={toggle} className="flex gap-1">
              <AnimText className={`${isGrid ? 'text-text' : 'text-main'} cursor-pointer`}>grid</AnimText>
              <AnimText className="text-main">/</AnimText>
              <AnimText className={`${!isGrid ? 'text-text' : 'text-main'} cursor-pointer`}>list</AnimText>
            </button>

            <AnimText as="h1" className="w-full max-w-[75%] font-bold max-lg:text-5xl text-7xl tracking-wide">
              All Projects
            </AnimText>
          </div>
        </div>

        <AnimIn className={isGrid ? 'block' : 'hidden'}>
          {filteredProjects.map((project, index) => (
            <ProjectGridItem key={project.slug || index} project={project} />
          ))}
        </AnimIn>

        {hasShownList && (
          <div className={!isGrid ? 'block' : 'hidden'}>
            {filteredProjects.map((project, index) => (
              <ProjectListItem key={project.slug || index} project={project} index={index} />
            ))}
          </div>
        )}

        <div className="z-30 relative w-full lg:max-w-[75%] lg:ms-auto mt-22">
          <BackToTopBtn />
        </div>
      </section>
    </MouseFollower>
  )
}
