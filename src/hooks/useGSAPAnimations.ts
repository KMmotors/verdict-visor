import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimationConfig {
  trigger?: string;
  from?: Record<string, any>;
  to?: Record<string, any>;
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
}

export const useGSAPAnimations = () => {
  const timelineRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    timelineRef.current = gsap.timeline();
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const animateElement = (
    element: HTMLElement | string,
    config: AnimationConfig
  ) => {
    if (!element) return;

    const {
      from,
      to,
      duration = 1,
      delay = 0,
      ease = "power2.out",
      repeat = 0,
      yoyo = false,
    } = config;

    if (from && to) {
      return gsap.fromTo(element, from, {
        ...to,
        duration,
        delay,
        ease,
        repeat,
        yoyo,
      });
    } else if (to) {
      return gsap.to(element, {
        ...to,
        duration,
        delay,
        ease,
        repeat,
        yoyo,
      });
    }
  };

  const createScrollAnimation = (
    element: HTMLElement | string,
    config: AnimationConfig
  ) => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateElement(entry.target as HTMLElement, config);
            }
          });
        },
        { threshold: 0.1 }
      );

      const targetElement = typeof element === 'string' 
        ? document.querySelector(element) 
        : element;
      
      if (targetElement) {
        observer.observe(targetElement);
      }

      return () => observer.disconnect();
    }
  };

  const staggerAnimation = (
    elements: HTMLElement[] | string,
    config: AnimationConfig,
    staggerDelay = 0.1
  ) => {
    const targets = typeof elements === 'string' 
      ? document.querySelectorAll(elements) 
      : elements;
    
    if (targets.length === 0) return;

    return gsap.fromTo(targets, 
      config.from || { opacity: 0, y: 50 },
      {
        ...(config.to || { opacity: 1, y: 0 }),
        duration: config.duration || 0.8,
        ease: config.ease || "power2.out",
        stagger: staggerDelay,
      }
    );
  };

  return {
    animateElement,
    createScrollAnimation,
    staggerAnimation,
    timeline: timelineRef.current,
  };
};