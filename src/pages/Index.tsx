import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AnalysisResults } from "@/components/AnalysisResults";

const Index = () => {
  const [analyzedUrl, setAnalyzedUrl] = useState<string>("");

  const handleAnalyze = (url: string) => {
    setAnalyzedUrl(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {!analyzedUrl ? (
        <HeroSection onAnalyze={handleAnalyze} />
      ) : (
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <button 
              onClick={() => setAnalyzedUrl("")}
              className="text-primary hover:text-primary/80 font-medium"
            >
              ← Analyze Another Product
            </button>
          </div>
          <AnalysisResults productUrl={analyzedUrl} />
        </main>
      )}
    </div>
  );
};

export default Index;
