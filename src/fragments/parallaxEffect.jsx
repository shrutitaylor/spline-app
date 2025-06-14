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

export default function Parallax({ children, colorClass = 'bg-black' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const { setBgColor } = useColor();
  useEffect(() => {
    setBgColor(colorClass);
  }, );

  return (
    <section
      className={`h-screen snap-start w-screen flex justify-center items-center relative ${colorClass}`}
    >
      
      <motion.div
        ref={ref}
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="m-0 z-30 "
      >
       {children}
      </motion.div>
    </section>
  );
}

