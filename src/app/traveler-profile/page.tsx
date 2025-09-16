"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus } from "lucide-react";
import Link from "next/link";

interface Traveler {
  id: string;
  ageRange: string;
  gender: string;
}

export default function TravelerProfile() {
  const router = useRouter();
  const [travelers, setTravelers] = useState<Traveler[]>([{ id: "1", ageRange: "", gender: "" }]);
  const [tripDetails, setTripDetails] = useState<any>(null);

  useEffect(() => {
    // Load trip details from localStorage
    const savedTripDetails = localStorage.getItem("tripDetails");
    if (savedTripDetails) {
      setTripDetails(JSON.parse(savedTripDetails));
    }
  }, []);

  const addTraveler = () => {
    setTravelers([...travelers, { id: `traveler-${travelers.length + 1}`, ageRange: "", gender: "" }]);
  };

  const removeTraveler = (id: string) => {
    if (travelers.length > 1) {
      setTravelers(travelers.filter(traveler => traveler.id !== id));
    }
  };

  const updateTraveler = (id: string, field: string, value: string) => {
    setTravelers(travelers.map(traveler => 
      traveler.id === id ? { ...traveler, [field]: value } : traveler
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store traveler data in localStorage for next step
    localStorage.setItem("travelerProfile", JSON.stringify(travelers));
    router.push("/trip-style");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="mb-8">
          <Link href="/trip-details" className="text-[#ffd166] hover:text-[#e6ba5c]">
            ← Back to Trip Details
          </Link>
        </div>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Step 2: Traveler Profile</CardTitle>
            <CardDescription className="text-gray-300">
              Tell us about the travelers. This helps us customize the packing list for each person's needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {travelers.map((traveler, index) => (
                <div key={traveler.id} className="border border-gray-700 rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Traveler {index + 1}</h3>
                    {travelers.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeTraveler(traveler.id)}
                        className="bg-[#E8F0FE] border-gray-300 text-gray-900 hover:bg-[#D2E3FC]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`age-${traveler.id}`} className="text-gray-300">Age Range</Label>
                      <Select 
                        value={traveler.ageRange} 
                        onValueChange={(value) => updateTraveler(traveler.id, "ageRange", value)}
                      >
                        <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                          <SelectItem value="child" className="text-gray-900 hover:bg-gray-200">Child (0-12)</SelectItem>
                          <SelectItem value="teen" className="text-gray-900 hover:bg-gray-200">Teen (13-17)</SelectItem>
                          <SelectItem value="adult" className="text-gray-900 hover:bg-gray-200">Adult (18-64)</SelectItem>
                          <SelectItem value="senior" className="text-gray-900 hover:bg-gray-200">Senior (65+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor={`gender-${traveler.id}`} className="text-gray-300">Gender</Label>
                      <Select 
                        value={traveler.gender} 
                        onValueChange={(value) => updateTraveler(traveler.id, "gender", value)}
                      >
                        <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                          <SelectItem value="male" className="text-gray-900 hover:bg-gray-200">Male</SelectItem>
                          <SelectItem value="female" className="text-gray-900 hover:bg-gray-200">Female</SelectItem>
                          <SelectItem value="non-binary" className="text-gray-900 hover:bg-gray-200">Non-binary</SelectItem>
                          <SelectItem value="prefer-not-to-say" className="text-gray-900 hover:bg-gray-200">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" onClick={addTraveler} className="bg-[#E8F0FE] border-gray-300 text-gray-900 hover:bg-[#D2E3FC]">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Traveler
                </Button>
              </div>

              <div className="flex justify-between pt-4">
                <Link href="/trip-details">
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