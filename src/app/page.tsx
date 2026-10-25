import { AnimatedContainer, Navbar } from "@/components";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background px-10 py-8 gap-6">
      <Navbar />

      <AnimatedContainer bgColor="transparent">
        <h2>Allow me to introduce myself.</h2>
        <span>
          <p>I'm</p>
          <h1>Brittney Cupen</h1>
        </span>
        <h1>Full Stack Software Engineer</h1>
      </AnimatedContainer>

      <AboutSection />

      <Footer />
    </div>
  );
}
