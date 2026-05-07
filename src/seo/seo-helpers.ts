import { SEO, generateProjectSEO } from '@/seo/seo.config'
import projectsDbData from '@/db/projects.json'

interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
}

interface Metadata {
  title: string
  description: string
  keywords: string[]
}

interface ProjectData {
  slug: string
  name: string
  tagline: string
  description: string
  title: string
  date: string
  imageSrc: string
  location?: {
    city?: string
    country?: string
  }
  sector?: string
  type?: string
}

export function createMetadataGenerator(route: string) {
  return function generateMetadata(): Metadata {
    const seoData = (SEO as Record<string, SEOData>)[route] || {}

    const metadata = {
      title: seoData.title || '### | ####',
      description: seoData.description || '### is a ####.',
      keywords: seoData.keywords || [],
    }

    return metadata
  }
}

export function generateProjectMetadata(slug: string): Metadata {
  const project = (projectsDbData as Record<string, ProjectData>)[slug]

  if (!project) {
    return {
      title: 'Project Not Found - dhk',
      description: 'This project could not be found.',
      keywords: ['dhk', 'project', 'not found'],
    }
  }

  const seo = generateProjectSEO({
    name: project.name,
    tagline: project.tagline,
    description: project.description,
    location: project.location,
    sector: project.sector,
    type: project.type,
  })

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.split(', '),
  }
}

export const metadataGenerators = {
  home: createMetadataGenerator('/'),
  careers: createMetadataGenerator('/careers'),
  contact: createMetadataGenerator('/contact'),
  projects: createMetadataGenerator('/projects'),
  journal: createMetadataGenerator('/journal'),
  studio: createMetadataGenerator('/studio'),
  cookiePolicy: createMetadataGenerator('/cookie-policy'),
  privacyPolicy: createMetadataGenerator('/privacy-policy'),
  termsOfUse: createMetadataGenerator('/terms-of-use'),
  notFound: createMetadataGenerator('*'),
  project: (data: { title: string; description: string; keywords: string; alternates?: { canonical: string } }) => ({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: data.alternates,
  }),
}
