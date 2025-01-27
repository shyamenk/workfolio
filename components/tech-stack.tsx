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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function TechStack() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-zinc-900/0 to-zinc-900/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl text-left mx-auto"
        >
          <h2 className="text-5xl font-bold tracking-tight text-emerald-500">
            Tech Stack
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Cutting-edge technologies I leverage to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group relative flex flex-col items-center"
            >
              {/* Icon Card */}
              <div className="relative mb-6 flex h-24 w-full items-center justify-center rounded-2xl bg-zinc-800/50 backdrop-blur-sm ring-1 ring-zinc-700 transition-all duration-300 hover:ring-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <tech.icon
                  className={`w-12 h-12 ${tech.color} transition-all duration-300 group-hover:scale-110 `}
                />
                {/* Hover Effect Line */}
                <div className="absolute -bottom-2 h-px w-24 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Tech Name */}
              <motion.span
                className="text-lg font-medium text-zinc-400 transition-colors duration-300 group-hover:text-emerald-400"
                whileHover={{ y: -2 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
