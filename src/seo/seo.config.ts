export const SEO = {
  '/': {
    title: 'dhk',
    description:
      "We create exceptional environments that enhance the human experience. dhk is a design-led studio of architects, urban designers and interior designers delivering buildings, public spaces and interiors that are contextually sensitive, environmentally responsible and technically resilient. Established in 1998, we're part of 10N, a collective created by Egis.",
    keywords: [
      'dhk',
      'architects',
      'urban designers',
      'interior designers',
      'architecture',
      'design studio',
      'dubai',
      'abudhabi',
      'uae',
      'commercial design',
      'residential design',
      '10N collective',
      'Egis',
    ],
  },

  '/careers': {
    title: 'careers - dhk',
    description:
      'Join dhk and be part of a leading design studio at the forefront of our industry. We actively cultivate a stimulating environment where people want to work. A studio that grows talent, challenges ideas and supports innovative engagement. Part of 10N, a collective by Egis.',
    keywords: [
      'dhk',
      'careers',
      'jobs',
      'hiring',
      'design jobs',
      'architecture careers',
      'interior design jobs',
      'work with us',
      'design studio careers',
      '10N collective',
    ],
  },

  '/contact': {
    title: 'contact - dhk',
    description: "Get in touch with dhk design studio. Let's discuss your project and explore how we can bring your vision to life.",
    keywords: ['dhk', 'contact', 'get in touch', 'design studio contact', 'architecture inquiry', 'interior design consultation'],
  },

  '/projects': {
    title: 'projects - dhk',
    description:
      "Explore dhk's portfolio of award-winning projects. We deliver buildings, public spaces and interiors that are contextually sensitive, environmentally responsible and technically resilient. Featured: VOC Luxury Living, City Park, Conradie Park, Longkloof Precinct, The Signature, The Rubik.",
    keywords: [
      'dhk',
      'projects',
      'portfolio',
      'architecture projects',
      'interior design',
      'urban design',
      'VOC Luxury Living',
      'Conradie Park',
      'Longkloof',
      'award-winning',
    ],
  },

  '/journal': {
    title: 'journal - dhk',
    description:
      'Insights, news, and stories from dhk. Stay updated with our latest projects, industry trends, design thinking, and our journey as part of the 10N collective by Egis.',
    keywords: ['dhk', 'journal', 'blog', 'news', 'design insights', 'architecture news', '10N collective', 'Egis'],
  },

  '/studio': {
    title: 'studio - dhk',
    description:
      'Discover the dhk studio. Our team comprises multidisciplinary design professionals, technologists, BIM experts, architectural visualisers and graphic designers. We stay curious, always. We collaborate. We nurture talent. We design for the future. Part of 10N by Egis.',
    keywords: ['dhk', 'studio', 'design process', 'our space', 'BIM', 'design team', '10N collective', 'Egis'],
  },

  '/cookie-policy': {
    title: 'cookie policy - dhk',
    description: 'Our policy on cookies at dhk design studio.',
    keywords: ['dhk', 'cookie policy', 'cookies'],
  },

  '/privacy-policy': {
    title: 'privacy policy - dhk',
    description: 'Our policy on privacy at dhk design studio.',
    keywords: ['dhk', 'privacy policy', 'privacy'],
  },

  '/terms-of-use': {
    title: 'terms of use - dhk',
    description: 'The terms and conditions for using the dhk website.',
    keywords: ['dhk', 'terms of use', 'terms and conditions'],
  },

  '*': {
    title: 'page not found - dhk',
    description: 'Sorry, the page you are looking for does not exist. Please check the URL and try again.',
    keywords: ['dhk', 'not found', 'page not found', 'error', '404'],
  },
}

interface Project {
  name: string
  tagline: string
  description?: string
  location?: {
    city?: string
    country?: string
  }
  sector?: string
  type?: string
}

export const generateProjectSEO = (project: Project) => {
  const keywords = [
    project.name,
    project.tagline,
    'dhk',
    'project',
    'architecture',
    'interior design',
    ...(project.location?.city ? [project.location.city] : []),
    ...(project.location?.country ? [project.location.country] : []),
    ...(project.sector ? [project.sector] : []),
    ...(project.type ? [project.type] : []),
  ]

  return {
    title: `${project.name} - dhk`,
    description: project.description || `${project.name} - An exceptional project by dhk design studio.`,
    keywords: keywords.filter(Boolean).join(', '),
  }
}
