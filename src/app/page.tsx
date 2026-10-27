import { AnimatedContainer, Navbar, Text } from "@/components";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background px-10 py-8 gap-6">
      <Navbar />

      <HeroSection />

      <AboutSection />
      <ExperienceSection />

      <ProjectSection />

      <Footer />
    </div>
  );
}
