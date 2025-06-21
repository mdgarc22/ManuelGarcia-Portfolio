import { useState } from "react";
import"./App.css";
// import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Spacer } from "./components/sections/Spacer";
import { Skillset } from "./components/sections/Skillset";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";


function App() {
  //initialize isLoaded var and set to false by default
  // const [isLoaded, setIsLoaded] = useState(false)
  //page loaded
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    //check if isLoaded is false, if so render loading screen.
    //when the effect in loadingscreen.jsx completes it calls this onComplete function
    //when typewriting effect is done onComplete sets state to true and stops showing loading screen and moves on
    <>
      {/* {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "} */}
        {/* <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}></div> */}
        <div className="min-h-screen">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Spacer />
          <Skillset />
          <Spacer />
          <Projects />
          <Contact />
        </div>
    </>

  );
}

export default App
