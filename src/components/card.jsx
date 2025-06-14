import arrowIcon from '../assets/icons/arrowheads.png';
import { motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Card({project}) {
    const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className={`flex max-w-lg flex-col sm:flex-row flex-start  gap-4 relative z-50 text-black font-vcrOsdMono w-full `}>
     
      <div className="h-14 w-12 p-2 border-2 border-black shadow-xl/30 shadow-hard text-2xl">
      <motion.span
      initial={{ y: -10 , opacity:0}} // Start off-screen
      animate={{ y: 0, opacity:[0,1] }}    // Move on-screen
      transition={{ duration: 1, ease: "easeIn", type: "spring", delay:0.2}}>
        0
     </motion.span>
     <motion.span
      initial={{ y: -20 , opacity:0}} // Start off-screen
      animate={{ y: 0, opacity:[0,1] }}    // Move on-screen
      transition={{ duration: 1, ease: "easeIn", type: "spring",loop: Infinity, }}>
        {project.id}
     </motion.span>
      </div>  

      <div className={`flex p-4 pb-6 border-2 border-black shadow-xl/30 shadow-hard text-lg flex-col ${project.colorClass}`}>
        {project.title }
        <div className="h-52 w-86 border-2 border-black my-2"> <img src={project.img} alt={project.title} className="h-full w-full object-cover" /></div>
         <p className='font-monospace normal-case text-xs sm:text-sm'>{project.description}</p>
         <div className='flex flex-col sm:flex-row justify-start sm:items-center sm:justify-between'>
      
      
        <motion.div 
        whileHover={{boxShadow: "0px 0px  #000000", scale: 1.05}}
        initial={{ boxShadow: " 8px 8px #000000" }}
        href={project.link} target="_blank" rel="noopener noreferrer"
        className={`flex-row w-52 flex mt-2 gap-2 p-2 border-2 border-black shadow-xl/30 text-sm sm:text-lg bg-white hover:${project.colorClass}`}>
       <a href={project.link} target="_blank" rel="noopener noreferrer"  className={`flex-row w-full h-full flex `}>
       
        <p className=''>EXPLORE</p>
        <motion.div className='' 
        whileHover={{ x: [0,10], }}
            initial={{ x: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut",
            }}> <img src={arrowIcon} className='h-6 w-8 mt-0.5'></img></motion.div> 
            </a>
        </motion.div>
      
        <p className='text-sm sm:px-4 pt-4'><span className='bg-black text-white p-1'>MADE WITH :</span> {project.techStack}</p>
      </div>
      </div>

    </div>
  );
}