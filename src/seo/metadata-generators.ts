import { SEO, generateProjectSEO, generateJournalSEO } from '@/seo/seo-generators'
import projectsDbData from '@/db/projects.json'
import journalsData from '@/db/journals.json'

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

interface JournalData {
  slug: string
  type: string
  title: string
  desc: string
  imageSrc: string
}

export function generateJournalMetadata(slug: string): Metadata {
  const journal = (journalsData.journals as JournalData[]).find((j) => j.slug === slug)

  if (!journal) {
    return {
      title: 'Article Not Found - dhk Journal',
      description: 'This article could not be found.',
      keywords: ['dhk', 'journal', 'not found'],
    }
  }

  const seo = generateJournalSEO({
    title: journal.title,
    type: journal.type,
    desc: journal.desc,
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
