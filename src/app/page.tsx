import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.home()

// const Journal = dynamic(() => import('@/components/home-components/Journal'))

import Hero from '@/components/home-components/Hero'
const About = dynamic(() => import('@/components/home-components/About'))
import ImageSection from '@/components/home-components/ImageSection'
const OurStory = dynamic(() => import('@/components/home-components/OurStory'))
import FeaturedProjects from '@/components/home-components/FeaturedProjects'
const Awards = dynamic(() => import('@/components/home-components/Awards'))

export default function HomePage() {
  return (
    <>
      {/* <Journal /> */}

      <Hero />
      <About />
      <ImageSection />
      <OurStory />
      <FeaturedProjects />
      <Awards />

      <div className="h-[250vh] bg-text" />
    </>
  )
}
