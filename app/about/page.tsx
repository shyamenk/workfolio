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
    href: "mailto:shyamenk@email.com",
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
          About the Author
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-[300px_1fr]">
          {/* Left Column - Profile */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="relative mx-auto w-64 h-64 overflow-hidden rounded-full ring-4 ring-[#cba6f7]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/avatar.png"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="text-center space-y-2">
              <h2 className="text-2xl font-mono font-semibold text-[#cdd6f4]">
                Shyam Kumar
              </h2>
              <p className="text-[#a6e3a1] font-mono font-medium">
                Full-Stack Developer
              </p>
              <p className="text-sm text-[#bac2de] font-mono">
                Cyber Sapient Technologies
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-11 w-11 rounded-full border border-[#cba6f7]/20 bg-[#45475a]/50 text-[#cdd6f4] hover:bg-[#cba6f7]/10 hover:text-[#cba6f7] hover:border-[#cba6f7]/40"
                    >
                      {link.icon}
                      <span className="sr-only">{link.name}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-8">
              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#a6e3a1]">
                  Full-Stack Engineer| JavaScript Enthusiast
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Hi there! I&apos;m a passionate Full-Stack Developer with a
                  keen interest in creating seamless and dynamic web
                  applications. My toolkit includes JavaScript, TypeScript,
                  Next.js, React, and Tailwind CSS. I thrive on bringing
                  innovative ideas to life through code and continuously pushing
                  the boundaries of web development.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#cba6f7]">
                  Continuous Learner | AWS & Linux Explorer
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Beyond coding&apos; I&apos;m deeply invested in expanding my
                  knowledge in AWS and Linux. Whether it&apos;s deploying
                  scalable applications or mastering the intricacies of server
                  management, I&apos;m always eager to learn and grow.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#f5c2e7]">
                  What Drives Me?
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Building intuitive and responsive user interfaces, solving
                  complex problems with elegant solutions, staying ahead of the
                  curve with the latest tech trends, and collaborating with
                  like-minded professionals to create amazing products.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#a6e3a1]">
                  Let&apos;s Connect!
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I&apos;m always excited to connect with fellow developers,
                  share knowledge, and collaborate on exciting projects. Feel
                  free to reach out!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
