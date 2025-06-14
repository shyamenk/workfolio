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
        bg-gradient-to-br from-[#313244] to-[#181825]
        backdrop-blur-sm transition-all duration-300
        hover:shadow-[0_0_40px_rgba(203,166,247,0.15)]
        ${featured ? "lg:col-span-2" : ""}
      `}
      >
        <div className="absolute inset-0.5 rounded-lg " />
        <div className={`relative ${featured ? "h-80" : "h-64"} overflow-hidden bg-[#1e1e2e]`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-700"
            priority={featured}
          />
        </div>
        <CardHeader className="relative z-10 p-5 pb-0">
          <CardTitle className="text-2xl font-mono font-bold text-[#cdd6f4] mb-2 tracking-tight truncate line-clamp-1">
            {title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-[#cba6f7]/20 text-[#cba6f7] border border-[#cba6f7]/30 font-mono"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="relative z-10 p-5 pt-3">
          <p className="text-[#cdd6f4] mb-4 leading-relaxed font-mono line-clamp-3">{description}</p>
          <div className="flex items-center text-[#a6e3a1] font-mono font-medium group-hover:text-[#cba6f7] transition-colors">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}