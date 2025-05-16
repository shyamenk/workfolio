"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFastapi,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

const technologies = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Python", icon: FaPython, color: "text-sky-500" },
  { name: "Redis", icon: DiRedis, color: "text-red-500" },
  { name: "FastAPI", icon: SiFastapi, color: "text-green-500" },
  { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl text-left mx-auto"
        >
          <h2 className="text-4xl font-mono font-bold tracking-tight text-[#a6e3a1] mb-8">
            Tech Stack
          </h2>
          <p className="mt-4 mb-10 text-lg font-mono text-[#cdd6f4]">
            Cutting-edge technologies I leverage to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-x-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {technologies.map((tech, idx) => {
              // Pick a color from the palette for variety
              const accentColors = [
                '#a6e3a1', // Green
                '#f5c2e7', // Pink
                '#cba6f7', // Mauve
                '#89b4fa', // Blue
                '#f9e2af', // Yellow
                '#fab387', // Peach
                '#94e2d5', // Teal
                '#f38ba8', // Red
              ];
              const color = accentColors[idx % accentColors.length];
              return (
                <div
                  key={tech.name + idx}
                  className="flex flex-col items-center min-w-[100px]"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#313244]/20 backdrop-blur-sm border border-[#a6e3a1]/10 mb-2 transition-all duration-300 hover:bg-[#313244]/30 hover:border-[#a6e3a1]/20">
                    <tech.icon className="w-8 h-8" style={{ color }} />
                  </div>
                  <span className="text-sm font-mono" style={{ color }}>{tech.name}</span>
                </div>
              );
            })}
            {/* Duplicate for seamless loop */}
            {technologies.map((tech, idx) => {
              const accentColors = [
                '#a6e3a1', // Green
                '#f5c2e7', // Pink
                '#cba6f7', // Mauve
                '#89b4fa', // Blue
                '#f9e2af', // Yellow
                '#fab387', // Peach
                '#94e2d5', // Teal
                '#f38ba8', // Red
              ];
              const color = accentColors[idx % accentColors.length];
              return (
                <div
                  key={tech.name + '-dup-' + idx}
                  className="flex flex-col items-center min-w-[100px]"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#313244]/20 backdrop-blur-sm border border-[#a6e3a1]/10 mb-2 transition-all duration-300 hover:bg-[#313244]/30 hover:border-[#a6e3a1]/20">
                    <tech.icon className="w-8 h-8" style={{ color }} />
                  </div>
                  <span className="text-sm font-mono" style={{ color }}>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
