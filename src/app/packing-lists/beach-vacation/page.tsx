"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Plane, 
  Calendar as CalendarIcon, 
  MapPin, 
  Sun, 
  Waves, 
  Umbrella, 
  Camera, 
  BookOpen,
  Star,
  ShoppingCart,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Calendar as LucideCalendar
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdSenseAd from "@/components/ads/AdSenseAd";
import { format } from "date-fns";

interface BeachProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateLink: string;
  rating: number;
  features: string[];
}

const beachProducts: BeachProduct[] = [
  {
    id: "1",
    name: "Premium Beach Towel Set",
    description: "Ultra-absorbent, quick-dry microfiber towels perfect for beach days. Sand-resistant and compact.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1601925418156-7c9588f59d7c?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08XYZ1234?tag=packsmart-20",
    rating: 4.8,
    features: ["Sand-resistant", "Quick-dry", "Compact", "Includes carry bag"]
  },
  {
    id: "2",
    name: "Waterproof Phone Pouch",
    description: "100% waterproof protection for your phone while swimming or at the beach. Touchscreen compatible.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07ABC5678?tag=packsmart-20",
    rating: 4.6,
    features: ["IPX8 waterproof", "Touchscreen compatible", "Floatable", "Neck strap included"]
  },
  {
    id: "3",
    name: "Portable Beach Umbrella",
    description: "Lightweight and sturdy beach umbrella with UV protection. Easy setup and wind-resistant design.",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B09DEF9012?tag=packsmart-20",
    rating: 4.7,
    features: ["UPF 50+ protection", "Wind-resistant", "Lightweight", "Carry bag included"]
  },
  {
    id: "4",
    name: "Beach Bag Tote",
    description: "Spacious waterproof beach bag with multiple compartments. Perfect for all your beach essentials.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B08GHI3456?tag=packsmart-20",
    rating: 4.5,
    features: ["Waterproof", "Multiple pockets", "Reinforced handles", "Sand-proof bottom"]
  },
  {
    id: "5",
    name: "Reef-Safe Sunscreen Bundle",
    description: "Coral reef-safe sunscreen SPF 50+. Eco-friendly and effective protection for your skin.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    affiliateLink: "https://www.amazon.com/dp/B07JKL7890?tag=packsmart-20",
    rating: 4.9,
    features: ["Reef-safe", "SPF 50+", "Water-resistant", "Eco-friendly"]
  }
];

