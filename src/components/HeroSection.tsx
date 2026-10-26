import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedContainer } from "./AnimatedContainer";
import { Text } from "./Text";

export function HeroSection() {
  return (
    <main className="relative z-0 w-full h-screen flex flex-col items-start justify-center">
      <AnimatedBackground />
      <AnimatedContainer bgColor="transparent">
        <Text as="h2" variant="heading" size="lg">
          Allow me to introduce myself.
        </Text>
        <span className="flex gap-2">
          <Text as="h2" variant="heading" size="lg">
            I'm
          </Text>
          <Text as="h1" variant="heading" size="2xl" color="primary">
            Brittney Cupen
          </Text>
        </span>
        <Text as="h1" variant="heading" size="2xl" color="primary">
          Full Stack Software Engineer
        </Text>
      </AnimatedContainer>
    </main>
  );
}
