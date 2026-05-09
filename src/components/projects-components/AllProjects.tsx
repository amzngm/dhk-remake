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
          <AnimText as="h3">{project.title}</AnimText>
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
    <Link href={`/projects/${project.slug}`} className="group w-full cursor-pointer">
      <div className="grid grid-cols-8 max-lg:grid-cols-2 w-full lg:max-w-[75%] text-main group-hover:text-text normal-case ms-auto lg:py-2">
        <span className="max-lg:hidden col-span-1">0{index + 1}</span>

        <AnimText as="h3" className="col-span-2">
          {project.title}
        </AnimText>

        <AnimText as="p" className="max-lg:hidden col-span-2">
          {project.services}
        </AnimText>

        <div className="flex justify-end gap-2 col-span-3">
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
            height: 50,
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
    },
    { dependencies: [isGrid] }
  )

  return (
    <MouseFollower className="w-dvw" text="[ view project ]">
      <section className={`relative w-dvw min-h-dvh bg-bg text-text py-4 ${isGrid ? 'fl-ps-4/5 pe-0 max-lg:fl-px-4/5' : 'fl-px-4/5'}`}>
        <div className="flex max-lg:flex-col-reverse justify-between items-start h-60 max-lg:min-h-80 my-8">
          <div className="flex max-lg:flex-col-reverse justify-between lg:items-end w-full max-lg:h-full">
            <button onClick={toggle} className="flex gap-1">
              <AnimText className={`${isGrid ? 'text-text' : 'text-main'} cursor-pointer`}>grid</AnimText>
              <AnimText className="text-main">/</AnimText>
              <AnimText className={`${!isGrid ? 'text-text' : 'text-main'} cursor-pointer`}>list</AnimText>
            </button>

            <AnimText as="h1" className="w-full max-w-[75%] font-bold max-lg:text-5xl text-7xl">
              All Projects
            </AnimText>
          </div>
        </div>

        <div className={isGrid ? 'block' : 'hidden'}>
          {allProjects.projects.map((project, index) => (
            <ProjectGridItem key={project.slug || index} project={project} />
          ))}
        </div>

        {hasShownList && (
          <div className={!isGrid ? 'block' : 'hidden'}>
            {allProjects.projects.map((project, index) => (
              <ProjectListItem key={project.slug || index} project={project} index={index} />
            ))}
          </div>
        )}

        <div className="w-full lg:max-w-[75%] lg:ms-auto mt-22">
          <BackToTopBtn />
        </div>
      </section>
    </MouseFollower>
  )
}
