'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import Navbar from '@/components/nav-components/Navbar'

type ImageConfig = {
  base: string
  overlay: string
  baseAlt: string
  overlayAlt: string
}

const IMAGES: readonly ImageConfig[] = [
  { base: '/images/logos/main-logo.webp', overlay: '/images/artp/image-29.jpg', baseAlt: 'hero image 1', overlayAlt: 'hero image 1 clipPath' },
  { base: '/images/artp/image-26.jpg', overlay: '/images/artp/image-30.jpg', baseAlt: 'hero image 2', overlayAlt: 'hero image 2 clipPath' },
  { base: '/images/artp/image-31.jpg', overlay: '/images/artp/image-32.jpg', baseAlt: 'hero image 3', overlayAlt: 'hero image 3 clipPath' },
  { base: '/images/artp/image-33.jpg', overlay: '/images/artp/image-34.jpg', baseAlt: 'hero image 4', overlayAlt: 'hero image 4 clipPath' },
] as const

const PIN_END = '+=1000vh'
const DURATION = 1
const INITIAL_INSET_PERCENT = [100, 160, 260, 320] as const

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollPosition = useScrollPosition(0.1)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const layers = gsap.utils.toArray<HTMLDivElement>(`.clip-layer`, sectionRef.current)

      if (prefersReduced) {
        gsap.set(layers, { clipPath: 'inset(0% 0 0 0)' })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: PIN_END,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      layers.forEach((el, i) => {
        const startInset = INITIAL_INSET_PERCENT[i]
        tl.fromTo(el, { clipPath: `inset(${startInset}% 0 0 0)` }, { clipPath: 'inset(0% 0 0 0)', ease: 'none', duration: DURATION }, 0)
      })
    },
    { scope: sectionRef }
  )

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-dvw h-dvh">
      {/* clippath images */}
      <div className="grid grid-cols-3 max-lg:grid-cols-2">
        {IMAGES.map((img) => (
          <div key={img.base} className="lg:last:hidden relative aspect-square max-md:aspect-square max-lg:aspect-video">
            <Image
              src={img.base}
              alt={img.baseAlt}
              loading="eager"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />

            <div className="absolute inset-0 clip-layer">
              <Image
                src={img.overlay}
                alt={img.overlayAlt}
                loading="eager"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <Navbar />

      {/* hero footer */}
      <div style={{ opacity: scrollPosition ? 0 : 1 }} className="max-md:opacity-100! transition-opacity duration-600">
        <div className="bottom-0 fixed flex justify-between max-md:justify-end w-full max-md:font-light md:text-main text-end leading-tight fl-tracking-[0.3px]/0.15px fl-px-4/5 py-5">
          <h3 className="max-md:hidden">welcome to dhk</h3>

          <h3>
            architects, urban designers, interior designers
            <span className="font-bold text-[10px] ml-4">↓</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
