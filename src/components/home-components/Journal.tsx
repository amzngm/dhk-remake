import JournalCard from '@/components/shared/JournalCard'
import JournalsData from '@/db/journals.json'

export default function Journal() {
  return (
    <section className="relative w-dvw bg-bg text-text fl-px-2.5/3 py-4">
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
      </div>
    </section>
  )
}
