import { metadataGenerators } from '@/seo/metadata-generators'

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <div className="h-screen bg-bg">studio</div>
    </>
  )
}
