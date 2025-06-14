"use client"

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Intro from "../ui/Intro";
import { useColor } from "../contexts/colorContext";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Carousel({ children, colorClass = 'bg-black' }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ target: ref });
  const x = useParallax(scrollXProgress, 0);

  const { setBgColor } = useColor();
  useEffect(() => {
    setBgColor(colorClass);
  }, );

  return (
    <motion.div
       
      className={`h-screen w-screen snap-start mx-auto w-screen flex justify-center items-center relative ${colorClass}`}
    >
      <p className="text-[100px] md:text-[200px] lg:text-[200px] absolute overflow-hidden z-0 text-black/20 "> PROJECTS</p>
      <motion.div
        ref={ref}
        
        
        style={{ x }}
        className=" z-30 "
      >
       {children}
      </motion.div>
    </motion.div>
  );
}

