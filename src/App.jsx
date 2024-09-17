import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Resume,
  Hero,
  Preloader,
  Navbar,
  Tech,
  Works,
} from "./components";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CampCanvas } from "./components/canvas";

const App = () => {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["top left", "top right"]
  );
  
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (preloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [preloader]);

  return (
    <BrowserRouter>
      {preloader ? (
        <Preloader preloader={preloader} />
      ) : (
        <div className="relative z-0 bg-primary">
          <motion.div
            className="bg-fixed bg-parallax bg-cover"
            style={{ backgroundPosition }}
          >
            <Navbar />
            <Hero />
          </motion.div>
          <About />
          <Experience />
          <Resume />
          <Tech />
          <div className="relative w-full h-screen xs:h-auto mx-auto">
            <Contact />
            <div className="absolute inset-0 z-[-1]">
              <CampCanvas />
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
