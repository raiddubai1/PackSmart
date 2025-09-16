import PackingListTemplate from "@/components/templates/PackingListTemplate";
import { 
  Anchor, 
  Sun, 
  Waves, 
  Shirt, 
  Camera, 
  Utensils,
  CheckCircle,
  Star,
  ShoppingCart
} from "lucide-react";

const cruiseProducts = [
  {
    id: "1",
    name: "Formal Cruise Wear Set",
    description: "Elegant formal wear package perfect for cruise dinners and special events. Includes dress, accessories, and garment bag.",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1494773090578-9340644c6dfa?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.8,
    features: ["Wrinkle-resistant", "Complete set", "Garment bag", "Multiple sizes"]
  },
  {
    id: "2",
    name: "Waterproof Phone Case",
    description: "100% waterproof phone case perfect for pool days, beach excursions, and water activities. Touchscreen compatible.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.7,
    features: ["IPX8 waterproof", "Touchscreen compatible", "Floatable", "Clear photos underwater"]
  },
  {
    id: "3",
    name: "Cruise Essentials Organizer",
    description: "Hanging closet organizer perfect for small cruise cabins. Maximizes storage space and keeps everything organized.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.6,
    features: ["Space-saving", "Multiple compartments", "Easy to hang", "Durable material"]
  },
  {
    id: "4",
    name: "Reef-Safe Sunscreen Bundle",
    description: "Coral reef-safe sunscreen SPF 50+ perfect for tropical destinations. Eco-friendly and effective sun protection.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.9,
    features: ["Reef-safe", "SPF 50+", "Water-resistant", "Eco-friendly"]
  },
  {
    id: "5",
    name: "Portable Power Bank",
    description: "High-capacity solar power bank perfect for shore excursions and days away from the ship. Keeps devices charged.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.5,
    features: ["Solar charging", "20000mAh capacity", "Multiple ports", "Water-resistant"]
  }
];

const cruisePackingTips = [
  {
    title: "Daytime Cruise Wear",
    icon: <Sun className="w-6 h-6 text-yellow-400" />,
    items: [
      "Swimwear (2-3 sets for rotation)",
      "Cover-ups and sarongs",
      "Casual shorts and t-shirts",
      "Comfortable walking shoes",
      "Sun hat and sunglasses"
    ]
  },
  {
    title: "Evening & Formal Attire",
    icon: <Shirt className="w-6 h-6 text-purple-400" />,
    items: [
      "Formal dinner attire (1-2 formal nights)",
      "Cocktail dresses or dress shirts",
      "Dress shoes and elegant accessories",
      "Light jacket or wrap for air conditioning",
      "Jewelry and formal accessories"
    ]
  },
  {
    title: "Shore Excursion Essentials",
    icon: <Waves className="w-6 h-6 text-blue-400" />,
    items: [
      "Waterproof bag for electronics",
      "Comfortable walking shoes for tours",
      "Small backpack for day trips",
      "Travel documents and cruise card",
      "Cash and credit cards for shopping"
    ]
  }
];

