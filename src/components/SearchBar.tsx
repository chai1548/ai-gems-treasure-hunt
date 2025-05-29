
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="AI နာမည်၊ အမျိုးအစား သို့မဟုတ် လုပ်ဆောင်ချက်များ ရှာဖွေပါ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg"
        />
        <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
};
