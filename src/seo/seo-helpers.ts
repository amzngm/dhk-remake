import { SEO } from '@/seo/seo.config'

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

export const metadataGenerators = {
  home: createMetadataGenerator('/'),
  about: createMetadataGenerator('/about'),
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
