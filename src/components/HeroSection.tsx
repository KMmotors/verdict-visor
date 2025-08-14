import { ProductAnalysisForm } from "./ProductAnalysisForm";
import { AnimatedBackground } from "./3D/AnimatedBackground";
import { SplineModel } from "./3D/SplineModel";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-analysis.jpg";

interface HeroSectionProps {
  onAnalyze: (url: string) => void;
}

export const HeroSection = ({ onAnalyze }: HeroSectionProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { staggerAnimation, animateElement } = useGSAPAnimations();

  useEffect(() => {
    if (titleRef.current) {
      animateElement(titleRef.current, {
        from: { opacity: 0, y: 50, scale: 0.8 },
        to: { opacity: 1, y: 0, scale: 1 },
        duration: 1.2,
        ease: "back.out(1.7)"
      });
    }

    // Stagger animation for feature cards
    setTimeout(() => {
      staggerAnimation(".feature-card", {
        from: { opacity: 0, y: 30, rotateY: -15 },
        to: { opacity: 1, y: 0, rotateY: 0 },
        duration: 0.8,
      }, 0.2);
    }, 500);
  }, []);

  return (
    <AnimatedBackground variant="hero">
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-secondary/50 overflow-hidden">
        {/* Spline 3D Model Background */}
        <div className="absolute inset-0 opacity-20">
          <SplineModel scene="https://prod.spline.design/6Wq8n8hZnTx5QdDR/scene.splinecode" />
        </div>
        
        {/* Traditional Background Image Fallback */}
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse"
          >
            Decode Product Reviews
            <br />
            <span className="text-4xl md:text-5xl">with AI Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Instantly analyze thousands of product reviews to uncover authentic insights, 
            detect fake reviews, and make confident purchasing decisions.
          </p>
          
          <div className="mb-12">
            <ProductAnalysisForm onAnalyze={onAnalyze} />
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="feature-card flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold">Sentiment Analysis</h3>
              <p className="text-sm text-muted-foreground">Advanced AI categorizes reviews by emotion and intent</p>
            </div>
            
            <div className="feature-card flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold">Fake Detection</h3>
              <p className="text-sm text-muted-foreground">Identify suspicious patterns and inauthentic reviews</p>
            </div>
            
            <div className="feature-card flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-success/20">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-accent flex items-center justify-center shadow-lg hover:shadow-success/50 transition-shadow duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold">Smart Insights</h3>
              <p className="text-sm text-muted-foreground">Get key takeaways and trends at a glance</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-success/10 rounded-full blur-lg animate-bounce" />
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-sm animate-pulse" />
      </section>
    </AnimatedBackground>
  );
};