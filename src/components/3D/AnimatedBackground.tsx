import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Scene3D } from './Scene3D';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'hero' | 'analytics' | 'background';
}

export const AnimatedBackground = ({ children, variant = 'background' }: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      // Floating animation for the entire 3D scene
      gsap.to(backgroundRef.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    if (containerRef.current) {
      // Fade in animation
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* 3D Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Scene3D variant={variant} interactive={false} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};