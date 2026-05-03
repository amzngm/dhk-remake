import Hero from '@/components/home-components/Hero'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.journal()

export default function JournalPage() {
  return (
    <>
      <div className="relative h-[250vh]">
        <Hero />
      </div>

      <div className="h-screen bg-text">,dafnlkadnmfl;ads</div>
    </>
  )
}
