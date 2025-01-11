import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/app/lib/mdx";
import { FaGithub } from "react-icons/fa";
import { ScrollProgress } from "@/components/shared/scroll-progress";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <ScrollProgress />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-8 text-emerald-500">
              {project.meta.title}
            </h1>
            <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
              <Image
                src={project.meta.image}
                alt={project.meta.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.meta.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.meta.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.meta.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.meta.liveUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* MDX Content */}
          <article className="prose prose-invert prose-emerald max-w-none">
            {project.content}
          </article>
        </div>
      </div>
    </div>
  );
}
