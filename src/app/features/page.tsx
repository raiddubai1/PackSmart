import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cloud, 
  MapPin, 
  Users, 
  Package, 
  Smartphone,
  Globe,
  Shield,
  Zap,
  Star,
  Heart,
  Clock,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function Features() {
  const coreFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Advanced artificial intelligence analyzes your trip details to provide personalized packing suggestions.",
      benefits: ["Smart suggestions", "Personalized recommendations", "Continuous learning"]
    },
    {
      icon: Cloud,
      title: "Weather Integration",
      description: "Real-time weather data ensures you're prepared for conditions at your destination.",
      benefits: ["Real-time updates", "Seasonal adjustments", "Weather-specific items"]
    },
    {
      icon: MapPin,
      title: "Destination Intelligence",
      description: "Location-specific recommendations based on cultural norms, climate, and local conditions.",
      benefits: ["Cultural awareness", "Local regulations", "Destination-specific items"]
    },
    {
      icon: Users,
      title: "Multi-Traveler Support",
      description: "Create packing lists for multiple travelers with different needs and preferences.",
      benefits: ["Individual profiles", "Family planning", "Group coordination"]
    }
  ];

  const advancedFeatures = [
    {
      icon: Package,
      title: "Smart Categorization",
      description: "Items are automatically organized into logical categories for easy packing and unpacking.",
      benefits: ["Clothing", "Toiletries", "Documents", "Electronics", "Health & Medical"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your packing lists anywhere, anytime with our responsive mobile-friendly design.",
      benefits: ["Offline access", "Mobile app", "Cross-device sync"]
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Support for destinations worldwide with local knowledge and international travel considerations.",
      benefits: ["150+ countries", "Travel adapters", "International documents"]
    },
    {
      icon: Shield,
      title: "Essential Items Protection",
      description: "Never forget crucial items like medications, documents, or travel essentials.",
      benefits: ["Document checklist", "Medical reminders", "Essential alerts"]
    }
  ];

  const userExperience = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate comprehensive packing lists in seconds, not hours.",
      stat: "Under 2 minutes"
    },
    {
      icon: Star,
      title: "Highly Rated",
      description: "Loved by travelers worldwide for our accuracy and ease of use.",
      stat: "4.9/5 stars"
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Designed with travelers' needs and feedback at the core.",
      stat: "50K+ users"
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 access to your packing lists and travel planning tools.",
      stat: "99.9% uptime"
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
            <Link href="/features" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Features
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful <span className="text-[#ffd166]">Features</span> for Smart Travelers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the comprehensive tools and intelligent features that make PackSmart the 
            ultimate travel companion for modern adventurers.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Badge className="bg-[#ffd166] text-gray-900">AI-Powered</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">User-Friendly</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Mobile Ready</Badge>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600 hover:border-[#ffd166] transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Benefits:</h4>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#ffd166]" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-[#ffd166] transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {feature.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Includes:</h4>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#ffd166]" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Experience Stats */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Travelers Love PackSmart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userExperience.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600 text-center">
                  <CardHeader className="pb-2">
                    <Icon className="h-12 w-12 text-[#ffd166] mx-auto mb-2" />
                    <CardTitle className="text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-2">
                      {item.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-[#ffd166]">{item.stat}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">PackSmart vs Traditional Methods</h2>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Traditional Lists</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Generic suggestions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">No weather integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Time-consuming to create</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Easily forgotten items</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Other Apps</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Basic templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Limited personalization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Manual weather checks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Subscription fees</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#ffd166] mb-4">PackSmart</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffd166] rounded-full"></div>
                      <span className="text-gray-300 text-sm">AI-powered recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffd166] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Real-time weather data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffd166] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Generated in seconds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ffd166] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Completely free</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future of Packing?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of travelers who have transformed their packing experience with PackSmart's advanced features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/trip-details">
                Try It Free
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link href="/how-it-works">
                See How It Works
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
              Advanced features for smarter travel.
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