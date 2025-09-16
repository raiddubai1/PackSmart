import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { weatherService } from '@/lib/weather';

interface TripDetails {
  destination: string;
  arrivalDate: string;
  departureDate: string;
  accommodation: string;
  transportation: string[];
  weatherData?: any; // Weather data from trip details
}

interface TravelerProfile {
  id: string;
  ageRange: string;
  gender: string;
}

interface TripStyle {
  tripType: string;
  climate: string;
  luggage: string;
  packingStyle: number[];
}

interface PackingItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  weatherBased?: boolean;
  weatherReason?: string;
}

interface PackingCategory {
  name: string;
  items: PackingItem[];
}

interface WeatherRecommendation {
  category: string;
  items: string[];
  reason: string;
  priority: 'essential' | 'recommended' | 'optional';
}

// Base packing items database
const baseItems: Record<string, PackingItem[]> = {
  "Clothing": [
    { id: "clothing-1", name: "T-shirts", category: "Clothing", essential: true },
    { id: "clothing-2", name: "Pants/Jeans", category: "Clothing", essential: true },
    { id: "clothing-3", name: "Underwear", category: "Clothing", essential: true },
    { id: "clothing-4", name: "Socks", category: "Clothing", essential: true },
    { id: "clothing-5", name: "Pajamas", category: "Clothing", essential: false },
    { id: "clothing-6", name: "Light jacket", category: "Clothing", essential: false },
    { id: "clothing-7", name: "Heavy jacket", category: "Clothing", essential: false },
    { id: "clothing-8", name: "Sweater", category: "Clothing", essential: false },
    { id: "clothing-9", name: "Shorts", category: "Clothing", essential: false },
    { id: "clothing-10", name: "Swimwear", category: "Clothing", essential: false },
    { id: "clothing-11", name: "Formal outfit", category: "Clothing", essential: false },
    { id: "clothing-12", name: "Raincoat", category: "Clothing", essential: false },
    { id: "clothing-13", name: "Thermal underwear", category: "Clothing", essential: false },
    { id: "clothing-14", name: "Winter hat and gloves", category: "Clothing", essential: false },
    { id: "clothing-15", name: "Scarf or neck gaiter", category: "Clothing", essential: false },
    { id: "clothing-16", name: "Sun hat or cap", category: "Clothing", essential: false },
    { id: "clothing-17", name: "Sunglasses", category: "Clothing", essential: false },
    { id: "clothing-18", name: "Umbrella", category: "Clothing", essential: false },
    { id: "clothing-19", name: "Waterproof shoes", category: "Clothing", essential: false },
    { id: "clothing-20", name: "Breathable clothing", category: "Clothing", essential: false }
  ],
  "Toiletries": [
    { id: "toiletries-1", name: "Toothbrush & toothpaste", category: "Toiletries", essential: true },
    { id: "toiletries-2", name: "Shampoo & conditioner", category: "Toiletries", essential: true },
    { id: "toiletries-3", name: "Deodorant", category: "Toiletries", essential: true },
    { id: "toiletries-4", name: "Soap or body wash", category: "Toiletries", essential: false },
    { id: "toiletries-5", name: "Sunscreen (SPF 30+)", category: "Toiletries", essential: false },
    { id: "toiletries-6", name: "Lip balm", category: "Toiletries", essential: false },
    { id: "toiletries-7", name: "Razor", category: "Toiletries", essential: false },
    { id: "toiletries-8", name: "Hair brush/comb", category: "Toiletries", essential: false },
    { id: "toiletries-9", name: "First aid kit", category: "Toiletries", essential: false },
    { id: "toiletries-10", name: "Hand sanitizer", category: "Toiletries", essential: false },
    { id: "toiletries-11", name: "Moisturizer", category: "Toiletries", essential: false },
    { id: "toiletries-12", name: "After-sun care", category: "Toiletries", essential: false },
    { id: "toiletries-13", name: "Anti-chafe products", category: "Toiletries", essential: false }
  ],
  "Documents": [
    { id: "documents-1", name: "Passport", category: "Documents", essential: true },
    { id: "documents-2", name: "ID/Driver's license", category: "Documents", essential: true },
    { id: "documents-3", name: "Boarding passes", category: "Documents", essential: true },
    { id: "documents-4", name: "Travel insurance", category: "Documents", essential: false },
    { id: "documents-5", name: "Hotel reservations", category: "Documents", essential: false },
    { id: "documents-6", name: "Visa (if required)", category: "Documents", essential: false },
    { id: "documents-7", name: "Credit cards/cash", category: "Documents", essential: false },
    { id: "documents-8", name: "Emergency contacts", category: "Documents", essential: false }
  ],
  "Electronics": [
    { id: "electronics-1", name: "Phone & charger", category: "Electronics", essential: true },
    { id: "electronics-2", name: "Power bank", category: "Electronics", essential: true },
    { id: "electronics-3", name: "Headphones", category: "Electronics", essential: false },
    { id: "electronics-4", name: "Camera", category: "Electronics", essential: false },
    { id: "electronics-5", name: "Travel adapter", category: "Electronics", essential: false },
    { id: "electronics-6", name: "Laptop & charger", category: "Electronics", essential: false },
    { id: "electronics-7", name: "E-reader", category: "Electronics", essential: false },
    { id: "electronics-8", name: "Smartwatch", category: "Electronics", essential: false },
    { id: "electronics-9", name: "Waterproof phone case", category: "Electronics", essential: false }
  ],
  "Health & Medical": [
    { id: "health-1", name: "Prescription medications", category: "Health & Medical", essential: true },
    { id: "health-2", name: "Pain relievers", category: "Health & Medical", essential: false },
    { id: "health-3", name: "Motion sickness pills", category: "Health & Medical", essential: false },
    { id: "health-4", name: "Band-aids", category: "Health & Medical", essential: false },
    { id: "health-5", name: "Antiseptic cream", category: "Health & Medical", essential: false },
    { id: "health-6", name: "Allergy medication", category: "Health & Medical", essential: false },
    { id: "health-7", name: "Cold medicine", category: "Health & Medical", essential: false },
    { id: "health-8", name: "Thermometer", category: "Health & Medical", essential: false },
    { id: "health-9", name: "Insect repellent", category: "Health & Medical", essential: false },
    { id: "health-10", name: "Sunburn relief gel", category: "Health & Medical", essential: false }
  ],
  "Miscellaneous": [
    { id: "misc-1", name: "Sunglasses", category: "Miscellaneous", essential: false },
    { id: "misc-2", name: "Travel pillow", category: "Miscellaneous", essential: false },
    { id: "misc-3", name: "Umbrella", category: "Miscellaneous", essential: false },
    { id: "misc-4", name: "Reusable water bottle", category: "Miscellaneous", essential: false },
    { id: "misc-5", name: "Snacks", category: "Miscellaneous", essential: false },
    { id: "misc-6", name: "Books/magazines", category: "Miscellaneous", essential: false },
    { id: "misc-7", name: "Travel games", category: "Miscellaneous", essential: false },
    { id: "misc-8", name: "Laundry bag", category: "Miscellaneous", essential: false },
    { id: "misc-9", name: "Quick-dry towel", category: "Miscellaneous", essential: false },
    { id: "misc-10", name: "Waterproof bag for electronics", category: "Miscellaneous", essential: false }
  ]
};

