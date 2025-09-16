"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TripStyle() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tripType: "",
    climate: "",
    luggage: "",
    packingStyle: [50] as [number]
  });

  useEffect(() => {
    // Load previous data
    const travelerProfile = localStorage.getItem("travelerProfile");
    if (!travelerProfile) {
      router.push("/traveler-profile");
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePackingStyleChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, packingStyle: [value[0]] as [number] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for next step
    localStorage.setItem("tripStyle", JSON.stringify(formData));
    router.push("/activities");
  };

  const getPackingStyleLabel = (value: number) => {
    if (value <= 20) return "Minimalist";
    if (value <= 40) return "Light Packer";
    if (value <= 60) return "Moderate";
    if (value <= 80) return "Heavy Packer";
    return "Everything-but-the-kitchen-sink";
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="mb-8">
          <Link href="/traveler-profile" className="text-[#ffd166] hover:text-[#e6ba5c]">
            ← Back to Traveler Profile
          </Link>
        </div>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Step 3: Trip Style & Preferences</CardTitle>
            <CardDescription className="text-gray-300">
              Tell us about your travel style and preferences. This helps us tailor your packing list to match your needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label className="text-gray-300">Trip Type</Label>
                <RadioGroup 
                  value={formData.tripType} 
                  onValueChange={(value) => handleInputChange("tripType", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  {["Business", "Leisure", "Backpacking", "Luxury", "Adventure", "Cultural"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} />
                      <Label htmlFor={type.toLowerCase()} className="text-gray-300">{type}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-300">Climate Expectation</Label>
                <RadioGroup 
                  value={formData.climate} 
                  onValueChange={(value) => handleInputChange("climate", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  {["Hot", "Warm", "Cool", "Cold", "Variable"].map((climate) => (
                    <div key={climate} className="flex items-center space-x-2">
                      <RadioGroupItem value={climate.toLowerCase()} id={climate.toLowerCase()} />
                      <Label htmlFor={climate.toLowerCase()} className="text-gray-300">{climate}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="luggage" className="text-gray-300">Luggage Preference</Label>
                <Select value={formData.luggage} onValueChange={(value) => handleInputChange("luggage", value)}>
                  <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                    <SelectValue placeholder="Select luggage type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                    <SelectItem value="backpack" className="text-gray-900 hover:bg-gray-200">Backpack</SelectItem>
                    <SelectItem value="suitcase" className="text-gray-900 hover:bg-gray-200">Suitcase</SelectItem>
                    <SelectItem value="carry-on" className="text-gray-900 hover:bg-gray-200">Carry-on only</SelectItem>
                    <SelectItem value="duffel" className="text-gray-900 hover:bg-gray-200">Duffel bag</SelectItem>
                    <SelectItem value="mixed" className="text-gray-900 hover:bg-gray-200">Mixed luggage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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

              <div className="flex justify-between pt-4">
                <Link href="/traveler-profile">
                  <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">Back</Button>
                </Link>
                <Button type="submit" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  Next
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}