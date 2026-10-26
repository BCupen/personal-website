import { Text } from "@/components/Text";
import projects from "@/data/projects.json";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6">
      <Text as="h2" variant="heading" size="2xl" color="primary">
        Here's some of my work...
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
