"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Send,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

type RequestType = 'access' | 'rectification' | 'erasure' | 'portability' | 'restriction' | 'objection';

interface RequestForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requestType: RequestType;
  description: string;
  specificData: string;
  identityVerification: string;
}

export default function DataSubjectRequests() {
  const [selectedRequest, setSelectedRequest] = useState<RequestType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<RequestForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestType: 'access',
    description: '',
    specificData: '',
    identityVerification: '',
  });

  const requestTypes = [
    {
      type: 'access' as RequestType,
      icon: Eye,
      title: 'Data Access Request',
      description: 'Request a copy of all personal data we hold about you',
      color: 'bg-blue-600',
      examples: ['Account information', 'Travel preferences', 'Usage history', 'Packing lists']
    },
    {
      type: 'rectification' as RequestType,
      icon: Edit,
      title: 'Data Rectification Request',
      description: 'Request correction of inaccurate personal data',
      color: 'bg-green-600',
      examples: ['Incorrect name', 'Wrong email', 'Inaccurate preferences', 'Outdated information']
    },
    {
      type: 'erasure' as RequestType,
      icon: Trash2,
      title: 'Data Erasure Request',
      description: 'Request deletion of your personal data (Right to be forgotten)',
      color: 'bg-red-600',
      examples: ['Account deletion', 'Remove personal data', 'Delete history', 'Clear preferences']
    },
    {
      type: 'portability' as RequestType,
      icon: Download,
      title: 'Data Portability Request',
      description: 'Request your data in a portable format',
      color: 'bg-purple-600',
      examples: ['Export data', 'Transfer to another service', 'Machine-readable format', 'Structured data']
    },
    {
      type: 'restriction' as RequestType,
      icon: Shield,
      title: 'Processing Restriction Request',
      description: 'Request limitation on how we process your data',
      color: 'bg-yellow-600',
      examples: ['Limit processing', 'Restrict usage', 'Temporary halt', 'Specific limitations']
    },
    {
      type: 'objection' as RequestType,
      icon: AlertCircle,
      title: 'Processing Objection Request',
      description: 'Object to processing of your personal data',
      color: 'bg-orange-600',
      examples: ['Object to marketing', 'Opt out of analytics', 'Stop personalization', 'General objection']
    }
  ];

  const handleInputChange = (field: keyof RequestForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the request to your backend
    console.log('Data subject request submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const getSelectedRequest = () => {
    return requestTypes.find(req => req.type === selectedRequest);
  };

  if (isSubmitted) {
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
              <Link href="/data-subject-requests" className="text-[#ffd166] hover:text-[#e6ba5c]">
                Data Subject Requests
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Request Submitted Successfully</h1>
              <p className="text-gray-300 mb-6">
                Your data subject request has been submitted successfully. We will review your request 
                and respond within 30 days as required by GDPR regulations.
              </p>
              <div className="bg-gray-700 rounded-lg p-4 mb-6">
                <p className="text-gray-300 text-sm">
                  <strong>Request Reference:</strong> DSR-{Date.now()}<br />
                  <strong>Submitted:</strong> {new Date().toLocaleDateString()}<br />
                  <strong>Email Confirmation:</strong> A confirmation email has been sent to {formData.email}
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900">
                  <Link href="/gdpr-compliance">View GDPR Rights</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (selectedRequest) {
    const request = getSelectedRequest();
    const Icon = request?.icon || FileText;

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
              <Link href="/data-subject-requests" className="text-[#ffd166] hover:text-[#e6ba5c]">
                Data Subject Requests
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => setSelectedRequest(null)}
              className="mb-4 border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Request Types
            </Button>
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 ${request?.color} rounded-lg flex items-center justify-center`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{request?.title}</h1>
                <p className="text-gray-300">{request?.description}</p>
              </div>
            </div>
          </div>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="h-5 w-5 text-[#ffd166]" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Request Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                    placeholder="Please provide details about your request..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specificData" className="text-white">Specific Data (if applicable)</Label>
                  <Textarea
                    id="specificData"
                    value={formData.specificData}
                    onChange={(e) => handleInputChange('specificData', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                    placeholder="If your request relates to specific data, please describe it here..."
                  />
                </div>

                <div>
                  <Label htmlFor="identityVerification" className="text-white">Identity Verification *</Label>
                  <Textarea
                    id="identityVerification"
                    value={formData.identityVerification}
                    onChange={(e) => handleInputChange('identityVerification', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                    placeholder="Please provide information to verify your identity (e.g., account details, registration date, etc.)"
                    required
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    This information is required to verify your identity and protect your privacy.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Important Information</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• We will respond to your request within 30 days as required by GDPR</li>
                        <li>• We may need to verify your identity before processing your request</li>
                        <li>• Some requests may require additional information or clarification</li>
                        <li>• You will receive a confirmation email when your request is submitted</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 flex-1"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedRequest(null)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
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
            <Link href="/data-subject-requests" className="text-[#ffd166] hover:text-[#e6ba5c]">
              Data Subject Requests
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <User className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Subject Requests
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Exercise your GDPR rights by submitting a data subject request. 
            Choose the type of request you'd like to make below.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-[#ffd166] text-gray-900">GDPR Compliant</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Secure Processing</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">30-Day Response</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requestTypes.map((request) => {
            const Icon = request.icon;
            return (
              <Card 
                key={request.type} 
                className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => setSelectedRequest(request.type)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${request.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{request.title}</h3>
                      <p className="text-gray-300 text-sm">{request.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Examples:</h4>
                    <div className="flex flex-wrap gap-1">
                      {request.examples.map((example, idx) => (
                        <Badge key={idx} className="bg-gray-700 text-gray-300 text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                    Make Request
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-2">Before You Submit</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Please ensure you provide accurate contact information for our response</li>
                <li>• We may need to verify your identity before processing certain requests</li>
                <li>• Some requests may require additional information to fulfill properly</li>
                <li>• We respond to all requests within 30 days as required by GDPR</li>
                <li>• For urgent requests, please contact our Data Protection Officer directly</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900">
            <Link href="/gdpr-compliance">Learn More About Your GDPR Rights</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}