'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/nav-components/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  return (
    <>
      {pathname !== '?' && (
        <Link href={'/'} className="top-0 left-0 z-9999 fixed size-40 opacity-0 hover:opacity-100 tracking-wide cursor-pointer">
          <Image src={'/images/logos/main-logo.webp'} alt="Home Logo" fill loading="eager" className="object-cover" />
        </Link>
      )}

      <Navbar />
    </>
  )
}