// Activity-specific items
const activityItems: Record<string, PackingItem[]> = {
  "Hiking": [
    { id: "hiking-1", name: "Hiking boots", category: "Clothing", essential: true },
    { id: "hiking-2", name: "Backpack", category: "Miscellaneous", essential: true },
    { id: "hiking-3", name: "Map/compass", category: "Miscellaneous", essential: true },
    { id: "hiking-4", name: "Insect repellent", category: "Toiletries", essential: true }
  ],
  "Swimming": [
    { id: "swimming-1", name: "Swimwear", category: "Clothing", essential: true },
    { id: "swimming-2", name: "Towel", category: "Toiletries", essential: true },
    { id: "swimming-3", name: "Flip flops", category: "Clothing", essential: false },
    { id: "swimming-4", name: "Goggles", category: "Miscellaneous", essential: false }
  ],
  "Business Meetings": [
    { id: "business-1", name: "Formal outfit", category: "Clothing", essential: true },
    { id: "business-2", name: "Dress shoes", category: "Clothing", essential: true },
    { id: "business-3", name: "Laptop", category: "Electronics", essential: true },
    { id: "business-4", name: "Business cards", category: "Documents", essential: false }
  ],
  "Fine Dining": [
    { id: "dining-1", name: "Formal outfit", category: "Clothing", essential: true },
    { id: "dining-2", name: "Dress shoes", category: "Clothing", essential: true },
    { id: "dining-3", name: "Jewelry (optional)", category: "Miscellaneous", essential: false }
  ],
  "Beach": [
    { id: "beach-1", name: "Swimwear", category: "Clothing", essential: true },
    { id: "beach-2", name: "Beach towel", category: "Miscellaneous", essential: true },
    { id: "beach-3", name: "Sun hat", category: "Clothing", essential: true },
    { id: "beach-4", name: "Beach bag", category: "Miscellaneous", essential: false }
  ],
  "Camping": [
    { id: "camping-1", name: "Sleeping bag", category: "Miscellaneous", essential: true },
    { id: "camping-2", name: "Flashlight", category: "Electronics", essential: true },
    { id: "camping-3", name: "Insect repellent", category: "Toiletries", essential: true },
    { id: "camping-4", name: "Portable stove", category: "Miscellaneous", essential: false }
  ]
};

