import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import { projects } from "@/app/types/project";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-40">
      <article className="bg-transparent max-w-4xl mx-auto">
        <header className="mb-8 lg:mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed">
            {project.description}
          </p>
        </header>

        <div className="space-y-8 lg:space-y-10">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 px-4 py-1.5 text-sm font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <Button
              asChild
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100 px-6 py-2 text-base font-medium"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100 px-6 py-2 text-base font-medium"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-5 w-5" /> Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}
