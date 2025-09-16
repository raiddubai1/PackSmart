import PackingListTemplate from "@/components/templates/PackingListTemplate";
import { 
  Tent, 
  Mountain, 
  Compass, 
  Backpack, 
  Fire, 
  TreePine,
  CheckCircle,
  Star,
  ShoppingCart
} from "lucide-react";

const campingProducts = [
  {
    id: "1",
    name: "Lightweight Backpacking Tent",
    description: "Ultralight 2-person tent perfect for hiking and camping adventures. Weather-resistant and easy to set up.",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.8,
    features: ["Ultralight design", "Weather-resistant", "Easy setup", "Compact packing"]
  },
  {
    id: "2",
    name: "Professional Hiking Backpack",
    description: "65L hiking backpack with advanced suspension system and multiple compartments for extended trips.",
    price: "$159.99",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.7,
    features: ["65L capacity", "Advanced suspension", "Rain cover included", "Multiple compartments"]
  },
  {
    id: "3",
    name: "Camping Cookware Set",
    description: "Complete non-stick cookware set for outdoor cooking. Includes pots, pans, and utensils for campsite meals.",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1587613864595-0a353b111b16?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.6,
    features: ["Non-stick coating", "Compact storage", "Complete set", "Easy to clean"]
  },
  {
    id: "4",
    name: "Sleeping Bag & Pad Combo",
    description: "Cold-weather sleeping bag with insulated sleeping pad for comfortable camping in various conditions.",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1599424376911-4c2d6e9a0d2b?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.5,
    features: ["Cold-weather rated", "Insulated pad", "Compact design", "Water-resistant"]
  },
  {
    id: "5",
    name: "Portable Water Filter",
    description: "Advanced water filtration system for safe drinking water from natural sources. Essential for extended hiking trips.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1549301014-95d119f5c960?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.9,
    features: ["Removes 99.9% bacteria", "Long filter life", "Lightweight", "Easy to use"]
  }
];

const campingPackingTips = [
  {
    title: "Shelter & Sleeping Gear",
    icon: <Tent className="w-6 h-6 text-green-400" />,
    items: [
      "Weather-appropriate tent with rainfly",
      "Sleeping bag rated for expected temperatures",
      "Sleeping pad or air mattress",
      "Pillow (inflatable or compressible)",
      "Tent footprint or ground cloth"
    ]
  },
  {
    title: "Cooking & Food Supplies",
    icon: <Fire className="w-6 h-6 text-orange-400" />,
    items: [
      "Portable camp stove and fuel",
      "Cookware set (pots, pans, utensils)",
      "Food storage containers and coolers",
      "Water bottles and purification system",
      "Biodegradable soap and cleaning supplies"
    ]
  },
  {
    title: "Safety & Navigation",
    icon: <Compass className="w-6 h-6 text-blue-400" />,
    items: [
      "Map and compass (and GPS device)",
      "First aid kit with medical supplies",
      "Multi-tool or knife",
      "Emergency whistle and signal mirror",
      "Headlamp or flashlight with extra batteries"
    ]
  }
];