function generatePackingList(
  tripDetails: TripDetails,
  travelerProfile: TravelerProfile[],
  tripStyle: TripStyle,
  activities: string[],
  specialRequirements: string[],
  weatherRecommendations?: WeatherRecommendation[]
): PackingCategory[] {
  const result: PackingCategory[] = [];
  
  // Start with base items
  Object.entries(baseItems).forEach(([categoryName, items]) => {
    const categoryItems: PackingItem[] = [];
    
    items.forEach(item => {
      let shouldInclude = true;
      let isEssential = item.essential;
      let weatherBased = false;
      let weatherReason = '';
      
      // Weather-based adjustments
      if (weatherRecommendations && weatherRecommendations.length > 0) {
        const avgTemp = weatherRecommendations[0]?.reason?.match(/(\d+\.?\d*)°C/);
        const temp = avgTemp ? parseFloat(avgTemp[1]) : 20;
        const hasRain = weatherRecommendations.some(rec => 
          rec.category.toLowerCase().includes('rain') || rec.reason.toLowerCase().includes('rain')
        );
        const isHot = temp > 25;
        const isCold = temp < 10;
        const isWindy = weatherRecommendations.some(rec => 
          rec.category.toLowerCase().includes('wind') || rec.reason.toLowerCase().includes('wind')
        );
        
        // Temperature-based adjustments
        if (isCold) {
          if (item.name.includes("Shorts") || item.name.includes("Swimwear")) {
            shouldInclude = false;
          }
          if (item.name.includes("Heavy jacket") || item.name.includes("Thermal underwear") || 
              item.name.includes("Winter hat") || item.name.includes("Scarf")) {
            shouldInclude = true;
            isEssential = true;
            weatherBased = true;
            weatherReason = "Cold weather expected";
          }
        }
        
        if (isHot) {
          if (item.name.includes("Heavy jacket") || item.name.includes("Thermal underwear")) {
            shouldInclude = false;
          }
          if (item.name.includes("Shorts") || item.name.includes("Sun hat") || 
              item.name.includes("Sunglasses") || item.name.includes("Breathable clothing")) {
            shouldInclude = true;
            weatherBased = true;
            weatherReason = "Hot weather expected";
          }
          if (item.name.includes("Sunscreen")) {
            isEssential = true;
            weatherBased = true;
            weatherReason = "Sun protection needed";
          }
        }
        
        // Rain-based adjustments
        if (hasRain) {
          if (item.name.includes("Raincoat") || item.name.includes("Umbrella") || 
              item.name.includes("Waterproof shoes") || item.name.includes("Waterproof bag")) {
            shouldInclude = true;
            isEssential = true;
            weatherBased = true;
            weatherReason = "Rain expected during trip";
          }
        }
        
        // Wind-based adjustments
        if (isWindy) {
          if (item.name.includes("Windbreaker") || item.name.includes("Scarf")) {
            shouldInclude = true;
            weatherBased = true;
            weatherReason = "Windy conditions expected";
          }
        }
      }
      
      // Adjust based on climate (fallback if no weather data)
      if (tripStyle.climate === "hot" && item.name.includes("Heavy jacket")) {
        shouldInclude = false;
      }
      if (tripStyle.climate === "cold" && (item.name.includes("Shorts") || item.name.includes("Swimwear"))) {
        shouldInclude = false;
      }
      if (tripStyle.climate === "cold" && item.name.includes("Light jacket")) {
        shouldInclude = false;
        categoryItems.push({ ...item, name: "Heavy jacket", essential: true });
      }
      
      // Adjust based on trip type
      if (tripStyle.tripType === "business" && item.name === "Formal outfit") {
        isEssential = true;
      }
      
      // Adjust based on luggage type
      if (tripStyle.luggage === "carry-on" && item.name === "Heavy jacket") {
        shouldInclude = false;
      }
      
      // Adjust based on packing style - don't filter out, just mark as non-essential
      if (tripStyle.packingStyle[0] <= 20 && !isEssential) {
        isEssential = false; // Minimalist packing - keep item but mark as non-essential
      }
      
      if (shouldInclude) {
        categoryItems.push({ 
          ...item, 
          essential: isEssential,
          weatherBased,
          weatherReason
        });
      }
    });
    
    if (categoryItems.length > 0) {
      result.push({ name: categoryName, items: categoryItems });
    }
  });
  
  // Add activity-specific items
  activities.forEach(activity => {
    const activityKey = Object.keys(activityItems).find(key => 
      activity.toLowerCase().includes(key.toLowerCase())
    );
    
    if (activityKey) {
      const activitySpecificItems = activityItems[activityKey];
      activitySpecificItems.forEach(item => {
        const targetCategory = result.find(cat => cat.name === item.category);
        if (targetCategory) {
          if (!targetCategory.items.find(existing => existing.name === item.name)) {
            targetCategory.items.push(item);
          }
        } else {
          result.push({ name: item.category, items: [item] });
        }
      });
    }
  });
  
  // Add special requirements items
  specialRequirements.forEach(requirement => {
    if (requirement.toLowerCase().includes("medical")) {
      const medicalCategory = result.find(cat => cat.name === "Health & Medical");
      if (medicalCategory) {
        medicalCategory.items.push({
          id: `medical-${Date.now()}`,
          name: "Medical supplies",
          category: "Health & Medical",
          essential: true
        });
      }
    }
    if (requirement.toLowerCase().includes("allergies")) {
      const medicalCategory = result.find(cat => cat.name === "Health & Medical");
      if (medicalCategory) {
        medicalCategory.items.push({
          id: `allergy-${Date.now()}`,
          name: "Allergy medication",
          category: "Health & Medical",
          essential: true
        });
      }
    }
  });
  
  // Add weather-specific category if we have recommendations
  if (weatherRecommendations && weatherRecommendations.length > 0) {
    const weatherCategory: PackingCategory = {
      name: "Weather-Specific Items",
      items: []
    };
    
    weatherRecommendations.forEach(rec => {
      rec.items.forEach(itemName => {
        // Check if item already exists in other categories
        let itemExists = false;
        result.forEach(category => {
          if (category.items.find(existing => existing.name === itemName)) {
            itemExists = true;
          }
        });
        
        if (!itemExists) {
          weatherCategory.items.push({
            id: `weather-${Date.now()}-${Math.random()}`,
            name: itemName,
            category: "Weather-Specific Items",
            essential: rec.priority === 'essential',
            weatherBased: true,
            weatherReason: rec.reason
          });
        }
      });
    });
    
    if (weatherCategory.items.length > 0) {
      result.push(weatherCategory);
    }
  }
  
  return result;
}

