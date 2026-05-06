import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.home()

// const FeaturedProjects = dynamic(() => import('@/components/home-components/FeaturedProjects'))
// const Awards = dynamic(() => import('@/components/home-components/Awards'))
// const Journal = dynamic(() => import('@/components/home-components/Journal'))

import Hero from '@/components/home-components/Hero'
const About = dynamic(() => import('@/components/home-components/About'))
import ImageSection from '@/components/home-components/ImageSection'
const OurStory = dynamic(() => import('@/components/home-components/OurStory'))

export default function HomePage() {
  return (
    <Suspense fallback={<Loading className="" dark={true} />}>
      {/* <FeaturedProjects /> */}
      {/* <Awards /> */}
      {/* <Journal /> */}

      <Hero />
      <About />
      <ImageSection />
      <OurStory />

      <div className="h-[250vh] bg-text" />
    </Suspense>
  )
}
