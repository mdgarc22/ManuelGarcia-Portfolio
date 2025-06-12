//export: defines that the var Home is being exported from the current module
//const: var home is a constant, value cannot be reassigned after inital declaration
//() empty means no arguments are taken
//=> concise way of declaring functions

import { RevealOnScroll } from "../RevealOnScroll";

//{} function body, code to be executed
export const Home = () => {
    return (
        <section
            id ="home"
            className = "min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    {/* bg clip text will hide gradient in container, text transparent will cause letters to be gradient */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent leading-right max-w-full">
                        Manuel Garcia
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 mx-auto">
                        Computer Information Systems Major
                    </p>
                    <div className="flex justify-center space-x-4">
                        {/* will serve as a button for projects */}
                        <a 
                        href="#projects" 
                        className="bg-cyan-950 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        
                        <a 
                        href="#contact" 
                        className="border border-white/50 text-white py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    ) 
};