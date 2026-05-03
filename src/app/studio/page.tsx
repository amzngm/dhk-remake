import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.studio()

export default function StudioPage() {
  return (
    <>
      <div className="h-screen bg-bg">studio</div>
    </>
  )
}
