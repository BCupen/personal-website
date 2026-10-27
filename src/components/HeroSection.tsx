import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedContainer } from "./AnimatedContainer";
import { Text } from "./Text";

export function HeroSection() {
  return (
    <main className="relative z-0 w-full min-h-screen flex flex-col items-start">
      <AnimatedBackground />
      <AnimatedContainer
        bgColor="transparent"
        className="w-[890px] h-[580px] mx-auto justify-center"
      >
        <Text as="h2" variant="heading" size="2xl">
          Allow me to introduce myself.
        </Text>
        <span className="flex gap-2 items-center">
          <Text as="h2" variant="heading" size="2xl">
            I'm
          </Text>
          <Text as="h1" variant="heading" size="5xl" color="primary">
            Brittney Cupen
          </Text>
        </span>
        <Text
          as="h1"
          variant="heading"
          size="5xl"
          color="primary"
          className="mt-2"
        >
          Full Stack Software Developer
        </Text>
      </AnimatedContainer>
    </main>
  );
}
