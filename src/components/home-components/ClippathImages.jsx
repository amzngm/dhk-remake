'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

export default function ClippathImages({ ref }) {
  const { scrollYProgress } = useScroll({ target: ref })
  const clipPathValue1 = useTransform(scrollYProgress, [0, 0.9], [100, 0])
  const clipPathValue2 = useTransform(scrollYProgress, [0, 0.9], [140, 0])
  const clipPathValue3 = useTransform(scrollYProgress, [0, 0.9], [180, 0])
  const clipPathValue4 = useTransform(scrollYProgress, [0, 0.9], [220, 0])

  return (
    <div className="w-full h-[50dvh] grid grid-cols-3 max-md:grid-cols-2">
      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        <Image
          src="/images/logos/main-logo.webp"
          alt="hero image 1"
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="relative object-cover"
        />

        <motion.div
          style={{
            clipPath: useTransform(clipPathValue1, (latest) => `inset(${latest}% 0 0 0)`),
          }}
          className="z-10 absolute inset-0"
        >
          <Image
            src="/images/artp/image-29.jpg"
            alt="hero image 1 clipPath"
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        <Image
          src="/images/artp/image-26.jpg"
          alt="hero image 2"
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <motion.div
          style={{
            clipPath: useTransform(clipPathValue2, (latest) => `inset(${latest}% 0 0 0)`),
          }}
          className="z-10 absolute inset-0"
        >
          <Image
            src="/images/artp/image-30.jpg"
            alt="hero image 2 clipPath"
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
        <Image
          src="/images/artp/image-31.jpg"
          alt="hero image 3"
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <motion.div
          style={{
            clipPath: useTransform(clipPathValue3, (latest) => `inset(${latest}% 0 0 0)`),
          }}
          className="z-10 absolute inset-0"
        >
          <Image
            src="/images/artp/image-32.jpg"
            alt="hero image 3 clipPath"
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="md:hidden relative w-full h-full overflow-hidden flex justify-center items-center">
        <Image
          src="/images/artp/image-33.jpg"
          alt="hero image 4"
          loading="eager"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />

        <motion.div
          style={{
            clipPath: useTransform(clipPathValue4, (latest) => `inset(${latest}% 0 0 0)`),
          }}
          className="z-10 absolute inset-0"
        >
          <Image
            src="/images/artp/image-34.jpg"
            alt="hero image 4 clipPath"
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
