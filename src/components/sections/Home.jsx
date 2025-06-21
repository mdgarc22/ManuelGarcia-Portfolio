import video from '/videos/texture.mp4';
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
            className="min-h-screen flex flex-col justify-center items-center text-white"          
        >
            <div className="">
                <video autoPlay muted loop id="videoBG" className="">
                    <source src={`${video}`} type="video/mp4" />
                </video>
            </div>
      
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    {/* bg clip text will hide gradient in container, text transparent will cause letters to be gradient */}
                    <h1 className="font-zeronero text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text leading-right max-w-full">
                        Manuel Garcia
                    </h1>

                    <p className="text-gray-300 text-lg mb-8 mx-auto">
                        Welcome to my portfolio!
                    </p>
                    <div className="flex justify-center space-x-4">
                        {/* will serve as a button for projects */}
                        <a 
                        href="#projects" 
                        className="bg-[var(--color-navy)] text-white py-3 px-6 border-solid border-2 rounded-full font-medium overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        
                        <a 
                        href="#contact" 
                        className=" border-solid border-2 text-white py-3 px-6 rounded-full font-medium hover:-translate-y-0.5  hover:bg-[var(--color-gold)]">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    ) 
};