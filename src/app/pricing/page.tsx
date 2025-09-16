import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Star, 
  Crown, 
  CheckCircle, 
  Users, 
  Zap,
  Shield,
  Globe,
  Heart,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual travelers and occasional trips",
      icon: Gift,
      color: "bg-green-500",
      features: [
        "AI-powered packing lists",
        "Weather integration", 
        "Multi-traveler support",
        "Mobile access",
        "Basic templates",
        "Email support"
      ],
      popular: false,
      cta: "Get Started Free",
      ctaLink: "/trip-details"
    },
    {
      name: "Premium", 
      price: "$0",
      period: "during beta",
      description: "All premium features free during our beta period",
      icon: Star,
      color: "bg-[#ffd166]",
      features: [
        "Everything in Free",
        "Advanced AI recommendations",
        "Real-time weather alerts",
        "Unlimited packing lists",
        "Priority support",
        "Offline access",
        "Collaboration features",
        "Custom categories",
        "Travel analytics"
      ],
      popular: true,
      cta: "Start Free Beta",
      ctaLink: "/trip-details",
      badge: "FREE DURING BETA"
    },
    {
      name: "Teams",
      price: "$0",
      period: "during beta", 
      description: "For travel agencies, groups, and organizations",
      icon: Crown,
      color: "bg-purple-500",
      features: [
        "Everything in Premium",
        "Team management",
        "Custom branding",
        "API access",
        "Advanced analytics",
        "Dedicated support",
        "White-label options",
        "Bulk operations",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales",
      ctaLink: "/contact-us",
      badge: "BETA ACCESS"
    }
  ];

  const betaFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast AI",
      description: "Our advanced AI generates perfect packing lists in under 2 minutes"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your travel data is secure and never shared with third parties"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Support for 150+ countries with local knowledge and requirements"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Shape the future of PackSmart with your feedback and suggestions"
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
            <Link href="/pricing" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple, <span className="text-[#ffd166]">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            PackSmart is currently completely free during our beta period. 
            Get access to all premium features at no cost while we perfect our platform.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Badge className="bg-[#ffd166] text-gray-900">Free During Beta</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">No Credit Card</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Cancel Anytime</Badge>
          </div>
        </div>
      </section>

      {/* Beta Announcement */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#ffd166]/20 to-yellow-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800 rounded-lg p-8 border border-[#ffd166]/30">
            <div className="w-16 h-16 bg-[#ffd166] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Gift className="h-8 w-8 text-gray-900" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Special Beta Offer
            </h2>
            <p className="text-gray-300 mb-6">
              We're currently in beta testing phase, which means <strong>all features are completely free</strong>! 
              Help us shape the future of smart travel planning while getting premium features at no cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd166] mb-1">100%</div>
                <div className="text-gray-400 text-sm">Free Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd166] mb-1">Unlimited</div>
                <div className="text-gray-400 text-sm">Packing Lists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffd166] mb-1">Premium</div>
                <div className="text-gray-400 text-sm">Features</div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/trip-details">
                Start Free Beta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card key={index} className={`bg-gray-800 border-gray-700 relative ${plan.popular ? 'border-[#ffd166] shadow-lg shadow-[#ffd166]/20' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#ffd166] text-gray-900 px-4 py-2">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <Star className="h-5 w-5 text-[#ffd166] fill-current" />
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${plan.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-300 mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <Button 
                      asChild
                      size="lg" 
                      className={`w-full ${plan.popular ? 'bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                    >
                      <Link href={plan.ctaLink}>
                        {plan.cta}
                      </Link>
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-[#ffd166]" />
                          <span className="text-gray-300 text-sm">{feature}</span>
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

      {/* Beta Features */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Join Our Beta?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {betaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-600">
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

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Happens After Beta?</h2>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ffd166] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Current: Beta Phase</h3>
                    <p className="text-gray-300">
                      All features are completely free. Help us test and improve the platform with your feedback.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Future: Premium Plans</h3>
                    <p className="text-gray-300">
                      After beta, we'll introduce affordable premium plans. Beta users will get special discounts and extended free access.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Always: Free Tier Available</h3>
                    <p className="text-gray-300">
                      We'll always offer a generous free tier so everyone can benefit from smart packing, regardless of budget.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">How long will the beta period last?</h3>
                <p className="text-gray-300">
                  We expect the beta period to last several months while we gather feedback and improve the platform. 
                  Beta users will receive advance notice before any pricing changes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Will I lose my data when beta ends?</h3>
                <p className="text-gray-300">
                  Absolutely not! All your packing lists and preferences will be preserved. 
                  You'll have the option to continue with a free plan or upgrade to premium.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">What happens to beta users after launch?</h3>
                <p className="text-gray-300">
                  Beta users will receive special benefits including extended free access, 
                  exclusive discounts on premium plans, and priority support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Can I cancel anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can cancel at any time during or after the beta period with no penalties. 
                  During beta, everything is free anyway!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Smart Packing Revolution</h2>
          <p className="text-gray-300 mb-8">
            Start your free beta journey today and experience the future of travel planning.
          </p>
          <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
            <Link href="/trip-details">
              Start Free Beta
            </Link>
          </Button>
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
              Smart packing for everyone, forever free during beta.
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