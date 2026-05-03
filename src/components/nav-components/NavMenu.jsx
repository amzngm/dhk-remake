'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import MainBtn from '@/components/ui/button/MainBtn'
import Image from 'next/image'

export default function NavMenu() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const links = [
    { name: 'Home,', href: '/' },
    { name: 'Projects,', href: '/projects' },
    { name: 'Studio,', href: '/studio' },
    { name: 'Journal', href: '/journal' },
  ]

  return (
    <>
      <div onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer">
        Menu
      </div>

      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-9999 absolute inset-0 w-dvw h-dvh bg-[#0D0D0D] text-text px-6 py-3"
          >
            <div className="h-[43vh]">
              <ul className="flex gap-4 font-bold text-[5.1dvw] leading-none tracking-[2px]">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 1, y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>

              <div>{/* <Image src=/> */}</div>

              <div
                onClick={() => setToggleMenu(false)}
                className="group top-0 right-0 absolute flex flex-col justify-center items-center gap-4 hover:text-main p-4 cursor-pointer"
              >
                <span>Close</span>
                <div className="w-1.5 h-1.5 bg-text group-hover:bg-main" />
              </div>
            </div>

            <div className="h-full text-sm">
              <MainBtn to={'/contact'} ChildrenClassName="px-8!" className="font-bold">
                contact us
              </MainBtn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
