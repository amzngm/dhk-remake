'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMouseFollower } from '@/components/shared/MouseFollower'

export default function ProjectCard({
  imageSrc,
  projectTitle,
  projectDate,
  projectLink,
}: {
  imageSrc: string
  projectTitle: string
  projectDate: string
  projectLink: string
}) {
  const { setIsHovering } = useMouseFollower()

  return (
    <Link
      href={projectLink}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group block relative w-full lg:max-h-200 aspect-4/5 max-md:aspect-square overflow-hidden bg-bg cursor-pointer"
    >
      {imageSrc && <Image src={imageSrc} alt={projectTitle} fill className="object-cover" />}

      <div className="bottom-0 z-10 absolute flex justify-between items-center w-full bg-bg fl-text-lg/xl normal-case tracking-wide lg:transition-transform lg:group-hover:translate-y-0 lg:translate-y-full lg:duration-200 px-2 py-1">
        {projectTitle && <h6 className="line-clamp-1">{projectTitle}</h6>}
        {projectDate && <span>{projectDate}</span>}
      </div>
    </Link>
  )
}