// Function to generate URL-friendly slug
function generateSlug(destination: string, climate: string, arrivalDate: string, departureDate: string): string {
  const cleanDestination = destination.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  const cleanClimate = climate.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  
  // Calculate trip duration
  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);
  const duration = Math.ceil((departure.getTime() - arrival.getTime()) / (1000 * 60 * 60 * 24));
  
  let slug = `${cleanDestination}`;
  if (cleanClimate && cleanClimate !== 'moderate') {
    slug += `-${cleanClimate}`;
  }
  slug += `-${duration}-days`;
  
  return slug;
}

// Function to ensure slug is unique - simplified version
async function ensureUniqueSlug(baseSlug: string): Promise<string> {
  try {
    let slug = baseSlug;
    let counter = 1;
    
    while (await db.packingList.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    return slug;
  } catch (error) {
    console.error('Error in ensureUniqueSlug, using timestamp fallback:', error);
    // If there's a database error, use timestamp to ensure uniqueness
    return `${baseSlug}-${Date.now()}`;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { tripDetails, travelerProfile, tripStyle, activities, specialRequirements } = body;
    
    if (!tripDetails || !travelerProfile || !tripStyle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Get weather recommendations if weather data is available
    let weatherRecommendations: WeatherRecommendation[] = [];
    let forecast: any = null;
    
    if (tripDetails.weatherData && tripDetails.weatherData.recommendations) {
      weatherRecommendations = tripDetails.weatherData.recommendations;
      forecast = tripDetails.weatherData;
    } else if (tripDetails.destination && tripDetails.arrivalDate && tripDetails.departureDate) {
      // Try to fetch weather data if not provided
      try {
        forecast = await weatherService.getWeatherForecast(
          tripDetails.destination,
          new Date(tripDetails.arrivalDate),
          new Date(tripDetails.departureDate)
        );
        weatherRecommendations = weatherService.generateWeatherRecommendations(forecast);
      } catch (weatherError) {
        console.log('Could not fetch weather data, proceeding without it:', weatherError);
      }
    }
    
    const packingList = generatePackingList(
      tripDetails,
      travelerProfile,
      tripStyle,
      activities || [],
      specialRequirements || [],
      weatherRecommendations
    );

    // Generate URL slug
    const baseSlug = generateSlug(
      tripDetails.destination,
      tripStyle.climate,
      tripDetails.arrivalDate,
      tripDetails.departureDate
    );
    
    const uniqueSlug = await ensureUniqueSlug(baseSlug);

    // Generate title for the packing list
    const title = `${tripDetails.destination} ${tripStyle.climate.charAt(0).toUpperCase() + tripStyle.climate.slice(1)} Trip`;

    // Store packing list in database
    let savedPackingList;
    try {
      savedPackingList = await db.packingList.create({
        data: {
          slug: uniqueSlug,
          title: title,
          destination: tripDetails.destination,
          arrivalDate: tripDetails.arrivalDate,
          departureDate: tripDetails.departureDate,
          accommodation: tripDetails.accommodation,
          transportation: JSON.stringify(tripDetails.transportation),
          tripType: tripStyle.tripType,
          climate: tripStyle.climate,
          luggage: tripStyle.luggage,
          packingStyle: JSON.stringify(tripStyle.packingStyle),
          activities: JSON.stringify(activities || []),
          specialRequirements: JSON.stringify(specialRequirements || []),
          travelerProfile: JSON.stringify(travelerProfile),
          packingList: JSON.stringify(packingList),
          weatherData: JSON.stringify(forecast || null),
          weatherRecommendations: JSON.stringify(weatherRecommendations || null)
        }
      });
    } catch (dbError) {
      console.error('Database error when saving packing list:', dbError);
      // If there's a database error, still return the packing list but with a warning
      return NextResponse.json({ 
        slug: uniqueSlug,
        packingList,
        weatherRecommendations,
        warning: "Packing list generated but not saved to database"
      });
    }
    
    return NextResponse.json({ 
      slug: savedPackingList.slug,
      packingList,
      weatherRecommendations
    });
  } catch (error) {
    console.error('Error generating packing list:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}