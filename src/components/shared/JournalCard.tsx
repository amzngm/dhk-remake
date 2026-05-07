import Link from 'next/link'
import Image from 'next/image'

export default function JournalCard({
  journalTitle,
  journalDesc,
  journalType,
  imageSrc,
  slug,
}: {
  journalTitle: string
  journalDesc: string
  journalType: string
  imageSrc: string
  slug: string
}) {
  return (
    <Link href={`/journal/${slug}`} className="group block relative w-full lg:max-h-200 aspect-4/5 max-md:aspect-square overflow-hidden bg-bg cursor-pointer">
      {imageSrc && <Image src={imageSrc} alt={journalTitle} fill className="object-cover" />}

      <div className="bottom-0 z-10 absolute flex justify-between items-start gap-6 w-full bg-bg normal-case tracking-wide p-2">
        {journalType && <span className="bg-text text-bg text-sm px-2">{journalType}</span>}

        <div>
          {journalTitle && <h6 className="font-light line-clamp-4 leading-snug">{journalTitle}</h6>}
          <div className="hidden lg:group-hover:block my-2">
            {journalDesc && <h6 className="opacity-46 line-clamp-10 text-balance leading-snug">{journalDesc}</h6>}
          </div>
        </div>
      </div>
    </Link>
  )
}
