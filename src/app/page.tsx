import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.home()

// const Awards = dynamic(() => import('@/components/home-components/Awards'))
// const Journal = dynamic(() => import('@/components/home-components/Journal'))

import Hero from '@/components/home-components/Hero'
const About = dynamic(() => import('@/components/home-components/About'))
import ImageSection from '@/components/home-components/ImageSection'
const OurStory = dynamic(() => import('@/components/home-components/OurStory'))
import FeaturedProjects from '@/components/home-components/FeaturedProjects'

export default function HomePage() {
  return (
    <>
      {/* <Awards /> */}
      {/* <Journal /> */}

      <Hero />
      <About />
      <ImageSection />
      <OurStory />
      <FeaturedProjects />

      <div className="h-[250vh] bg-text" />
    </>
  )
}
