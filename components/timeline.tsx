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
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-zinc-100 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-500/30 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-1 md:w-1/2">
                <div
                  className={`bg-zinc-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-zinc-700 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 mb-2">{exp.company}</p>
                  <div className="flex items-center text-zinc-400 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center text-zinc-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-zinc-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full border-4 border-zinc-900 absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <Briefcase size={16} className="text-zinc-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
