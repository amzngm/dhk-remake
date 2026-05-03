'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function OurStory() {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 90%', 'start -80%'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0', '40%'])

  return (
    <section ref={containerRef} className="relative w-dvw h-[70dvh] overflow-hidden flex">
      <div className="relative w-1/2">
        <Image src="/images/artp/image-28.jpg" alt="Our Story" fill className="object-cover" />
      </div>

      <motion.div style={{ y }} className="relative w-1/2 flex justify-between">
        <Link href={'/about'} className="group relative h-fit flex gap-8 hover:bg-text hover:text-bg mx-2">
          <span className="group-hover:text-text">[</span>
          <span>our story</span>
          <span className="group-hover:text-text">]</span>
        </Link>

        <div className="relative max-w-sm space-y-4 normal-case me-2 p-2">
          <p>
            dhk Architects was established in 1998 in a merger between Derick Henstra Architects and KCvR Architects. Today, we’re one of
            the largest and leading architectural studios in Africa. Since then, we’ve delivered award-winning buildings, urban designs and
            interior spaces in South Africa, across the continent and beyond. We have studios in Cape Town and Johannesburg and deliver for
            clients all over the world.
          </p>

          <p>
            Our team of over 140 people comprises multidisciplinary design professionals and technologists, supported by experienced and
            talented BIM experts, architectural visualisers, graphic designers, communication specialists, administrators, HR and finance
            specialists. We also work collaboratively with experts in other disciplines at all stages of our projects, from design concept
            to practical completion.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
