"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/yourusername",
  },
  {
    name: "Blog",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "https://yourblog.com",
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:your@email.com",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
];

export default function About() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <motion.div
        className="container max-w-4xl space-y-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-emerald-500/20">
            <Image
              src="/avatar.png"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
              About Me
            </h1>
            <p className="text-zinc-400">
              Full-Stack Developer specializing in building exceptional digital
              experiences
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Bio Section */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold text-emerald-400">
                Background
              </h2>
              <div className="space-y-3 text-sm text-zinc-400">
                <p>
                  I started my journey in web development 5 years ago, creating
                  beautiful and functional web applications.
                </p>
                <p>
                  My expertise includes building responsive websites, RESTful
                  APIs, and working with modern frameworks.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold text-emerald-400">
                Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-emerald-400"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
