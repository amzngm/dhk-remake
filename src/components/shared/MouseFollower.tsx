'use client'

import { useRef, useState, createContext, useContext } from 'react'
import { motion, useMotionValue } from 'motion/react'

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
  const [isHovering, setIsHovering] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }
  }

  return (
    <MouseFollowerContext.Provider value={{ setIsHovering }}>
      <div ref={containerRef} onMouseMove={handleMouseMove} className={`relative ${className}`}>
        {children}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          style={{ x, y }}
          className="-top-4 left-5 z-50 absolute pointer-events-none"
        >
          <span className="inline-block fl-text-sm/base tracking-wide whitespace-nowrap">{text}</span>
        </motion.div>
      </div>
    </MouseFollowerContext.Provider>
  )
}
