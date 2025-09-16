"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Calendar, 
  MapPin, 
  Camera, 
  BookOpen,
  Star,
  ShoppingCart,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateLink: string;
  rating: number;
  features: string[];
}

interface PackingTip {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

interface PackingListTemplateProps {
  title: string;
  subtitle: string;
  heroGradient: string;
  badges: Array<{
    text: string;
    icon: React.ReactNode;
    color: string;
  }>;
  introduction: {
    heading: string;
    content: string[];
  };
  packingTips: PackingTip[];
  climate: string;
  activities: string[];
  articleContent: string;
  affiliateProducts: Product[];
  toolTitle: string;
  toolDescription: string;
}

export default function PackingListTemplate({
  title,
  subtitle,
  heroGradient,
  badges,
  introduction,
  packingTips,
  climate,
  activities,
  articleContent,
  affiliateProducts,
  toolTitle,
  toolDescription
}: PackingListTemplateProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destination: "",
    arrivalDate: "",
    departureDate: "",
    accommodation: "",
    transportation: [] as string[],
    tripType: "",
    climate: climate,
    luggage: "",
    packingStyle: [50] as [number],
    activities: activities,
    specialRequirements: [] as string[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      destination: formData.destination || title.replace("The Ultimate ", "").replace(" Packing List", ""),
      arrivalDate: formData.arrivalDate,
      departureDate: formData.departureDate,
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
      <div className={`relative ${heroGradient} text-white`}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className={`${badge.color} text-lg px-4 py-2`}>
                  {badge.icon}
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            {introduction.heading}
          </h2>
          {introduction.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Packing Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packingTips.map((tip, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  {tip.icon}
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  {tip.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tool Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Create Your Personalized {title.replace("The Ultimate ", "").replace(" Packing List", "")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {toolDescription}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Camera className="w-6 h-6 text-[#ffd166]" />
                  {toolTitle}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Pre-configured for {title.toLowerCase().replace("the ultimate ", "").replace(" packing list", "")} with climate set to "{climate}" and activities including {activities.join(", ")}.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Trip Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-gray-300">Destination *</Label>
                    <Input
                      id="destination"
                      placeholder="e.g., Paris, Tokyo, New York"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                      className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accommodation" className="text-gray-300">Accommodation Type</Label>
                    <Select value={formData.accommodation} onValueChange={(value) => handleInputChange("accommodation", value)}>
                      <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select accommodation type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                        <SelectItem value="hotel" className="text-gray-900 hover:bg-gray-200">Hotel</SelectItem>
                        <SelectItem value="resort" className="text-gray-900 hover:bg-gray-200">Resort</SelectItem>
                        <SelectItem value="airbnb" className="text-gray-900 hover:bg-gray-200">Airbnb</SelectItem>
                        <SelectItem value="hostel" className="text-gray-900 hover:bg-gray-200">Hostel</SelectItem>
                        <SelectItem value="guesthouse" className="text-gray-900 hover:bg-gray-200">Guest House</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate" className="text-gray-300">Arrival Date</Label>
                    <Input
                      id="arrivalDate"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => handleInputChange("arrivalDate", e.target.value)}
                      className="bg-[#E8F0FE] border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departureDate" className="text-gray-300">Departure Date</Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => handleInputChange("departureDate", e.target.value)}
                      className="bg-[#E8F0FE] border-gray-300 text-gray-900"
                    />
                  </div>
                </div>

                {/* Transportation */}
                <div className="space-y-3">
                  <Label className="text-gray-300">Transportation</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {["plane", "car", "train", "bus"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={formData.transportation.includes(option)}
                          onCheckedChange={(checked) => handleTransportationChange(option, checked as boolean)}
                          className="data-[state=checked]:bg-[#ffd166] data-[state=checked]:border-[#ffd166]"
                        />
                        <Label htmlFor={option} className="text-gray-300 capitalize">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trip Type */}
                <div className="space-y-2">
                  <Label className="text-gray-300">Trip Type</Label>
                  <Select value={formData.tripType} onValueChange={(value) => handleInputChange("tripType", value)}>
                    <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectItem value="leisure" className="text-gray-900 hover:bg-gray-200">Leisure</SelectItem>
                      <SelectItem value="business" className="text-gray-900 hover:bg-gray-200">Business</SelectItem>
                      <SelectItem value="adventure" className="text-gray-900 hover:bg-gray-200">Adventure</SelectItem>
                      <SelectItem value="family" className="text-gray-900 hover:bg-gray-200">Family</SelectItem>
                      <SelectItem value="romantic" className="text-gray-900 hover:bg-gray-200">Romantic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Climate */}
                <div className="space-y-2">
                  <Label className="text-gray-300">Climate</Label>
                  <Select value={formData.climate} onValueChange={(value) => handleInputChange("climate", value)}>
                    <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select climate" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectItem value="warm" className="text-gray-900 hover:bg-gray-200">Warm</SelectItem>
                      <SelectItem value="cold" className="text-gray-900 hover:bg-gray-200">Cold</SelectItem>
                      <SelectItem value="variable" className="text-gray-900 hover:bg-gray-200">Variable</SelectItem>
                      <SelectItem value="tropical" className="text-gray-900 hover:bg-gray-200">Tropical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Luggage */}
                <div className="space-y-2">
                  <Label className="text-gray-300">Luggage Type</Label>
                  <Select value={formData.luggage} onValueChange={(value) => handleInputChange("luggage", value)}>
                    <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select luggage type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectItem value="backpack" className="text-gray-900 hover:bg-gray-200">Backpack</SelectItem>
                      <SelectItem value="suitcase" className="text-gray-900 hover:bg-gray-200">Suitcase</SelectItem>
                      <SelectItem value="duffel" className="text-gray-900 hover:bg-gray-200">Duffel Bag</SelectItem>
                      <SelectItem value="carry-on" className="text-gray-900 hover:bg-gray-200">Carry-on</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Packing Style */}
                <div className="space-y-4">
                  <Label className="text-gray-300">Packing Style: {getPackingStyleLabel(formData.packingStyle[0])}</Label>
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
                    <span>Everything-but-the-kitchen-sink</span>
                  </div>
                </div>

                {/* Activities */}
                <div className="space-y-3">
                  <Label className="text-gray-300">Activities</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activities.map((activity) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity}
                          checked={formData.activities.includes(activity)}
                          onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                          className="data-[state=checked]:bg-[#ffd166] data-[state=checked]:border-[#ffd166]"
                        />
                        <Label htmlFor={activity} className="text-gray-300 capitalize">
                          {activity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-3">
                  <Label className="text-gray-300">Special Requirements</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {["vegetarian", "medical", "accessibility", "pets"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={formData.specialRequirements.includes(option)}
                          onCheckedChange={(checked) => {
                            setFormData(prev => ({
                              ...prev,
                              specialRequirements: checked
                                ? [...prev.specialRequirements, option]
                                : prev.specialRequirements.filter(r => r !== option)
                            }));
                          }}
                          className="data-[state=checked]:bg-[#ffd166] data-[state=checked]:border-[#ffd166]"
                        />
                        <Label htmlFor={option} className="text-gray-300 capitalize">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateList}
                  className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 font-semibold py-3"
                  size="lg"
                >
                  Generate My {title.replace("The Ultimate ", "").replace(" Packing List", "")} List
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Recommended Products for Your {title.replace("The Ultimate ", "").replace(" Packing List", "")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Curated gear and essentials to make your trip perfect. These are our top picks for travelers like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliateProducts.map((product) => (
              <Card key={product.id} className="bg-gray-800 border-gray-700 hover:border-[#ffd166] transition-colors">
                <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <span>{product.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{product.rating}</span>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#ffd166]">{product.price}</span>
                      <Button asChild size="sm" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Shop Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-4xl mx-auto mb-16">
          <div dangerouslySetInnerHTML={{ __html: articleContent }} />
        </div>
      </div>
    </>
  );
}