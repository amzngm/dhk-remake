'use client'

import { useRef, useState } from 'react'
import { useMouseMotion } from '@/hooks/useMouseMotion'
import ProjectCard from '@/components/shared/ProjectCard'
import MouseFollower from '@/components/shared/MouseFollower'

const projects = [
  {
    title: 'Radisson Red',
    date: '2022',
    imageSrc: '/images/artp/image-10.avif',
  },
  {
    title: 'City Park/Mama Shelter Hotel and Residences',
    date: '2026',
    imageSrc: '/images/artp/image-25.jpg',
  },
  {
    title: 'Seafront Estate',
    date: '2026',
    imageSrc: '/images/artp/image-11.avif',
  },
  {
    title: '',
    date: '',
    imageSrc: '',
    btn: '/projects',
  },
  {
    title: '',
    date: '',
    imageSrc: '',
  },
  {
    title: 'Drostdy Hotel',
    date: '2014',
    imageSrc: '/images/artp/image-9.avif',
  },
  {
    title: 'The Signature',
    date: '2024',
    imageSrc: '/images/artp/image-12.avif',
  },
]

export default function FeaturedProjects() {
  const containerRef = useRef()
  const { x, y } = useMouseMotion(containerRef)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section ref={containerRef} className="relative w-dvw min-h-dvh overflow-hidden bg-bg text-text mb-12 px-5">
      <div className="h-120 flex justify-end items-end font-semibold me-44 mb-12">
        <h4 className="text-6xl tracking-wide">Featured Projects</h4>
      </div>

      <ProjectCard
        onHover={setHoveredCard}
        projectTitle={projects[0].title}
        projectDate={projects[0].date}
        imageSrc={projects[0].imageSrc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(1).map((project, index) => (
          <ProjectCard
            key={index}
            onHover={setHoveredCard}
            projectTitle={project.title}
            projectDate={project.date}
            imageSrc={project.imageSrc}
            btn={project.btn}
          />
        ))}
      </div>

      <MouseFollower x={x} y={y} isVisible={hoveredCard?.imageSrc}>
        [ View Project ]
      </MouseFollower>
    </section>
  )
}
