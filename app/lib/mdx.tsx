import fs from "fs";
import path from "path";
import React from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";

interface PrettyCodeNode {
  children: { type: string; value: string }[];
  properties: {
    className: string[];
  };
}

const prettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node: PrettyCodeNode) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: PrettyCodeNode) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: PrettyCodeNode) {
    node.properties.className = ["word"];
  },
};

// Define types for pre component props
interface PreComponentProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

// Custom components that can be used in MDX
const components: MDXComponents = {
  pre: ({ children, ...props }: PreComponentProps) => {
    const childrenArray = React.Children.toArray(children);
    const child = childrenArray[0] as React.ReactElement;

    if (child?.props) {
      const code = child.props.children as string;
      const language = child.props.className?.replace(
        "language-",
        "",
      ) as string;
      const filename = child.props.filename as string | undefined;

      return <CodeBlock code={code} language={language} filename={filename} />;
    }
    return <pre {...props}>{children}</pre>;
  },
};

// Define the type for project frontmatter
export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date?: string;
  featured?: boolean;
  commonTechnologies?: number; // Added for related projects functionality
}

// Define return type for getProjectBySlug
interface ProjectData {
  meta: ProjectFrontmatter;
  content: React.ReactNode;
}

// Cache the file reading operation

// Get a single project by slug
export async function getProjectBySlug(
  slug: string,
): Promise<ProjectData | null> {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const { content: mdxContent } = await compileMDX({
      source: content,
      components,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, prettyCodeOptions],
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["anchor"],
                },
              },
            ],
          ],
        },
      },
    });

    return {
      meta: {
        ...data,
        slug,
      } as ProjectFrontmatter,
      content: mdxContent,
    };
  } catch (error) {
    console.error(`Error processing MDX for ${slug}:`, error);
    return null;
  }
}

// Get all projects
export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const projectsDirectory = path.join(process.cwd(), "content/projects");

  try {
    const files = fs.readdirSync(projectsDirectory);
    const projects = await Promise.all(
      files
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, "");
          const project = await getProjectBySlug(slug);
          return project?.meta;
        }),
    );

    return projects
      .filter((project): project is ProjectFrontmatter => project !== null)
      .sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return 0;
      });
  } catch (error) {
    console.error("Error reading projects directory:", error);
    return [];
  }
}

// Get featured projects
export async function getFeaturedProjects(): Promise<ProjectFrontmatter[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

// Get related projects based on technologies
export async function getRelatedProjects(
  currentSlug: string,
  limit = 3,
): Promise<ProjectFrontmatter[]> {
  const currentProject = await getProjectBySlug(currentSlug);
  if (!currentProject) return [];

  const allProjects = await getAllProjects();
  const currentTechnologies = new Set(currentProject.meta.technologies);

  return allProjects
    .filter((project) => project.slug !== currentSlug)
    .map((project) => ({
      ...project,
      commonTechnologies: project.technologies.filter((tech) =>
        currentTechnologies.has(tech),
      ).length,
    }))
    .sort((a, b) => (b.commonTechnologies ?? 0) - (a.commonTechnologies ?? 0))
    .slice(0, limit);
}
