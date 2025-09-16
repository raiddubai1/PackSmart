"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  Package, 
  Shirt, 
  Droplets, 
  FileText, 
  Zap, 
  Heart, 
  Camera,
  Plane,
  Home,
  MapPin,
  Calendar,
  Download,
  Share2,
  RotateCcw,
  Cloud,
  Loader2
} from "lucide-react";
import Link from "next/link";

export default function Results() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateAndNavigateToList();
  }, []);

  const generateAndNavigateToList = async () => {
    try {
      // Load all data from localStorage
      const savedTripDetails = localStorage.getItem("tripDetails");
      const savedTravelerProfile = localStorage.getItem("travelerProfile");
      const savedTripStyle = localStorage.getItem("tripStyle");
      const savedActivities = localStorage.getItem("activities");
      const savedSpecialRequirements = localStorage.getItem("specialRequirements");

      if (!savedTripDetails || !savedTravelerProfile || !savedTripStyle) {
        setError("Missing trip information. Please start over.");
        setLoading(false);
        return;
      }

      const tripDetails = JSON.parse(savedTripDetails);
      const travelerProfile = JSON.parse(savedTravelerProfile);
      const tripStyle = JSON.parse(savedTripStyle);
      const activities = savedActivities ? JSON.parse(savedActivities) : [];
      const specialRequirements = savedSpecialRequirements ? JSON.parse(savedSpecialRequirements) : [];

      // Call API to generate packing list and get slug
      const response = await fetch('/api/generate-packing-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tripDetails,
          travelerProfile,
          tripStyle,
          activities,
          specialRequirements
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate packing list');
      }

      const data = await response.json();
      
      // Check if there's a warning (database save failed but packing list was generated)
      if (data.warning) {
        console.warn('Warning:', data.warning);
      }
      
      // Navigate to the dynamic route with the slug
      router.push(`/list/${data.slug}`);
      
    } catch (err) {
      console.error('Error generating packing list:', err);
      setError('Failed to generate packing list. Please try again.');
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-[#ffd166]" />
            <p className="text-lg text-white">Creating your personalized packing list...</p>
            <p className="text-sm text-gray-400 mt-2">This will only take a moment</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
          <Card className="max-w-md bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Error</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">{error}</p>
              <Button onClick={handleStartOver} className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">Start Over</Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  // This should not be reached as the user will be redirected
  return null;
}