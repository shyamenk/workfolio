import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="container relative flex flex-col items-center justify-center gap-12 md:grid md:grid-cols-2">
        {/* Image with Blob */}
        <div className="relative flex items-center justify-center">
          {/* <div className="absolute aspect-square w-64 animate-blob rounded-full bg-emerald-400/20 blur-3xl filter" /> */}
          {/* <div className="absolute aspect-square w-64 animate-blob animation-delay-2000 rounded-full bg-emerald-500/20 blur-3xl filter" /> */}
          {/* <div className="absolute aspect-square w-64 animate-blob animation-delay-4000 rounded-full bg-emerald-600/20 blur-3xl filter" /> */}
          <div className="relative aspect-square w-64">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/avatar.png"
                alt="Your profile picture"
                fill
                className="object-cover border-none"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-emerald-200/60 mix-blend-overlay" />

              {/* Optional subtle inner glow */}
              <div className="absolute inset-0 bg-emerald-400/20 mix-blend-soft-light" />
            </div>
          </div>{" "}
        </div>

        {/* Content */}
        <div className="mt-8 flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold text-zinc-100 sm:text-5xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Shyam
            </span>
          </h1>
          <h2 className="mt-4 text-xl font-medium text-emerald-400">
            Full-Stack Engineer
          </h2>
          <p className="mt-4 max-w-lg text-zinc-400">
            I'm a passionate web developer with expertise in React, Next.js, and
            modern web technologies. I create elegant, performant, and
            user-friendly applications that solve real-world problems.
          </p>

          {/* Social Links */}
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
}
