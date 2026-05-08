'use client'

import { forwardRef, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface AnimInProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  center?: boolean
  scale?: boolean
  toDown?: boolean
  blur?: boolean
}

const AnimIn = forwardRef<HTMLElement, AnimInProps>(
  (
    {
      children,
      as: Tag = 'div',
      className = '',
      delay = 0.3,
      duration = 0.75,
      once = true,
      center = false,
      scale = false,
      toDown = false,
      blur = false,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLElement>(null)

    // Merge forwarded ref and internal ref
    const setRefs = (element: HTMLElement | null) => {
      internalRef.current = element
      if (typeof ref === 'function') {
        ref(element)
      } else if (ref) {
        ref.current = element
      }
    }

    useGSAP(
      () => {
        if (!internalRef.current) return

        const mm = gsap.matchMedia()

        mm.add('(prefers-reduced-motion: no-preference)', () => {
          gsap.from(internalRef.current, {
            opacity: 0,
            y: center ? 0 : toDown ? -40 : 40,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            scale: scale ? 1.2 : 1,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: internalRef.current,
              start: 'top 85%',
              once: once,
            },
          })
        })

        // For reduced motion, just fade in smoothly without movement or blur
        mm.add('(prefers-reduced-motion: reduce)', () => {
          gsap.from(internalRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: internalRef.current,
              start: 'top 85%',
              once: once,
            },
          })
        })

        return () => mm.revert()
      },
      { scope: internalRef, dependencies: [delay, duration, center, scale, toDown, blur, once] }
    )

    return (
      <Tag ref={setRefs} className={`relative will-change-[opacity,transform,filter] ${className}`} style={{ ...props.style }} {...props}>
        {children}
      </Tag>
    )
  }
)

AnimIn.displayName = 'AnimIn'

export default AnimIn
