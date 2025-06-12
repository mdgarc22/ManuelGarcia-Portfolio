import { useState } from "react";
import"./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  //initialize isLoaded var and set to false by default
  const [isLoaded, setIsLoaded] = useState(false)
  //page loaded
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    //check if isLoaded is false, if so render loading screen.
    //when the effect in loadingscreen.jsx completes it calls this onComplete function
    //when typewriting effect is done onComplete sets state to true and stops showing loading screen and moves on
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects />
          <Contact />
          <footer className="flex space-x-4 w-full text-white text-center py-4 justify-center backdrop-blur-lg">
            <a href="https://linkedin.com/in/manuel-de-garcia" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 hover:text-blue-700 text-3xl transition" />
            </a>
            <a href="https://github.com/mdgarc22" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-500 hover:text-gray-700 text-3xl transition" />
            </a>
          </footer>
        </div>
    </>

  );
}

export default App
