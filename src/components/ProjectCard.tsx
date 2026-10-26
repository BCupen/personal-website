export interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  links: {
    live: string;
    github: string;
  };
}

export function ProjectCard({
  name,
  description,
  image,
  links,
}: ProjectCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
      <a href={links.live} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}
