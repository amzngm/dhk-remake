'use client'

import { useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'

export default function About() {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const weRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      gsap.set(weRef.current, { y: 0 })
      return
    }

    gsap.fromTo(
      weRef.current,
      { y: 0 },
      {
        y: () => {
          if (!containerRef.current || !weRef.current) return 0
          return containerRef.current.offsetHeight - weRef.current.offsetHeight
        },
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    )
  })

  return (
    <section className="relative w-dvw bg-bg text-text fl-px-4/5 pt-8 pb-48">
      <div className="w-[85%] lg:w-[58%] ms-auto mb-18">
        <div ref={containerRef} className="relative max-md:fl-text-3xl/7xl fl-text-5xl/7xl leading-17 max-md:leading-tight">
          <span ref={weRef} className="right-full absolute me-2">
            we
          </span>

          <h3>
            stay curious, always.
            <br /> collaborate. <br /> nurture talent. <br /> design for the future.
          </h3>
        </div>
      </div>

      <div className="flex max-lg:flex-col justify-center lg:justify-between w-full lg:text-lg">
        <span>services</span>
        <div className="lg:w-[58%]">
          <p className="lg:max-w-lg 2xl:max-w-2xl normal-case leading-snug">
            We’re architects, urban designers and interior designers. We deliver buildings, public spaces and interiors that are contextually sensitive,
            environmentally responsible and technically resilient.
          </p>
        </div>
      </div>
    </section>
  )
}
