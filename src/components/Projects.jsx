import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './card';
import boseImage from '../assets/images/projects/bose.png';
import MoodifyImage from '../assets/images/projects/moodify-website.png';
import iolabsImage from '../assets/images/projects/iolabs.png';
import portfolioImage from '../assets/images/projects/portfolio.png';
import leftArrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import Carousel from '../fragments/carousel';
import { useColor } from '../contexts/colorContext';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Headphones Product Page',
      description:
        'Crafted an immersive 3D product experience for Bose wireless headphones. Users can scroll through dynamic camera transitions, exploring the product from multiple angles in an interactive and engaging format.',
      techStack: 'React, JavaScript, GSAP, 3D Model',
      img: boseImage,
      colorClass: 'bg-lime-300',
      link: 'https://shrutitaylor.github.io/earphones-v1/',
    },
    {
      id: 2,
      title: 'IOLABS Business Website',
      description:
        'Designed and launched a business website for a Melbourne-based tech repair shop. The site includes service highlights, customer testimonials, responsive layout, and animated transitions for a polished, user-friendly experience.',
      techStack: 'React Vite, Tailwind CSS, Framer Motion',
      img: iolabsImage,
      colorClass: 'bg-purple-200',
      link: 'https://iolabs.au/',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my work, design thinking, and skills. Built with smooth animations, responsive layout, and a clean aesthetic to reflect both creativity and professionalism.',
      techStack: 'React, Framer Motion, Tailwind CSS',
      img: portfolioImage,
      colorClass: 'bg-blue',
      link: 'https://shrutitaylor.github.io/ProtfolioWebsiteShruti/',
    },
    {
      id: 4,
      title: 'Moodify – Fun Project',
      description:
        'A music streaming app made for fun, that curates playlists based on user moods. Built with UI animations and expressive design, Moodify offers an emotional and visually engaging listening experience.',
      techStack: 'React, CSS Animations',
      img: MoodifyImage,
      colorClass: 'bg-yellow',
      link: 'https://shrutitaylor.github.io/Moodify-v1.0/',
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const delay = 5000;

  const handleChange = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + projects.length) % projects.length);
  };
  
  const handlePrev = () => handleChange(index - 1, -1);
  const handleNext = () => handleChange(index + 1, 1);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative  w-screen snap-start h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <Carousel colorClass={projects[index].colorClass} key={index}
            
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`absolute  z-50 w-full h-full flex items-center justify-center `}
          >
            <Card project={projects[index]} />
          </Carousel>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute w-24 bottom-10 sm:bottom-auto sm:w-[620px] sm:ml-20 z-50 flex justify-between items-center ">
        <button onClick={handlePrev}>
          <img src={leftArrow} alt="Previous" className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-200" />
        </button>
        <button onClick={handleNext}>
          <img src={rightArrow} alt="Next" className="w-8 h-8 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}