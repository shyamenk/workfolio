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
          About
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
                Full-Stack Developer & Tech Consultant
              </p>
              <p className="text-sm text-[#bac2de] font-mono">
                Available for Freelance Projects
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
                  Full-Stack Development Services | JavaScript Specialist
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I deliver end-to-end web solutions for businesses and startups, specializing in modern JavaScript frameworks like React, Next.js, and TypeScript. With expertise in both frontend and backend development, I help clients build scalable, performant applications that drive real business results. My approach combines technical excellence with a deep understanding of user experience and business requirements.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#cba6f7]">
                  Cloud Solutions & DevOps Expertise
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Beyond development, I provide comprehensive cloud infrastructure and DevOps services. From AWS deployment strategies to Linux server management, I ensure your applications are not just built right, but deployed and maintained for optimal performance and reliability. I handle everything from initial setup to ongoing maintenance and optimization.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#f5c2e7]">
                  Why Choose Me?
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  I bring a unique blend of technical expertise and business acumen to every project. My commitment to quality, attention to detail, and ability to communicate complex technical concepts clearly sets me apart. I work closely with clients to understand their vision, provide strategic technical guidance, and deliver solutions that exceed expectations while staying within budget and timeline constraints.
                </p>
              </motion.div>

              <motion.div
                className="space-y-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="flex items-center text-lg font-mono font-medium text-[#a6e3a1]">
                  Ready to Start Your Project?
                </h3>
                <p className="text-[#cdd6f4] font-mono leading-relaxed">
                  Whether you need a complete web application, technical consultation, or ongoing development support, I&apos;m here to help bring your ideas to life. Let&apos;s discuss your project requirements and explore how we can work together to achieve your goals. I&apos;m currently accepting new clients and excited to contribute to your success.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
