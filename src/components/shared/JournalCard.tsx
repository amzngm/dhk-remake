'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMouseFollower } from '@/components/shared/MouseFollower'

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
  const { setIsHovering } = useMouseFollower()
  const previewText = journalDesc
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return (
    <Link
      href={`/journal/${slug}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group block relative w-full lg:max-h-200 aspect-4/5 max-md:aspect-square overflow-hidden bg-bg cursor-pointer"
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={journalTitle}
          fill
          sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 90vw"
          loading="eager"
          className="object-cover"
        />
      )}

      <div className="bottom-0 z-10 absolute flex justify-between items-start gap-6 w-full bg-bg fl-text-base/lg normal-case leading-snug tracking-wide p-2">
        {journalType && <span className="bg-text text-bg px-2">{journalType}</span>}

        <div className="w-[70%]">
          {journalTitle && <h6 className="line-clamp-4">{journalTitle}</h6>}

          <div className="max-lg:hidden grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-350 ease-out my-2">
            {previewText && (
              <p className="opacity-0 lg:group-hover:opacity-40 line-clamp-6 text-balance transition-all translate-y-2 lg:group-hover:translate-y-0 duration-500 ease-out delay-200">
                {previewText}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
