"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Users,
  HelpCircle,
  Star,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      value: "info@packsmart.com",
      response: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate help",
      value: "+971 58 595 3088",
      response: "Response within 24 hours"
    }
  ];

  const officeLocations = [
    {
      city: "Dubai, United Arab Emirates",
      address: "Al Aweer, Ras Al Khor",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM GST"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond to emails within 24 hours and phone calls during business hours."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, phone support is available Monday-Friday, 9AM-6PM in your local time zone."
    },
    {
      question: "Can I get help with creating my packing list?",
      answer: "Absolutely! Our support team can guide you through the process and help you get the most out of PackSmart."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <Card className="max-w-md bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#ffd166] rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-gray-900" />
            </div>
            <CardTitle className="text-white text-2xl">Message Sent!</CardTitle>
            <CardDescription className="text-gray-300">
              Thank you for contacting us. We'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
            <Link href="/contact-us" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <Mail className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions or need help? We're here for you! Reach out to our friendly support team 
            and we'll help you make the most of your PackSmart experience.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">24/7 Support</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Fast Response</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Friendly Team</Badge>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600 text-center">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                    <CardTitle className="text-white">{info.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {info.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-white font-semibold">{info.value}</div>
                      <div className="text-gray-400 text-sm">{info.response}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-gray-300">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                        <SelectItem value="technical" className="text-gray-900 hover:bg-gray-200">Technical Support</SelectItem>
                        <SelectItem value="billing" className="text-gray-900 hover:bg-gray-200">Billing</SelectItem>
                        <SelectItem value="feature" className="text-gray-900 hover:bg-gray-200">Feature Request</SelectItem>
                        <SelectItem value="feedback" className="text-gray-900 hover:bg-gray-200">Feedback</SelectItem>
                        <SelectItem value="partnership" className="text-gray-900 hover:bg-gray-200">Partnership</SelectItem>
                        <SelectItem value="other" className="text-gray-900 hover:bg-gray-200">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#ffd166]" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-l-2 border-[#ffd166] pl-4">
                      <h4 className="text-white font-semibold">{office.city}</h4>
                      <p className="text-gray-300 text-sm">{office.address}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400 text-xs">{office.hours}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#ffd166]" />
                    Quick FAQs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-white font-semibold text-sm mb-1">{faq.question}</h4>
                      <p className="text-gray-300 text-xs">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#ffd166]" />
                    Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">
                    Join our community of travelers to share tips, get advice, and connect with fellow PackSmart users.
                  </p>
                  <Button variant="outline" className="w-full bg-[#E8F0FE] border-gray-300 text-gray-900 hover:bg-[#D2E3FC]">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What to Expect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-700 border-gray-600 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Immediate Acknowledgment</h3>
                <p className="text-gray-300 text-sm">
                  We'll acknowledge your message immediately and let you know we're working on it.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-300 text-sm">
                  Expect a detailed response within 24 hours, often much sooner for urgent issues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#ffd166] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-900 font-bold">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Follow-up Support</h3>
                <p className="text-gray-300 text-sm">
                  We'll follow up to ensure your issue is resolved and you're satisfied with our help.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}