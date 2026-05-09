import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/metadata-generators'

import StudioHero from '@/components/studio-components/StudioHero'
const Journal = dynamic(() => import('@/components/home-components/Journal'))

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <Journal />
    </>
  )
}
