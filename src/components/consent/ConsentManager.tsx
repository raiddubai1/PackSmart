"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cookie, 
  Shield, 
  Eye, 
  Target, 
  CheckCircle, 
  X,
  Settings,
  Info
} from "lucide-react";

interface ConsentSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

interface ConsentManagerProps {
  onConsentChange?: (settings: ConsentSettings) => void;
}

export default function ConsentManager({ onConsentChange }: ConsentManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const parsedConsent = JSON.parse(consent);
        setSettings(parsedConsent);
      } catch (error) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    setSettings(newSettings);
    saveConsent(newSettings);
    setShowBanner(false);
    setIsOpen(false);
  };

  const handleAcceptNecessary = () => {
    const newSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    setSettings(newSettings);
    saveConsent(newSettings);
    setShowBanner(false);
    setIsOpen(false);
  };

  const handleSaveSettings = () => {
    saveConsent(settings);
    setShowBanner(false);
    setIsOpen(false);
  };

  const saveConsent = (consentSettings: ConsentSettings) => {
    localStorage.setItem('gdpr-consent', JSON.stringify(consentSettings));
    onConsentChange?.(consentSettings);
    
    // Apply consent settings
    applyConsentSettings(consentSettings);
  };

  const applyConsentSettings = (consentSettings: ConsentSettings) => {
    // Here you would typically enable/disable various tracking scripts
    // based on the user's consent preferences
    
    if (consentSettings.analytics) {
      // Enable analytics tracking
      console.log('Analytics consent granted');
    }
    
    if (consentSettings.marketing) {
      // Enable marketing cookies
      console.log('Marketing consent granted');
    }
    
    if (consentSettings.personalization) {
      // Enable personalization features
      console.log('Personalization consent granted');
    }
  };

  const toggleSetting = (key: keyof ConsentSettings) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const consentCategories = [
    {
      key: 'necessary' as keyof ConsentSettings,
      icon: Shield,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. Cannot be disabled.',
      required: true,
      examples: ['Authentication', 'Security', 'Core functionality']
    },
    {
      key: 'analytics' as keyof ConsentSettings,
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      required: false,
      examples: ['Google Analytics', 'Usage statistics', 'Performance metrics']
    },
    {
      key: 'marketing' as keyof ConsentSettings,
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to deliver personalized advertisements and track marketing campaigns.',
      required: false,
      examples: ['Google AdSense', 'Social media tracking', 'Retargeting']
    },
    {
      key: 'personalization' as keyof ConsentSettings,
      icon: Settings,
      title: 'Personalization Cookies',
      description: 'Remember your preferences and provide personalized features.',
      required: false,
      examples: ['Theme preferences', 'Language settings', 'Customized content']
    }
  ];

  if (showBanner) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Cookie className="h-6 w-6 text-[#ffd166]" />
                <h3 className="text-lg font-semibold text-white">Cookie & Privacy Settings</h3>
              </div>
              <p className="text-gray-300 text-sm max-w-3xl">
                We use cookies and similar technologies to help personalize content, tailor and measure ads, 
                and provide a better experience. By clicking accept, you agree to this, as outlined in our 
                <a href="/privacy-policy" className="text-[#ffd166] hover:text-[#e6ba5c] ml-1">Privacy Policy</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => setIsOpen(true)}
                className="border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900"
              >
                Customize
              </Button>
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Cookie className="h-8 w-8 text-[#ffd166]" />
                <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to help personalize content, tailor and measure ads, 
                and provide a better experience. Below you can manage your consent preferences.
              </p>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#ffd166] text-gray-900">GDPR Compliant</Badge>
                <Badge className="bg-[#ffd166] text-gray-900">Privacy First</Badge>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {consentCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.key} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 bg-[#ffd166] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-gray-900" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              {category.required && (
                                <Badge className="bg-red-600 text-white text-xs">Required</Badge>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{category.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {category.examples.map((example, idx) => (
                                <Badge key={idx} className="bg-gray-700 text-gray-300 text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                            settings[category.key] ? 'bg-[#ffd166]' : 'bg-gray-600'
                          } ${category.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                           onClick={() => !category.required && toggleSetting(category.key)}
                          >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                              settings[category.key] ? 'translate-x-6' : 'translate-x-0'
                            }`}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-[#ffd166] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Your Privacy Rights</h4>
                  <p className="text-gray-300 text-sm">
                    You have the right to withdraw your consent at any time. You can also access, rectify, 
                    or delete your personal data. For more information, please visit our 
                    <a href="/gdpr-compliance" className="text-[#ffd166] hover:text-[#e6ba5c] ml-1">GDPR Compliance page</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={handleAcceptNecessary}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
              >
                Reject All
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 flex-1"
              >
                Accept All
              </Button>
              <Button
                onClick={handleSaveSettings}
                className="bg-gray-700 hover:bg-gray-600 text-white flex-1"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Return a button to open consent settings when banner is not shown
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsOpen(true)}
      className="text-gray-400 hover:text-white"
    >
      <Cookie className="h-4 w-4 mr-2" />
      Cookie Settings
    </Button>
  );
}