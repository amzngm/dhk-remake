import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.projects()

export default function ProjectsPage() {
  return (
    <>
      <div className="h-screen bg-bg">projects</div>
    </>
  )
}
