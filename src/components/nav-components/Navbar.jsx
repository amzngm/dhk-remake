'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import Indicator from '@/components/ui/effects/Indicator'
import ThemeSwitch from '@/components/nav-components/ThemeSwitch'
import NavMenu from '@/components/nav-components/NavMenu'

export default function Navbar() {
  const pathname = usePathname()
  const scrollPosition = useScrollPosition(0.1)

  const links = [
    { name: 'Projects,', href: '/projects' },
    { name: 'Studio,', href: '/studio' },
    { name: 'Journal,', href: '/journal' },
    { name: 'Careers', href: '/careers', icon: '↗' },
  ]

  return (
    <div className="w-full h-[50dvh] flex flex-col justify-between p-4.5">
      <div className="flex justify-between">
        <Indicator active={pathname === '/'}>
          <Link href={'/'}>Home</Link>
        </Indicator>
        <div className="w-1/2 flex justify-between tracking-wide">
          <ul className="flex gap-3">
            {links.map((link) => (
              <li key={link.name} className="hover:text-main">
                <Indicator active={pathname === link.href}>
                  <Link href={link.href}>
                    {link.name}
                    {link.icon && <span className="font-light text-[11px] ml-1">{link.icon}</span>}
                  </Link>
                </Indicator>
              </li>
            ))}
          </ul>
          <div className="flex justify-between gap-22">
            <ThemeSwitch />
            <NavMenu />
          </div>
        </div>
      </div>

      <div style={{ opacity: scrollPosition ? 0 : 1 }} className="w-full flex justify-between items-end gap-4 text-text/45 duration-600">
        <h3>welcome to dhk</h3>
        <h3>
          architects, urban designers, interior designers
          <span className="font-light text-[11px] ml-4">↓</span>
        </h3>
      </div>
    </div>
  )
}
