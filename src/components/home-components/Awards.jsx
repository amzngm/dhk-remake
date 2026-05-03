'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMouseMotion } from '@/hooks/useMouseMotion'
import MainBtn from '@/components/ui/button/MainBtn'

const awards = [
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Best New Hotel Development',
    award: 'API Awards Winner',
    date: '2025',
    imageSrc: '/images/artp/image-1.webp',
  },
  {
    title: 'Longkloof Precinct',
    title2: 'Best New Mixed-use/Precinct Development',
    award: 'API Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  { title: 'dhk Website', title2: 'Honors and Site of the Day', award: 'Awwwards Winner', imageSrc: '/images/artp/image-3.webp' },
  {
    title: 'The Rubik',
    title2: 'CIfA Award for Architecture Commendation',
    award: 'CIfA Commendation',
    imageSrc: '/images/artp/image-2.webp',
  },
  { title: 'Longkloof Precinct', title2: 'CIfA Award for Architecture', award: 'CIfA Winner', imageSrc: '/images/artp/image-5.webp' },
  {
    title: 'dhk Website',
    title2: 'Favourite Website Awards (FWA) of the Day',
    award: 'FWA of the Day Winner',
    imageSrc: '/images/artp/image-4.webp',
  },
  {
    title: 'Brookfield at Royal',
    title2: 'Lifestyle Estate of the Year',
    award: 'Reside Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  { title: 'The Rubik', title2: 'High Density Urban Living', award: 'CIfA Commendation', imageSrc: '/images/artp/image-35.webp' },
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Mixed-use Development of the Year',
    award: 'SAPOA Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Overall Development Award',
    award: 'SAPOA Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Best New Hotel Development',
    award: 'API Awards Winner',
    date: '2025',
    imageSrc: '/images/artp/image-1.webp',
  },
  {
    title: 'Longkloof Precinct',
    title2: 'Best New Mixed-use/Precinct Development',
    award: 'API Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  { title: 'dhk Website', title2: 'Honors and Site of the Day', award: 'Awwwards Winner', imageSrc: '/images/artp/image-3.webp' },
  {
    title: 'The Rubik',
    title2: 'CIfA Award for Architecture Commendation',
    award: 'CIfA Commendation',
    imageSrc: '/images/artp/image-2.webp',
  },
  { title: 'Longkloof Precinct', title2: 'CIfA Award for Architecture', award: 'CIfA Winner', imageSrc: '/images/artp/image-5.webp' },
  {
    title: 'dhk Website',
    title2: 'Favourite Website Awards (FWA) of the Day',
    award: 'FWA of the Day Winner',
    imageSrc: '/images/artp/image-4.webp',
  },
  {
    title: 'Brookfield at Royal',
    title2: 'Lifestyle Estate of the Year',
    award: 'Reside Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  { title: 'The Rubik', title2: 'High Density Urban Living', award: 'CIfA Commendation', imageSrc: '/images/artp/image-35.webp' },
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Mixed-use Development of the Year',
    award: 'SAPOA Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
  {
    title: 'Canopy by Hilton Cape Town Longkloof',
    title2: 'Overall Development Award',
    award: 'SAPOA Awards Winner',
    imageSrc: '/images/artp/image-35.webp',
  },
]

export default function Awards() {
  const sectionRef = useRef(null)
  const { y } = useMouseMotion(sectionRef)
  const [displayCount, setDisplayCount] = useState(10)

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 5, awards.length))
  }

  return (
    <section className="relative w-dvw min-h-[60dvh] flex flex-col justify-center items-center bg-bg text-text px-5 py-44">
      <div className="relative w-full h-full flex justify-between items-start gap-2">
        <h5 className="font-bold text-6xl">Awards</h5>

        <ul ref={sectionRef} className="w-[55dvw] gap-2 grid grid-cols-1 normal-case">
          {awards.slice(0, displayCount).map((award, index) => (
            <li key={index} className="group relative w-full flex justify-between text-left cursor-pointer">
              <motion.div style={{ y }} className="top-0 -left-60 absolute opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="relative w-45 h-45 bg-main">
                  <Image src={award.imageSrc} alt={award.title} fill className="absolute inset-0 object-cover" />
                </div>
              </motion.div>

              <div>
                <h6 className="opacity-40 group-hover:opacity-100 transition-opacity">
                  <span>{award.date}</span>
                  <span className={`${award.date ? 'ms-22' : ''}`}>{award.title}</span>
                </h6>
                <h6 className="hidden group-hover:block font-medium">{award.title2}</h6>
              </div>

              <h6 className="opacity-40 group-hover:opacity-100 transition-opacity">{award.award}</h6>
            </li>
          ))}
        </ul>
      </div>

      <MainBtn onClick={loadMore} className="mt-33">
        Load more
      </MainBtn>
    </section>
  )
}
