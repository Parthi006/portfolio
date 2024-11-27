import React, { useEffect, useState, useMemo } from "react";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[150px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div options={{
            max : 45,
            scale : 1,
            speed : 450
          }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  let arr = ["MUI", "Ant Design", "Ag Grid", "git", "github", "Tailwind CSS"];
  const tech = useMemo(
    () =>
      isMobile
        ? technologies.filter((item) => !arr.includes(item.name))
        : technologies,
    [isMobile]
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {tech &&
        tech.map((technology, index) => (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: index * 1.5,
            }}
            className="w-28 h-27"
            key={technology.name}
          >
            {/* <BallCanvas icon={technology.icon} />   */}
            <ServiceCard
              key={technology.title}
              icon={technology.icon}
              index={index}
              title={technology.name}
            />
            {/* <img src={technology.icon} /> */}
          </motion.div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
