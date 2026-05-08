import { Metadata } from 'next'
import { use } from 'react'
import { generateJournalMetadata } from '@/seo/metadata-generators'
import journalsData from '@/db/journals.json'

interface Journal {
  slug: string
  type: string
  title: string
  desc: string
  imageSrc: string
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const metadata = generateJournalMetadata(slug)

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const journal = (journalsData.journals as Journal[]).find((j) => j.slug === slug)

  if (!journal) {
    return (
      <div className="flex justify-center items-center h-screen bg-bg text-text">
        <h1 className="text-6xl">Article Not Found</h1>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-bg text-text">
        <div className="flex flex-col justify-end min-h-screen p-8">
          <span className="opacity-60 text-sm uppercase tracking-wider">{journal.type}</span>
          <h1 className="max-w-4xl font-semibold text-5xl md:text-6xl mt-4">{journal.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: journal.desc }} className="max-w-2xl text-lg leading-relaxed mt-8" />
        </div>
      </div>
    </>
  )
}
