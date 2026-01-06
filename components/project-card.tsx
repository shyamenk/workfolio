/**
 * @file project-card.tsx
 * @description A card component for displaying project information with image, title, description,
 * and technology badges. Supports featured projects with larger display.
 */

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

/**
 * @interface ProjectCardProps
 * @description Props interface for the ProjectCard component
 * 
 * @property {string} slug - The URL slug for the project
 * @property {string} title - The title of the project
 * @property {string} description - A brief description of the project
 * @property {string} image - URL of the project's featured image
 * @property {string[]} technologies - Array of technologies used in the project
 * @property {boolean} [featured=false] - Whether the project is featured (optional)
 */
interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

/**
 * @component ProjectCard
 * @description A card component that displays project information in an attractive and interactive format.
 * Features:
 * - Responsive image display
 * - Technology badges
 * - Hover effects
 * - Featured project support
 * - Truncated description
 * 
 * @param {ProjectCardProps} props - The component props
 * @returns {JSX.Element} The rendered project card component
 * 
 * @example
 * ```tsx
 * <ProjectCard
 *   slug="my-project"
 *   title="My Awesome Project"
 *   description="A brief description of the project"
 *   image="/path/to/image.jpg"
 *   technologies={["React", "TypeScript", "Tailwind"]}
 *   featured={true}
 * />
 * ```
 */
export default function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="h-full">
      <Card
        className={`
        group relative overflow-hidden border-0
        bg-gradient-to-br from-[#313244] to-[#181825]
        backdrop-blur-sm transition-all duration-300
        hover:shadow-[0_0_40px_rgba(203,166,247,0.15)]
        flex flex-col h-full
        ${featured ? "lg:col-span-2" : ""}
      `}
      >
        <div className="absolute inset-0.5 rounded-lg " />

        {/* Image Container - Fixed Height */}
        <div className="relative w-full h-52 flex-shrink-0 overflow-hidden bg-[#1e1e2e] rounded-t-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={featured}
          />
        </div>

        {/* Content Container - Flex Grow */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <CardHeader className="relative z-10 p-5 pb-3">
              <CardTitle className="text-xl font-mono font-bold text-[#cdd6f4] mb-3 tracking-tight line-clamp-2 min-h-[3.5rem]">
                {title}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-[#cba6f7]/20 text-[#cba6f7] border border-[#cba6f7]/30 font-mono text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
                {technologies.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="bg-[#cba6f7]/20 text-[#cba6f7] border border-[#cba6f7]/30 font-mono text-xs px-2 py-0.5"
                  >
                    +{technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="relative z-10 px-5 pb-3">
              <p
                className="text-[#cdd6f4]/90 text-sm leading-relaxed font-mono overflow-hidden h-[4.5rem]"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {description}
              </p>
            </CardContent>
          </div>

          <CardContent className="relative z-10 px-5 pb-5 pt-0">
            <div className="flex items-center text-[#a6e3a1] font-mono text-sm font-medium group-hover:text-[#cba6f7] transition-colors">
              View Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}