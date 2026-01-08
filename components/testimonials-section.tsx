"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Krishna Prasad",
    role: "Senior Product Manager",
    company: "Cyber Sapient Technologies",
    image: "/images/kp.jpeg",
    quote: "Shyam is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    companyLogo: "/images/cybersapient.jpeg"
  },
  {
    name: "Jasim Al-Mubarck",
    role: "Full Stack Developer",
    company: "Cyber Sapient Technologies",
    image: "/images/jasim.jpeg",
    quote: "Working with Shyam was a pleasure. He not only met our technical requirements but also provided valuable insights that improved our product.",
    companyLogo: "/images/cybersapient.jpeg"
  },
  {
    name: "Nitin O V",
    role: "Team Lead CMS",
    company: "Evolve",
    image: "/images/nithin.jpeg",
    quote: "Shyam's expertise in full-stack development and his ability to quickly adapt to new technologies made him an invaluable team member.",
    companyLogo: "/images/white_rabbit.jpeg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-mono font-bold text-[#cdd6f4] mb-4">
            What People Say
          </h2>
          <p className="text-lg text-[#a6e3a1] font-mono">
            Feedback from clients and colleagues
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border border-[#a6e3a1]/20 bg-[#313244]/50 backdrop-blur-sm"
            >
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-[#a6e3a1]/20" />

              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-[#cdd6f4]">{testimonial.name}</h3>
                  <p className="text-sm text-[#a6e3a1]">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-[#cdd6f4] mb-4">{testimonial.quote}</p>

              <div className="flex items-center justify-between">
                <div className="relative h-8 w-24">
                  <Image
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-[#a6e3a1]">{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
