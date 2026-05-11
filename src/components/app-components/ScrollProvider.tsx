'use client'

import Lenis from 'lenis'
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface LenisContextType {
  stop: () => void
  start: () => void
}

const LenisContext = createContext<LenisContextType | null>(null)

export const useLenis = () => {
  const ctx = useContext(LenisContext)
  if (!ctx) throw new Error('useLenis must be used within ScrollProvider')
  return ctx
}

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothness (0.05 = very smooth)
      wheelMultiplier: 1,
      touchMultiplier: 1,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  const value: LenisContextType = {
    stop: () => lenisRef.current?.stop(),
    start: () => lenisRef.current?.start(),
  }

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
}
