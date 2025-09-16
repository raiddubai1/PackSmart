import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Mail, 
  Search,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Globe,
  Star
} from "lucide-react";
import Link from "next/link";

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of PackSmart and create your first packing list",
      articles: [
        "How to create your first packing list",
        "Understanding trip details",
        "Adding travelers to your trip",
        "Setting up your travel preferences"
      ]
    },
    {
      icon: Zap,
      title: "Features & Tools",
      description: "Master all the powerful features PackSmart has to offer",
      articles: [
        "AI-powered recommendations",
        "Weather integration guide",
        "Activity-based packing",
        "Custom categories and items"
      ]
    },
    {
      icon: Shield,
      title: "Account & Privacy",
      description: "Manage your account and understand your privacy options",
      articles: [
        "Account settings and preferences",
        "Data privacy and security",
        "Exporting and sharing lists",
        "Deleting your account"
      ]
    },
    {
      icon: Globe,
      title: "Travel Tips",
      description: "Expert advice for smarter packing and stress-free travel",
      articles: [
        "Essential items for every trip",
        "Seasonal packing guides",
        "International travel tips",
        "Business travel essentials"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is PackSmart really free?",
      answer: "Yes! PackSmart is currently completely free during our beta period. All features are available at no cost."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI analyzes thousands of data points including weather, activities, destination, and traveler preferences to provide highly accurate recommendations."
    },
    {
      question: "Can I use PackSmart offline?",
      answer: "Yes! Once you generate a packing list, it's available offline. You can access your lists anytime, anywhere."
    },
    {
      question: "How do I add custom items?",
      answer: "You can easily add custom items during the activities step or by editing your generated packing list."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and never share your personal travel data with third parties."
    },
    {
      question: "Can I share my packing lists?",
      answer: "Yes! You can share your packing lists via email, social media, or by generating a shareable link."
    }
  ];

  const quickActions = [
    {
      icon: Search,
      title: "Search Knowledge Base",
      description: "Find answers to common questions",
      action: "Browse Articles"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Get help from other travelers",
      action: "Join Community"
    },
    {
      icon: Mail,
      title: "Contact Support",
      description: "Get personalized help from our team",
      action: "Email Us"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <HelpCircle className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers, get support, and learn how to make the most of PackSmart. 
            We're here to help you pack smarter and travel better.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">24/7 Support</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Comprehensive Guides</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Community Help</Badge>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600 hover:border-[#ffd166] transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                    <CardTitle className="text-white">{action.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" className="border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900">
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-[#ffd166] transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <CardTitle className="text-white">{category.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
                          <CheckCircle className="h-4 w-4 text-[#ffd166]" />
                          <span className="text-gray-300 text-sm">{article}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="text-[#ffd166] hover:text-[#e6ba5c] p-0 h-auto mt-4">
                      View all articles →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support You Can Count On</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">1hr</div>
                <div className="text-gray-300 text-sm">Avg Response Time</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300 text-sm">Satisfaction Rate</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300 text-sm">Help Articles</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-700 border-gray-700">
            <CardHeader className="text-center">
              <Mail className="h-16 w-16 text-[#ffd166] mx-auto mb-4" />
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-gray-300">
                Can't find what you're looking for? Our support team is here to help you personally.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/contact-us">
                    Contact Support
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                  <Link href="/">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}