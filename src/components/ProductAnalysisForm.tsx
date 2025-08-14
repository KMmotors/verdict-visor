import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Link } from "lucide-react";

interface ProductAnalysisFormProps {
  onAnalyze: (url: string) => void;
}

export const ProductAnalysisForm = ({ onAnalyze }: ProductAnalysisFormProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="url"
            placeholder="Enter product URL (Amazon, eBay, etc.)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-10 h-12 text-base"
            required
          />
        </div>
        <Button 
          type="submit" 
          variant="hero"
          size="lg"
          className="h-12 px-8"
        >
          <Search className="mr-2 h-4 w-4" />
          Analyze Reviews
        </Button>
      </form>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Supports Amazon, eBay, Walmart, and 100+ other e-commerce platforms
      </p>
    </div>
  );
};