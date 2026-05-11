import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/metadata-generators'

import StudioHero from '@/components/studio-components/StudioHero'
import WhoWeAre from '@/components/studio-components/WhoWeAre'
const DesignDna = dynamic(() => import('@/components/studio-components/DesignDna'))
import WhatWeDo from '@/components/studio-components/WhatWeDo'
const MeetTheTeam = dynamic(() => import('@/components/studio-components/MeetTheTeam'))
const Awards = dynamic(() => import('@/components/home-components/Awards'))
const Journal = dynamic(() => import('@/components/home-components/Journal'))

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <WhoWeAre />
      <DesignDna />
      <WhatWeDo />
      <MeetTheTeam />
      <Awards />
      <Journal />
    </>
  )
}
