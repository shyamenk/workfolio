"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Mastering API Design",
    excerpt: "Most developers know how to build APIs, but only a few know how to design them.",
    image: "/images/blog1.webp",
    date: "2024-12-24",
    readTime: "6 min read",
    url: "https://backendalmanac.in/blog/api-design"
  },
  {
    id: 2,
    title: "System Design",
    excerpt: "Every successful tech system shares a hidden pattern...",
    image: "/images/blog2.webp",
    date: "2024-12-24",
    readTime: "7 min read",
    url: "https://backendalmanac.in/blog/system-design"
  },
  {
    id: 3,
    title: "Optimizing Database Design",
    excerpt: "In today's world, scalable and high-performance databases are essential for almost every successful application.",
    image: "/images/db-design.webp",
    date: "2024-11-20",
    readTime: "6 min read",
    url: "https://backendalmanac.in/blog/database-design"
  }
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-mono font-bold text-[#cdd6f4] mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-[#a6e3a1] font-mono">
            Insights and tutorials from my blog
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`${post.url}`}>
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-[#a6e3a1]">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-mono font-bold text-[#cdd6f4] group-hover:text-[#a6e3a1] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#cdd6f4] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="https://backendalmanac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#a6e3a1]/20 bg-[#313244]/50 text-[#a6e3a1] hover:bg-[#a6e3a1]/10 transition-colors"
          >
            View All Articles
            <span className="sr-only">(opens in new tab)</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 