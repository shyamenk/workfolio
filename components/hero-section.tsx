import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="container relative flex flex-col items-center justify-center gap-12 md:grid md:grid-cols-2">
        <div>
          <div className="relative flex items-center justify-center">
            <div className="absolute aspect-square w-72 animate-pulse rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute aspect-square w-72 animate-pulse rounded-full bg-emerald-600/5 blur-2xl delay-75" />
            <div className="relative aspect-square w-72 transform transition-transform duration-500 hover:scale-105">
              <div className="group relative h-full w-full overflow-hidden rounded-full ring-2 ring-emerald-500/20 ring-offset-2 ring-offset-zinc-950 transition-all duration-300 hover:ring-emerald-500/40">
                <Image
                  src="/avatar.png"
                  alt="Your profile picture"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-emerald-900/20 to-transparent opacity-80 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-emerald-400/10 mix-blend-soft-light" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl">
            Hi, I&apos;m
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Shyam
            </span>
          </h1>
          <h2 className="mt-4 text-xl font-medium text-emerald-400">
            Full-Stack Engineer
          </h2>
          <p className="mt-4 max-w-lg text-zinc-400">
            I&apos;m a passionate web developer with expertise in React,
            Next.js, and modern web technologies. I create elegant, performant,
            and user-friendly applications that solve real-world problems.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:text-emerald-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:text-emerald-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:text-emerald-400"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
          <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
            View My Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
