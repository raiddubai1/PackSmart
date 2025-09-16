"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import Link from "next/link";

export default function Activities() {
  const router = useRouter();
  const [activities, setActivities] = useState<string[]>([]);
  const [specialRequirements, setSpecialRequirements] = useState<string[]>([]);
  const [customActivity, setCustomActivity] = useState("");
  const [customRequirement, setCustomRequirement] = useState("");

  const predefinedActivities = [
    "Hiking", "Swimming", "Business Meetings", "Fine Dining", "Beach", 
    "Sightseeing", "Shopping", "Nightlife", "Photography", "Camping",
    "Skiing/Snowboarding", "Cycling", "Running/Jogging", "Yoga", "Museum visits",
    "Theater/Shows", "Sports Events", "Cooking Classes", "Wildlife Safari", "Fishing"
  ];

  const predefinedRequirements = [
    "Medical needs", "Dietary restrictions", "Accessibility needs", "Allergies",
    "Child care equipment", "Pet supplies", "Religious items", "Work equipment",
    "Sports equipment", "Formal attire required"
  ];

  useEffect(() => {
    // Load previous data
    const tripStyle = localStorage.getItem("tripStyle");
    if (!tripStyle) {
      router.push("/trip-style");
    }
  }, []);

  const handleActivityChange = (activity: string, checked: boolean) => {
    setActivities(prev => 
      checked ? [...prev, activity] : prev.filter(a => a !== activity)
    );
  };

  const handleRequirementChange = (requirement: string, checked: boolean) => {
    setSpecialRequirements(prev => 
      checked ? [...prev, requirement] : prev.filter(r => r !== requirement)
    );
  };

  const addCustomActivity = () => {
    if (customActivity.trim() && !activities.includes(customActivity.trim())) {
      setActivities([...activities, customActivity.trim()]);
      setCustomActivity("");
    }
  };

  const addCustomRequirement = () => {
    if (customRequirement.trim() && !specialRequirements.includes(customRequirement.trim())) {
      setSpecialRequirements([...specialRequirements, customRequirement.trim()]);
      setCustomRequirement("");
    }
  };

  const removeActivity = (activity: string) => {
    setActivities(prev => prev.filter(a => a !== activity));
  };

  const removeRequirement = (requirement: string) => {
    setSpecialRequirements(prev => prev.filter(r => r !== requirement));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for next step
    localStorage.setItem("activities", JSON.stringify(activities));
    localStorage.setItem("specialRequirements", JSON.stringify(specialRequirements));
    router.push("/review");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="mb-8">
          <Link href="/trip-style" className="text-[#ffd166] hover:text-[#e6ba5c]">
            ← Back to Trip Style
          </Link>
        </div>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Step 4: Activities & Special Requirements</CardTitle>
            <CardDescription className="text-gray-300">
              Select the activities you plan to do and any special requirements. This helps us include specific items you'll need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Planned Activities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {predefinedActivities.map((activity) => (
                    <div key={activity} className="flex items-center space-x-2">
                      <Checkbox
                        id={activity.toLowerCase().replace(/\s+/g, "-")}
                        checked={activities.includes(activity)}
                        onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                      />
                      <Label htmlFor={activity.toLowerCase().replace(/\s+/g, "-")} className="text-sm text-gray-300">
                        {activity}
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 space-y-2">
                  <Label className="text-gray-300">Add Custom Activity</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter custom activity"
                      value={customActivity}
                      onChange={(e) => setCustomActivity(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <Button type="button" onClick={addCustomActivity} size="sm" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {activities.length > 0 && (
                  <div className="mt-4">
                    <Label className="text-gray-300">Selected Activities:</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activities.map((activity) => (
                        <div key={activity} className="bg-yellow-900 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-yellow-200">
                          {activity}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeActivity(activity)}
                            className="h-4 w-4 p-0 hover:bg-transparent text-yellow-200 hover:text-white"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Special Requirements</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {predefinedRequirements.map((requirement) => (
                    <div key={requirement} className="flex items-center space-x-2">
                      <Checkbox
                        id={requirement.toLowerCase().replace(/\s+/g, "-")}
                        checked={specialRequirements.includes(requirement)}
                        onCheckedChange={(checked) => handleRequirementChange(requirement, checked as boolean)}
                      />
                      <Label htmlFor={requirement.toLowerCase().replace(/\s+/g, "-")} className="text-sm text-gray-300">
                        {requirement}
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 space-y-2">
                  <Label className="text-gray-300">Add Custom Requirement</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter custom requirement"
                      value={customRequirement}
                      onChange={(e) => setCustomRequirement(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <Button type="button" onClick={addCustomRequirement} size="sm" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {specialRequirements.length > 0 && (
                  <div className="mt-4">
                    <Label className="text-gray-300">Selected Requirements:</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {specialRequirements.map((requirement) => (
                        <div key={requirement} className="bg-yellow-900 px-3 py-1 rounded-full text-sm flex items-center gap-1 text-yellow-200">
                          {requirement}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeRequirement(requirement)}
                            className="h-4 w-4 p-0 hover:bg-transparent text-yellow-200 hover:text-white"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <Link href="/trip-style">
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