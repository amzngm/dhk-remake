'use client'

import { useRef, useState, createContext, useContext } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'
import { useIsMobile } from '@/hooks/useIsMobile'

const MouseFollowerContext = createContext<{
  setIsHovering: (value: boolean) => void
} | null>(null)

export function useMouseFollower() {
  const context = useContext(MouseFollowerContext)
  if (!context) {
    throw new Error('useMouseFollower must be used within MouseFollower')
  }
  return context
}

export default function MouseFollower({
  children,
  className = '',
  text = '[ View Project ]',
}: {
  children: React.ReactNode
  className?: string
  text?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const isMobile = useIsMobile(1024)

  // References for GSAP quickTo functions
  const xTo = useRef<gsap.QuickToFunc | null>(null)
  const yTo = useRef<gsap.QuickToFunc | null>(null)

  useGSAP(
    () => {
      if (!followerRef.current || isMobile) return

      // Set initial state
      gsap.set(followerRef.current, { x: 0, y: 0 })

      xTo.current = gsap.quickTo(followerRef.current, 'x', { duration: 0.15, ease: 'power3' })
      yTo.current = gsap.quickTo(followerRef.current, 'y', { duration: 0.15, ease: 'power3' })
    },
    { scope: containerRef, dependencies: [isMobile] }
  )

  useGSAP(
    () => {
      if (!followerRef.current || isMobile) return

      gsap.to(followerRef.current, {
        opacity: isHovering ? 1 : 0,
        duration: 0.15,
        ease: 'power2.out',
      })
    },
    { scope: containerRef, dependencies: [isHovering, isMobile] }
  )

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && !isMobile && xTo.current && yTo.current) {
      const rect = containerRef.current.getBoundingClientRect()
      xTo.current(e.clientX - rect.left)
      yTo.current(e.clientY - rect.top)
    }
  }

  return (
    <MouseFollowerContext.Provider value={{ setIsHovering }}>
      <div ref={containerRef} onMouseMove={handleMouseMove} className={`relative ${className}`}>
        {children}

        {!isMobile && (
          <div ref={followerRef} className="-top-4 left-5 z-50 absolute opacity-0 pointer-events-none">
            <span className="inline-block fl-text-sm/base tracking-wide whitespace-nowrap">{text}</span>
          </div>
        )}
      </div>
    </MouseFollowerContext.Provider>
  )
}
