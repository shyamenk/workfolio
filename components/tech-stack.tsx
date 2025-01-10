"use client";
import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

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
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function TechStack() {
  return (
    <div className="relative w-full py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-emerald-500 mb-6 text-left">
            Tech Stack
          </h2>
          <p className="mt-4 text-xl text-left text-zinc-300">
            Cutting-edge technologies I leverage to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              variants={item}
            >
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-zinc-800 ring-1 ring-zinc-700 group-hover:ring-emerald-500 transition-all duration-300">
                  <tech.icon
                    className={`w-12 h-12 ${tech.color} group-hover:text-emerald-400 transition-colors duration-300`}
                  />
                </div>
              </motion.div>
              <motion.span
                className="mt-4 text-sm font-medium text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
