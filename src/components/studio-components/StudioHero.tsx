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

      gsap.to('.parallax-content', {
        y: 500,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          scrub: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative w-dvw h-[150dvh] bg-bg text-text">
      <Image src="/images/studio-page-bg.webp" alt="Background Image" fill className="object-cover" />

      <div className="z-10 relative flex flex-col justify-between w-full h-dvh fl-px-4/5 py-4 parallax-content">
        <div></div>

        <div className="flex justify-between items-center w-full tracking-wide">
          <AnimText as="p">cape town, johannesburg, rsa</AnimText>

          <div className="flex justify-between items-center w-full max-w-1/2 ps-1">
            <AnimText>
              ( <span className="px-2">est. 1998</span> )
            </AnimText>
            <AnimText as="h4" className="me-12">
              dhk
            </AnimText>
            <AnimText as="p">architecture, urban design, interior design</AnimText>
          </div>
        </div>

        <AnimText as="h2" className="font-medium text-[5.4rem]">
          Our studio
        </AnimText>
      </div>
    </section>
  )
}
