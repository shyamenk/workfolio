"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="h-5 w-5" />,
    href: "https://github.com/shyamenk",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/shyamenk",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="h-5 w-5" />,
    href: "https://x.com/shyamenk07",
  },
  {
    name: "Email",
    icon: <AiFillMail className="h-5 w-5" />,
    href: "mailto:shyamenk@gmail.com",
  },
];

export default function About() {
  return (
    <div className="mx-auto mt-40 px-4 bg-transparent">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="mb-16 text-4xl font-mono font-bold tracking-tight text-[#a6e3a1]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-[300px_1fr]">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative mx-auto w-64 h-64 overflow-hidden rounded-full ring-4 ring-[#cba6f7]/20"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/avatar.png"
                alt="Shyam Kumar"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-mono font-semibold text-[#cdd6f4]">
                Shyam Kumar
              </h2>
              <p className="text-[#a6e3a1] font-mono font-medium">
                Backend-Heavy Full-Stack Developer
              </p>
              <p className="text-sm text-[#bac2de] font-mono">
                Open to Full-Time Roles • Remote / India
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.1 }}>
                  <Link href={link.href} target="_blank">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-11 w-11 rounded-full border border-[#cba6f7]/20 bg-[#45475a]/50 text-[#cdd6f4] hover:bg-[#cba6f7]/10 hover:text-[#cba6f7]"
                    >
                      {link.icon}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-mono font-medium text-[#a6e3a1]">
                  Who I Am
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I’m a full-stack developer with a strong backend focus, working
                  primarily with Node.js, Python, PostgreSQL, and AWS to build
                  scalable, production-grade web applications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-mono font-medium text-[#cba6f7]">
                  What I Work On
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Over the last 4+ years, I’ve worked on healthcare and logistics
                  platforms where reliability, performance, and security are
                  critical. I build APIs, design backend architectures, optimize
                  databases, and ship features end-to-end.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-mono font-medium text-[#f5c2e7]">
                  How I Think as an Engineer
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I care deeply about trade-offs. I don’t just ask whether
                  something can be built — I think about maintainability, cost,
                  scalability, and how systems behave in production.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-mono font-medium text-[#a6e3a1]">
                  What I’m Looking For
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I’m currently looking for full-stack or backend-heavy roles
                  where I can take ownership of systems, work on meaningful
                  products, and continue growing as an engineer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