const cruiseArticleContent = `
<h3 class="text-white">The Ultimate Tropical Cruise Experience</h3>
<p class="text-gray-300 mb-6">
  Tropical cruising represents the perfect fusion of luxury, adventure, and relaxation. Imagine waking up each morning in a new paradise destination, spending your days exploring pristine beaches, vibrant coral reefs, and exotic cultures, then returning to your floating resort for world-class dining and entertainment.
</p>
<p class="text-gray-300 mb-6">
  However, the unique nature of cruise travel—combining multiple destinations, various activities, and different dress codes—makes packing particularly challenging. You need to be prepared for everything from formal dinners and pool parties to shore excursions and spa days, all within the limited space of a cruise cabin.
</p>

<h3 class="text-white">Understanding Cruise Life and Packing Requirements</h3>
<p class="text-gray-300 mb-6">
  Cruise ships are essentially floating resorts with their own cultures, rules, and expectations. Most tropical cruises have a mix of casual days and formal evenings, with specific dress codes for different venues and events. Understanding these requirements is crucial for packing appropriately.
</p>
<p class="text-gray-300 mb-6">
  The tropical climate adds another layer of consideration. While you'll be in warm weather, cruise ships are heavily air-conditioned, and you'll need clothing that can transition between hot outdoor areas and cool indoor spaces. Pack layers that can be easily added or removed throughout the day.
</p>

<h3 class="text-white">The Challenge of Limited Cabin Space</h3>
<p class="text-gray-300 mb-6">
  Cruise cabins are notoriously small, with limited storage space. Smart packing isn't just about what you bring—it's about how you organize it. Use packing cubes, hanging organizers, and space-saving techniques to maximize every inch of your closet and drawers.
</p>
<p class="text-gray-300 mb-6">
  Consider doing laundry during your cruise rather than packing enough clothes for the entire trip. Most ships offer laundry service, and some even have self-service laundry facilities. This approach can significantly reduce your luggage size and weight.
</p>

<h3 class="text-white">Daytime Cruise Attire: Casual and Comfortable</h3>
<p class="text-gray-300 mb-6">
  Days on a cruise ship are typically casual and activity-focused. Pack comfortable, breathable clothing that can handle pool time, fitness activities, and casual dining. Swimwear is essential—bring at least two or three sets so you always have a dry option available.
</p>
<p class="text-gray-300 mb-6">
  Don't forget sun protection. Tropical sun is intense, and you'll spend a lot of time outdoors. High-SPF sunscreen, a wide-brimmed hat, UV-protective sunglasses, and cover-ups are non-negotiable items for any tropical cruise.
</p>

<h3 class="text-white">Evening Elegance: Dress Codes and Formal Nights</h3>
<p class="text-gray-300 mb-6">
  Most cruises feature formal nights where passengers dress up for elegant dinners and special events. These can range from "cocktail attire" to "formal" or even "gala" dress codes. Check your cruise line's specific requirements and pack accordingly.
</p>
<p class="text-gray-300 mb-6">
  For men, this typically means a suit or tuxedo, while women should pack cocktail dresses or elegant gowns. Even on casual evenings, cruise dining tends to be more formal than typical restaurant dining, so avoid overly casual wear like shorts or flip-flops in main dining rooms.
</p>

<h3 class="text-white">Shore Excursion Packing Strategies</h3>
<p class="text-gray-300 mb-6">
  Shore excursions are often the highlight of a tropical cruise, but they require careful planning. You'll need a day bag that can carry essentials like water, sunscreen, money, and your cruise card, while being comfortable enough for walking, swimming, or other activities.
</p>
<p class="text-gray-300 mb-6">
  Research your planned excursions in advance and pack accordingly. A snorkeling trip requires different gear than a city tour or beach visit. Consider bringing a waterproof phone case or dry bag for water-based activities.
</p>

<h3 class="text-white">Health and Wellness at Sea</h3>
<p class="text-gray-300 mb-6">
  Motion sickness can affect even experienced sailors. Pack motion sickness medication or wristbands, especially if you're prone to seasickness. It's better to have it and not need it than to need it and not have it.
</p>
<p class="text-gray-300 mb-6">
  Don't forget a basic first aid kit with band-aids, pain relievers, and any personal medications. While ships have medical facilities, having basic supplies on hand can save you time and money for minor issues.
</p>

<h3 class="text-white">Technology and Entertainment</h3>
<p class="text-gray-300 mb-6">
  Cruise ships offer plenty of entertainment, but you'll want your own devices for photos, music, and staying in touch. Bring a portable power bank for shore excursions, as you won't have access to ship power while exploring ports.
</p>
<p class="text-gray-300 mb-6">
  Consider bringing a small Bluetooth speaker for your cabin (check your cruise line's policy on speakers first), e-reader for lazy days by the pool, and a waterproof camera for underwater adventures.
</p>

<h3 class="text-white">Practical Items People Often Forget</h3>
<p class="text-gray-300 mb-6">
  Some items are easy to forget but can make a huge difference in your cruise experience. A travel mug with a lid is perfect for taking coffee or tea from the buffet to your balcony or on deck. A small flashlight can be helpful for navigating your cabin at night without waking your roommate.
</p>
<p class="text-gray-300 mb-6">
  Don't forget outlet adapters—ships often have limited outlets, and a power strip can be invaluable for charging multiple devices. Magnetic hooks are another great item for creating extra hanging space in your cabin.
</p>

<h3 class="text-white">Environmental Responsibility at Sea</h3>
<p class="text-gray-300 mb-6">
  Tropical cruise destinations often feature fragile marine ecosystems. Pack reef-safe sunscreen to protect coral reefs, reusable water bottles to reduce plastic waste, and eco-friendly toiletries. Many cruise lines are increasingly focused on sustainability, so align your packing with these values.
</p>
<p class="text-gray-300 mb-6">
  Consider bringing a small reusable bag for shopping during shore excursions, and say no to single-use plastics whenever possible. Your choices can help preserve the beautiful destinations you've come to enjoy.
</p>

<h3 class="text-white">Making the Most of Your Cruise Experience</h3>
<p class="text-gray-300 mb-6">
  The right packing strategy allows you to fully immerse yourself in the cruise experience without worrying about missing essentials or being unprepared for activities. Pack with flexibility in mind, and remember that cruise ships have shops onboard if you forget anything critical.
</p>
<p class="text-gray-300 mb-6">
  Most importantly, pack a sense of adventure and an open mind. Tropical cruises offer incredible opportunities for relaxation, exploration, and creating lasting memories. With the right preparation, you'll be free to enjoy every moment of your floating paradise adventure.
</p>
`;

export default function TropicalCruisePage() {
  return (
    <PackingListTemplate
      title="The Ultimate Tropical Cruise Packing List"
      subtitle="Complete guide to packing perfectly for your tropical cruise adventure. Stay stylish, comfortable, and prepared for days at sea and exotic shore excursions."
      heroGradient="bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900"
      badges={[
        {
          text: "Cruise Ready",
          icon: <Anchor className="w-5 h-5 mr-2" />,
          color: "bg-cyan-700 text-cyan-100"
        },
        {
          text: "Tropical Paradise",
          icon: <Sun className="w-5 h-5 mr-2" />,
          color: "bg-blue-700 text-blue-100"
        },
        {
          text: "Formal Elegance",
          icon: <Utensils className="w-5 h-5 mr-2" />,
          color: "bg-indigo-700 text-indigo-100"
        }
      ]}
      introduction={{
        heading: "Why Tropical Cruise Packing Matters",
        content: [
          "Packing for a tropical cruise requires careful consideration of multiple environments, dress codes, and activities. Unlike other vacations, cruises combine days at sea, formal evenings, shore excursions, and various onboard activities—all within limited cabin space.",
          "A well-prepared cruise packing list ensures you have everything you need for elegant dinners, poolside relaxation, adventurous excursions, and everything in between, while maximizing the limited storage space in your cruise cabin."
        ]
      }}
      packingTips={cruisePackingTips}
      climate="warm"
      activities={["swimming", "cruise", "formal"]}
      articleContent={cruiseArticleContent}
      affiliateProducts={cruiseProducts}
      toolTitle="Tropical Cruise Packing Tool"
      toolDescription="Our smart tool is pre-configured for tropical cruises with climate set to 'warm' and activities including swimming, cruise activities, and formal events. Just add your destination and dates to generate your custom cruise packing list!"
    />
  );
}