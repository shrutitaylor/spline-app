import Spline from '@splinetool/react-spline';
import { use } from 'react';
import { useColor } from '../contexts/colorContext';

export default function LetsConnectScene() {
  const {color} = useColor();
  
  return (
    <div className= ' flex flex-col h-full justify-center'>
    <Spline scene="https://prod.spline.design/KvGzNWTgGbRCC3JH/scene.splinecode" className="w-full h-full" />
    </div>
  );
}
