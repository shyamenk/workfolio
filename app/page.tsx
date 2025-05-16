import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import ExperienceTimeline from "@/components/timeline";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceTimeline />
      <TechStack />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}
