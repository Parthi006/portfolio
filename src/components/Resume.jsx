import React from "react";
import Parthiban_resume from "../assets/Parthiban_resume.pdf";
import { RxDownload } from "react-icons/rx";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Resume = () => {
  const resume = ["D","o","w","n","l","o","a","d"," ","R","e","s","u","m","e"];

  return (
    <div className="flex justify-center cursor-pointer">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        whileHover="none"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ borderRadius: "20px" }}
          whileHover={{
            scale: [1.2, 1.1, 1.2],
            transition: { duration: 0.8, repeat: Infinity },
            boxShadow: "0px 0px 12px rgba(250, 250, 250, 0.4)",
            borderRadius: "20px",
          }}
        >
          <button className="green-pink-gradient p-[1px] rounded-[20px] text-white font-bold shadow-md cursor-pointer">
            <motion.a
              className="bg-tertiary cursor-pointer rounded-[20px] py-5 px-12 min-h-[40px] flex justify-center items-center flex-row gap-0" // Set gap to 0
              href={Parthiban_resume}
              download="Parthiban_resume.pdf"
            >
              {resume.map((char, index) => (
                <motion.span
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: char === " " ? "7px" : "1px",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    transform: [
                      "translateX(5px)",
                      "translateX(10px)",
                      "translateX(5px)",
                    ],
                    color: [
                      "#CE84CF",
                      "#1E67C6",
                      "#ff6347",
                      "#DD335C",
                      "#fff",
                      "#13FFAA",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <RxDownload className="ml-4" />
            </motion.a>
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Resume;
