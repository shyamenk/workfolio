"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Cpu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ScrollProgress } from "./shared/scroll-progress";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Completed", value: "15+", icon: Code2 },
  { label: "Technologies", value: "20+", icon: Cpu },
];
const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-transparent">
      <ScrollProgress />
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#a3e635_0,transparent_80%)] opacity-20" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-16 md:py-24">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-[#a6e3a1]/20 bg-[#a6e3a1]/10 px-3 py-1">
              <span className="text-sm text-[#a6e3a1]">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl font-mono font-bold tracking-tight sm:text-6xl">
              <span className="text-[#cdd6f4]">Hi, I&apos;m </span>
              <br />
              <span className="bg-gradient-to-r from-[#a6e3a1] to-[#f5c2e7] bg-clip-text text-transparent">
                Shyam Kumar
              </span>
            </h1>

            <p className="text-lg font-mono font-medium text-[#a6e3a1]">
              Full Stack Engineer
            </p>

            <p className="max-w-lg text-lg font-mono leading-relaxed text-[#cdd6f4]">
              I specialize in <span className="text-[#f5c2e7]">full stack development</span>, <span className="text-[#f5c2e7]">modern web technologies</span>, and <span className="text-[#f5c2e7]">building scalable solutions</span>. As a passionate content creator, I share tutorials and insights into robust application architecture, best practices, and the latest in web engineering.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-[#a6e3a1] hover:bg-[#f5c2e7] text-[#1e1e2e] font-mono"
                >
                  View My Projects
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1]"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1]"
                >
                  <FaXTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1]"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1]"
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
                className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full border border-[#a6e3a1]/20"
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
                className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-[#a6e3a1]/30 blur-sm"
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
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a6e3a1]/20 backdrop-blur-sm"
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
      <div className="absolute left-0 right-0 bottom-8 md:mt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="relative z-10 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-[#a6e3a1]" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-[#a6e3a1]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#cdd6f4] font-mono">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