const campingArticleContent = `
<h3 class="text-white">The Ultimate Guide to Camping & Hiking Adventures</h3>
<p class="text-gray-300 mb-6">
  Camping and hiking represent the purest form of outdoor adventure—connecting with nature, challenging yourself physically, and experiencing the wilderness in its most authentic state. However, the difference between an unforgettable outdoor experience and a miserable ordeal often comes down to one critical factor: preparation.
</p>
<p class="text-gray-300 mb-6">
  Proper packing for camping and hiking goes beyond simply throwing items into a backpack. It's about understanding your environment, anticipating challenges, and ensuring you have the right gear to keep you safe, comfortable, and prepared for whatever nature throws your way.
</p>

<h3 class="text-white">Understanding Your Camping Environment</h3>
<p class="text-gray-300 mb-6">
  The first step in effective camping packing is understanding your destination. Are you heading to a established campground with facilities, or will you be backpacking deep into the wilderness? The answer dramatically affects what you need to bring.
</p>
<p class="text-gray-300 mb-6">
  Climate variability is perhaps the most crucial consideration. Mountain weather can change rapidly, with temperatures swinging dramatically between day and night. Your packing strategy must account for these fluctuations, incorporating layers that can be added or removed as conditions change.
</p>

<h3 class="text-white">Essential Gear Categories</h3>
<p class="text-gray-300 mb-6">
  <strong>Shelter Systems:</strong> Your tent is your home in the wilderness. Choose one that's appropriate for your group size and expected weather conditions. Don't forget the footprint—this ground cloth protects your tent floor and extends its life significantly.
</p>
<p class="text-gray-300 mb-6">
  <strong>Sleeping Comfort:</strong> A good night's sleep is essential for enjoying your outdoor adventure. Invest in a quality sleeping bag rated for the coldest temperatures you expect, and pair it with an insulated sleeping pad for both comfort and warmth.
</p>
<p class="text-gray-300 mb-6">
  <strong>Cooking Equipment:</strong> Outdoor cooking can be one of the most enjoyable aspects of camping, but it requires the right equipment. Your camp kitchen should be lightweight, efficient, and easy to clean. Consider the type of cooking you'll be doing and pack accordingly.
</p>

<h3 class="text-white">Clothing Strategy for the Outdoors</h3>
<p class="text-gray-300 mb-6">
  The layering system is the golden rule of outdoor clothing. Start with a moisture-wicking base layer, add insulating mid-layers, and finish with a weather-resistant outer layer. This system allows you to adapt to changing conditions throughout the day.
</p>
<p class="text-gray-300 mb-6">
  Avoid cotton at all costs—it retains moisture and can lead to hypothermia in cold conditions. Instead, choose synthetic materials or merino wool that wick moisture away from your skin and dry quickly.
</p>

<h3 class="text-white">Navigation and Safety Essentials</h3>
<p class="text-gray-300 mb-6">
  Even in well-marked areas, navigation tools are essential. Carry a detailed map and compass, and know how to use them. A GPS device is helpful but should never be your only navigation method—batteries die, and electronics can fail.
</p>
<p class="text-gray-300 mb-6">
  Your first aid kit should be comprehensive and tailored to your group's needs. Include not just basic supplies but also any personal medications, blister treatment, and emergency items like space blankets and whistle.
</p>

<h3 class="text-white">Food and Water Management</h3>
<p class="text-gray-300 mb-6">
  Planning your meals carefully can save weight and space. Dehydrated foods are popular among backpackers for their light weight, but don't underestimate the psychological boost of a few comfort foods on longer trips.
</p>
<p class="text-gray-300 mb-6">
  Water is your most critical resource. Always carry more than you think you'll need, and have multiple purification methods available. Water filters, purification tablets, and boiling each have their place in different situations.
</p>

<h3 class="text-white">Leave No Trace Principles</h3>
<p class="text-gray-300 mb-6">
  Responsible camping means leaving your campsite as you found it—or better. Pack out all trash, including food scraps. Use established campsites when possible, and follow local regulations regarding campfires and wildlife interactions.
</p>
<p class="text-gray-300 mb-6">
  Your packing should reflect these principles. Choose reusable items over disposables, and pack biodegradable soaps and cleaning products. Remember that what you pack in, you must pack out.
</p>

<h3 class="text-white">Physical Preparation and Fitness</h3>
<p class="text-gray-300 mb-6">
  The best gear in the world won't help if you're not physically prepared for your adventure. Train with your loaded backpack before your trip to build strength and endurance. Start with shorter hikes and gradually increase distance and difficulty.
</p>
<p class="text-gray-300 mb-6">
  Pay attention to your body during training. Blisters, sore muscles, and joint pain can ruin a trip. Address these issues before you head into the wilderness, and make sure your footwear is well broken in.
</p>

<h3 class="text-white">Emergency Preparedness</h3>
<p class="text-gray-300 mb-6">
  Hope for the best, but prepare for the worst. Your emergency kit should include items for signaling, fire starting, shelter building, and basic medical care. Know how to use each item before you need it.
</p>
<p class="text-gray-300 mb-6">
  Share your itinerary with someone at home, including your planned route and expected return time. Check in when you can, and establish a plan for what to do if you don't check in as scheduled.
</p>

<h3 class="text-white">Conclusion: The Art of Outdoor Adventure</h3>
<p class="text-gray-300 mb-6">
  Camping and hiking are more than just outdoor activities—they're opportunities for personal growth, connection with nature, and creating lasting memories. The right preparation and packing strategy set the foundation for these incredible experiences.
</p>
<p class="text-gray-300 mb-6">
  Remember that every trip is a learning experience. Take notes about what worked well and what didn't, and continuously refine your packing system. Over time, you'll develop an intuitive understanding of what you need for different types of outdoor adventures.
</p>
`;

export default function CampingHikingPage() {
  return (
    <PackingListTemplate
      title="The Ultimate Camping & Hiking Packing List"
      subtitle="Complete guide to packing perfectly for your outdoor adventures. Stay safe, comfortable, and prepared for any wilderness experience."
      heroGradient="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900"
      badges={[
        {
          text: "Adventure Ready",
          icon: <Mountain className="w-5 h-5 mr-2" />,
          color: "bg-green-700 text-green-100"
        },
        {
          text: "Wilderness Expert",
          icon: <TreePine className="w-5 h-5 mr-2" />,
          color: "bg-emerald-700 text-emerald-100"
        },
        {
          text: "Outdoor Prepared",
          icon: <Backpack className="w-5 h-5 mr-2" />,
          color: "bg-teal-700 text-teal-100"
        }
      ]}
      introduction={{
        heading: "Why Camping & Hiking Packing Matters",
        content: [
          "Packing for camping and hiking adventures requires careful consideration of safety, comfort, and environmental responsibility. Unlike other types of travel, outdoor adventures demand self-sufficiency and preparation for rapidly changing conditions.",
          "A well-prepared camping packing list ensures you have everything you need to stay safe, comfortable, and environmentally responsible while enjoying the beauty and challenges of the wilderness."
        ]
      }}
      packingTips={campingPackingTips}
      climate="variable"
      activities={["hiking", "camping"]}
      articleContent={campingArticleContent}
      affiliateProducts={campingProducts}
      toolTitle="Camping & Hiking Packing Tool"
      toolDescription="Our smart tool is pre-configured for outdoor adventures with climate set to 'variable' and activities including hiking and camping. Just add your destination and dates to generate your custom outdoor packing list!"
    />
  );
}