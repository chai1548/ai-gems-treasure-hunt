
export const aiDatabase = [
  {
    id: 1,
    name: "ChatGPT",
    description: "OpenAI မှ ဖန်တီးထားသော အင်မတန်အားကောင်းသော AI စကားပြောစနစ်။ မေးခွန်းများ၊ စာရေးခြင်း၊ ဘာသာပြန်ခြင်းနှင့် coding အတွက် အသုံးပြုနိုင်သည်။",
    category: "chatbot",
    rating: 4.8,
    users: "၁၀၀ သန်း+",
    tags: ["စကားပြောခြင်း", "စာရေးခြင်း", "ဘာသာပြန်ခြင်း", "ကုဒ်ရေးခြင်း"],
    pricing: "အခမဲ့ + Premium",
    website: "https://chat.openai.com",
    featured: true
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI ရုပ်ပုံဖန်တီးမှုအတွက် ထိပ်တန်းစနစ်။ text မှ အလွန်အရည်အသွေးမြင့် ရုပ်ပုံများ ဖန်တီးနိုင်သည်။",
    category: "image",
    rating: 4.7,
    users: "၂၀ သန်း+",
    tags: ["ရုပ်ပုံဖန်တီးခြင်း", "အနုပညာ", "ဒီဇိုင်း"],
    pricing: "စာရင်းသွင်းခ လိုအပ်သည်",
    website: "https://midjourney.com",
    featured: true
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "ပရိုဂရမ်မာများအတွက် AI အကူအညီ။ ကုဒ်အကြံပြုချက်များနှင့် automatic code completion ပေးသည်။",
    category: "coding",
    rating: 4.6,
    users: "၅ သန်း+",
    tags: ["ကုဒ်ရေးခြင်း", "အကြံပြုချက်", "ပရိုဂရမ်မင်"],
    pricing: "$10/လ",
    website: "https://github.com/features/copilot",
    featured: false
  },
  {
    id: 4,
    name: "DALL-E 3",
    description: "OpenAI မှ အဆင့်မြင့် ရုပ်ပုံဖန်တီးသော AI။ detailed text descriptions မှ realistic ရုပ်ပုံများ ဖန်တီးနိုင်သည်။",
    category: "image",
    rating: 4.5,
    users: "၁၅ သန်း+",
    tags: ["ရုပ်ပုံဖန်တီးခြင်း", "အနုပညာ", "ဖန်တီးမှု"],
    pricing: "ChatGPT Plus ထဲတွင်",
    website: "https://openai.com/dall-e-3",
    featured: true
  },
  {
    id: 5,
    name: "Runway ML",
    description: "AI ဗီဒီယိုဖန်တီးမှုနှင့် editing အတွက် powerful tools များ။ text-to-video နှင့် video editing features ပါဝင်သည်။",
    category: "video",
    rating: 4.4,
    users: "၃ သန်း+",
    tags: ["ဗီဒီယိုဖန်တီးခြင်း", "editing", "ရုပ်ရှင်"],
    pricing: "အခမဲ့ + Pro plans",
    website: "https://runwayml.com",
    featured: false
  },
  {
    id: 6,
    name: "Eleven Labs",
    description: "အလွန်အမင်း realistic သော AI voice cloning နှင့် text-to-speech technology။",
    category: "audio",
    rating: 4.6,
    users: "၂ သန်း+",
    tags: ["အသံဖန်တီးခြင်း", "voice cloning", "text-to-speech"],
    pricing: "အခမဲ့ + Premium",
    website: "https://elevenlabs.io",
    featured: false
  },
  {
    id: 7,
    name: "Jasper AI",
    description: "Marketing နှင့ content creation အတွက် အထူးပြုလုပ်ထားသော AI writing assistant။",
    category: "writing",
    rating: 4.3,
    users: "၁ သန်း+",
    tags: ["စာရေးခြင်း", "မားကတ်တင်", "content creation"],
    pricing: "$39/လ မှ",
    website: "https://jasper.ai",
    featured: false
  },
  {
    id: 8,
    name: "Tableau GPT",
    description: "ဒေတာ visualization နှင့် analytics အတွက် AI-powered insights ပေးသည်။",
    category: "analytics",
    rating: 4.2,
    users: "၅၀၀ ထောင်+",
    tags: ["ဒေတာခွဲခြမ်းခြင်း", "visualization", "business intelligence"],
    pricing: "Enterprise pricing",
    website: "https://tableau.com",
    featured: false
  },
  {
    id: 9,
    name: "Notion AI",
    description: "Productivity app Notion ထဲတွင် ပေါင်းစပ်ထားသော AI writing နှင့် organization assistant။",
    category: "productivity",
    rating: 4.4,
    users: "၃၀ သန်း+",
    tags: ["ကုန်ထုတ်စွမ်းရည်", "organization", "စာရေးခြင်း"],
    pricing: "$10/လ",
    website: "https://notion.so",
    featured: false
  },
  {
    id: 10,
    name: "Stable Diffusion",
    description: "Open-source AI ရုပ်ပုံဖန်တီးမှု model။ အခမဲ့ အသုံးပြုနိုင်ပြီး customizable ဖြစ်သည်။",
    category: "image",
    rating: 4.5,
    users: "၁၀ သန်း+",
    tags: ["ရုပ်ပုံဖန်တီးခြင်း", "open source", "အခမဲ့"],
    pricing: "အခမဲ့",
    website: "https://stability.ai",
    featured: true
  },
  {
    id: 11,
    name: "Claude",
    description: "Anthropic မှ ဖန်တီးထားသော AI assistant။ အထူးသဖြင့် စာရေးခြင်းနှင့် ခွဲခြမ်းစိတ်ဖြာခြင်းတွင် ကောင်းမွန်သည်။",
    category: "chatbot",
    rating: 4.6,
    users: "၅ သန်း+",
    tags: ["စကားပြောခြင်း", "စာရေးခြင်း", "ခွဲခြမ်းစိတ်ဖြာခြင်း"],
    pricing: "အခမဲ့ + Pro",
    website: "https://claude.ai",
    featured: false
  },
  {
    id: 12,
    name: "Perplexity AI",
    description: "AI-powered search engine နှင့ research assistant။ sources ပါဝင်သော accurate answers ပေးသည်။",
    category: "chatbot",
    rating: 4.3,
    users: "၂ သန်း+",
    tags: ["ရှာဖွေခြင်း", "သုံးအုံခြင်း", "research"],
    pricing: "အခမဲ့ + Pro",
    website: "https://perplexity.ai",
    featured: false
  }
];

// Simulate larger dataset
for (let i = 13; i <= 100; i++) {
  const categories = ["chatbot", "image", "video", "audio", "coding", "writing", "analytics", "productivity"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
  aiDatabase.push({
    id: i,
    name: `AI Tool ${i}`,
    description: `AI နည်းပညာဖြင့် လုပ်ဆောင်သော အထူးပြု tool တစ်ခု။ ${randomCategory} အတွက် အလွန်အသုံးဝင်သည်။`,
    category: randomCategory,
    rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
    users: `${Math.floor(Math.random() * 50)}သောင်း+`,
    tags: [`${randomCategory}`, "AI", "automation"],
    pricing: Math.random() > 0.5 ? "အခမဲ့" : `$${Math.floor(Math.random() * 50)}/လ`,
    website: `https://aitool${i}.com`,
    featured: Math.random() > 0.8
  });
}
