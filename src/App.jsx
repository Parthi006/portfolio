import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Resume,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import { CampCanvas } from "./components/canvas";

const App = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine the scroll direction and trigger animation
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      controls.start({ backgroundPosition: "top left" });
    } else {
      // Scrolling up
      controls.start({ backgroundPosition: "top right" });
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-fixed bg-parallax bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Resume />
        <Tech />
        <div className="relative w-full h-screen mx-auto">
          <Contact />
          <div className="absolute inset-0 z-[-1]">
            <CampCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
