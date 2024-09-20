import React, { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { leftArrow } from "../assets";
import { pikachuhead, pokeball, monster, panda, luffy } from "../assets";
const items = [
  {
    link: pikachuhead,
    name: "pikachu",
  },
  {
    link: pokeball,
    name: "pokeball",
  },
  {
    link: monster,
    name: "monster",
  },
  {
    link: panda,
    name: "panda",
  },
  {
    link: luffy,
    name: "luffy",
  },
];

const RightSideDrawer = ({ preloader, setCursor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollPosition = scrollY.get();

  return (
    <>
      {!preloader && (
        <div>
          <motion.div
            className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-none p-2 text-white rounded-l-lg cursor-pointer z-10"
            initial={{ x: 0 }}
            animate={{ x: isOpen ? -160 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.img
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              src={leftArrow}
              alt="Left Arrow"
              className="w-8 h-12 my-4"
            />
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed top-1/4 right-0 w-40 h-[600px] shadow-lg z-20 p-[2px] bg-gradient-to-r from-[#a03173] from-10%  to-[#d8c195] to-90% rounded-[20px]"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                <div className="flex flex-col items-center overflow-y-auto h-full space-y-6 pt-12 bg-tertiary rounded-[20px]">
                  {items.map((item, index) => {
                    return (
                      <motion.img
                        key={index}
                        src={item.link}
                        alt={item.name}
                        onClick={() => setCursor(item.link)}
                        className="w-24 h-24 bg-none flex justify-center items-center font-bold text-lg rounded-lg"
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default RightSideDrawer;
