import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["Bootstrap", "C#", "React", "TailwindCSS", "Unity"]
    const backendSkills = ["Django", "Javascript", "MySQL", "PHP", "Python"]

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-transparent overflow-hidden">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white bg-clip-text text-transparent text-center">
                    SKILLS
                </h2>
                
                <div className=" div-bg p-8 hover:-translate-y-1 transition-all">
                    {/* <p className="text-gray-300 mb-6 rounded-xl border border-black/10 bg-cyan-950">
                        Whats my education, skills, work experience
                    </p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full overflow-hidden px-20">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">Frontend</h3>
                            <div className="justify-center flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-cyan-400/10 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">Backend</h3>
                            <div className="justify-center flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key} 
                                        className="bg-cyan-400/10 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 rounded-xl gap-6 mt-8">
                        <div className="p-6 rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-gray-200">
                                Education
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>
                                    <strong>B.S. in Computer Informations Systems</strong> - Arizona State University (2023-2025)
                                </li>
                                <ul className="text-gray-200">
                                    Relevant Coursework:
                                    <div className="flex justify-center mt-2 text-left">
                                        <div className="grid grid-cols-2 gap-8">
                                            <ul className="list-disc text-gray-400 space-y-2">
                                                <li>Business Database Systems</li>
                                                <li>Business Information Systems Development</li>
                                                <li>Capstone In Information Systems</li>
                                                <li>Cyber Risk Management</li>
                                            </ul>
                                            <ul className="list-disc text-gray-400 space-y-2">
                                                <li>Enterprise Web Technologies</li>
                                                <li>Global Supply Operations</li>
                                                <li>Marketing And Business Performance</li>
                                                <li>Mobile Platforms For Business</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
)
};
