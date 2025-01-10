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
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "Jan 2020 - Present",
    description: [
      "Led a team of 5 developers in building a cloud-based project management tool, resulting in a 30% increase in team productivity for our clients.",
      "Implemented a microservices architecture using Node.js and Docker, improving system scalability and reducing deployment time by 40%.",
      "Developed and maintained RESTful APIs using Express.js, handling over 1 million requests per day with 99.9% uptime.",
      "Optimized front-end performance using React and Next.js, achieving a 25% reduction in page load times and improving user engagement metrics.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "New York, NY",
    period: "Jun 2017 - Dec 2019",
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
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-emerald-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent" />
              )}

              <div className="flex gap-6">
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-zinc-900 rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                      {exp.title}
                      <ChevronRight className="w-4 h-4 hidden group-hover:inline-block text-emerald-500/50" />
                    </h3>
                    <div className="text-zinc-400 text-sm">{exp.company}</div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-emerald-500/70" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-emerald-500/70" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-2 text-zinc-300 leading-relaxed"
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
