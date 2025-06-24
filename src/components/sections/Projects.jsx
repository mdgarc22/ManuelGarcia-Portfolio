import { ArrowRight, ExternalLink} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
var baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "AndyTaEstates",
    description: "A fully customized real estate website with dynamic features.",
    image: "/images/AndyTaEstates.png",
    gif: "/images/AndyTaEstates.gif",
    tags: ["Bootstrap", "MySQL", "PHP"],
    demoUrl: "https://andytaestates.com/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Pulsepoint",
    description: "A tool to strengthen communication between management and employees.",
    image: "/images/PulseLogo.png",
    gif: "",
    tags: ["C#", "JavaScript", "MySQL"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Customer Relationship Management",
    description: "A personal project of a customer relationship management (CRM) web application with CRUD functionality.",
    image: "/images/djangoCRM.png",
    gif: "/images/djangoCRM.gif",
    tags: ["Django", "Python", "MySQL"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Florpy Birdy",
    description: "A flappy bird-like game prototype that has collision mechanics, dynamic objects spawning, and a logic manager that tracks and updates the player's score dynamically.",
    image: "/images/florpy.png",
    gif: "/images/florpy.gif",
    tags: ["C#", "Unity"],
    demoUrl: "",
    githubUrl: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-black text-black">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Featured Projects
        </h2>

        <p className="text-center text-white text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects. 
        </p>

        <div className="flex justify-center">
          <div className="grid gap-8 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, key) => {
              const [isHovered, setIsHovered] = useState(false);
              const imageSrc =
                isHovered && project.gif ? `${baseUrl}${project.gif}` : `${baseUrl}${project.image}`;

              return (
                <div
                  key={key}
                  className="group bg-card rounded-lg bg-[var(--color-gray)] overflow-hidden shadow-xs card-hover"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-contain px-5 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, id) => (
                        <span
                          key={id}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <SiGithub size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="button bg-[var(--color-navy)] w-fit flex items-center mx-auto gap-2 bg-navy p-1.5 px-3 rounded-xl text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            target="_blank"
            href="https://github.com/mdgarc22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};