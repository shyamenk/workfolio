import { getAllProjects } from "@/app/lib/mdx";
import ProjectCard from "@/components/project-card";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export default async function ProjectPage() {
  const projects = await getAllProjects();
  const featuredProject = projects.find((project) => project.featured);

  return (
    <div className="min-h-screen bg-transparent">
      <ScrollProgress />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
        <section id="featured" className="mb-32">
          <div className="max-w-4xl">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            </div>

            <p className="text-[20px] text-gray-300 leading-relaxed">
              I&apos;ve been working on some exciting projects lately, pushing
              the boundaries of web development and exploring new technologies.
              Here are a few highlights from my recent work that showcase my
              skills and passion for creating innovative digital solutions.
            </p>
          </div>
          {featuredProject && (
            <div className="mt-16">
              <ProjectCard {...featuredProject} featured={true} />
            </div>
          )}
        </section>

        {/* All Projects Section */}
        <section id="all-projects" className="pt-16">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              All Projects
            </h2>
            <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.slug}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
