import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  User, 
  FileText, 
  Database, 
  Lock,
  CheckCircle,
  AlertCircle,
  Info,
  Globe,
  Eye,
  Trash2,
  Download,
  Edit,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function GDPRCompliance() {
  const gdprSections = [
    {
      icon: Shield,
      title: "GDPR Overview",
      content: [
        {
          subtitle: "What is GDPR?",
          text: "The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for individuals within the European Union and the European Economic Area. It also addresses the transfer of personal data outside the EU and EEA areas."
        },
        {
          subtitle: "Our Commitment",
          text: "PackSmart is committed to protecting your personal data and respecting your privacy. We comply with GDPR requirements and have implemented appropriate technical and organizational measures to ensure your data is processed securely and lawfully."
        },
        {
          subtitle: "Territorial Scope",
          text: "Our GDPR compliance applies to all users within the EU/EEA, as well as users outside these regions whose data is processed in connection with offering goods or services to individuals in the EU/EEA."
        }
      ]
    },
    {
      icon: User,
      title: "Data Subject Rights",
      content: [
        {
          subtitle: "Right to Access",
          text: "You have the right to obtain confirmation from us as to whether we are processing your personal data and, where we are, to access that personal data and information about how we process it."
        },
        {
          subtitle: "Right to Rectification",
          text: "You have the right to have inaccurate personal data concerning you rectified without delay. You also have the right to have incomplete personal data completed."
        },
        {
          subtitle: "Right to Erasure (Right to be Forgotten)",
          text: "You have the right to have your personal data erased without delay when the data is no longer necessary, consent is withdrawn, or you object to processing."
        },
        {
          subtitle: "Right to Restrict Processing",
          text: "You have the right to restrict the processing of your personal data in certain circumstances, such as when you contest the accuracy of the data."
        },
        {
          subtitle: "Right to Data Portability",
          text: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format and transmit it to another controller."
        },
        {
          subtitle: "Right to Object",
          text: "You have the right to object to processing of your personal data based on legitimate interests, direct marketing, or scientific research."
        },
        {
          subtitle: "Rights Related to Automated Decision-Making",
          text: "You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you."
        }
      ]
    },
    {
      icon: FileText,
      title: "Lawful Basis for Processing",
      content: [
        {
          subtitle: "Consent",
          text: "We process your data based on your explicit consent when you create an account, use our services, or subscribe to communications."
        },
        {
          subtitle: "Contract Performance",
          text: "We process your data to perform our contract with you, including providing packing list generation services and maintaining your account."
        },
        {
          subtitle: "Legitimate Interests",
          text: "We process data for our legitimate interests in improving our services, preventing fraud, and ensuring platform security, provided these interests don't override your rights."
        },
        {
          subtitle: "Legal Obligations",
          text: "We may process your data to comply with legal obligations, such as tax regulations or law enforcement requests."
        }
      ]
    },
    {
      icon: Database,
      title: "Data Processing Activities",
      content: [
        {
          subtitle: "Data Collection",
          text: "We collect personal data including your name, email address, travel preferences, trip details, and usage information to provide our packing list services."
        },
        {
          subtitle: "Data Storage",
          text: "Your data is stored securely on EU-based servers with industry-standard encryption and access controls. We retain data only as long as necessary."
        },
        {
          subtitle: "Data Sharing",
          text: "We only share your data with trusted third-party service providers who assist in operating our platform, all bound by strict confidentiality agreements."
        },
        {
          subtitle: "Data Security",
          text: "We implement appropriate technical measures including encryption, access controls, regular security audits, and staff training to protect your data."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security Measures",
      content: [
        {
          subtitle: "Encryption",
          text: "All personal data is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 encryption) to prevent unauthorized access."
        },
        {
          subtitle: "Access Controls",
          text: "We implement role-based access controls, ensuring only authorized personnel can access your data based on their job requirements."
        },
        {
          subtitle: "Regular Audits",
          text: "We conduct regular security audits and vulnerability assessments to identify and address potential security risks."
        },
        {
          subtitle: "Incident Response",
          text: "We have established procedures for detecting, reporting, and investigating personal data breaches in compliance with GDPR requirements."
        }
      ]
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      content: [
        {
          subtitle: "EU Data Centers",
          text: "Our primary data centers are located within the European Union, ensuring your data benefits from EU data protection standards."
        },
        {
          subtitle: "Adequacy Decisions",
          text: "When data transfers outside the EU are necessary, we only use countries with EU adequacy decisions or appropriate safeguards."
        },
        {
          subtitle: "Standard Contractual Clauses",
          text: "For transfers to countries without adequacy decisions, we use EU-approved Standard Contractual Clauses to ensure adequate protection."
        }
      ]
    }
  ];

  const requestTypes = [
    {
      icon: Eye,
      title: "Data Access Request",
      description: "Request a copy of all personal data we hold about you",
      action: "Access My Data"
    },
    {
      icon: Edit,
      title: "Data Rectification Request",
      description: "Request correction of inaccurate personal data",
      action: "Correct My Data"
    },
    {
      icon: Trash2,
      title: "Data Erasure Request",
      description: "Request deletion of your personal data",
      action: "Delete My Data"
    },
    {
      icon: Download,
      title: "Data Portability Request",
      description: "Request your data in a portable format",
      action: "Export My Data"
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
            <Link href="/gdpr-compliance" className="text-[#ffd166] hover:text-[#e6ba5c]">
              GDPR Compliance
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
            GDPR Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are committed to protecting your personal data and respecting your privacy rights 
            under the General Data Protection Regulation (GDPR).
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">Last Updated: December 2024</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">GDPR Compliant</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">EU Data Protection</Badge>
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
                Your GDPR Rights at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Full Transparency</h3>
                    <p className="text-gray-300 text-sm">
                      We clearly explain what data we collect and how we use it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Your Data, Your Control</h3>
                    <p className="text-gray-300 text-sm">
                      You have comprehensive rights over your personal data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Easy Requests</h3>
                    <p className="text-gray-300 text-sm">
                      Simple process to exercise your data subject rights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Data Security</h3>
                    <p className="text-gray-300 text-sm">
                      Industry-standard security measures protect your information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GDPR Sections */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {gdprSections.map((section, sectionIndex) => {
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

      {/* Data Subject Request Forms */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Exercise Your Rights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requestTypes.map((request, index) => {
              const Icon = request.icon;
              return (
                <Card key={index} className="bg-gray-700 border-gray-700 hover:bg-gray-600 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#ffd166] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{request.title}</h3>
                        <p className="text-gray-300 mb-4">{request.description}</p>
                        <Button className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                          {request.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-[#ffd166]" />
                Data Protection Officer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@packsmart.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+971 58 595 3088</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <p className="text-gray-300 text-sm">
                  For any GDPR-related questions or to exercise your data subject rights, 
                  please contact our Data Protection Officer. We will respond to your request 
                  within 30 days as required by GDPR regulations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Related Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Privacy Policy</h3>
                <p className="text-gray-300 mb-4">
                  Detailed information about how we collect, use, and protect your personal data.
                </p>
                <Button asChild className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/privacy-policy">View Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Terms of Service</h3>
                <p className="text-gray-300 mb-4">
                  The terms and conditions governing your use of PackSmart services.
                </p>
                <Button asChild className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/terms-of-service">View Terms of Service</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}