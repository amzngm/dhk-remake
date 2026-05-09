'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/utils/gsapConfig'
import Indicator from '@/components/ui/effects/Indicator'
import NavMenu from '@/components/nav-components/NavMenu'
import projectsDbData from '@/db/projects.json'

export default function ProjrctGalleryNav({
  project,
  isInfoOpen,
  setIsInfoOpen,
}: {
  project: (typeof projectsDbData.projects)[number]
  isInfoOpen: boolean
  setIsInfoOpen: (val: boolean) => void
}) {
  const infoRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useGSAP(
    () => {
      if (!infoRef.current) return
      gsap.to(infoRef.current, {
        height: isInfoOpen ? 'auto' : 0,
        opacity: isInfoOpen ? 1 : 0,
        duration: 0.8,
        ease: 'expo.inOut',
      })
    },
    { dependencies: [isInfoOpen] }
  )

  return (
    <section className="top-0 z-10 max-lg:sticky flex flex-col w-dvw bg-bg text-text fl-px-4/5 py-4">
      <div className="flex justify-between w-full">
        <Indicator active={pathname === '/'} className="max-lg:hidden">
          <Link href={'/'} className="tracking-wide cursor-default">
            Home
          </Link>
        </Indicator>

        <div className="flex justify-between w-full tracking-wide lg:ps-18 lg:pe-38">
          <div className="max-lg:hidden flex gap-4 font-light normal-case">
            <h1>{project.title}</h1>
            <p className="text-main/70">{project.tagline}</p>
          </div>

          <div className="flex gap-5">
            <button onClick={() => setIsInfoOpen(!isInfoOpen)} className={`group hover:bg-text lowercase cursor-pointer ${isInfoOpen ? 'bg-text' : ''}`}>
              [ <span className={`px-3 group-hover:text-bg ${isInfoOpen ? 'text-bg' : 'group-hover:text-bg'}`}>Project info</span> ]
            </button>

            <Link href={'/projects'} className="group hover:bg-text lowercase cursor-pointer">
              [ <span className="group-hover:text-bg px-3">Close</span> ]
            </Link>
          </div>
        </div>

        <NavMenu />
      </div>

      <div ref={infoRef} className="h-0 overflow-hidden opacity-0">
        <div className="pt-12 lg:pt-47">
          <div className="flex max-lg:flex-col-reverse justify-between max-lg:gap-12 w-full">
            <div className="max-lg:hidden max-w-md text-3xl normal-case">
              {project.title && <h2 className="leading-snug">{project.title}</h2>}
              {project.tagline && <h2 className="text-main/60 leading-snug">{project.tagline}</h2>}
            </div>

            <div
              data-lenis-prevent
              style={{ scrollbarWidth: 'none' }}
              className="flex flex-col gap-4 max-w-xl max-h-[60vh] max-lg:max-h-[70vh] overflow-y-auto normal-case"
            >
              {project.description?.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            <div className="flex flex-col gap-1 lg:max-w-1/4 font-light">
              {[
                { label: 'Client', value: project.client },
                { label: 'Status', value: project.status },
                { label: 'Year', value: project.year },
                { label: 'Services', value: project.services },
                { label: 'Tags', value: project.tags },
              ].map(
                (item, idx) =>
                  item.value && (
                    <div key={idx} className="gap-16 grid grid-cols-4">
                      <span className="col-span-1 text-main/60">{item.label}</span>
                      <span className="col-span-3">{item.value}</span>
                    </div>
                  )
              )}

              {project.location && (
                <div className="gap-16 grid grid-cols-4">
                  <span className="col-span-1 text-main/60">Location</span>
                  <a href={project.location} target="_blank" rel="noopener noreferrer" className="col-span-3 hover:text-main/60">
                    view on google maps <span className="text-sm">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
