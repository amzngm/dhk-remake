'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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
  const navbarRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useScrollPosition(0.1)
  const [isSticky, setIsSticky] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return
      const rect = navbarRef.current.getBoundingClientRect()
      if (rect.top <= 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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

      <div ref={navbarRef} className="z-50 relative">
        {isSticky && typeof document !== 'undefined' ? (
          createPortal(
            <div className="top-0 z-50 fixed">
              <Navbar />
            </div>,
            document.body
          )
        ) : (
          <Navbar />
        )}
      </div>

      {/* hero footer */}
      <div style={{ opacity: scrollPosition ? 0 : 1 }} className="max-lg:opacity-100! transition-opacity duration-600">
        <div className="bottom-0 fixed flex justify-between max-lg:justify-end w-full max-lg:font-light lg:text-main text-end leading-tight fl-tracking-[0.3px]/0.15px fl-px-4/5 py-5">
          <h3 className="max-lg:hidden">welcome to dhk</h3>

          <h3>
            architects, urban designers, interior designers
            <span className="font-bold text-[10px] ml-4">↓</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
