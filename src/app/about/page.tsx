import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function About() {
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
            <Link href="/about" className="text-[#ffd166] hover:text-[#e6ba5c]">
              About Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#ffd166]">PackSmart</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're passionate about making travel planning easier and more enjoyable for everyone. 
            Our mission is to help travelers pack smarter, not harder.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At PackSmart, we believe that the journey begins with proper preparation. 
                We understand the stress of packing and the fear of forgetting essential items. 
                That's why we created an intelligent platform that takes the guesswork out of packing.
              </p>
              <p className="text-gray-300 mb-6">
                Our goal is to make travel planning accessible, efficient, and enjoyable for 
                everyone from backpackers to business travelers, families to solo adventurers.
              </p>
              <div className="flex gap-4">
                <Badge className="bg-[#ffd166] text-gray-900">AI-Powered</Badge>
                <Badge className="bg-[#ffd166] text-gray-900">User-Friendly</Badge>
                <Badge className="bg-[#ffd166] text-gray-900">Travel Focused</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-[#ffd166] mx-auto mb-2" />
                  <CardTitle className="text-white">50K+</CardTitle>
                  <CardDescription className="text-gray-300">Happy Travelers</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-[#ffd166] mx-auto mb-2" />
                  <CardTitle className="text-white">150+</CardTitle>
                  <CardDescription className="text-gray-300">Countries Covered</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-[#ffd166] mx-auto mb-2" />
                  <CardTitle className="text-white">99%</CardTitle>
                  <CardDescription className="text-gray-300">User Satisfaction</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-[#ffd166] mx-auto mb-2" />
                  <CardTitle className="text-white">24/7</CardTitle>
                  <CardDescription className="text-gray-300">Support Available</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <Heart className="h-16 w-16 text-[#ffd166] mx-auto mb-4" />
                <CardTitle className="text-white">User-First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We prioritize your needs and continuously improve based on your feedback. 
                  Your travel success is our success.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <Lightbulb className="h-16 w-16 text-[#ffd166] mx-auto mb-4" />
                <CardTitle className="text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We leverage cutting-edge AI technology to provide intelligent, 
                  personalized packing recommendations.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardHeader>
                <Globe className="h-16 w-16 text-[#ffd166] mx-auto mb-4" />
                <CardTitle className="text-white">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We promote mindful packing and sustainable travel practices to help 
                  reduce environmental impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We're a diverse team of travel enthusiasts, tech experts, and problem solvers 
            united by our passion for making travel better.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Founder", bio: "Travel tech visionary with 10+ years in the industry" },
              { name: "Marcus Rodriguez", role: "CTO", bio: "AI and machine learning expert" },
              { name: "Emily Watson", role: "Head of Design", bio: "UX specialist focused on travel experiences" },
              { name: "David Kim", role: "Lead Developer", bio: "Full-stack developer and travel enthusiast" }
            ].map((member, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{member.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-[#ffd166]">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of travelers who have transformed their packing experience with PackSmart.
          </p>
          <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
            <Link href="/trip-details">
              Create Your First Packing List
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}