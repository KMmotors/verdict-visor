import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";

interface AnalysisResultsProps {
  productUrl: string;
}

export const AnalysisResults = ({ productUrl }: AnalysisResultsProps) => {
  const mockData = {
    productName: "Premium Wireless Headphones",
    overallScore: 87,
    totalReviews: 2847,
    sentiment: {
      positive: 72,
      neutral: 18,
      negative: 10
    },
    keyInsights: [
      "Excellent sound quality mentioned in 89% of reviews",
      "Battery life consistently praised",
      "Some users report connectivity issues",
      "Comfort rating above average"
    ],
    reviews: [
      {
        text: "Amazing sound quality and battery life. Worth every penny!",
        sentiment: "positive",
        rating: 5
      },
      {
        text: "Good headphones but had some connection drops occasionally.",
        sentiment: "neutral", 
        rating: 4
      },
      {
        text: "Great build quality and comfortable for long sessions.",
        sentiment: "positive",
        rating: 5
      }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Product Header */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Analysis Complete: {mockData.productName}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{productUrl}</p>
        </CardHeader>
      </Card>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-success">{mockData.overallScore}</div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 fill-warning text-warning" />
                <Star className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Out of 100</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Total Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockData.totalReviews.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Analyzed</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Reliability Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">94%</div>
            <p className="text-sm text-muted-foreground mt-1">Authentic reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Analysis */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Sentiment Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-success">Positive</span>
              <span className="text-sm">{mockData.sentiment.positive}%</span>
            </div>
            <Progress value={mockData.sentiment.positive} className="h-2" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-warning">Neutral</span>
              <span className="text-sm">{mockData.sentiment.neutral}%</span>
            </div>
            <Progress value={mockData.sentiment.neutral} className="h-2" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-destructive">Negative</span>
              <span className="text-sm">{mockData.sentiment.negative}%</span>
            </div>
            <Progress value={mockData.sentiment.negative} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockData.keyInsights.map((insight, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm">{insight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Sample Reviews */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Sample Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockData.reviews.map((review, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4 py-2">
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  variant={review.sentiment === 'positive' ? 'default' : 
                           review.sentiment === 'negative' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {review.sentiment}
                </Badge>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < review.rating ? 'fill-warning text-warning' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground">{review.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};