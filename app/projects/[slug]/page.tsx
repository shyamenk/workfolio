import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, ArrowLeft } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/app/lib/mdx";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string; }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
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

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#a6e3a1] hover:text-[#cba6f7] transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#a6e3a1] to-[#cba6f7]">
              {project.meta.title}
            </h1>
            <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.meta.image || "/placeholder.svg"}
                alt={project.meta.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover bg-[#1e1e2e] transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.meta.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-[#313244]/10 text-[#a6e3a1] border border-[#a6e3a1]/20 px-3 py-1 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.meta.githubUrl && (
                <Button
                  variant="outline"
                  asChild
                  className="bg-[#313244] hover:bg-[#45475a] text-[#a6e3a1] hover:text-[#cba6f7] border-[#a6e3a1]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
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
                <Button
                  variant="outline"
                  asChild
                  className="bg-[#313244] hover:bg-[#45475a] text-[#a6e3a1] hover:text-[#cba6f7] border-[#a6e3a1]/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
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
