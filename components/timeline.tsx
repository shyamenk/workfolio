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
    period: "Feb 2024 - Present",
    description: [
      "Designed and engineered HIPAA-compliant Electronic Health Records platform serving 1,000+ healthcare providers, processing 40,000+ patient records daily with zero security incidents.",
      "Enhanced PostgreSQL database performance through strategic indexing and partitioning, achieving 40% improvement in query response times.",
      "Developed automated serverless data pipeline for CSV file processing utilizing AWS Lambda, S3, and CloudFormation with Python SDK.",
      "Established CI/CD pipelines using GitHub Actions with AWS Fargate ECS and Docker containerization, reducing build and deployment cycles to 8 minutes.",
      "Integrated DrChrono Webhook and AWS SES for automated data sync and email notifications, reducing manual entry by 75% across 200+ daily notifications.",
      "Built real-time analytics dashboard using Next.js and Shadcn/UI, delivering 30% faster metric access."
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Ethernex IT Solution",
    location: "Remote",
    period: "Jan 2022 - Jan 2024",
    description: [
      "Implemented responsive web designs using CSS Grid and Flexbox for optimal viewing across desktop, tablet, and mobile devices.",
      "Collaborated with UI/UX designers to build responsive dashboard for business metrics tracking and daily operations monitoring.",
      "Built RESTful APIs for e-commerce platform using Node.js with proper error handling, input validation, and rate limiting best practices.",
      "Optimized MongoDB database performance through strategic indexing, query optimization, and data modeling strategies.",
      "Developed CSV data parser to automate data collection and database synchronization processes."
    ],
  },
]

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
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + i * 0.05,
                          }}
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
