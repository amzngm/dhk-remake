'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AnimText from '@/components/ui/unstyled/AnimText'
import Indicator from '@/components/ui/effects/Indicator'
import NewsletterForm from '@/components/nav-components/NewsletterForm'
import navigationData from '@/db/navigation.json'
import socialLinksData from '@/db/sociallinks.json'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="relative w-dvw lg:h-100 mt-46 fl-px-4/5 py-4">
      <div className="flex max-lg:flex-col-reverse items-end gap-8 max-lg:gap-18 size-full">
        <div className="flex max-lg:flex-col max-lg:justify-end lg:items-end gap-1 lg:gap-8 size-full">
          <span>all rights reserved. dhk@2026</span>

          <Link href={'/privacy-policy'} className="hover:text-main uppercase">
            POPI + PAIA
          </Link>
        </div>

        <ul className="flex justify-between items-end gap-18 max-lg:grid max-lg:grid-cols-2 size-full">
          <div>
            {navigationData.navigation.slice(0, -1).map((item, index) => (
              <Indicator
                key={item.slug}
                active={pathname === item.slug}
                dotClassName="mt-1! group-hover:bg-main absolute -left-3"
                className="group flex justify-center items-start hover:text-main tracking-wide mt-1.5 max-lg:mt-3.5"
              >
                <AnimText as="li" delay={index * 0.05}>
                  <Link href={item.slug}>
                    {item.name}
                    {item.name !== 'careers' ? <></> : <span className="font-light text-[11px] ml-1">↗</span>}
                  </Link>
                </AnimText>
              </Indicator>
            ))}
          </div>

          <div>
            {socialLinksData.socialLinks.map((item, index) => (
              <AnimText as="li" delay={index * 0.05} key={item.name} className="hover:text-main tracking-wide mt-1.5 max-lg:mt-3.5">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </AnimText>
            ))}
          </div>

          <NewsletterForm />

          <Link href="/contact" className="max-lg:order-first max-lg:col-span-2 hover:bg-text cursor-pointer">
            [<span className="hover:text-bg px-8">Contact us</span>]
          </Link>
        </ul>
      </div>
    </footer>
  )
}
