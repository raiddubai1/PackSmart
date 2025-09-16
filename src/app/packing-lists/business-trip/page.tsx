import PackingListTemplate from "@/components/templates/PackingListTemplate";
import { 
  Briefcase, 
  Plane, 
  Calendar, 
  MapPin, 
  Shirt, 
  Laptop,
  CheckCircle,
  Star,
  ShoppingCart
} from "lucide-react";

const businessProducts = [
  {
    id: "1",
    name: "Professional Garment Bag",
    description: "Premium garment bag that keeps suits and dresses wrinkle-free during travel. Perfect for business professionals.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.7,
    features: ["Wrinkle-free", "Multiple compartments", "Durable material", "Carry-on compliant"]
  },
  {
    id: "2",
    name: "Business Travel Backpack",
    description: "Sleek, professional backpack with dedicated laptop compartment and organization for business essentials.",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.8,
    features: ["Laptop sleeve", "RFID protection", "Water-resistant", "TSA-friendly"]
  },
  {
    id: "3",
    name: "Portable Travel Steamer",
    description: "Compact handheld steamer for removing wrinkles from business attire on the go. Heats up in minutes.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.6,
    features: ["Fast heating", "Dual voltage", "Compact design", "Water tank included"]
  },
  {
    id: "4",
    name: "Professional Travel Organizer",
    description: "Set of packing cubes and organizers designed specifically for business travel and formal wear.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.5,
    features: ["Shoe compartment", "Garment organization", "Water-resistant", "Multiple sizes"]
  },
  {
    id: "5",
    name: "Noise-Canceling Headphones",
    description: "Premium wireless headphones with active noise cancellation for productive travel and focus.",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.9,
    features: ["Active noise cancellation", "30-hour battery", "Comfortable fit", "Travel case included"]
  }
];

const businessPackingTips = [
  {
    title: "Professional Attire Essentials",
    icon: <Shirt className="w-6 h-6 text-blue-400" />,
    items: [
      "2-3 business suits or formal outfits",
      "Professional shoes (comfortable for walking)",
      "Belts that match your shoes",
      "Conservative accessories (watches, jewelry)",
      "Weather-appropriate outerwear"
    ]
  },
  {
    title: "Technology & Work Gear",
    icon: <Laptop className="w-6 h-6 text-purple-400" />,
    items: [
      "Laptop and charger",
      "Portable power bank",
      "Travel adapter for international destinations",
      "Noise-canceling headphones",
      "Business cards and portfolio"
    ]
  },
  {
    title: "Documents & Organization",
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    items: [
      "Passport and ID (required)",
      "Travel insurance documents",
      "Meeting schedules and contacts",
      "Digital copies of important documents",
      "Expense tracking tools"
    ]
  }
];

