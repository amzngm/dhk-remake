'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'

export default function WhyWorkAt() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return
      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: '(max-width: 768px)',
          isDesktop: '(min-width: 769px)',
        },
        (context) => {
          const isMobile = context.conditions?.isMobile ?? false

          if (isMobile) return

          gsap.to('.parallax-content', {
            y: -300,

            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 30%',
              scrub: true,
            },
          })
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative flex max-md:flex-col-reverse w-dvw py-50 max-md:pt-0">
      <div className="flex flex-col size-full parallax-content">
        <div className="max-md:hidden relative size-full aspect-7/9">
          <Image src="/images/artp/image-5.webp" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />
        </div>

        <div className="relative flex flex-col justify-between gap-24 md:h-[90dvh] p-18 max-md:px-4 max-md:py-12">
          <h4 className="font-medium text-4xl">why work at dhk?</h4>

          <div className="flex flex-col gap-2 max-w-xl normal-case leading-snug">
            <p>
              Building a leading studio at the forefront of our industry is about more than producing outstanding design. It’s also about building an
              outstanding team.
            </p>

            <p>
              In the studio, we actively cultivate a stimulating environment where people want to work. A studio that grows talent, challenges ideas and
              supports innovative engagement. It’s a diverse, creative environment that offers opportunities for personal and professional growth.{' '}
            </p>

            <p>
              We foster a culture of progressive design, high-performance and future-focused thinking that positively impacts the lives and careers of our
              people. We encourage our teams to test ideas and embrace new technologies, materials, sustainability principles and new methods of design and
              construction.
            </p>

            <p>
              We support the development of future talent through our involvement in the industry-wide Go for Gold initiative, as well as mentorship, training
              and development programmes. We create connections with peers and colleagues outside the office through sporting and social events – and we make
              great coffee!
            </p>

            <Link href="/careers" className="size-fit hover:bg-text mt-12 cursor-pointer">
              [<span className="hover:text-bg px-6">work with us</span>]
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col size-full">
        <div className="relative w-full aspect-square">
          <Image src="/images/artp/image-4.webp" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />
        </div>

        <div className="relative w-full aspect-square">
          <Image src="/images/artp/image-6.webp" alt="Background Image" fill loading="eager" sizes="100dvw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
