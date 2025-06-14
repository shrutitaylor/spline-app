// src/components/ColorSections.jsx
import { useInView } from 'react-intersection-observer';
import { useColor } from '../contexts/colorContext';

const Section = ({ colorClass, children }) => {
  const { setBgColor } = useColor();
  const [ref, inView] = useInView({ threshold: 0.5 });

  if (inView) {
    setBgColor(colorClass);
  }

  return (
    <div
      ref={ref}
      className="relative h-screen flex items-center justify-center text-white"
    >
      {children}
    </div>
  );
};

export default Section;

