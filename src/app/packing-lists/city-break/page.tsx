import PackingListTemplate from "@/components/templates/PackingListTemplate";
import { 
  MapPin, 
  Camera, 
  Coffee, 
  Train, 
  Building, 
  ShoppingBag,
  CheckCircle,
  Star,
  ShoppingCart
} from "lucide-react";

const cityBreakProducts = [
  {
    id: "1",
    name: "Weekender Travel Bag",
    description: "Stylish and functional weekender bag perfect for short city breaks. Multiple compartments and comfortable shoulder strap.",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.7,
    features: ["Multiple compartments", "Comfortable strap", "Stylish design", "Weekend capacity"]
  },
  {
    id: "2",
    name: "Comfortable Walking Shoes",
    description: "Stylish walking shoes perfect for exploring cities on foot. All-day comfort without sacrificing style.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.8,
    features: ["All-day comfort", "Stylish design", "Arch support", "Versatile styling"]
  },
  {
    id: "3",
    name: "Universal Travel Adapter",
    description: "Compact universal travel adapter with multiple USB ports. Essential for international city breaks.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1587613864595-0a353b111b16?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.6,
    features: ["Universal compatibility", "Multiple USB ports", "Compact design", "Surge protection"]
  },
  {
    id: "4",
    name: "Crossbody Travel Bag",
    description: "Secure crossbody bag perfect for city exploration. Anti-theft features and organized compartments.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.5,
    features: ["Anti-theft design", "Multiple compartments", "Comfortable strap", "RFID protection"]
  },
  {
    id: "5",
    name: "Portable Phone Charger",
    description: "High-capacity portable charger perfect for long days of sightseeing and navigation. Keeps devices powered up.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.9,
    features: ["10000mAh capacity", "Fast charging", "Multiple ports", "Compact design"]
  }
];

const cityBreakPackingTips = [
  {
    title: "Versatile Clothing Essentials",
    icon: <Building className="w-6 h-6 text-purple-400" />,
    items: [
      "Mix-and-match tops and bottoms",
      "Comfortable walking shoes",
      "Versatile jacket or cardigan",
      "Day-to-night outfit options",
      "Weather-appropriate accessories"
    ]
  },
  {
    title: "City Exploration Gear",
    icon: <MapPin className="w-6 h-6 text-blue-400" />,
    items: [
      "Portable phone charger/power bank",
      "City maps or offline navigation apps",
      "Comfortable day bag or backpack",
      "Water bottle for staying hydrated",
      "Camera for capturing memories"
    ]
  },
  {
    title: "Practical Travel Items",
    icon: <Train className="w-6 h-6 text-green-400" />,
    items: [
      "Universal travel adapter",
      "Portable umbrella or rain jacket",
      "Travel documents organizer",
      "Small first aid kit",
      "Reusable shopping bag for souvenirs"
    ]
  }
];

