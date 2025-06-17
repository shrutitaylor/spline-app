import Spline from '@splinetool/react-spline';
import LetsConnectScene from './letsConnectScene';
import { useState } from 'react';
import SocialsScene from './socialsScene';

import { useColor } from '../contexts/colorContext';
import Section from './colorSelectionHOC';

import Parallax from '../fragments/parallaxEffect';
import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Card from './card';

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const handleLoad = () => {
        // Start fade out
        setFadeOut(true);

        // After animation, hide completely
        setTimeout(() => {
        setIsLoading(false);
        }, 2000); // Match the CSS transition duration
    };
    
  return (
    <>
     {/* Loading Overlay with Fade-Out */}
            {isLoading && (
              <div
                className={`absolute h-screen w-screen inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
                  fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="text-white text-xl animate-pulse">
                  Loading 3D Portfolio..
                </div>
              </div>
            )}
      {/* Background Spline */}
      <div className="fixed top-0 z-10 h-full w-full">
        <Spline
          scene="https://prod.spline.design/MKrrmTvoGgbuGmMo/scene.splinecode"
          className="w-full h-full"
          onLoad={handleLoad}
        />
      </div>
      
      </>
      
    
  );
}
