"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "CyberSapient Technologies",
    location: "Remote",
    period: "Feb 2023 - Present",
    description: [
      "Led EHR platform development for 10,000+ providers, boosting productivity by 30% with automated workflows.",
      "Built a serverless data pipeline with S3 and Lambda to process and clean CSV data.",
      "Integrated DrChrono Webhook and AWS SES for data sync and email notifications.",
      "Built real-time analytics dashboard using Next.js and Shadcn/UI.",
      "Optimized PostgreSQL query performance by 70% through strategic indexing and partitioning.",
      "Implemented CI/CD with GitHub Actions and Docker, cutting deployment time to 10 minutes.",
      "Conducted regular code reviews to ensure high code quality, maintainability, and adherence to best practices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Ethernex IT Solution",
    location: "Remote",
    period: "Jun 2021 - Dec 2023",
    description: [
      "Collaborated with UX designers to implement responsive web designs, increasing mobile user engagement by 45%.",
      "Developed a real-time chat feature using WebSockets and Redis, supporting over 10,000 concurrent users.",
      "Integrated third-party APIs (Stripe, Twilio) to add payment processing and SMS notification features to the platform.",
      "Implemented automated testing using Jest and Cypress, increasing code coverage from 65% to 90% and reducing bug reports by 35%.",
    ],
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-mono font-bold text-[#89b4fa] mb-12 text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#89b4fa]/20 to-transparent" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#313244] border-2 border-[#89b4fa]/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Briefcase className="w-5 h-5 text-[#89b4fa]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <motion.div
                    className="bg-[#313244]/50 rounded-xl p-6 border border-[#89b4fa]/10 hover:border-[#89b4fa]/20 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-mono font-semibold text-[#89b4fa]">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#cdd6f4]">
                        <MapPin className="w-4 h-4 text-[#89b4fa]/70" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#cdd6f4]">
                        <Calendar className="w-4 h-4 text-[#89b4fa]/70" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="text-[#cba6f7] text-lg font-mono mb-4">
                      {exp.company}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-[#cdd6f4] text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                          <span className="text-[#89b4fa]/70 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