const cityBreakArticleContent = `
<h3 class="text-white">The Art of the Perfect Weekend City Break</h3>
<p class="text-gray-300 mb-6">
  Weekend city breaks represent the ideal modern travel experience—short enough to fit into a busy schedule, long enough to immerse yourself in a new culture, and packed with the potential for discovery and adventure. Whether you're exploring the historic streets of Rome, the vibrant neighborhoods of Tokyo, or the charming canals of Amsterdam, a well-planned weekend getaway can refresh your spirit and broaden your horizons.
</p>
<p class="text-gray-300 mb-6">
  The key to a successful city break lies in smart packing. With limited time and space, every item in your luggage must earn its place. The perfect weekend packing strategy balances versatility, comfort, and style, allowing you to transition seamlessly from museum visits to elegant dinners, from casual cafés to evening entertainment.
</p>

<h3 class="text-white">Understanding the City Break Philosophy</h3>
<p class="text-gray-300 mb-6">
  City breaks are fundamentally different from other types of travel. You're not going to a beach resort where you can lounge by the pool all day, nor are you embarking on a wilderness adventure where technical gear is essential. Instead, you're stepping into the rhythm of urban life, where comfort, style, and practicality must coexist.
</p>
<p class="text-gray-300 mb-6">
  The variable climate of most cities adds another layer of complexity. You might start your day with cool morning temperatures, face warm afternoon sun, and end with a chilly evening. Your packing strategy must accommodate these fluctuations without requiring a complete wardrobe change.
</p>

<h3 class="text-white">The Capsule Wardrobe Approach</h3>
<p class="text-gray-300 mb-6">
  The capsule wardrobe is the cornerstone of successful city break packing. Choose a base color palette (neutral tones work best) and select items that can be mixed and matched to create multiple outfits. A well-planned capsule wardrobe can create dozens of outfit combinations from just a few key pieces.
</p>
<p class="text-gray-300 mb-6">
  Start with versatile basics: a pair of comfortable dark jeans, a neutral-colored skirt or dress, a few quality tops in complementary colors, and a lightweight jacket or cardigan. These items can be dressed up or down depending on the occasion and location.
</p>

<h3 class="text-white">Footwear: Your Most Critical Decision</h3>
<p class="text-gray-300 mb-6">
  In city travel, you'll spend most of your time on your feet—walking cobblestone streets, exploring museums, standing in lines, and navigating public transportation. Comfortable footwear isn't just a luxury; it's essential for enjoying your trip.
</p>
<p class="text-gray-300 mb-6">
  Pack two pairs of shoes: one ultra-comfortable pair for extensive walking, and one slightly dressier pair for evenings out. Both pairs should be broken in before your trip to avoid blisters. Consider the weather and terrain of your destination when selecting footwear.
</p>

<h3 class="text-white">Day-to-Night Transition Strategies</h3>
<p class="text-gray-300 mb-6">
  One of the biggest challenges of city break packing is transitioning from day activities to evening events. You might spend the morning exploring ancient ruins, the afternoon shopping in trendy neighborhoods, and the evening dining in a sophisticated restaurant.
</p>
<p class="text-gray-300 mb-6">
  Pack strategic accessories that can elevate your look: a statement scarf, elegant jewelry, or a stylish belt. These items take up minimal space but can dramatically change the feel of an outfit. A versatile jacket or cardigan can also help bridge the gap between casual and formal settings.
</p>

<h3 class="text-white">Technology and Connectivity</h3>
<p class="text-gray-300 mb-6">
  Modern city exploration relies heavily on technology. Your smartphone becomes your camera, map, translator, and guide to local attractions. Ensure you have the right gear to keep your devices powered and connected throughout your trip.
</p>
<p class="text-gray-300 mb-6">
  A portable power bank is non-negotiable for city breaks. You'll be using your phone constantly for navigation, photography, and research, and you don't want to miss a perfect photo opportunity or get lost because of a dead battery.
</p>

<h3 class="text-white">Weather Preparedness</h3>
<p class="text-gray-300 mb-6">
  Weather can be unpredictable, especially in cities with variable climates. Pack a compact umbrella or a lightweight rain jacket that can be easily stashed in your day bag. These items take up minimal space but can save your trip when unexpected weather strikes.
</p>
<p class="text-gray-300 mb-6">
  Layers are your best friend in variable climates. A lightweight sweater or cardigan can be added or removed as temperatures change throughout the day. This approach allows you to adapt to different environments without carrying a heavy coat.
</p>

<h3 class="text-white">Security and Practical Considerations</h3>
<p class="text-gray-300 mb-6">
  City environments, especially popular tourist destinations, can present security challenges. Pack a secure, crossbody bag that keeps your valuables close to your body and difficult for pickpockets to access. Look for bags with RFID-blocking technology to protect your credit cards and passport.
</p>
<p class="text-gray-300 mb-6">
  Keep digital and physical copies of important documents separate from the originals. This includes your passport, hotel reservations, and emergency contact information. Cloud storage is excellent for digital copies, while physical copies can be stored in different parts of your luggage.
</p>

<h3 class="text-white">Cultural Awareness and Respect</h3>
<p class="text-gray-300 mb-6">
  Different cities and cultures have different expectations regarding dress and behavior. Research your destination's cultural norms and pack accordingly. Some religious sites may require modest dress, while certain restaurants may have dress codes.
</p>
<p class="text-gray-300 mb-6">
  When in doubt, err on the side of slightly more conservative dress. It's better to be slightly overdressed than underdressed, especially when visiting religious sites, fine restaurants, or cultural institutions.
</p>

<h3 class="text-white">Maximizing Limited Space</h3>
<p class="text-gray-300 mb-6">
  Weekend breaks typically mean carry-on luggage only, which forces you to be strategic about what you pack. Use packing cubes to compress clothing and organize your luggage. Roll clothes instead of folding to save space and reduce wrinkles.
</p>
<p class="text-gray-300 mb-6">
  Choose multi-purpose items whenever possible. A sarong can serve as a beach cover-up, scarf, blanket, or even emergency towel. A versatile dress can be worn for sightseeing, dinner, or even as a beach cover-up if your city break includes coastal areas.
</p>

<h3 class="text-white">Health and Wellness on the Go</h3>
<p class="text-gray-300 mb-6">
  City exploration can be physically demanding. Pack a small first aid kit with band-aids, pain relievers, and any personal medications. Comfort items like hand sanitizer, tissues, and lip balm can make long days of sightseeing more comfortable.
</p>
<p class="text-gray-300 mb-6">
  Stay hydrated and well-rested. Pack a reusable water bottle that you can refill throughout the day. Many cities have public water fountains or cafes that will refill your bottle for free.
</p>

<h3 class="text-white">Embracing Spontaneity</h3>
<p class="text-gray-300 mb-6">
  The best city break experiences often come from spontaneous discoveries—a hidden café, a local festival, or an impromptu invitation. Pack with flexibility in mind so you can say yes to unexpected opportunities without worrying about inappropriate clothing or missing essentials.
</p>
<p class="text-gray-300 mb-6">
  Remember that the goal of a city break is to experience and enjoy, not to achieve packing perfection. The right preparation allows you to immerse yourself in the urban experience, create lasting memories, and return home refreshed and inspired by your urban adventure.
</p>
`;

