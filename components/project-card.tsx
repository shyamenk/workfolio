import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card
        className={`
        group relative overflow-hidden border-0 
        bg-gradient-to-br from-black/80 to-black/40 
        backdrop-blur-sm transition-all duration-300
        hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
        ${featured ? "lg:col-span-2" : ""}
      `}
      >
        <div className="absolute inset-0.5 rounded-lg " />
        <div
          className={`relative ${featured ? "h-80" : "h-64"} overflow-hidden`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <CardHeader className="relative z-10 p-6 pb-0">
          <CardTitle className="text-2xl font-bold text-white mb-3 tracking-tight">
            {title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="relative z-10 p-6 pt-2">
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
