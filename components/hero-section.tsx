/**
 * @file HeroSection.tsx
 * @description Optimized hero section with backend-heavy positioning and recruiter-focused messaging.
 */

"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Cpu, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ScrollProgress } from "./shared/scroll-progress";
import Link from "next/link";

/**
 * Key credibility stats aligned with resume & portfolio
 */
const stats = [
  { label: "Years Experience", value: "4+", icon: Briefcase },
  { label: "Production Projects", value: "15+", icon: Code2 },
  { label: "Technologies Used", value: "20+", icon: Cpu },
];

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-transparent">
      <ScrollProgress />

      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#a3e635_0,transparent_80%)] opacity-20" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-16 md:py-24 pb-16">
        {/* Text Section */}
        <div className="col-span-3 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Availability */}
            <div className="inline-flex items-center rounded-full border border-[#a6e3a1]/20 bg-[#a6e3a1]/10 px-3 py-1">
              <span className="text-sm text-[#a6e3a1]">
                Open to Full-Time Full-Stack / Backend Roles
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl font-mono font-bold tracking-tight sm:text-6xl">
              <span className="text-[#cdd6f4]">Hi, I&apos;m </span>
              <br />
              <span className="bg-gradient-to-r from-[#a6e3a1] to-[#f5c2e7] bg-clip-text text-transparent">
                Shyam Kumar
              </span>
            </h1>

            {/* Role */}
            <p className="text-lg font-mono font-medium text-[#a6e3a1]">
              Backend-Heavy Full-Stack Developer building scalable, production-ready systems
            </p>

            {/* Value Proposition */}
            <p className="max-w-lg text-lg font-mono leading-relaxed text-[#cdd6f4]">
              I design and ship <span className="text-[#f5c2e7]">backend-driven web applications</span> using{" "}
              <span className="text-[#f5c2e7]">Node.js, Python, PostgreSQL, and AWS</span>. My focus is on{" "}
              <span className="text-[#f5c2e7]">performance, security, and reliability</span> — delivering
              production systems used by real users in healthcare and logistics domains.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 mb-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-[#a6e3a1] hover:bg-[#f5c2e7] text-[#1e1e2e] font-mono"
                >
                  View Projects
                </Button>
              </Link>

              <Link href="/resume/Shyam_Kumar_FullStack_Developer_4Y.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#a6e3a1]/30 text-[#a6e3a1] font-mono hover:bg-[#a6e3a1]/10"
                >
                  Download Resume
                </Button>
              </Link>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <Link href="https://github.com/shyamenk" target="_blank">
                  <Button variant="outline" size="icon" className="hero-icon-btn">
                    <FaGithub className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://twitter.com/shyamenk07" target="_blank">
                  <Button variant="outline" size="icon" className="hero-icon-btn">
                    <FaXTwitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/shyamenk" target="_blank">
                  <Button variant="outline" size="icon" className="hero-icon-btn">
                    <FaLinkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:shyamenk@gmail.com">
                  <Button variant="outline" size="icon" className="hero-icon-btn">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Section (unchanged – already good) */}
        <div className="col-span-2 flex items-center justify-center">
          {/* KEEP YOUR EXISTING ANIMATION BLOCK AS-IS */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="rounded-2xl p-4 bg-[#313244]/60 backdrop-blur-sm border border-[#a6e3a1]/20"
            >
              <div className="flex items-center space-x-4">
                <stat.icon className="h-8 w-8 text-[#a6e3a1]" />
                <div>
                  <div className="text-2xl font-mono font-bold text-[#a6e3a1]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#cdd6f4] font-mono">
                    {stat.label}
                  </div>
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
