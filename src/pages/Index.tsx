
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { AICard } from "@/components/AICard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Header } from "@/components/Header";
import { aiDatabase } from "@/data/aiDatabase";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredAIs = aiDatabase.filter((ai) => {
    const matchesSearch = ai.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ai.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ai.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || ai.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI နာမည်ကြီး Database
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            ကမ္ဘာ့အကောင်းဆုံး AI များ 70,000+ ကျော်
          </p>
          <p className="text-lg text-gray-500">
            အားလုံးကို ရှာဖွေပြီး အသုံးပြုနိုင်ပါသည်
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              ရလဒ်များ ({filteredAIs.length.toLocaleString()})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAIs.map((ai) => (
              <AICard key={ai.id} ai={ai} />
            ))}
          </div>

          {filteredAIs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                ရှာဖွေမှု မတွေ့ရှိပါ
              </h3>
              <p className="text-gray-500">
                ကျေးဇူးပြု၍ အခြား keyword များ သုံးပြီး ရှာဖွေကြည့်ပါ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
