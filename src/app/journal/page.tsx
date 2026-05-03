import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.journal()

export default function JournalPage() {
  return (
    <>
      <div className="h-screen bg-bg">journal</div>
    </>
  )
}
