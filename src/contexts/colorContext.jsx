// src/contexts/ColorContext.jsx
import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('bg-black');

  return (
    <ColorContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