export default function BeachVacationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destination: "",
    arrivalDate: undefined as Date | undefined,
    departureDate: undefined as Date | undefined,
    accommodation: "",
    transportation: [] as string[],
    tripType: "",
    climate: "warm",
    luggage: "",
    packingStyle: [50] as [number],
    activities: ["swimming", "beach"] as string[],
    specialRequirements: [] as string[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (field: 'arrivalDate' | 'departureDate', date: Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: date }));
  };

  const handleTransportationChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      transportation: checked
        ? [...prev.transportation, value]
        : prev.transportation.filter(t => t !== value)
    }));
  };

  const handlePackingStyleChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, packingStyle: [value[0]] as [number] }));
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    setFormData(prev => 
      checked ? [...prev.activities, activity] : prev.activities.filter(a => a !== activity)
    );
  };

  const getPackingStyleLabel = (value: number) => {
    if (value <= 20) return "Minimalist";
    if (value <= 40) return "Light Packer";
    if (value <= 60) return "Moderate";
    if (value <= 80) return "Heavy Packer";
    return "Everything-but-the-kitchen-sink";
  };

  const handleGenerateList = () => {
    // Store all form data in localStorage
    localStorage.setItem("tripDetails", JSON.stringify({
      destination: formData.destination || "Beach Destination",
      arrivalDate: formData.arrivalDate ? formData.arrivalDate.toISOString().split('T')[0] : '',
      departureDate: formData.departureDate ? formData.departureDate.toISOString().split('T')[0] : '',
      accommodation: formData.accommodation,
      transportation: formData.transportation
    }));
    
    localStorage.setItem("travelerProfile", JSON.stringify([{
      id: "1",
      ageRange: "25-34",
      gender: "prefer-not-to-say"
    }]));
    
    localStorage.setItem("tripStyle", JSON.stringify({
      tripType: formData.tripType || "leisure",
      climate: formData.climate,
      luggage: formData.luggage,
      packingStyle: formData.packingStyle
    }));
    
    localStorage.setItem("activities", JSON.stringify(formData.activities));
    localStorage.setItem("specialRequirements", JSON.stringify(formData.specialRequirements));
    
    // Navigate to results
    router.push("/results");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Ultimate Beach Vacation Packing List
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Complete guide to packing perfectly for your beach getaway. Never forget essential items again with our expert-curated checklist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-blue-700 text-blue-100 text-lg px-4 py-2">
                <Sun className="w-5 h-5 mr-2" />
                Expert Tips
              </Badge>
              <Badge variant="secondary" className="bg-teal-700 text-teal-100 text-lg px-4 py-2">
                <Waves className="w-5 h-5 mr-2" />
                Beach Essentials
              </Badge>
              <Badge variant="secondary" className="bg-cyan-700 text-cyan-100 text-lg px-4 py-2">
                <Umbrella className="w-5 h-5 mr-2" />
                Smart Packing
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Leaderboard Ad below Hero */}
      <div className="flex justify-center py-8">
        <AdSenseAd slot="leaderboard" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Beach Vacation Packing Matters
          </h2>
          <p className="text-gray-300 mb-6">
            Packing for a beach vacation requires careful consideration of unique challenges: sand, saltwater, sun exposure, and limited space. A well-prepared beach packing list ensures you have everything you need for comfort, safety, and enjoyment while avoiding overpacking.
          </p>
          
          {/* Inline Rectangle Ad */}
          <div className="flex justify-center my-8">
            <AdSenseAd slot="inline-rectangle" />
          </div>
          
          <p className="text-gray-300 mb-6">
            Whether you're heading to a tropical paradise, a coastal getaway, or a lakeside retreat, having the right items can make the difference between a stressful vacation and a perfect beach day. Our comprehensive guide covers everything from essential sun protection to entertainment options for those relaxing beach hours.
          </p>
        </div>

        {/* Beach Packing Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sun className="w-6 h-6 text-yellow-400" />
                Sun Protection Essentials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>SPF 50+ sunscreen (reef-safe preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Lip balm with SPF protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Wide-brimmed hat or cap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>UV-protective sunglasses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Lightweight cover-up or rash guard</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Waves className="w-6 h-6 text-blue-400" />
                Water Activities Gear
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Quick-dry swimwear (2-3 sets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Waterproof phone case or pouch</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Flip-flops or water shoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Beach towel (microfiber recommended)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Snorkel gear (if interested)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Umbrella className="w-6 h-6 text-teal-400" />
                Beach Comfort Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Beach umbrella or pop-up tent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Cooler with drinks and snacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Beach chair or mat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Waterproof speaker for music</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Books or e-reader</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Tool Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Create Your Personalized Beach Packing List
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our smart tool is pre-configured for beach vacations. Just add your destination and dates, then generate your custom list!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Camera className="w-6 h-6 text-[#ffd166]" />
                  Beach Vacation Packing Tool
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Pre-configured for beach trips with climate set to "warm" and activities including swimming and beach time.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Trip Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-gray-300">Destination *</Label>
                    <Input
                      id="destination"
                      placeholder="e.g., Miami, Hawaii, Bali"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accommodation" className="text-gray-300">Accommodation Type</Label>
                    <Select value={formData.accommodation} onValueChange={(value) => handleInputChange("accommodation", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select accommodation type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="hotel" className="text-white hover:bg-gray-600">Hotel</SelectItem>
                        <SelectItem value="resort" className="text-white hover:bg-gray-600">Resort</SelectItem>
                        <SelectItem value="airbnb" className="text-white hover:bg-gray-600">Airbnb</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-gray-600">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate" className="text-gray-300">Arrival Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white border-gray-300">
                        <Calendar
                          mode="single"
                          selected={formData.arrivalDate}
                          onSelect={(date) => handleDateChange('arrivalDate', date)}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departureDate" className="text-gray-300">Departure Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.departureDate ? format(formData.departureDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white border-gray-300">
                        <Calendar
                          mode="single"
                          selected={formData.departureDate}
                          onSelect={(date) => handleDateChange('departureDate', date)}
                          disabled={(date) => 
                            date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                            (formData.arrivalDate ? date < formData.arrivalDate : false)
                          }
                          initialFocus
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Transportation */}
                <div className="space-y-3">
                  <Label className="text-gray-300">Transportation Method</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Flight", "Car", "Train", "Bus"].map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <Checkbox
                          id={method.toLowerCase()}
                          checked={formData.transportation.includes(method)}
                          onCheckedChange={(checked) => handleTransportationChange(method, checked as boolean)}
                        />
                        <Label htmlFor={method.toLowerCase()} className="text-gray-300">{method}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trip Style - Pre-configured */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-gray-300">Trip Type</Label>
                    <Select value={formData.tripType} onValueChange={(value) => handleInputChange("tripType", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="leisure" className="text-white hover:bg-gray-600">Leisure</SelectItem>
                        <SelectItem value="adventure" className="text-white hover:bg-gray-600">Adventure</SelectItem>
                        <SelectItem value="luxury" className="text-white hover:bg-gray-600">Luxury</SelectItem>
                        <SelectItem value="backpacking" className="text-white hover:bg-gray-600">Backpacking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-300">Climate (Pre-set for Beach)</Label>
                    <div className="p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-yellow-400" />
                        <span className="text-blue-200 font-medium">Warm - Perfect for beach weather!</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Luggage */}
                <div className="space-y-2">
                  <Label htmlFor="luggage" className="text-gray-300">Luggage Preference</Label>
                  <Select value={formData.luggage} onValueChange={(value) => handleInputChange("luggage", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select luggage type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="suitcase" className="text-white hover:bg-gray-600">Suitcase</SelectItem>
                      <SelectItem value="backpack" className="text-white hover:bg-gray-600">Backpack</SelectItem>
                      <SelectItem value="carry-on" className="text-white hover:bg-gray-600">Carry-on only</SelectItem>
                      <SelectItem value="mixed" className="text-white hover:bg-gray-600">Mixed luggage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Packing Style */}
                <div className="space-y-4">
                  <Label className="text-gray-300">Packing Style</Label>
                  <div className="space-y-2">
                    <Slider
                      value={formData.packingStyle}
                      onValueChange={handlePackingStyleChange}
                      max={100}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Minimalist</span>
                      <span className="font-medium text-white">{getPackingStyleLabel(formData.packingStyle[0])}</span>
                      <span>Everything-but-the-kitchen-sink</span>
                    </div>
                  </div>
                </div>

                {/* Activities - Pre-configured */}
                <div className="space-y-4">
                  <Label className="text-gray-300">Activities (Pre-selected for Beach)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Swimming", "Beach", "Sightseeing", "Photography", "Fine Dining", "Nightlife"].map((activity) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity.toLowerCase().replace(/\s+/g, "-")}
                          checked={formData.activities.includes(activity.toLowerCase())}
                          onCheckedChange={(checked) => handleActivityChange(activity.toLowerCase(), checked as boolean)}
                        />
                        <Label htmlFor={activity.toLowerCase().replace(/\s+/g, "-")} className="text-sm text-gray-300">
                          {activity}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-teal-900/30 border border-teal-700 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Waves className="w-5 h-5 text-teal-400" />
                      <span className="text-teal-200 font-medium">Swimming & Beach activities pre-selected for you!</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateList}
                  className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 font-semibold py-3"
                >
                  Generate My Beach Packing List
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Horizontal Ad after Tool Form */}
        <div className="flex justify-center py-8">
          <AdSenseAd slot="horizontal" />
        </div>

        {/* Affiliate Products Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Recommended Beach Gear
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've curated the best beach essentials to make your vacation perfect. These are tried-and-tested products that beach lovers swear by.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beachProducts.map((product) => (
              <Card key={product.id} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-gray-300">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#ffd166]">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-300">{product.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => window.open(product.affiliateLink, '_blank')}
                      className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View on Amazon
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              As an Amazon Associate, we earn from qualifying purchases. Your support helps us keep PackSmart free for everyone!
            </p>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pro Beach Packing Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Before You Go</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Check weather forecasts for your destination</li>
                <li>Research local beach regulations and restrictions</li>
                <li>Make copies of important documents</li>
                <li>Download offline maps and translation apps</li>
                <li>Inform your bank about travel plans</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">At the Beach</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Apply sunscreen 30 minutes before sun exposure</li>
                <li>Reapply sunscreen every 2 hours or after swimming</li>
                <li>Stay hydrated by bringing plenty of water</li>
                <li>Seek shade during peak sun hours (10am-4pm)</li>
                <li>Respect local wildlife and marine life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}