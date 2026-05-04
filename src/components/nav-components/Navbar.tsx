'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Indicator from '@/components/ui/effects/Indicator'
import ThemeSwitch from '@/components/nav-components/ThemeSwitch'
import NavMenu from '@/components/nav-components/NavMenu'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: 'Projects,', href: '/projects' },
    { name: 'Studio,', href: '/studio' },
    { name: 'Journal,', href: '/journal' },
    { name: 'Careers', href: '/careers', icon: '↗' },
  ]

  return (
    <nav className="z-10 relative w-dvw max-md:font-bold fl-px-4/5 py-4">
      <div className="flex justify-between">
        <Indicator active={pathname === '/'}>
          <Link href={'/'} className="tracking-wide cursor-default">
            Home
          </Link>
        </Indicator>

        <div className="max-lg:hidden flex justify-between w-1/2 ps-1">
          <ul className="flex gap-3">
            {links.map((link) => (
              <li key={link.name} className="hover:text-main tracking-wide">
                <Indicator active={pathname === link.href}>
                  <Link href={link.href}>
                    {link.name}
                    {link.icon && <span className="font-light text-[11px] ml-1">{link.icon}</span>}
                  </Link>
                </Indicator>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-start w-1/3 tracking-wide">
            <ThemeSwitch />
            <NavMenu />
          </div>
        </div>

        <div className="lg:hidden">
          <NavMenu />
        </div>
      </div>
    </nav>
  )
}
