'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Indicator from '@/components/ui/effects/Indicator'
import NavMenu from '@/components/nav-components/NavMenu'
import ThemeSwitch from '@/components/nav-components/ThemeSwitch'
import navConfig from '@/db/navigation.json'

export default function Navbar() {
  const links = navConfig.navigation.filter((item) => item.name !== 'home' && item.name !== 'contact')
  const pathname = usePathname()

  return (
    <nav className="z-10 relative w-dvw font-medium text-lg fl-px-4/5 py-4">
      <div className="flex justify-between">
        <Indicator active={pathname === '/'}>
          <Link href={'/'} className="tracking-wide cursor-default">
            Home
          </Link>
        </Indicator>

        <div className="max-lg:hidden flex justify-between w-1/2 ps-1">
          <ul className="flex gap-2.5">
            {links.map((link) => (
              <li key={link.name} className="hover:text-main tracking-wide">
                <Indicator active={pathname === link.slug}>
                  <Link href={link.slug}>
                    {link.name}
                    {link.name !== 'careers' ? <span>,</span> : <span className="font-light text-[11px] ml-1">↗</span>}
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
