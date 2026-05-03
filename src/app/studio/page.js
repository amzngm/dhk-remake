import Hero from '@/components/home-components/Hero'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <div className="relative h-[250vh]">
        <Hero />
      </div>

      <div className="h-screen bg-text">,dafnlkadnmfl;ads</div>
    </>
  )
}
