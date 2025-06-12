import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    //fetch loaded page
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    
    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 items-center">
            <div className="flex justify-end items-center md:justify-center h-16">
                {/* Logo */}
                {/* <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}Manuel Garcia <span className="text-blue-500">Dev</span>{" "}
                </a> */}
                {/* mobile menu */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                {/* desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                        {" "}Home{" "}
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                        {" "}Projects{" "}
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                        {" "}About{" "}
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                        {" "}Contact{" "}
                    </a>
                </div>
            </div>
        </div>
    </nav>
    );
}   