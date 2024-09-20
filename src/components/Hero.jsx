import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import  ErrorBoundary  from "./ErrorBoundry";
import {
  ComputersCanvas,
  GamingPcCanvas,
  SpaceManCanvas,
  SpaceShuttleCanvas,
  CampCanvas,
} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <motion.div 
          initial={{ x : '100vw'}}
          animate={{
            x : 0,
          }}
          transition={{
            delay : 3,
            duration: 1,
            type : "spring",
            stiffness : 150
          }}
           className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>
        <motion.div 
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 2,
            when : "beforeChildren",
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-cyan-500">Parthiban</span>
          </h1>
          <motion.p 
            animate={{
              scale : [1,1,5, 1],
              rotate: [0, 0, -180, -180, 0],
              zIndex : -1 
            }}
            transition={{
              delay : 2,
              duration : 1,
              ease: "easeInOut",
            }}
           className={`${styles.heroSubText} mt-2 tex-white-100`}>
            I develop user interfaces and web applications
          </motion.p>
        </motion.div>
      </div>
      <ErrorBoundary>
        <SpaceManCanvas />
      </ErrorBoundary>
    </section>
  );
};

export default Hero;
