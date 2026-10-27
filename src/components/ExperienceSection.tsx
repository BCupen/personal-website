import { AnimatedContainer } from "./AnimatedContainer";
import { ExperienceCard } from "./ExperienceCard";
import { Text } from "./Text";

import experienceData from "@/data/experience.json";

export function ExperienceSection() {
  return (
    <section className="w-full flex flex-row-reverse items-center justify-between gap-6">
      <Text
        as="h2"
        variant="heading"
        size="xl"
        color="primary"
        className="w-1/2"
      >
        Here's some context on my experience...
      </Text>
      <div className="w-1/2 p-5 flex flex-col gap-5">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}
