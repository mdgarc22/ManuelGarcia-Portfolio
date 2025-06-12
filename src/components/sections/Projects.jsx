import { ExternalLink } from "lucide-react"
import { RevealOnScroll } from "../RevealOnScroll"
import { useState } from "react"

var baseUrl = import.meta.env.BASE_URL;


const ProjectCard = ({ defaultImg, hoverImg, title, description, link, dependencies }) => {
  const [imgSrc, setImgSrc] = useState(defaultImg);

  return (
    <div
      className="card w-full p-6 border border-black/10 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col"
      onMouseEnter={() => setImgSrc(hoverImg)}
      onMouseLeave={() => setImgSrc(defaultImg)}
    >
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        {link ? (
          <a href={link} target="_blank">
            <img className="w-full h-full object-cover transition-all duration-300" src={baseUrl + imgSrc} alt={title} />
          </a>
        ) : (
          <img src={baseUrl + imgSrc} alt={title} />
        )}
      </div>

      {/* Project Details */}
      <div className="flex-1 p-4">
        <h3 className="text-left text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-left">{description}</p>

        {/* Dependencies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {dependencies.map((tech, key) => (
            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              {tech}
            </span>
          ))}
        </div>

        {/* Conditional External Link */}
        {link && (
          <a href={link} target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-transparent overflow-hidden">
        <RevealOnScroll>
            <div className="w-full max-w-5xl block">
                <h2 className="tracking-in-expand text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white bg-clip-text text-transparent text-center">
                    FEATURED PROJECTS
                </h2>

                <div className="div-bg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full overflow-hidden py-2">
                        <ProjectCard
                            defaultImg= "/images/AndyTaEstates.png"
                            hoverImg= "/images/AndyTaEstates.gif"
                            title="Real Estate Website"
                            description="A fully customized real estate website with dynamic features."
                            //link="https://andytaestates.com/"
                            dependencies={["Bootstrap", "MySQL", "PHP"]}
                        />
                        <ProjectCard
                            defaultImg="/images/PulseLogo.png"
                            hoverImg="/images/PulseLogo.png"
                            title="PulsePoint"
                            description="A tool to strengthen communication between management and employees."
                            link=""
                            dependencies={["C#", "JavaScript", "MySQL"]}
                        />
                        <ProjectCard
                            defaultImg="/images/djangoCRM.png"
                            hoverImg="/images/djangoCRM.gif"
                            title="Django CRM"
                            description="A personal project of a customer relationship management web application with CRUD functionality."
                            link=""
                            dependencies={["Django", "Python", "MySQL"]}
                        />
                        <ProjectCard
                            defaultImg="/images/florpy.png"
                            hoverImg="/images/florpy.gif"
                            title="Unity Game"
                            description="A flappy bird-like game prototype that has collision mechanics, dynamic objects spawning, and a logic manager that tracks and updates the player's score dynamically."
                            link=""
                            dependencies={["C#", "Unity"]}
                        />        
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};
