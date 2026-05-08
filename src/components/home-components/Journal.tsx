'use client'

import { Link } from 'next-view-transitions'
import JournalCard from '@/components/shared/JournalCard'
import MouseFollower from '@/components/shared/MouseFollower'
import JournalsData from '@/db/journals.json'

export default function Journal() {
  return (
    <MouseFollower className="w-dvw" text="[ view article ]">
      <section className="relative bg-bg text-text fl-px-2.5/3 py-4">
        <h4 className="font-bold fl-text-4xl/6xl tracking-wide mb-12">Journal</h4>

        <div className="grid lg:grid-cols-3">
          {JournalsData.journals.map((journal, index: number) => (
            <JournalCard
              key={index}
              journalTitle={journal.title}
              journalDesc={journal.desc}
              journalType={journal.type}
              imageSrc={journal.imageSrc}
              slug={journal.slug}
            />
          ))}

          <div className="max-lg:hidden flex justify-center items-center">
            <Link href="/journal" className="hover:bg-text cursor-pointer">
              [<span className="hover:text-bg px-8">view more</span>]
            </Link>
          </div>
        </div>
      </section>
    </MouseFollower>
  )
}
