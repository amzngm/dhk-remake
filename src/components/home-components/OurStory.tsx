'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'

export default function OurStory() {
  const containerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        gsap.fromTo(
          contentRef.current,
          { y: '0%' },
          {
            y: '61%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              end: 'bottom 20%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative flex max-lg:flex-col w-dvw lg:mb-70">
      <div className="relative w-full lg:w-1/2 aspect-square">
        <Image src="/images/artp/image-30.jpg" alt="Our Story" fill sizes="(max-width: 1023px) 100vw, 90vw" className="object-cover" />
      </div>

      <div ref={contentRef} className="relative flex max-lg:flex-col justify-between lg:gap-22 max-lg:gap-14 w-full lg:w-1/2 p-4 max-md:py-14 max-lg:py-22">
        <Link href={'/studio'} className="group size-fit hover:bg-text text-nowrap">
          [<span className="group-hover:text-bg px-8">our story</span>]
        </Link>

        <div className="relative space-y-6 lg:max-w-lg normal-case pe-4">
          <p>
            dhk Architects was established in 1998 in a merger between Derick Henstra Architects and KCvR Architects. Today, we’re one of the largest and
            leading architectural studios in Africa. Since then, we’ve delivered award-winning buildings, urban designs and interior spaces in South Africa,
            across the continent and beyond. We have studios in Cape Town and Johannesburg and deliver for clients all over the world.
          </p>

          <p>
            Our team of over 140 people comprises multidisciplinary design professionals and technologists, supported by experienced and talented BIM experts,
            architectural visualisers, graphic designers, communication specialists, administrators, HR and finance specialists. We also work collaboratively
            with experts in other disciplines at all stages of our projects, from design concept to practical completion.
          </p>
        </div>
      </div>
    </section>
  )
}
