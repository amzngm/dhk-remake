'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useRef, useState } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import AnimText from '@/components/ui/unstyled/AnimText'
import ProjrctGalleryNav from '@/components/projects-components/ProjrctGalleryNav'
import projectsDbData from '@/db/projects.json'

export default function ProjrctGallery({ project }: { project: (typeof projectsDbData.projects)[number] }) {
  const containerRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<globalThis.ScrollTrigger | null>(null)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const currentIndex = projectsDbData.projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projectsDbData.projects[(currentIndex + 1) % projectsDbData.projects.length]

  useGSAP(
    () => {
      if (!containerRef.current || !sliderRef.current) return

      const slider = sliderRef.current
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as { isDesktop: boolean; reduceMotion: boolean }

          if (isDesktop && !reduceMotion) {
            const tl = gsap.to(slider, {
              x: () => -(slider.scrollWidth - window.innerWidth),
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${slider.scrollWidth - window.innerWidth}`,
                invalidateOnRefresh: true,
              },
            })
            scrollTriggerRef.current = tl.scrollTrigger || null
          }

          if (reduceMotion) {
            gsap.set(slider, { flexWrap: 'wrap', width: '100%' })
            const items = gsap.utils.toArray<HTMLDivElement>('.gallery-item')
            items.forEach((item) => {
              gsap.set(item, { width: '100vw', height: '100vh' })
            })
          }
        }
      )
    },
    { scope: containerRef }
  )

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        if (isInfoOpen) {
          scrollTriggerRef.current.disable(false)
        } else {
          scrollTriggerRef.current.enable()
        }
      }

      gsap.to('.gallery-images', {
        y: isInfoOpen ? 50 : 0,
        pointerEvents: isInfoOpen ? 'none' : 'auto',
        duration: 0.6,
        ease: 'expo.inOut',
        stagger: 0.02,
      })
    },
    { dependencies: [isInfoOpen], scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative flex flex-col lg:h-dvh min-h-dvh lg:overflow-hidden bg-bg text-text max-lg:pb-12">
      <ProjrctGalleryNav project={project} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />

      <div className="flex flex-col flex-1 justify-center w-full lg:overflow-hidden gallery-images">
        <div className="lg:hidden top-14 sticky max-w-md text-3xl normal-case fl-px-4/5 pt-4 pb-58">
          {project.title && <h2 className="leading-snug">{project.title}</h2>}
          {project.tagline && <h2 className="text-main/60 leading-snug">{project.tagline}</h2>}
        </div>

        <div ref={sliderRef} className="flex max-lg:flex-col lg:gap-0.5 w-full lg:w-fit h-auto lg:h-full">
          {project.imageGallery?.map((image, index) => (
            <div key={index} className="flex flex-col justify-center w-dvw lg:w-[65dvw] aspect-13/9 lg:aspect-12/9 shrink-0 gallery-item">
              <div className="relative size-full">
                <Image
                  src={image.src}
                  alt={image.imageDesc || `${project.title} image ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="object-cover"
                />
              </div>

              <div className="z-10 relative flex gap-3 bg-bg tracking-wide fl-px-4/5 py-2 lg:py-4">
                <AnimText>{index + 1}</AnimText>
                <AnimText className="text-main">{image.imageDesc || `${project.title}`}</AnimText>
              </div>
            </div>
          ))}

          {nextProject && (
            <div>
              <AnimText className="lg:hidden bg-bg text-2xl normal-case tracking-wide fl-px-4/5 py-12">Next Project</AnimText>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex flex-col justify-center w-dvw lg:w-[65dvw] lg:h-full aspect-13/9 lg:aspect-12/9 max-lg:aspect-square shrink-0 gallery-item"
              >
                <div className="relative size-full hover:opacity-70">
                  <Image src={nextProject.imageSrc} alt={nextProject.title} fill sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover" />
                </div>
                <AnimText className="bg-bg tracking-wide fl-px-4/5 py-2 lg:py-4">{nextProject.title}</AnimText>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
