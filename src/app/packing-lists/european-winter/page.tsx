import PackingListTemplate from "@/components/templates/PackingListTemplate";
import { 
  Snowflake, 
  MapPin, 
  Camera, 
  Train, 
  Coffee, 
  Landmark,
  CheckCircle,
  Star,
  ShoppingCart
} from "lucide-react";

const europeWinterProducts = [
  {
    id: "1",
    name: "Premium Winter Coat",
    description: "Insulated, water-resistant winter coat perfect for European winter travel. Stylish and functional for city exploration.",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.8,
    features: ["Water-resistant", "Thermal insulation", "Stylish design", "Multiple pockets"]
  },
  {
    id: "2",
    name: "Thermal Underwear Set",
    description: "Merino wool thermal base layer set for maximum warmth in cold European winter conditions.",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1549301014-95d119f5c960?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.7,
    features: ["Merino wool", "Moisture-wicking", "Odor-resistant", "Comfortable fit"]
  },
  {
    id: "3",
    name: "Waterproof Winter Boots",
    description: "Insulated, waterproof boots perfect for walking on snowy European streets and exploring winter wonderlands.",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.6,
    features: ["Waterproof", "Insulated", "Slip-resistant sole", "Ankle support"]
  },
  {
    id: "4",
    name: "Travel Scarf & Gloves Set",
    description: "Luxurious cashmere blend scarf and gloves set for elegant winter travel. Perfect for European city exploration.",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.5,
    features: ["Cashmere blend", "Warm & soft", "Stylish design", "Compact packing"]
  },
  {
    id: "5",
    name: "European Travel Adapter Set",
    description: "Universal travel adapter set with multiple plugs for all European countries. Essential for winter electronics.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1587613864595-0a353b111b16?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.9,
    features: ["Universal compatibility", "Multiple USB ports", "Surge protection", "Compact design"]
  }
];

const europeWinterPackingTips = [
  {
    title: "Winter Clothing Essentials",
    icon: <Snowflake className="w-6 h-6 text-blue-400" />,
    items: [
      "Insulated, waterproof winter coat",
      "Thermal underwear base layers",
      "Warm sweaters and fleece layers",
      "Waterproof boots with good traction",
      "Warm accessories (hat, scarf, gloves)"
    ]
  },
  {
    title: "City Sightseeing Gear",
    icon: <Landmark className="w-6 h-6 text-purple-400" />,
    items: [
      "Comfortable walking shoes for museums",
      "Day backpack for daily essentials",
      "Portable umbrella for winter rain",
      "Camera for winter photography",
      "Guidebooks or translation apps"
    ]
  },
  {
    title: "Travel Comfort Items",
    icon: <Coffee className="w-6 h-6 text-amber-400" />,
    items: [
      "Travel mug for hot drinks",
      "Hand warmers for cold days",
      "Lip balm with SPF protection",
      "Moisturizer for dry winter skin",
      "Compact umbrella for rain/snow"
    ]
  }
];

