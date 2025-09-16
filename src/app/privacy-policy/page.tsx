import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Cookie,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const policySections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use PackSmart, we may collect information that can be used to identify you, such as your name, email address, and travel preferences. This information is provided voluntarily by you when you create an account or use our services."
        },
        {
          subtitle: "Travel Data",
          text: "We collect information about your trips including destinations, dates, activities, and packing preferences. This data is essential for providing our core service of generating personalized packing lists."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you use our service, including your IP address, browser type, pages visited, and the time spent on our platform. This helps us improve our services and user experience."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings."
        }
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our packing list generation service. This includes analyzing your travel details to create personalized recommendations."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you service-related communications, updates, and promotional materials. You can opt out of marketing communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data and feedback to improve our services, develop new features, and enhance the overall user experience."
        },
        {
          subtitle: "Security",
          text: "We use your information to maintain the security of our platform, prevent fraud, and protect against unauthorized access or use."
        }
      ]
    },
    {
      icon: Database,
      title: "Data Sharing and Disclosure",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers who help us operate our platform, such as cloud hosting providers and analytics services. These providers are bound by confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, regulation, or legal process, such as in response to a court order or subpoena."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction."
        },
        {
          subtitle: "No Sale of Personal Data",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Third-Party Services and Advertising",
      content: [
        {
          subtitle: "Google AdSense",
          text: "PackSmart uses Google AdSense to serve advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet."
        },
        {
          subtitle: "Data Collection by Advertisers",
          text: "You may opt out of personalized advertising by visiting the Ad Settings page. Google also provides a browser extension that allows you to opt out of Google Analytics tracking. Note that opting out of personalized advertising does not mean you will not see ads, but that the ads you see may be less relevant to you."
        },
        {
          subtitle: "Third-Party Links",
          text: "Our website may contain links to third-party websites, products, and services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites you visit."
        },
        {
          subtitle: "Advertising Partners",
          text: "We work with advertising partners who may use tracking technologies to collect information about your activity on our site and other websites. This information is used to deliver advertisements that are more relevant to your interests."
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        {
          subtitle: "Encryption",
          text: "We use industry-standard encryption to protect your data both in transit and at rest. All sensitive information is encrypted using secure protocols."
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls and limit access to personal information only to authorized employees who need it to perform their job functions."
        },
        {
          subtitle: "Regular Audits",
          text: "We conduct regular security audits and assessments to ensure our security measures remain effective and up-to-date."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your information only as long as necessary to provide our services and fulfill the purposes outlined in this policy."
        }
      ]
    },
    {
      icon: Cookie,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request the deletion of your personal information, subject to certain legal obligations and legitimate business interests."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving marketing communications and certain data collection activities by adjusting your account preferences."
        },
        {
          subtitle: "Complaints",
          text: "If you have concerns about our privacy practices, you can file a complaint with us or relevant data protection authorities."
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
            <Link href="/privacy-policy" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <Shield className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your personal information when you use PackSmart.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">Last Updated: December 2024</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">GDPR Compliant</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">CCPA Ready</Badge>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-700 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Info className="h-5 w-5 text-[#ffd166]" />
                At a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">We Collect What's Necessary</h3>
                    <p className="text-gray-300 text-sm">
                      We only collect information essential for providing our packing list service and improving your experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Your Data is Secure</h3>
                    <p className="text-gray-300 text-sm">
                      We use industry-standard encryption and security measures to protect your personal information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">You're in Control</h3>
                    <p className="text-gray-300 text-sm">
                      You have rights to access, update, or delete your personal information at any time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">No Secret Selling</h3>
                    <p className="text-gray-300 text-sm">
                      We never sell your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {policySections.map((section, sectionIndex) => {
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

      {/* Important Notices */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Important Notices</h2>
          
          <div className="space-y-6">
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Children's Privacy</h3>
                    <p className="text-gray-300">
                      PackSmart is not intended for children under 13. We do not knowingly collect personal information from children under 13. 
                      If we become aware that we have collected such information, we will take steps to delete it.
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
                    <h3 className="text-white font-semibold mb-2">International Users</h3>
                    <p className="text-gray-300">
                      If you are accessing PackSmart from outside the United States, please be aware that your information may be transferred to, 
                      stored, and processed in the United States and other countries where our service providers operate.
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
                    <h3 className="text-white font-semibold mb-2">Changes to This Policy</h3>
                    <p className="text-gray-300">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy 
                      on this page and updating the "Last Updated" date. You are advised to review this policy periodically.
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
              <CardTitle className="text-white text-center">Questions About Privacy?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p className="text-white">Email: info@packsmart.com</p>
                <p className="text-white">Mail: Privacy Officer, PackSmart Inc., 123 Tech Street, San Francisco, CA 94105</p>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/contact-us">
                    Contact Privacy Team
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
              Your privacy is our priority.
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