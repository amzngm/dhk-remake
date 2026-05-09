import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/metadata-generators'

import StudioHero from '@/components/studio-components/StudioHero'
import WhoWeAre from '@/components/studio-components/WhoWeAre'
const Journal = dynamic(() => import('@/components/home-components/Journal'))

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <WhoWeAre />
      <Journal />
    </>
  )
}
