import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, GamingPcCanvas, SpaceManCanvas, SpaceShuttleCanvas, CampCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-cyan-500'>Parthiban</span></h1>
          <p className={`${styles.heroSubText} mt-2 tex-white-100`}>I develop user interfaces and web applications</p>
        </div>
      </div>
      {/* <GamingPcCanvas /> */}
      <SpaceManCanvas />
      {/* <SpaceShuttleCanvas /> */}
      {/* <CampCanvas /> */}
      <div className='absolute xs:bottom-[-15px] bottom-4 w-full flex justify-center items-center'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 relative'>
          <a href='#about' className='absolute inset-0 z-10'></a>
          <motion.div 
            animate={{ y: [0, 26, 0] }} 
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-6"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;
