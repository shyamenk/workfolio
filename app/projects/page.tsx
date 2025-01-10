import ProjectCard from "@/components/project-card";
import { projects } from "../types/project";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-emerald-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;ve been working on some exciting projects lately, pushing
              the boundaries of web development and exploring new technologies.
              Here are a few highlights from my recent work that showcase my
              skills and passion for creating innovative digital solutions.
            </p>
          </div>
          <div className="mt-12">
            <ProjectCard {...projects[0]} featured={true} />
          </div>
        </section>

        {/* All Projects Section */}
        <section id="all-projects" className="pt-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              All Projects
            </h2>
            <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
