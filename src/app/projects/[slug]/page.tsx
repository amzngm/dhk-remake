import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { use } from 'react'
import { generateProjectMetadata } from '@/seo/metadata-generators'
import projectsDbData from '@/db/projects.json'

const ProjrctGallery = dynamic(() => import('@/components/projects-components/ProjrctGallery'))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const metadata = generateProjectMetadata(slug)

  return {
    title: `dhk - ${metadata.title}`,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projectsDbData.projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen bg-bg text-text">
        <h1 className="text-6xl">Project Not Found</h1>
      </div>
    )
  }

  return (
    <main className="hide-footer hide-nav">
      <ProjrctGallery project={project} />
    </main>
  )
}
