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
  AnimatedCursor,
  RightSideScroll,
} from "./components";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CampCanvas } from "./components/canvas";

const App = () => {

  const [preloader, setPreloader] = useState(true);
  const [cursor, setCursor] = useState('');

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
      document.body.style.overflow = "auto";
    };
  }, [preloader]);

  return (
    <BrowserRouter>
      <AnimatedCursor
      cursor={cursor}
        innerSize={20}
        outerSize={20}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <RightSideScroll preloader={preloader} setCursor={setCursor} />
      {preloader ? (
        <Preloader preloader={preloader} />
      ) : (
        <div className="relative z-0 bg-primary">
          <motion.div
            className="bg-parallax bg-cover bg-center bg-no-repeat h-auto 
             md:bg-fixed md:bg-cover"
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
