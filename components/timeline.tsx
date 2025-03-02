"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

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
          className="text-4xl font-bold text-emerald-400 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-zinc-900 rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/10"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <h3 className="text-2xl font-semibold text-emerald-400 flex items-center gap-2">
                      {exp.title}
                      <ChevronRight className="w-5 h-5 hidden group-hover:inline-block text-emerald-500/50 transition-transform duration-300 group-hover:translate-x-1" />
                    </h3>
                    <div className="text-zinc-400 text-lg">{exp.company}</div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-500/70" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-500/70" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3 text-zinc-300 leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + i * 0.1,
                        }}
                      >
                        <span className="text-emerald-500/70 mt-1.5">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
