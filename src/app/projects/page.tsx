import dynamic from 'next/dynamic'
import { metadataGenerators } from '@/seo/metadata-generators'

const AllProjects = dynamic(() => import('@/components/projects-components/AllProjects'))

export const metadata = metadataGenerators.projects()

export default function ProjectsPage() {
  return (
    <>
      <div className="h-60"></div>
      <AllProjects />
    </>
  )
}
