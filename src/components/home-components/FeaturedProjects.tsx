import ProjectCard from '@/components/shared/ProjectCard'
import projectsDbData from '@/db/projects.json'

export default function FeaturedProjects() {
  const projects = Object.values(projectsDbData)

  return (
    <section className="relative w-dvw bg-bg text-text fl-px-2.5/3 py-4">
      <h4 className="lg:w-1/2 font-semibold fl-text-4xl/6xl tracking-wide ms-auto py-10">Featured Projects</h4>

      <ProjectCard
        imageSrc={projects[0].imageSrc}
        projectTitle={projects[0].title}
        projectDate={projects[0].date}
        projectLink={`/projects/${projects[0].slug}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.slice(1, 3).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            projectTitle={project.title}
            projectDate={project.date}
            projectLink={`/projects/${project.slug}`}
          />
        ))}

        <div className="max-lg:hidden flex justify-center items-center">
          <a href="/projects" className="hover:bg-text cursor-pointer">
            [<span className="hover:text-bg px-8">view all projects</span>]
          </a>
        </div>

        <div className="max-lg:hidden"></div>

        {projects.slice(3).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            projectTitle={project.title}
            projectDate={project.date}
            projectLink={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
