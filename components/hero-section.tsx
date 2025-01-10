"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full">
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#059669_0,transparent_80%)] opacity-20" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-5 md:gap-16">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="text-sm text-emerald-400">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-zinc-100">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Shyam Kumar
              </span>
            </h1>

            <p className="text-lg font-medium text-emerald-400">
              Full-Stack Web Developer
            </p>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              I craft modern web applications with cutting-edge technologies.
              Specializing in React, Next.js, and full-stack development to
              build scalable solutions that solve real business problems.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View My Projects
              </Button>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Section - Animated Shapes */}
        <div className="col-span-2 flex items-center justify-center">
          <motion.div
            className="relative h-[400px] w-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Floating circles */}
            {[...Array(1)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full border border-emerald-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                }}
              />
            ))}

            {/* Glowing orbs */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-emerald-500/30 blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-80px)`,
                }}
              />
            ))}

            {/* Center piece */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 backdrop-blur-sm"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" absolute bottom-0 left-0 right-0 border-t border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:gap-8">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies", value: "15+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-emerald-500/20 hover:bg-zinc-900/80"
            >
              <div className="relative z-10">
                <div className="text-2xl font-bold text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
