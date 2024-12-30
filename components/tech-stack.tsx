"use client";

import { motion } from "framer-motion";
import PostgresIcon from "./icons/postgres";
import Docker from "./icons/Docker";
import {
  DockIcon,
  Server,
  GitGraphIcon as Git,
  Database,
  Code,
} from "lucide-react";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import { FaReact } from "react-icons/fa";
const technologies = [
  { name: "React", icon: <FaReact className="w-24 h-24" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-24 h-24" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-14 h-14 text-blue-500" />,
  },
  { name: "Node.js", icon: <Server className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <Code className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <PostgresIcon className="w-8 h-8" /> },
  { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
  { name: "Docker", icon: <Docker className="w-8 h-8" /> },
  { name: "AWS", icon: <DockIcon className="w-8 h-8" /> },
  { name: "Git", icon: <Git className="w-8 h-8" /> },
];

export default function TechStack() {
  return (
    <div className="relative w-full py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="mt-3 text-lg text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 blur transition duration-300 group-hover:opacity-100" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-zinc-700">
                  <div className="text-zinc-400 transition-colors duration-300 group-hover:text-emerald-400">
                    {tech.icon}
                  </div>
                </div>
              </div>
              <span className="mt-3 text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-emerald-400">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
