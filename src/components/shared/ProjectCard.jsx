'use client'

import Image from 'next/image'
import MainBtn from '@/components/ui/button/MainBtn'

export default function ProjectCard({ projectTitle, projectDate, imageSrc, onHover, btn, btnText = 'all projects', desc, type }) {
  return (
    <div
      onMouseEnter={() => onHover({ imageSrc })}
      onMouseLeave={() => onHover(null)}
      className="group relative w-full min-h-140 overflow-hidden bg-bg cursor-pointer"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {imageSrc !== '' && <Image src={imageSrc} alt={projectTitle} fill className="w-full h-full object-cover" />}
      </div>

      <div className="right-0 bottom-0 left-0 absolute w-full h-fit overflow-hidden flex flex-col justify-between items-center bg-bg translate-y-full group-hover:translate-y-0 duration-200 p-2">
        {projectTitle && <span>{projectTitle}</span>}

        <div className="w-full flex justify-between items-start">
          {projectDate && !type && <span>{projectDate}</span>}

          {type && !projectDate && <div className="bg-text text-bg px-1">{type}</div>}

          {desc && (
            <div className="z-20 relative w-full max-w-80 h-full flex justify-center items-center text-main">
              <p className="line-clamp-6">{desc}</p>
            </div>
          )}
        </div>
      </div>

      {btn && (
        <div className="z-20 relative w-full h-full flex justify-center items-center">
          <MainBtn to={btn}>{btnText}</MainBtn>
        </div>
      )}
    </div>
  )
}
