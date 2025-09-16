import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Settings, 
  Activity, 
  CheckCircle, 
  Package,
  Clock,
  Zap,
  Shield,
  Star
} from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Enter Your Trip Details",
      description: "Tell us about your destination, dates, and accommodation preferences.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Add Traveler Information",
      description: "Provide details about who's traveling to help us personalize recommendations.",
      color: "bg-green-500"
    },
    {
      icon: Settings,
      title: "Set Your Travel Style",
      description: "Choose your travel preferences, climate expectations, and packing style.",
      color: "bg-purple-500"
    },
    {
      icon: Activity,
      title: "Select Activities",
      description: "Pick your planned activities and any special requirements.",
      color: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Review & Generate",
      description: "Review all your information and let our AI create your perfect packing list.",
      color: "bg-red-500"
    },
    {
      icon: Package,
      title: "Get Your Packing List",
      description: "Receive a comprehensive, categorized packing list tailored to your needs.",
      color: "bg-yellow-500"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Recommendations",
      description: "Our intelligent algorithm analyzes your trip details to suggest exactly what you need."
    },
    {
      icon: Clock,
      title: "Weather Integration",
      description: "Real-time weather data ensures you're prepared for conditions at your destination."
    },
    {
      icon: Shield,
      title: "Essential Items Protection",
      description: "Never forget crucial items like medications, documents, or travel essentials."
    },
    {
      icon: Star,
      title: "Personalized Suggestions",
      description: "Get recommendations based on your travel style, activities, and preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900 px-8 py-4 shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-[#ffd166]">Pack</span><span className="text-gray-400">Smart</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/trip-details" className="text-gray-300 hover:text-white transition-colors">
              Create List
            </Link>
            <Link href="/how-it-works" className="text-[#ffd166] hover:text-[#e6ba5c]">
              How It Works
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How <span className="text-[#ffd166]">PackSmart</span> Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Creating the perfect packing list is simple with our intelligent, step-by-step process. 
            Get personalized recommendations in minutes, not hours.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Badge className="bg-[#ffd166] text-gray-900">6 Simple Steps</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">AI-Powered</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">100% Free</Badge>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">6 Simple Steps to Perfect Packing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${step.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Makes PackSmart Special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Powered by Advanced AI</h2>
              <p className="text-gray-300 mb-4">
                PackSmart uses cutting-edge artificial intelligence to analyze thousands of data points 
                and create truly personalized packing recommendations.
              </p>
              <p className="text-gray-300 mb-6">
                Our AI considers weather patterns, cultural norms, activity requirements, 
                transportation methods, and personal preferences to generate the perfect list for your unique journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166]" />
                  <span className="text-gray-300">Real-time weather integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166]" />
                  <span className="text-gray-300">Activity-based recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166]" />
                  <span className="text-gray-300">Personalized to your travel style</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166]" />
                  <span className="text-gray-300">Continuous learning and improvement</span>
                </div>
              </div>
            </div>
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Natural Language Processing</h4>
                  <p className="text-gray-300 text-sm">Understands your travel preferences and requirements</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Machine Learning</h4>
                  <p className="text-gray-300 text-sm">Learns from user feedback to improve recommendations</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Data Analysis</h4>
                  <p className="text-gray-300 text-sm">Analyzes weather, activities, and destination data</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Predictive Modeling</h4>
                  <p className="text-gray-300 text-sm">Anticipates needs based on trip characteristics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Smart Packing?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of travelers who have revolutionized their packing experience with PackSmart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/trip-details">
                Start Packing Smart
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link href="/features">
                Explore Features
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#ffd166]">Pack</span><span className="text-gray-400">Smart</span>
            </div>
            <p className="text-gray-300 mb-4">
              Smart packing for smarter travelers.
            </p>
            <p className="text-gray-400">
              © 2024 PackSmart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}