const europeWinterArticleContent = `
<h3 class="text-white">The Magic of European Winter Travel</h3>
<p class="text-gray-300 mb-6">
  European winter travel offers a unique and enchanting experience that summer tourists never see. Snow-dusted medieval architecture, cozy cafés serving steaming mulled wine, Christmas markets twinkling with lights, and far fewer crowds make winter an ideal time to explore the continent's rich cultural heritage.
</p>
<p class="text-gray-300 mb-6">
  However, European winter travel presents specific challenges that require careful preparation. From navigating cobblestone streets in icy conditions to staying warm while waiting for trains, the right packing strategy can transform your winter European adventure from merely tolerable to absolutely magical.
</p>

<h3 class="text-white">Understanding European Winter Climates</h3>
<p class="text-gray-300 mb-6">
  Europe's winter climate varies dramatically by region. Northern countries like Sweden and Finland experience extreme cold with limited daylight, while Mediterranean regions like Spain and Italy offer milder temperatures but can be damp and chilly. Central Europe, including Germany, Austria, and the Czech Republic, typically offers the classic winter experience with snow and cold temperatures perfect for Christmas markets.
</p>
<p class="text-gray-300 mb-6">
  The key to successful European winter packing is versatility. You might spend the morning exploring outdoor Christmas markets in freezing temperatures, the afternoon in a heated museum, and the evening in an elegant restaurant. Your clothing needs to adapt to these rapidly changing environments.
</p>

<h3 class="text-white">The Art of Layering for European Winters</h3>
<p class="text-gray-300 mb-6">
  Layering is the cornerstone of European winter packing. Start with a moisture-wicking base layer to keep sweat away from your skin. Merino wool is excellent for this purpose as it's warm, breathable, and naturally odor-resistant. This base layer will serve you well whether you're braving outdoor markets or cozy indoor attractions.
</p>
<p class="text-gray-300 mb-6">
  Your mid-layer provides insulation and can be added or removed as needed. Fleece jackets, wool sweaters, and vests all work well. Consider bringing multiple mid-layers of varying weights to accommodate different temperature ranges and activities.
</p>
<p class="text-gray-300 mb-6">
  The outer layer is your defense against wind, rain, and snow. A high-quality, waterproof, and windproof coat is essential. Look for features like a hood, sealed seams, and adjustable cuffs. Your coat should be stylish enough for city dining but functional enough for outdoor sightseeing.
</p>

<h3 class="text-white">Footwear: Your Most Critical Decision</h3>
<p class="text-gray-300 mb-6">
  European cities are best explored on foot, but winter conditions can make walking challenging. Icy sidewalks, wet cobblestones, and salted streets all demand proper footwear. Invest in waterproof, insulated boots with excellent traction.
</p>
<p class="text-gray-300 mb-6">
  Consider bringing two pairs of shoes: one heavy-duty boot for outdoor activities and harsh conditions, and one stylish but practical boot for restaurants, museums, and evenings out. Both pairs should be broken in before your trip to avoid blisters.
</p>

<h3 class="text-white">Accessories That Make a Difference</h3>
<p class="text-gray-300 mb-6">
  In European winter travel, accessories are not just fashion statements—they're essential survival gear. A warm hat, scarf, and gloves can make the difference between enjoying outdoor activities and rushing back to your hotel from the cold.
</p>
<p class="text-gray-300 mb-6">
  Don't underestimate the importance of quality socks. Bring several pairs of warm, moisture-wicking socks. Wool socks are ideal as they provide warmth even when damp and help prevent blisters during long days of walking.
</p>

<h3 class="text-white">Navigating European Transportation in Winter</h3>
<p class="text-gray-300 mb-6">
  Winter weather can affect European transportation, causing delays and cancellations. Pack entertainment for long waits: books, downloaded movies, and offline games. A portable charger is essential for keeping your devices powered during extended travel times.
</p>
<p class="text-gray-300 mb-6">
  Train travel is popular in Europe, but winter conditions can make platforms cold and uncomfortable. Pack a small, compact blanket or shawl that can double as a pillow or extra warmth during train journeys.
</p>

<h3 class="text-white">Cultural Considerations for Winter Travel</h3>
<p class="text-gray-300 mb-6">
  Europeans generally dress more formally than Americans, even in casual settings. This is especially true in winter when people tend to wear higher-quality, more stylish clothing. Pack items that can be dressed up or down depending on the occasion.
</p>
<p class="text-gray-300 mb-6">
  Many European churches and religious sites have dress codes that remain in effect year-round. Bring clothing that covers shoulders and knees, even in winter. A stylish scarf can be both fashionable and practical for covering up when needed.
</p>

<h3 class="text-white">Health and Wellness in Winter</h3>
<p class="text-gray-300 mb-6">
  Winter travel can be tough on your body. The dry air in heated spaces, combined with cold outdoor air, can lead to dehydration and dry skin. Pack a good moisturizer, lip balm, and stay hydrated throughout your journey.
</p>
<p class="text-gray-300 mb-6">
  Vitamin D deficiency is common in winter due to limited sun exposure. Consider bringing vitamin D supplements, especially if you're traveling to northern European countries with very short winter days.
</p>

<h3 class="text-white">Photography in Winter Conditions</h3>
<p class="text-gray-300 mb-6">
  European winters offer incredible photographic opportunities, from snow-covered landscapes to festive Christmas markets. However, cold weather can be challenging for electronics. Keep your camera and phone warm, and bring extra batteries as cold temperatures drain them quickly.
</p>
<p class="text-gray-300 mb-6">
  The low winter light creates beautiful, soft illumination perfect for photography. A small, portable tripod can help you capture stunning cityscapes during the short winter days and long, magical twilights.
</p>

<h3 class="text-white">Packing Smart for European Winter</h3>
<p class="text-gray-300 mb-6">
  Space is always at a premium when traveling, but winter clothing is bulky. Use packing cubes to compress items and organize your luggage. Roll clothes instead of folding to save space and minimize wrinkles.
</p>
<p class="text-gray-300 mb-6">
  Consider doing laundry during your trip rather than packing enough clothes for your entire stay. Many European hotels offer laundry service, and laundromats are common in cities. This approach can significantly reduce your luggage size and weight.
</p>

<h3 class="text-white">Embracing the Winter Experience</h3>
<p class="text-gray-300 mb-6">
  European winter travel is about more than just surviving the cold—it's about embracing the unique atmosphere and experiences that only winter can offer. From ice skating in front of grand palaces to warming up with hot chocolate in centuries-old cafés, winter provides memories that summer travelers never experience.
</p>
<p class="text-gray-300 mb-6">
  Pack with an open mind and a spirit of adventure. The right preparation will allow you to fully immerse yourself in the magic of European winter, creating memories that will last a lifetime.
</p>
`;

export default function EuropeanWinterPage() {
  return (
    <PackingListTemplate
      title="The Ultimate European Winter Trip Packing List"
      subtitle="Complete guide to packing perfectly for your European winter adventure. Stay warm, stylish, and prepared for magical winter experiences."
      heroGradient="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
      badges={[
        {
          text: "Winter Ready",
          icon: <Snowflake className="w-5 h-5 mr-2" />,
          color: "bg-blue-700 text-blue-100"
        },
        {
          text: "Cultural Explorer",
          icon: <Landmark className="w-5 h-5 mr-2" />,
          color: "bg-indigo-700 text-indigo-100"
        },
        {
          text: "City Adventurer",
          icon: <MapPin className="w-5 h-5 mr-2" />,
          color: "bg-purple-700 text-purple-100"
        }
      ]}
      introduction={{
        heading: "Why European Winter Packing Matters",
        content: [
          "Packing for European winter travel requires careful consideration of varying climates, cultural expectations, and the unique challenges of cold-weather sightseeing. Unlike other seasons, winter demands specialized gear that balances warmth, style, and practicality.",
          "A well-prepared European winter packing list ensures you can comfortably explore snowy Christmas markets, elegant museums, and cozy cafés while staying warm, dry, and appropriately dressed for any occasion."
        ]
      }}
      packingTips={europeWinterPackingTips}
      climate="cold"
      activities={["city", "sightseeing"]}
      articleContent={europeWinterArticleContent}
      affiliateProducts={europeWinterProducts}
      toolTitle="European Winter Trip Packing Tool"
      toolDescription="Our smart tool is pre-configured for European winter adventures with climate set to 'cold' and activities including city exploration and sightseeing. Just add your destination and dates to generate your custom winter packing list!"
    />
  );
}