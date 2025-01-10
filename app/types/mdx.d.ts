declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";

  export const frontmatter: {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    publishedAt?: string;
    featured?: boolean;
  };

  export default function MDXContent(props: MDXProps): JSX.Element;
}
