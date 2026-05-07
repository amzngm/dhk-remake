import { Metadata } from 'next'
import { use } from 'react'
import { generateProjectMetadata } from '@/seo/seo-helpers'
import projectsDbData from '@/db/projects.json'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const metadata = generateProjectMetadata(slug)

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = Object.values(projectsDbData).find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen bg-bg text-text">
        <h1 className="text-6xl">Project Not Found</h1>
      </div>
    )
  }

  return (
    <>
      <div className="h-screen bg-bg text-text">
        <div className="flex flex-col justify-end h-full p-8">
          <h1 className="font-semibold text-6xl">{project.name}</h1>
          <p className="text-2xl mt-4">{project.tagline}</p>
          <p className="max-w-2xl text-lg mt-8">{project.description}</p>
          {project.date && <span className="text-lg mt-8">Year: {project.date}</span>}
        </div>
      </div>
    </>
  )
}
