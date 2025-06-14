import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SplineScene from "./components/splineScene";
import SplashCursor from "./fragments/splashCursor";
import Parallax from "./fragments/parallaxEffect";
import { useColor } from "./contexts/colorContext";
import Intro from "./ui/Intro";
import About from "./ui/About";
import Contact from "./ui/Contact";
import Projects from "./components/projects";
// import Projects from "./components/Projects";

function App() {
  
    // const { bgColor } = useColor();

  return (
    <>
      <div className={`relative w-screen snap-y snap-mandatory font-vcrOsdMono uppercase h-screen max-h-[1024px] scroll-smooth  transition-colors duration-700`}>
     
        {/* Background Layer (e.g., Spline) */}
        
          <SplineScene />
          <Parallax></Parallax>
          <Parallax><Intro/></Parallax>
          <Parallax><About/></Parallax>
          <Projects/>
          <Parallax><Contact/></Parallax>
        
        {/* Foreground Layer */}
       
      </div>
    </>
  );
}

export default App;
