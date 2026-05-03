// LocomotiveScroll

// 'use client'

// import { useEffect, useRef } from 'react'
// import LocomotiveScroll from 'locomotive-scroll'

// export default function ScrollProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (!containerRef.current) return

//     const scroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       multiplier: 1,
//     })

//     return () => scroll.destroy()
//   }, [])

//   return (
//     <div ref={containerRef} data-scroll-container>
//       {children}
//     </div>
//   )
// }

// data-scroll
// data-scroll-speed="0.2"

// -------------

// lenis

// 'use client'

// import Lenis from 'lenis'
// import { ReactNode, useEffect, useRef } from 'react'
// import { syncLenisWithGSAP } from '@/utils/gsapConfig.ts'

// export default function ScrollProvider({
//   children,
// }: {
//   children: ReactNode
// }) {
//   const lenisRef = useRef<Lenis | null>(null)

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       lerp: 0.1,          // smoothness (0.05 = very smooth)
//       wheelMultiplier: 1,
//       touchMultiplier: 1,
//     })

//     lenisRef.current = lenis

//     syncLenisWithGSAP(lenis)          // just with gsap

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     return () => {
//       lenis.destroy()
//       lenisRef.current = null
//     }
//   }, [])

//   return <>{children}</>
// }
