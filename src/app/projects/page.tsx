import { metadataGenerators } from '@/seo/metadata-generators'

export const metadata = metadataGenerators.projects()

export default function ProjectsPage() {
  return (
    <>
      <div className="h-screen bg-bg">projects</div>
    </>
  )
}
