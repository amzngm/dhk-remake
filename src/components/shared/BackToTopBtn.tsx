'use client'

import AnimText from '@/components/ui/unstyled/AnimText'

export default function BackToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button onClick={scrollToTop} className="max-lg:order-first max-lg:col-span-2 hover:bg-text lowercase whitespace-nowrap py-0.5 cursor-pointer">
      <AnimText>
        [<span className="hover:text-bg tracking-wide px-10">Back to top</span>]
      </AnimText>
    </button>
  )
}
