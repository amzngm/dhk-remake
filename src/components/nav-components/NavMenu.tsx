'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useIsMounted } from 'usehooks-ts'
import AnimText from '@/components/ui/unstyled/AnimText'
import Indicator from '@/components/ui/effects/Indicator'
import NewsletterForm from '@/components/nav-components/NewsletterForm'
import navConfig from '@/db/navigation.json'
import socialLinks from '@/db/sociallinks.json'

type NavMedia = {
  src: string
  alt: string
}

const NAVMEDIA: NavMedia[] = [
  { src: '/images/navImage.webp', alt: 'Nav Image' },
  { src: '/video/home.mp4', alt: 'home' },
  { src: '/video/projects.mp4', alt: 'projects' },
  { src: '/video/studio.mp4', alt: 'studio' },
  { src: '/video/journal.mp4', alt: 'journal' },
]

export default function NavMenu() {
  const links = navConfig.navigation.filter((item) => item.name !== 'contact' && item.name !== 'careers')
  const careersLink = navConfig.navigation.find((item) => item.name === 'careers')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggle = () => setToggleMenu(!toggleMenu)
  const isMounted = useIsMounted()

  return (
    <>
      <div onClick={toggle} className="cursor-pointer">
        Menu
      </div>

      {isMounted() &&
        createPortal(
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="z-9999 fixed inset-0 w-dvw h-dvh bg-[#0D0D0D] text-text fl-px-4/5"
              >
                <button onClick={toggle} className="group top-0 right-0 absolute font-light lowercase tracking-wide fl-px-4/5 py-4 cursor-pointer">
                  <Indicator active>Close</Indicator>
                </button>

                <div className="flex flex-col justify-between h-full">
                  <ul className="flex flex-wrap lg:gap-3 max-lg:max-w-2xs font-bold fl-text-[1rem]/5rem max-lg:text-5xl tracking-wide max-lg:mt-12 pointer-events-auto">
                    {links.map((link, index) => (
                      <AnimText
                        as="li"
                        delay={index * 0.2}
                        key={link.name}
                        className="leading-tight!"
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <Link href={link.slug}>
                          {link.name}
                          {index !== links.length - 1 && <span>,</span>}
                        </Link>
                      </AnimText>
                    ))}
                  </ul>

                  <div className="lg:hidden w-2/7">
                    <Link href="/contact" className="group hover:bg-text text-nowrap">
                      [<AnimText className="inline-flex gap-0.5 group-hover:text-bg px-8">contact us</AnimText>]
                    </Link>
                  </div>

                  <div className="flex justify-between mb-8 pointer-events-auto">
                    <div className="max-lg:hidden w-2/7">
                      <Link href="/contact">
                        <AnimText className="group w-fit hover:bg-text py-1">
                          [ <span className='className="inline-flex gap-0.5 group-hover:text-bg px-8'>contact us</span> ]
                        </AnimText>
                      </Link>
                    </div>

                    <div className="relative w-full max-w-3xs">
                      {careersLink && (
                        <div className="hover:text-main leading-tight! max-lg:mb-4">
                          <Link href={careersLink.slug}>
                            {careersLink.name}
                            <span className="font-light text-[11px] ml-1">↗</span>
                          </Link>
                        </div>
                      )}

                      <NewsletterForm />
                    </div>

                    <ul className="flex flex-col max-lg:gap-2 w-fit text-end">
                      {socialLinks.socialLinks.map((social) => (
                        <AnimText as="li" key={social.name} className="lg:text-main/75 hover:text-text leading-normal">
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            {social.name}
                          </a>
                        </AnimText>
                      ))}
                    </ul>
                  </div>

                  <div className="max-lg:hidden">
                    <div className="bottom-0 left-0 absolute flex justify-between w-full max-w-6xl">
                      {NAVMEDIA.slice(1).map((media) => (
                        <video
                          key={media.src}
                          src={media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className={`size-57.5 object-cover ${hoveredLink === media.alt ? 'opacity-100' : 'opacity-0'}`}
                        />
                      ))}
                    </div>

                    {!hoveredLink && (
                      <Image src={NAVMEDIA[0].src} alt={NAVMEDIA[0].alt} width={230} height={230} sizes="230px" className="right-0 bottom-0 absolute" />
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}
