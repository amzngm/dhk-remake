'use client'

import { useEffect, useState } from 'react'

export function useScrollPosition(thresholdVh = 1) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight * thresholdVh
      setActive(window.scrollY >= vh)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [thresholdVh])

  return active
}

// const isScrolled100vh = useScrollPosition(0.1)
