import { metadataGenerators } from '@/seo/metadata-generators'

export const metadata = metadataGenerators.journal()

export default function JournalPage() {
  return (
    <>
      <div className="h-screen bg-bg">journal</div>
    </>
  )
}
