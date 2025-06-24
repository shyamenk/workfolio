/**
 * @file HeroSection.tsx
 * @description The main hero section component of the portfolio website. It includes a personal introduction,
 * social media links, animated visual elements, and key statistics.
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
 * @constant {Array<{label: string, value: string, icon: React.ComponentType}>} stats
 * @description Array of statistics to be displayed in the hero section
 */
const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Delivered", value: "25+", icon: Code2 },
  { label: "Technologies", value: "20+", icon: Cpu },
];

/**
 * @component HeroSection
 * @description The main hero section component that serves as the landing page's primary content.
 * It includes:
 * - Personal introduction with animated entrance
 * - Social media links
 * - Animated visual elements
 * - Key statistics with icons
 *
 * @returns {JSX.Element} The rendered hero section component
 *
 * @example
 * \`\`\`tsx
 * <HeroSection />
 * \`\`\`
 */
const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full bg-transparent">
      <ScrollProgress />
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#a3e635_0,transparent_80%)] opacity-20" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-16 md:py-24 pb-16">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-[#a6e3a1]/20 bg-[#a6e3a1]/10 px-3 py-1">
              <span className="text-sm text-[#a6e3a1]">Available for Freelance Projects</span>
            </div>

            <h1 className="text-4xl font-mono font-bold tracking-tight sm:text-6xl">
              <span className="text-[#cdd6f4]">Hi, I&apos;m </span>
              <br />
              <span className="bg-gradient-to-r from-[#a6e3a1] to-[#f5c2e7] bg-clip-text text-transparent">
                Shyam Kumar
              </span>
            </h1>

            <p className="text-lg font-mono font-medium text-[#a6e3a1]">Full Stack Developer & Tech Consultant</p>

            <p className="max-w-lg text-lg font-mono leading-relaxed text-[#cdd6f4]">
              I help businesses and startups build <span className="text-[#f5c2e7]">scalable web applications</span>,{" "}
              <span className="text-[#f5c2e7]">modern digital solutions</span>, and{" "}
              <span className="text-[#f5c2e7]">robust technical infrastructure</span>. With expertise in full-stack
              development and cloud solutions, I deliver end-to-end projects that drive real business results and exceed
              client expectations.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 mb-4">
              <Link href="/projects" className="cursor-pointer">
                <Button size="lg" className="bg-[#a6e3a1] hover:bg-[#f5c2e7] text-[#1e1e2e] font-mono cursor-pointer">
                  View My Work
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1] cursor-pointer"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://twitter.com/shyamenk07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1] cursor-pointer"
                  >
                    <FaXTwitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1] cursor-pointer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">Linkedin</span>
                  </Button>
                </Link>
                <Link href="mailto:shyamenk@gmail.com" className="cursor-pointer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-[#a6e3a1]/20 bg-[#313244]/50 hover:border-[#a6e3a1]/50 hover:bg-[#a6e3a1]/10 hover:text-[#a6e3a1] cursor-pointer"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
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
                  repeat: Number.POSITIVE_INFINITY,
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
                  repeat: Number.POSITIVE_INFINITY,
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
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
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
              className="group relative overflow-hidden rounded-2xl p-4 bg-[#313244]/60 backdrop-blur-sm border border-[#a6e3a1]/20 hover:border-[#a6e3a1]/40 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-[#a6e3a1]" />
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-[#a6e3a1]">{stat.value}</div>
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
