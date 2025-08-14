import { ProductAnalysisForm } from "./ProductAnalysisForm";
import heroImage from "@/assets/hero-analysis.jpg";

interface HeroSectionProps {
  onAnalyze: (url: string) => void;
}

export const HeroSection = ({ onAnalyze }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary/50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold">Sentiment Analysis</h3>
              <p className="text-sm text-muted-foreground">Advanced AI categorizes reviews by emotion and intent</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold">Fake Detection</h3>
              <p className="text-sm text-muted-foreground">Identify suspicious patterns and inauthentic reviews</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success to-accent flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold">Smart Insights</h3>
              <p className="text-sm text-muted-foreground">Get key takeaways and trends at a glance</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl" />
    </section>
  );
};