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
}

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="group overflow-hidden border border-emerald-500/20 bg-black/40 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader className="relative z-10 p-6 pb-0">
          <CardTitle className="text-2xl font-bold text-emerald-50 mb-2">
            {title}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-emerald-500/20 text-emerald-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="relative z-10 p-6 pt-2 flex-grow flex flex-col justify-between">
          <p className="text-gray-100 mb-4 flex-grow">{description}</p>
          <div className="flex items-center text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors mt-auto">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
