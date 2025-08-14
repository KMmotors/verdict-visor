import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplineModelProps {
  scene: string;
  className?: string;
}

export const SplineModel = ({ scene, className = "" }: SplineModelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <Spline
        scene={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};