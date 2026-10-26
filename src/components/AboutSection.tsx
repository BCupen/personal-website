import { AnimatedContainer } from "./AnimatedContainer";
import { Text } from "./Text";

export function AboutSection() {
  return (
    <AnimatedContainer bgColor="transparent">
      <div className="flex items-center justify-between">
        <div className="space-y-4 w-1/2">
          <Text
            as="h2"
            variant="heading"
            size="2xl"
            color="primary"
            className="text-left text-wrap max-w-sm"
          >
            Bringing Caribbean Skill and Talent to the Global Stage
          </Text>
        </div>

        <div className="space-y-4 w-1/2">
          <Text as="p" variant="body">
            Born and raised in the beautiful twin island Republic of Trinidad
            and Tobago, where, I earned my BSc in Mathematics and Computer
            Science. I am currently pursuing my career in Web Development. Here,
            I am able to use my skills in problem solving and logic to implement
            efficient, seamless and functional solutions.
          </Text>
          <Text as="p" variant="body">
            When I’m not behind a screen, I enjoy training and competing in
            Kickboxing and MMA at the amateur level.
          </Text>
        </div>
      </div>
    </AnimatedContainer>
  );
}
