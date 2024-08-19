import React from "react";
import Parthiban_resume from "../assets/Parthiban_resume.pdf";
import { RxDownload } from "react-icons/rx";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Resume = () => {
  return (
    <div className="flex justify-center cursor-pointer">
      <motion.section variants={staggerContainer()} initial='hidden'
                whileInView='show'
                viewport={{ once : true, amount : 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
      >
      <button className="flex-row green-pink-gradient p-[1px] rounded-[20px] text-white font-bold shadow-md  cursor-pointer">
        <a
          className="bg-tertiary cursor-pointer rounded-[20px] py-5 px-12 min-h-[40px] flex justify-center items-center flex-row gap-2"
          href={Parthiban_resume}
          download="Parthiban_resume.pdf"
        >
          Download Resume <RxDownload />
        </a>
        
      </button>
      </motion.div>
      </motion.section>
    </div>
  );
};

export default Resume;
