'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'

export default function DesignDna() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return
      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: '(max-width: 1024px)',
          isDesktop: '(min-width: 1025px)',
        },
        (context) => {
          const isMobile = context.conditions?.isMobile ?? false

          if (isMobile) return

          gsap.to('.parallax-content', {
            y: 500,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              scrub: true,
            },
          })

          gsap.fromTo(
            '.parallax-image-1',
            { y: -200 },
            {
              y: 200,

              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom 10%',
                scrub: true,
              },
            }
          )

          gsap.fromTo(
            '.parallax-image-2',
            { y: 200 },
            {
              y: -200,

              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom center',
                scrub: true,
              },
            }
          )
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative w-dvw h-dvh max-lg:h-[200dvh] fl-px-4/5 py-4">
      <div className="absolute inset-0 flex max-lg:flex-col parallax-image-2">
        <div className="relative flex lg:flex-col justify-center max-lg:items-end lg:max-w-xl size-full">
          <div className="relative max-lg:w-1/2 h-150 aspect-square">
            <Image src="/images/studio/studio-page-2.avif" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />
          </div>

          <div className="relative max-lg:w-1/2 h-180 aspect-square">
            <Image src="/images/studio/studio-page-3.webp" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />
          </div>
        </div>

        <div className="relative max-lg:flex max-lg:justify-center max-lg:items-center size-full parallax-image-1">
          <Image src="/images/studio/studio-page-1.webp" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />

          <div className="lg:hidden z-10 flex flex-col justify-center gap-18 size-full fl-px-4/5 py-4">
            <h4 className="normal-case">DesignDna</h4>

            <p className="normal-case text-balance">
              Our strength as a design-led studio arises from a unique blend of creative talent, technical capability, implementation expertise and commercial
              strategy. We have a collaborative mindset and a global outlook. We’re always exploring new possibilities in advanced technologies, materials and
              design forms. We’re committed to being involved from first sketch to final construction, adding value at every stage. Each design is intentionally
              integrated into its unique social, environmental, cultural and functional context with quiet confidence and understated flair.
            </p>

            <Link href="/projects" className="size-fit hover:bg-text cursor-pointer">
              [<span className="hover:text-bg px-6">Our projects</span>]
            </Link>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden z-10 relative flex justify-between w-full parallax-content">
        <h4 className="w-1/6 normal-case">DesignDna</h4>

        <Link href="/projects" className="size-fit hover:bg-text cursor-pointer">
          [<span className="hover:text-bg px-6">Our projects</span>]
        </Link>

        <p className="w-[41%] normal-case leading-snug pe-32">
          Our strength as a design-led studio arises from a unique blend of creative talent, technical capability, implementation expertise and commercial
          strategy. We have a collaborative mindset and a global outlook. We’re always exploring new possibilities in advanced technologies, materials and
          design forms. We’re committed to being involved from first sketch to final construction, adding value at every stage. Each design is intentionally
          integrated into its unique social, environmental, cultural and functional context with quiet confidence and understated flair.
        </p>
      </div>
    </section>
  )
}
