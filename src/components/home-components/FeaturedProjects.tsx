'use client'

import { Link } from 'next-view-transitions'
import ProjectCard from '@/components/shared/ProjectCard'
import MouseFollower from '@/components/shared/MouseFollower'
import projectsData from '@/db/projects.json'

export default function FeaturedProjects() {
  const projects = Object.values(projectsData)

  return (
    <MouseFollower className="w-dvw">
      <section className="relative bg-bg text-text fl-px-2.5/3 py-4">
        <h4 className="lg:w-1/2 font-semibold fl-text-4xl/6xl tracking-wide ms-auto py-10">Featured Projects</h4>

        <ProjectCard
          imageSrc={projects[0].imageSrc}
          projectTitle={projects[0].title}
          projectDate={projects[0].year}
          projectLink={`/projects/${projects[0].slug}`}
        />

        <div className="grid lg:grid-cols-3">
          {projects.slice(1, 3).map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              projectTitle={project.title}
              projectDate={project.year}
              projectLink={`/projects/${project.slug}`}
            />
          ))}

          <div className="max-lg:hidden flex justify-center items-center">
            <Link href="/projects" className="hover:bg-text cursor-pointer">
              [<span className="hover:text-bg px-8">view all projects</span>]
            </Link>
          </div>

          <div className="max-lg:hidden"></div>

          {projects.slice(3, 5).map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              projectTitle={project.title}
              projectDate={project.year}
              projectLink={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </MouseFollower>
  )
}
