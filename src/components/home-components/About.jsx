'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function About() {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 80%', 'start 0%'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0', '220%'])

  return (
    <section className="relative w-full h-[63dvh] overflow-hidden flex justify-between items-end px-4 py-34">
      <div ref={containerRef} className="relative w-full h-full flex justify-between gap-2">
        <span>services</span>

        <motion.span style={{ y }} className="-top-10 right-0 absolute text-[63px]">
          we
        </motion.span>
      </div>

      <div className="min-w-[57dvw] flex flex-col justify-center gap-12">
        <h3 className="max-w-xl text-[63px] leading-17">
          stay curious, always. collaborate. <br /> nurture talent. <br /> design for the future.
        </h3>

        <p className="max-w-md normal-case">
          We’re architects, urban designers and interior designers. We deliver buildings, public spaces and interiors that are <br />{' '}
          contextually sensitive, environmentally responsible and <br /> technically resilient.
        </p>
      </div>
    </section>
  )
}
