import { Button } from "@/components/ui/button";
import { BarChart3, Star } from "lucide-react";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useEffect, useRef } from "react";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { animateElement, staggerAnimation } = useGSAPAnimations();

  useEffect(() => {
    if (headerRef.current) {
      animateElement(headerRef.current, {
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
        duration: 1,
        ease: "bounce.out"
      });
    }

    if (logoRef.current) {
      animateElement(logoRef.current, {
        from: { scale: 0, rotation: -180 },
        to: { scale: 1, rotation: 0 },
        duration: 1.5,
        delay: 0.5,
        ease: "back.out(1.7)"
      });
    }

    // Stagger animation for nav items
    setTimeout(() => {
      staggerAnimation(".nav-item", {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0 },
        duration: 0.6,
      }, 0.1);
    }, 800);
  }, []);

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div 
            ref={logoRef}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
          >
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            ReviewAI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="nav-item text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 px-3 py-2 rounded-lg hover:bg-primary/10">
            Features
          </a>
          <a href="#pricing" className="nav-item text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 px-3 py-2 rounded-lg hover:bg-accent/10">
            Pricing
          </a>
          <a href="#about" className="nav-item text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-success/20 px-3 py-2 rounded-lg hover:bg-success/10">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="nav-item hover:scale-105 transition-transform duration-300">
            Sign In
          </Button>
          <Button size="sm" className="nav-item hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/30">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};