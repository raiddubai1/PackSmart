"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Package, Shirt, Droplets, FileText, Zap, Heart, MapPin, Calendar, Download, Printer, Share2, ChevronDown, Lightbulb, ShoppingBag, ExternalLink, Star, Play, Cloud } from "lucide-react";
import Link from "next/link";
import AdSenseAd from "@/components/ads/AdSenseAd";
import WeatherDisplay from "@/components/weather/WeatherDisplay";

interface PackingItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  checked?: boolean;
}

interface PackingCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  items: PackingItem[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPackingList(slug: string) {
  try {
    const response = await fetch(`/api/packing-list/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch packing list');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching packing list:', error);
    return null;
  }
}

// Function to generate a packing list from localStorage data (fallback)
function generatePackingListFromStorage() {
  try {
    const savedTripDetails = localStorage.getItem("tripDetails");
    const savedTravelerProfile = localStorage.getItem("travelerProfile");
    const savedTripStyle = localStorage.getItem("tripStyle");
    const savedActivities = localStorage.getItem("activities");
    const savedSpecialRequirements = localStorage.getItem("specialRequirements");

    if (!savedTripDetails || !savedTravelerProfile || !savedTripStyle) {
      return null;
    }

    const tripDetails = JSON.parse(savedTripDetails);
    const travelerProfile = JSON.parse(savedTravelerProfile);
    const tripStyle = JSON.parse(savedTripStyle);
    const activities = savedActivities ? JSON.parse(savedActivities) : [];
    const specialRequirements = savedSpecialRequirements ? JSON.parse(savedSpecialRequirements) : [];

    // Generate a simple packing list based on the trip data
    const baseCategories = [
      {
        name: "Clothing",
        items: [
          { id: "clothing-1", name: "T-shirts", category: "Clothing", essential: true },
          { id: "clothing-2", name: "Pants/Jeans", category: "Clothing", essential: true },
          { id: "clothing-3", name: "Underwear", category: "Clothing", essential: true },
          { id: "clothing-4", name: "Socks", category: "Clothing", essential: true },
          { id: "clothing-5", name: "Pajamas", category: "Clothing", essential: false },
        ]
      },
      {
        name: "Toiletries",
        items: [
          { id: "toiletries-1", name: "Toothbrush & toothpaste", category: "Toiletries", essential: true },
          { id: "toiletries-2", name: "Shampoo & conditioner", category: "Toiletries", essential: true },
          { id: "toiletries-3", name: "Deodorant", category: "Toiletries", essential: true },
        ]
      },
      {
        name: "Documents",
        items: [
          { id: "documents-1", name: "Passport", category: "Documents", essential: true },
          { id: "documents-2", name: "ID/Driver's license", category: "Documents", essential: true },
          { id: "documents-3", name: "Boarding passes", category: "Documents", essential: true },
        ]
      },
      {
        name: "Electronics",
        items: [
          { id: "electronics-1", name: "Phone & charger", category: "Electronics", essential: true },
          { id: "electronics-2", name: "Power bank", category: "Electronics", essential: true },
        ]
      }
    ];

    return {
      packingListData: baseCategories,
      tripDetails: {
        destination: tripDetails.destination,
        arrivalDate: tripDetails.arrivalDate,
        departureDate: tripDetails.departureDate,
        accommodation: tripDetails.accommodation,
        transportation: tripDetails.transportation,
      },
      title: `${tripDetails.destination} ${tripStyle.climate.charAt(0).toUpperCase() + tripStyle.climate.slice(1)} Trip`
    };
  } catch (error) {
    console.error('Error generating packing list from storage:', error);
    return null;
  }
}

export default function PackingListPage({ params }: PageProps) {
  const [categories, setCategories] = useState<PackingCategory[]>([]);
  const [tripDetails, setTripDetails] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [exportOption, setExportOption] = useState<string>("all"); // "all", "packed", "remaining"
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weatherRecommendations, setWeatherRecommendations] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        let data = await getPackingList(params.slug);
        
        // If not found in database, try to generate from localStorage
        if (!data) {
          console.log('Packing list not found in database, generating from localStorage...');
          data = generatePackingListFromStorage();
        }
        
        if (!data) {
          notFound();
          return;
        }

        const { packingListData, tripDetails, title } = data;

        console.log("Packing List Data:", packingListData);
        console.log("Trip Details:", tripDetails);
        console.log("Title:", title);
        
        // Log the items in each category to debug
        packingListData.forEach((category: any) => {
          console.log(`Category: ${category.name}, Items: ${category.items.length}, Essential: ${category.items.filter((item: any) => item.essential).length}`);
        });

        // Transform the data to match the expected format
        const transformedCategories: PackingCategory[] = packingListData.map((category: any) => ({
          name: category.name,
          icon: getCategoryIcon(category.name),
          color: getCategoryColor(category.name),
          items: category.items.map((item: any) => ({
            ...item,
            checked: false
          }))
        }));

        console.log("Transformed Categories:", transformedCategories);

        setCategories(transformedCategories);
        setTripDetails(tripDetails);
        setTitle(title);
        setWeatherData(data.weatherData);
        setWeatherRecommendations(data.weatherRecommendations);
      } catch (error) {
        console.error("Error loading packing list:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [params.slug]);

  function getCategoryIcon(categoryName: string): React.ReactNode {
    const iconMap: Record<string, React.ReactNode> = {
      "Clothing": <Shirt className="h-5 w-5" />,
      "Toiletries": <Droplets className="h-5 w-5" />,
      "Documents": <FileText className="h-5 w-5" />,
      "Electronics": <Zap className="h-5 w-5" />,
      "Health & Medical": <Heart className="h-5 w-5" />,
      "Miscellaneous": <Package className="h-5 w-5" />
    };
    return iconMap[categoryName] || <Package className="h-5 w-5" />;
  }

  function getCategoryColor(categoryName: string): string {
    const colorMap: Record<string, string> = {
      "Clothing": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Toiletries": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Documents": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Electronics": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Health & Medical": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Miscellaneous": "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    };
    return colorMap[categoryName] || "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
  }

  function getProgress() {
    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    const checkedItems = categories.reduce((sum, cat) => 
      sum + cat.items.filter(item => item.checked).length, 0
    );
    return totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
  }

  const handleItemCheck = (categoryId: string, itemId: string, checked: boolean) => {
    console.log("Item checked:", categoryId, itemId, checked);
    setCategories(prev => prev.map(category => {
      if (category.name === categoryId) {
        return {
          ...category,
          items: category.items.map(item => 
            item.id === itemId ? { ...item, checked } : item
          )
        };
      }
      return category;
    }));
  };

  const toggleCategoryExpansion = (categoryName: string) => {
    console.log("Toggle category expansion:", categoryName);
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const handleDownload = () => {
    let content = `${title}\n`;
    content += `${tripDetails?.destination} | ${new Date(tripDetails?.arrivalDate).toLocaleDateString()} - ${new Date(tripDetails?.departureDate).toLocaleDateString()}\n\n`;
    
    if (exportOption === "all") {
      content += "COMPLETE PACKING LIST\n";
      content += '===================\n\n';
      
      categories.forEach(category => {
        content += `${category.name.toUpperCase()}\n`;
        content += '='.repeat(category.name.length) + '\n';
        
        category.items.forEach(item => {
          const status = item.checked ? '✓' : '□';
          const essential = item.essential ? ' [ESSENTIAL]' : '';
          content += `${status} ${item.name}${essential}\n`;
        });
        content += '\n';
      });
    } else if (exportOption === "packed") {
      content += "PACKED ITEMS\n";
      content += '============\n\n';
      
      let hasPackedItems = false;
      categories.forEach(category => {
        const packedItems = category.items.filter(item => item.checked);
        if (packedItems.length > 0) {
          hasPackedItems = true;
          content += `${category.name.toUpperCase()} (${packedItems.length} items)\n`;
          content += '='.repeat(category.name.length + packedItems.length.toString().length + 7) + '\n';
          
          packedItems.forEach(item => {
            const essential = item.essential ? ' [ESSENTIAL]' : '';
            content += `✓ ${item.name}${essential}\n`;
          });
          content += '\n';
        }
      });
      
      if (!hasPackedItems) {
        content += "No items packed yet.\n";
      }
    } else if (exportOption === "remaining") {
      content += "REMAINING ITEMS\n";
      content += '===============\n\n';
      
      let hasRemainingItems = false;
      categories.forEach(category => {
        const remainingItems = category.items.filter(item => !item.checked);
        if (remainingItems.length > 0) {
          hasRemainingItems = true;
          content += `${category.name.toUpperCase()} (${remainingItems.length} items)\n`;
          content += '='.repeat(category.name.length + remainingItems.length.toString().length + 7) + '\n';
          
          remainingItems.forEach(item => {
            const essential = item.essential ? ' [ESSENTIAL - PACK NOW!]' : '';
            content += `□ ${item.name}${essential}\n`;
          });
          content += '\n';
        }
      });
      
      if (!hasRemainingItems) {
        content += "All items packed! You're ready to go! 🎉\n";
      }
    }
    
    content += `\nProgress: ${getProgress()}% complete`;
    
    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const optionSuffix = exportOption === "all" ? "Complete" : exportOption === "packed" ? "Packed" : "Remaining";
    a.download = `${title.replace(/\s+/g, '_')}_Packing_List_${optionSuffix}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    // For print, we'll create a new window with formatted content
    const printContent = generatePrintContent();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title} - Packing List</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .section { margin-bottom: 25px; }
            .category { font-size: 18px; font-weight: bold; margin-bottom: 10px; color: #333; }
            .item { margin: 5px 0; padding: 3px 0; }
            .essential { color: #d32f2f; font-weight: bold; }
            .checked { text-decoration: line-through; color: #666; }
            .progress { text-align: center; margin-top: 30px; font-size: 16px; font-weight: bold; }
            @media print { body { margin: 15px; } }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const generatePrintContent = () => {
    let content = `
      <div class="header">
        <h1>${title}</h1>
        <p>${tripDetails?.destination} | ${new Date(tripDetails?.arrivalDate).toLocaleDateString()} - ${new Date(tripDetails?.departureDate).toLocaleDateString()}</p>
        <p><strong>Export Option:</strong> ${exportOption.toUpperCase()}</p>
      </div>
    `;

    if (exportOption === "all") {
      content += '<h2>COMPLETE PACKING LIST</h2>';
      
      categories.forEach(category => {
        content += `<div class="section">
          <div class="category">${category.name}</div>`;
        
        category.items.forEach(item => {
          const checkedClass = item.checked ? 'checked' : '';
          const essentialClass = item.essential ? 'essential' : '';
          content += `<div class="item ${checkedClass} ${essentialClass}">
            ${item.checked ? '✓' : '□'} ${item.name} ${item.essential ? '[ESSENTIAL]' : ''}
          </div>`;
        });
        
        content += '</div>';
      });
    } else if (exportOption === "packed") {
      content += '<h2>PACKED ITEMS</h2>';
      
      let hasPackedItems = false;
      categories.forEach(category => {
        const packedItems = category.items.filter(item => item.checked);
        if (packedItems.length > 0) {
          hasPackedItems = true;
          content += `<div class="section">
            <div class="category">${category.name} (${packedItems.length} items)</div>`;
          
          packedItems.forEach(item => {
            const essentialClass = item.essential ? 'essential' : '';
            content += `<div class="item ${essentialClass}">
              ✓ ${item.name} ${item.essential ? '[ESSENTIAL]' : ''}
            </div>`;
          });
          
          content += '</div>';
        }
      });
      
      if (!hasPackedItems) {
        content += '<p>No items packed yet.</p>';
      }
    } else if (exportOption === "remaining") {
      content += '<h2>REMAINING ITEMS</h2>';
      
      let hasRemainingItems = false;
      categories.forEach(category => {
        const remainingItems = category.items.filter(item => !item.checked);
        if (remainingItems.length > 0) {
          hasRemainingItems = true;
          content += `<div class="section">
            <div class="category">${category.name} (${remainingItems.length} items)</div>`;
          
          remainingItems.forEach(item => {
            const essentialClass = item.essential ? 'essential' : '';
            content += `<div class="item ${essentialClass}">
              □ ${item.name} ${item.essential ? '[ESSENTIAL - PACK NOW!]' : ''}
            </div>`;
          });
          
          content += '</div>';
        }
      });
      
      if (!hasRemainingItems) {
        content += '<p>All items packed! You\'re ready to go! 🎉</p>';
      }
    }
    
    content += `<div class="progress">Progress: ${getProgress()}% complete</div>`;
    
    return content;
  };

  const handleShare = async () => {
    const progress = getProgress();
    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    const packedItems = categories.reduce((sum, cat) => sum + cat.items.filter(item => item.checked).length, 0);
    
    let shareText = `Check out my packing list for ${tripDetails?.destination}! 🧳\n`;
    shareText += `Progress: ${packedItems}/${totalItems} items (${progress}%)\n`;
    shareText += `Trip: ${new Date(tripDetails?.arrivalDate).toLocaleDateString()} - ${new Date(tripDetails?.departureDate).toLocaleDateString()}\n\n`;
    shareText += `View the complete list: ${window.location.href}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Packing list details copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {title}
              </h1>
              {tripDetails && (
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{tripDetails.destination}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(tripDetails.arrivalDate).toLocaleDateString()} - {new Date(tripDetails.departureDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Progress Section */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-[#ffd166]">{getProgress()}% Complete</div>
                <div className="w-32 bg-gray-700 rounded-full h-2 mt-1">
                  <div 
                    className="bg-[#ffd166] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgress()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Column (70%) */}
          <div className="flex-1 lg:w-[70%]">
            {/* Instructions */}
            <div className="bg-blue-900 bg-opacity-20 border border-blue-700 border-opacity-30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-blue-400 mt-0.5">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-blue-300 mb-1">How to use your packing list</h3>
                  <p className="text-xs text-blue-200">
                    ✅ <strong>Check off items</strong> you're planning to pack • 
                    📊 Track your progress with the percentage counter • 
                    🖨️ <strong>Print or download</strong> only the items you've checked
                  </p>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Export:</span>
                  <Select value={exportOption} onValueChange={setExportOption}>
                    <SelectTrigger className="w-32 bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="all" className="text-white hover:bg-gray-600">All Items</SelectItem>
                      <SelectItem value="packed" className="text-white hover:bg-gray-600">Packed Only</SelectItem>
                      <SelectItem value="remaining" className="text-white hover:bg-gray-600">Remaining Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-xs text-gray-400">
                  {exportOption === "all" && "📋 Complete packing list with all items"}
                  {exportOption === "packed" && "✅ Only items you've checked off as packed"}
                  {exportOption === "remaining" && "⏳ Only items you still need to pack"}
                </div>
              </div>
            </div>

            {/* Interactive Packing Categories */}
            <div className="space-y-3">
              {categories.map((category) => (
                <Card key={category.name} className="bg-gray-800 border-gray-700 hover:border-[#ffd166] transition-colors">
                  <CardHeader className="pb-2 px-4 pt-3">
                    <CardTitle className="flex items-center gap-2 text-white text-sm">
                      <div className={`p-1.5 rounded-md ${category.color} bg-opacity-20 border border-opacity-30`}>
                        <div className="h-4 w-4">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {category.name}
                          <Badge variant="secondary" className="bg-[#ffd166] bg-opacity-20 text-[#ffd166] border-[#ffd166] border-opacity-30 text-xs px-2 py-0">
                            {category.items.length} items
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-400 mt-0.5 text-xs">
                          {category.items.filter(item => item.essential).length} essential items
                        </CardDescription>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-3 pt-0">
                    <div className="space-y-1">
                      {(expandedCategories.has(category.name) ? category.items : category.items.filter(item => item.essential)).map((item) => (
                        <div key={item.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 transition-colors">
                          <Checkbox
                            id={item.id}
                            checked={item.checked || false}
                            onCheckedChange={(checked) => handleItemCheck(category.name, item.id, checked as boolean)}
                            className="data-[state=checked]:bg-[#ffd166] data-[state=checked]:border-[#ffd166] h-3.5 w-3.5"
                          />
                          <div className="flex-1 min-w-0">
                            <label htmlFor={item.id} className={`text-xs font-medium cursor-pointer transition-colors truncate ${item.checked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                              {item.name}
                            </label>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {item.essential && (
                              <Badge variant="destructive" className="text-xs bg-red-900 text-red-200 border-red-700 px-1.5 py-0">
                                Essential
                              </Badge>
                            )}
                            {item.checked && (
                              <CheckCircle className="h-3 w-3 text-[#ffd166]" />
                            )}
                          </div>
                        </div>
                      ))}
                      {!expandedCategories.has(category.name) && category.items.filter(item => !item.essential).length > 0 && (
                        <div className="text-center pt-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-xs text-[#ffd166] hover:text-[#ffd166] hover:bg-gray-700 h-6 px-2"
                            onClick={() => toggleCategoryExpansion(category.name)}
                          >
                            + {category.items.filter(item => !item.essential).length} more items
                          </Button>
                        </div>
                      )}
                      {expandedCategories.has(category.name) && (
                        <div className="text-center pt-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-xs text-gray-400 hover:text-gray-300 hover:bg-gray-700 h-6 px-2"
                            onClick={() => toggleCategoryExpansion(category.name)}
                          >
                            Show less
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <Link href="/">
                <Button className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                  Create Another List
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar (30%) */}
          <div className="lg:w-[30%] space-y-6">
            {/* Weather Widget */}
            <WeatherDisplay 
              forecast={weatherData}
              recommendations={weatherRecommendations}
            />

            {/* Affiliate Product Recommendations */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <ShoppingBag className="h-5 w-5 text-[#ffd166]" />
                  Recommended Products
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Essential items for your trip
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Always visible products */}
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-[#ffd166]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm">Travel Packing Cubes</h4>
                      <p className="text-xs text-gray-400 mb-2">Organize your luggage efficiently</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-[#ffd166]" />
                        <span className="text-xs text-gray-400">4.8/5 (2,341 reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Droplets className="h-6 w-6 text-[#ffd166]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm">Travel Size Toiletry Bottles</h4>
                      <p className="text-xs text-gray-400 mb-2">TSA-approved travel bottles</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-[#ffd166]" />
                        <span className="text-xs text-gray-400">4.6/5 (1,892 reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable section */}
                  {showAllRecommendations && (
                    <div className="space-y-3 mt-4 pt-4 border-t border-gray-600">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Zap className="h-6 w-6 text-[#ffd166]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">Universal Travel Adapter</h4>
                          <p className="text-xs text-gray-400 mb-2">Works in 150+ countries worldwide</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#ffd166]" />
                            <span className="text-xs text-gray-400">4.7/5 (3,156 reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Heart className="h-6 w-6 text-[#ffd166]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">Travel Neck Pillow</h4>
                          <p className="text-xs text-gray-400 mb-2">Memory foam comfort for long flights</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#ffd166]" />
                            <span className="text-xs text-gray-400">4.5/5 (5,432 reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-[#ffd166]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">Travel Document Organizer</h4>
                          <p className="text-xs text-gray-400 mb-2">Keep passports and tickets secure</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#ffd166]" />
                            <span className="text-xs text-gray-400">4.9/5 (1,276 reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Shirt className="h-6 w-6 text-[#ffd166]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">Compression Packing Bags</h4>
                          <p className="text-xs text-gray-400 mb-2">Save up to 80% of packing space</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#ffd166]" />
                            <span className="text-xs text-gray-400">4.4/5 (892 reviews)</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-[#ffd166] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <Package className="h-6 w-6 text-[#ffd166]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">Portable Luggage Scale</h4>
                          <p className="text-xs text-gray-400 mb-2">Avoid overweight baggage fees</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#ffd166]" />
                            <span className="text-xs text-gray-400">4.6/5 (2,108 reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#ffd166] text-[#ffd166] hover:bg-[#ffd166] hover:text-gray-900 bg-gray-700"
                    onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                  >
                    {showAllRecommendations ? "Show Less" : "View All Recommendations"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips Section */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5 text-[#ffd166]" />
                  Pro Tips
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Did you remember these?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                    <h4 className="font-medium text-white text-sm mb-1">Roll, Don't Fold</h4>
                    <p className="text-xs text-gray-300">Roll clothes instead of folding to save space and reduce wrinkles.</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                    <h4 className="font-medium text-white text-sm mb-1">Pack Heavy Items First</h4>
                    <p className="text-xs text-gray-300">Place heavier items at the bottom of your suitcase near the wheels.</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                    <h4 className="font-medium text-white text-sm mb-1">Digital Copies</h4>
                    <p className="text-xs text-gray-300">Take photos of important documents and store them in the cloud.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packing Tutorials */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Play className="h-5 w-5 text-[#ffd166]" />
                  Packing Tutorials
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Learn expert packing techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Video 1: Ultimate Packing Guide */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-white text-sm">Ultimate Packing Guide</h4>
                    <p className="text-xs text-gray-400">Master the art of efficient packing</p>
                    <div className="relative rounded-lg overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://www.youtube.com/embed/slq23yeGZHM?enablejsapi=1&controls=1&rel=0&showinfo=0&modestbranding=1"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="Ultimate Packing Guide"
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Video 2: How to Roll Clothes Perfectly */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-white text-sm">Roll Clothes Perfectly</h4>
                    <p className="text-xs text-gray-400">Save space and prevent wrinkles</p>
                    <div className="relative rounded-lg overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://www.youtube.com/embed/wPX7lLFqeCE?enablejsapi=1&controls=1&rel=0&showinfo=0&modestbranding=1"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="How to Roll Clothes Perfectly"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Blog Post */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5 text-[#ffd166]" />
                  Related Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffd166] to-[#e6ba5c] rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white text-sm mb-1">Ultimate Guide to Smart Packing</h4>
                      <p className="text-xs text-gray-400 mb-2">Learn expert techniques to pack efficiently for any trip.</p>
                      <div className="flex items-center gap-2 text-xs text-[#ffd166]">
                        <span>5 min read</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AdSense Ad */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-sm">Sponsored</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <AdSenseAd slot="sidebar" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Fixed Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleDownload} 
            size="sm"
            className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 shadow-lg rounded-full w-12 h-12 p-0"
            title="Download List"
          >
            <Download className="h-5 w-5" />
          </Button>
          <Button 
            onClick={handlePrint} 
            size="sm"
            className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 shadow-lg rounded-full w-12 h-12 p-0"
            title="Print List"
          >
            <Printer className="h-5 w-5" />
          </Button>
          <Button 
            onClick={handleShare} 
            size="sm"
            className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 shadow-lg rounded-full w-12 h-12 p-0"
            title="Share List"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}