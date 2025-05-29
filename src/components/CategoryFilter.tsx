
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "အားလုံး", icon: "🤖" },
  { id: "chatbot", name: "စကားပြောဆိုခြင်း", icon: "💬" },
  { id: "image", name: "ရုပ်ပုံဖန်တီးခြင်း", icon: "🎨" },
  { id: "video", name: "ဗီဒီယိုပြုလုပ်ခြင်း", icon: "🎬" },
  { id: "audio", name: "အသံထုတ်လုပ်ခြင်း", icon: "🎵" },
  { id: "coding", name: "ကုဒ်ရေးခြင်း", icon: "💻" },
  { id: "writing", name: "စာရေးခြင်း", icon: "✍️" },
  { id: "analytics", name: "ဒေတာခွဲခြမ်းခြင်း", icon: "📊" },
  { id: "productivity", name: "ကုန်ထုတ်စွမ်းရည်", icon: "⚡" }
];

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">အမျိုးအစားများ</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`h-12 px-4 rounded-xl transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                : "hover:bg-gray-50 hover:scale-105"
            }`}
          >
            <span className="mr-2 text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
