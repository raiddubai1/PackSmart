import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Shield,
  Users,
  Globe,
  Heart,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const termsSections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement",
          text: "By accessing and using PackSmart, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service."
        },
        {
          subtitle: "Age Requirement",
          text: "You must be at least 13 years old to use PackSmart. By using our service, you confirm that you meet this age requirement."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will provide notice of material changes through our service or by other means. Your continued use of the service constitutes acceptance of the modified terms."
        }
      ]
    },
    {
      icon: FileText,
      title: "Service Description",
      content: [
        {
          subtitle: "Core Service",
          text: "PackSmart provides an AI-powered platform for generating personalized packing lists based on travel details, preferences, and activities. Our service helps travelers prepare for trips by suggesting essential items."
        },
        {
          subtitle: "Beta Period",
          text: "PackSmart is currently in beta testing phase. During this period, all features are provided free of charge. Beta users may experience occasional service interruptions or changes as we improve the platform."
        },
        {
          subtitle: "Availability",
          text: "We strive to keep the service available 24/7, but we do not guarantee uninterrupted access. We may perform maintenance or experience technical issues that temporarily affect service availability."
        }
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our service. You are responsible for updating your information to keep it accurate."
        },
        {
          subtitle: "Prohibited Uses",
          text: "You may not use PackSmart for illegal purposes, to harass others, to upload malicious content, or to interfere with the service's operation. You may not attempt to gain unauthorized access to our systems."
        },
        {
          subtitle: "Compliance",
          text: "You must comply with all applicable laws and regulations when using our service, including those related to data privacy, intellectual property, and electronic communications."
        }
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Rights",
          text: "PackSmart and its original content, features, and functionality are and will remain the exclusive property of PackSmart Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of any content you submit to PackSmart. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your content for the purpose of providing and improving our service."
        },
        {
          subtitle: "Trademarks",
          text: "The PackSmart name, logo, and other trademarks displayed on our service are registered trademarks of PackSmart Inc. You may not use our trademarks without our prior written permission."
        }
      ]
    },
    {
      icon: Heart,
      title: "Privacy and Data Protection",
      content: [
        {
          subtitle: "Privacy Policy",
          text: "Your use of PackSmart is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy."
        },
        {
          subtitle: "Data Security",
          text: "We implement reasonable security measures to protect your information, but no internet transmission is completely secure. We cannot guarantee the absolute security of your data."
        },
        {
          subtitle: "User Data",
          text: "You are responsible for maintaining backup copies of your packing lists and other important data. We are not responsible for loss of data due to technical issues or user error."
        }
      ]
    },
    {
      icon: Globe,
      title: "Disclaimers and Limitations",
      content: [
        {
          subtitle: "Service Provided 'As Is'",
          text: "PackSmart is provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement."
        },
        {
          subtitle: "No Guarantee of Accuracy",
          text: "While we strive to provide accurate and helpful packing recommendations, we do not guarantee that our AI-generated suggestions will be complete, accurate, or suitable for your specific travel needs."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the fullest extent permitted by law, PackSmart Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service."
        },
        {
          subtitle: "Travel Responsibility",
          text: "You are solely responsible for your travel preparations, including verifying that you have all necessary items for your trip. PackSmart is a tool to assist you, not a substitute for your own judgment and preparation."
        }
      ]
    },
    {
      icon: Zap,
      title: "Payment and Billing (Future)",
      content: [
        {
          subtitle: "Current Free Service",
          text: "During the beta period, PackSmart is completely free. We reserve the right to introduce pricing plans in the future, but we will provide advance notice of any changes to our pricing structure."
        },
        {
          subtitle: "Future Billing",
          text: "If we introduce paid features, you will be required to provide accurate billing information and authorize us to charge your chosen payment method. You are responsible for all charges under your account."
        },
        {
          subtitle: "Refunds",
          text: "Our refund policy will be clearly stated when we introduce paid services. During the beta period, all features are provided without charge."
        }
      ]
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
            <Link href="/terms-of-service" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Terms of Service
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <FileText className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            These terms govern your use of PackSmart's services. By using our platform, 
            you agree to these terms and conditions.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">Last Updated: December 2024</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Beta Terms</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Legal Agreement</Badge>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-700 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Info className="h-5 w-5 text-[#ffd166]" />
                What You Need to Know
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Free During Beta</h3>
                    <p className="text-gray-300 text-sm">
                      All features are currently free while we're in beta testing phase.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Your Responsibility</h3>
                    <p className="text-gray-300 text-sm">
                      You're responsible for your travel preparations and account security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">No Guarantees</h3>
                    <p className="text-gray-300 text-sm">
                      Service provided 'as is' with no warranty of accuracy or completeness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Privacy Protected</h3>
                    <p className="text-gray-300 text-sm">
                      Your data is protected according to our Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {termsSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((content, contentIndex) => (
                    <Card key={contentIndex} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3">{content.subtitle}</h3>
                        <p className="text-gray-300 leading-relaxed">{content.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Important Legal Notices */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Important Legal Notices</h2>
          
          <div className="space-y-6">
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Governing Law</h3>
                    <p className="text-gray-300">
                      These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, 
                      United States, without regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Dispute Resolution</h3>
                    <p className="text-gray-300">
                      Any disputes arising from these terms or your use of PackSmart shall be resolved through good faith negotiations. 
                      If unresolved, disputes shall be resolved through binding arbitration in San Francisco, California.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Severability</h3>
                    <p className="text-gray-300">
                      If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, 
                      that provision shall be deemed severable from these terms and shall not affect the validity 
                      and enforceability of the remaining provisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Entire Agreement</h3>
                    <p className="text-gray-300">
                      These Terms of Service, together with our Privacy Policy, constitute the entire agreement 
                      between you and PackSmart Inc. regarding your use of the service and supersede all prior agreements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center">Questions About These Terms?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="space-y-2">
                <p className="text-white">Email: info@packsmart.com</p>
                <p className="text-white">Mail: Legal Department, PackSmart Inc., 123 Tech Street, San Francisco, CA 94105</p>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/contact-us">
                    Contact Legal Team
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
              Smart packing, smart terms.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-[#ffd166] hover:text-[#e6ba5c]">Privacy Policy</Link>
              <span className="text-gray-500">•</span>
              <Link href="/terms-of-service" className="text-[#ffd166] hover:text-[#e6ba5c]">Terms of Service</Link>
            </div>
            <p className="text-gray-400 mt-4">
              © 2024 PackSmart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}