const businessArticleContent = `
<h3 class="text-white">The Art of Business Travel: Packing Like a Pro</h3>
<p class="text-gray-300 mb-6">
  Business travel requires a delicate balance between professionalism and practicality. Unlike leisure travel, where comfort might be the primary concern, business trips demand that you present your best self while navigating the challenges of transportation, accommodation, and varying climates.
</p>
<p class="text-gray-300 mb-6">
  The key to successful business packing lies in versatility and preparation. Each item in your suitcase should serve multiple purposes, and your packing strategy should anticipate the unexpected—from sudden weather changes to last-minute meeting invitations.
</p>

<h3 class="text-white">Understanding Business Travel Requirements</h3>
<p class="text-gray-300 mb-6">
  Business travel typically involves a unique set of requirements that differ significantly from other types of trips. You'll need to consider the nature of your meetings, the corporate culture of your destination, and the duration of your stay. A three-day conference requires different packing than a week-long client consultation.
</p>
<p class="text-gray-300 mb-6">
  Climate variability is another crucial factor. Business travelers often move between different climate zones, sometimes within the same trip. This necessitates a layered approach to clothing and careful consideration of fabric choices that can adapt to various conditions.
</p>

<h3 class="text-white">Essential Packing Categories for Business Travel</h3>
<p class="text-gray-300 mb-6">
  <strong>Professional Attire:</strong> Your clothing selection should reflect the corporate environment while allowing for comfort during travel and long meetings. Invest in wrinkle-resistant fabrics and consider the color palette—neutral tones offer the most versatility and can be mixed and matched easily.
</p>
<p class="text-gray-300 mb-6">
  <strong>Technology Essentials:</strong> In today's digital business world, your technology is as important as your wardrobe. Ensure you have all necessary devices, chargers, and accessories. Don't forget about cybersecurity—use VPNs and secure storage for sensitive business information.
</p>
<p class="text-gray-300 mb-6">
  <strong>Personal Care:</strong> Maintain your professional appearance with a well-curated personal care kit. This includes grooming essentials, any necessary medications, and items that help you stay fresh during long travel days.
</p>

<h3 class="text-white">Smart Packing Strategies</h3>
<p class="text-gray-300 mb-6">
  The rolling technique remains one of the most effective methods for packing business attire. It minimizes wrinkles and maximizes space. For delicate items, consider using garment bags or dry cleaner bags as an extra layer of protection.
</p>
<p class="text-gray-300 mb-6">
  Packing cubes are invaluable for business travelers. They help organize different categories of items and make it easy to find what you need without disrupting your entire suitcase. Use different colored cubes for clothing, electronics, and toiletries.
</p>

<h3 class="text-white">Business Travel Etiquette and Preparation</h3>
<p class="text-gray-300 mb-6">
  Beyond the physical items, successful business travel requires mental preparation. Research your destination's business customs, dress codes, and cultural norms. This knowledge will help you pack appropriately and avoid any cultural missteps.
</p>
<p class="text-gray-300 mb-6">
  Time management is crucial. Pack in a way that allows you to quickly access items needed for security checks, and organize your documents so they're easily accessible throughout your journey.
</p>

<h3 class="text-white">Sustainability in Business Travel</h3>
<p class="text-gray-300 mb-6">
  Modern business travelers are increasingly conscious of their environmental impact. Consider sustainable packing choices, such as reusable containers for toiletries, digital documents instead of paper, and versatile clothing items that reduce the overall volume of luggage.
</p>
<p class="text-gray-300 mb-6">
  Many companies now have sustainability guidelines for business travel. Familiarize yourself with these policies and incorporate them into your packing strategy. This might include choosing eco-friendly accommodations or offsetting carbon emissions from your flights.
</p>

<h3 class="text-white">Conclusion: Mastering Business Travel</h3>
<p class="text-gray-300 mb-6">
  Business travel doesn't have to be stressful. With the right preparation and packing strategy, you can focus on what matters most—your business objectives. The key is to pack smart, not just pack light.
</p>
<p class="text-gray-300 mb-6">
  Remember that each business trip is an opportunity to refine your packing system. Take notes after each journey about what worked well and what didn't, and continuously improve your approach. Over time, you'll develop a personalized system that makes business travel efficient and even enjoyable.
</p>
`;

export default function BusinessTripPage() {
  return (
    <PackingListTemplate
      title="The Ultimate Business Trip Packing List"
      subtitle="Complete guide to packing perfectly for your business travel. Stay professional, organized, and prepared for any meeting or event."
      heroGradient="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
      badges={[
        {
          text: "Professional",
          icon: <Briefcase className="w-5 h-5 mr-2" />,
          color: "bg-blue-700 text-blue-100"
        },
        {
          text: "Organized",
          icon: <Calendar className="w-5 h-5 mr-2" />,
          color: "bg-indigo-700 text-indigo-100"
        },
        {
          text: "Efficient",
          icon: <Plane className="w-5 h-5 mr-2" />,
          color: "bg-purple-700 text-purple-100"
        }
      ]}
      introduction={{
        heading: "Why Business Trip Packing Matters",
        content: [
          "Packing for a business trip requires careful consideration of professional standards, practicality, and efficiency. Unlike leisure travel, business trips demand that you present your best self while navigating the challenges of transportation, accommodation, and varying climates.",
          "A well-prepared business packing list ensures you have everything you need for successful meetings, comfortable travel, and unexpected situations. The right packing strategy can make the difference between a stressful business trip and a productive, successful business journey."
        ]
      }}
      packingTips={businessPackingTips}
      climate="variable"
      activities={["business", "city"]}
      articleContent={businessArticleContent}
      affiliateProducts={businessProducts}
      toolTitle="Business Trip Packing Tool"
      toolDescription="Our smart tool is pre-configured for business travel with climate set to 'variable' and activities including business meetings and city exploration. Just add your destination and dates to generate your custom business packing list!"
    />
  );
}