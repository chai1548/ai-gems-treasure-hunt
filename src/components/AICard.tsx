
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Heart } from "lucide-react";
import { useState } from "react";

interface AI {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  users: string;
  tags: string[];
  pricing: string;
  website: string;
  featured: boolean;
}

interface AICardProps {
  ai: AI;
}

export const AICard = ({ ai }: AICardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      chatbot: "bg-blue-100 text-blue-800",
      image: "bg-purple-100 text-purple-800",
      video: "bg-green-100 text-green-800",
      audio: "bg-yellow-100 text-yellow-800",
      coding: "bg-gray-100 text-gray-800",
      writing: "bg-red-100 text-red-800",
      analytics: "bg-indigo-100 text-indigo-800",
      productivity: "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
      <div className="p-6">
        {ai.featured && (
          <Badge className="mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            ⭐ အကောင်းဆုံး
          </Badge>
        )}
        
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
            {ai.name}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 hover:bg-red-50"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
              }`} 
            />
          </Button>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{ai.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{ai.rating}</span>
          </div>
          <span className="text-xs text-gray-500">{ai.users} အသုံးပြုသူ</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getCategoryColor(ai.category)}>
            {ai.category}
          </Badge>
          {ai.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-green-600">{ai.pricing}</span>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={() => window.open(ai.website, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            ကြည့်ရှုပါ
          </Button>
        </div>
      </div>
    </Card>
  );
};
