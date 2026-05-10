'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import AnimText from '@/components/ui/unstyled/AnimText'

export default function StudioHero() {
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

          gsap.to('.parallax-content', {
            y: isMobile ? 360 : 500,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              scrub: true,
            },
          })
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative w-dvw h-[150dvh] bg-bg text-text">
      <Image src="/images/studio/studio-page-bg.webp" alt="Background Image" fill loading="eager" className="object-cover" />

      <div className="z-10 relative flex flex-col justify-between w-full h-dvh fl-px-4/5 py-4 parallax-content">
        <div></div>

        <div className="flex max-lg:flex-col justify-between lg:items-center size-full tracking-wide max-lg:my-32">
          <AnimText as="p" className="max-lg:hidden">
            cape town, johannesburg, rsa
          </AnimText>

          <div className="flex max-lg:flex-col justify-between lg:items-center lg:max-w-1/2 size-full ps-1">
            <AnimText as="p" className="lg:hidden">
              cape town, johannesburg, rsa
            </AnimText>
            <AnimText>
              ( <span className="px-2">est. 1998</span> )
            </AnimText>

            <AnimText as="h4" className="me-12">
              dhk
            </AnimText>

            <AnimText as="p">architecture, urban design, interior design</AnimText>
          </div>
        </div>

        <AnimText as="h2" className="font-medium text-[5.4rem] max-lg:text-[4.35rem]">
          Our studio
        </AnimText>
      </div>
    </section>
  )
}
