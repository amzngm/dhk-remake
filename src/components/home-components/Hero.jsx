'use client'

import { useRef } from 'react'
import ClippathImages from '@/components/home-components/ClippathImages'
import Navbar from '@/components/nav-components/Navbar'

export default function Hero() {
  const sectionRef = useRef()

  return (
    <section ref={sectionRef} className="relative h-[150vh]">
      <div className="top-0 sticky w-dvw h-fit overflow-hidden bg-bg text-text">
        <ClippathImages ref={sectionRef} />

        <Navbar />
      </div>
    </section>
  )
}
