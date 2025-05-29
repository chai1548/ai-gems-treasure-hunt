
import { Bot, Globe, Star } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AI Myanmar</h1>
              <p className="text-sm text-gray-600">70K+ AI Collection</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe className="h-5 w-5" />
              <span className="text-sm">မြန်မာ</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-600">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-semibold">Premium</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
