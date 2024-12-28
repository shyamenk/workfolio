import ProjectCard from "@/components/project-card";
import { projects } from "../types/project";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-8 text-emerald-50">
          Recent Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-4">
          <div className="space-y-6">
            <p className="text-lg">
              I&apos;ve been working on some exciting projects lately, pushing
              the boundaries of web development and exploring new technologies.
              Here are a few highlights from my recent work that showcase my
              skills and passion for creating innovative digital solutions.
            </p>
          </div>
          <ProjectCard {...projects[0]} />
        </div>
      </section>

      <section id="all-projects" className="pt-16">
        <h2 className="text-left text-4xl font-bold mb-12  text-emerald-50">
          All Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