export default function CityBreakPage() {
  return (
    <PackingListTemplate
      title="The Ultimate Weekend City Break Packing List"
      subtitle="Complete guide to packing perfectly for your weekend city adventure. Stay stylish, comfortable, and prepared for urban exploration."
      heroGradient="bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"
      badges={[
        {
          text: "Urban Explorer",
          icon: <MapPin className="w-5 h-5 mr-2" />,
          color: "bg-purple-700 text-purple-100"
        },
        {
          text: "Weekend Warrior",
          icon: <Coffee className="w-5 h-5 mr-2" />,
          color: "bg-pink-700 text-pink-100"
        },
        {
          text: "City Smart",
          icon: <Building className="w-5 h-5 mr-2" />,
          color: "bg-rose-700 text-rose-100"
        }
      ]}
      introduction={{
        heading: "Why Weekend City Break Packing Matters",
        content: [
          "Packing for a weekend city break requires strategic thinking about versatility, comfort, and space optimization. Unlike longer vacations, you need to maximize every item's potential while packing light enough for carry-on travel.",
          "A well-prepared city break packing list ensures you can transition seamlessly from daytime sightseeing to evening dining, adapt to variable weather, and have everything you need for urban exploration without overpacking."
        ]
      }}
      packingTips={cityBreakPackingTips}
      climate="variable"
      activities={["city", "sightseeing"]}
      articleContent={cityBreakArticleContent}
      affiliateProducts={cityBreakProducts}
      toolTitle="Weekend City Break Packing Tool"
      toolDescription="Our smart tool is pre-configured for city breaks with climate set to 'variable' and activities including city exploration and sightseeing. Just add your destination and dates to generate your custom city break packing list!"
    />
  );
}