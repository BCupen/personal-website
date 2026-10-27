import { AnimatedContainer } from "./AnimatedContainer";
import { Text } from "./Text";

export interface ExperienceCardProps {
  period: string;
  jobTitle: string;
  company: string;
  description: string[];
  tags?: string[];
}

export function ExperienceCard({
  period,
  jobTitle,
  company,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <AnimatedContainer
      animation="slideRight"
      duration={2}
      bgColor="secondary"
      className="w-full bg-secondary/25"
    >
      <div>
        <Text as="p" variant="body" size="md" color="foreground">
          {period}
        </Text>
        <Text as="h3" variant="heading" size="lg" color="primary">
          {jobTitle} at {company}
        </Text>
        <Text as="p" variant="body" size="md" color="foreground">
          {description.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Text>
      </div>
    </AnimatedContainer>
  );
}
