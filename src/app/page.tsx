import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/metadata-generators'

export const metadata = metadataGenerators.home()

import Hero from '@/components/home-components/Hero'
const About = dynamic(() => import('@/components/home-components/About'))
import ImageSection from '@/components/home-components/ImageSection'
const OurStory = dynamic(() => import('@/components/home-components/OurStory'))
import FeaturedProjects from '@/components/home-components/FeaturedProjects'
const Awards = dynamic(() => import('@/components/home-components/Awards'))
const Journal = dynamic(() => import('@/components/home-components/Journal'))

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ImageSection />
      <OurStory />
      <FeaturedProjects />
      <Awards />
      <Journal />
    </>
  )
}
