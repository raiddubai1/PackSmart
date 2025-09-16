import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    const packingList = await db.packingList.findUnique({
      where: { slug }
    });

    if (!packingList) {
      return NextResponse.json(
        { error: "Packing list not found" },
        { status: 404 }
      );
    }

    // Parse the JSON data
    const packingListData = JSON.parse(packingList.packingList);
    const tripDetails = {
      destination: packingList.destination,
      arrivalDate: packingList.arrivalDate,
      departureDate: packingList.departureDate,
      accommodation: packingList.accommodation,
      transportation: JSON.parse(packingList.transportation),
    };

    // Parse weather data if available
    let weatherData = null;
    let weatherRecommendations = null;
    
    if (packingList.weatherData) {
      try {
        weatherData = JSON.parse(packingList.weatherData);
      } catch (error) {
        console.error('Error parsing weather data:', error);
      }
    }
    
    if (packingList.weatherRecommendations) {
      try {
        weatherRecommendations = JSON.parse(packingList.weatherRecommendations);
      } catch (error) {
        console.error('Error parsing weather recommendations:', error);
      }
    }

    return NextResponse.json({
      packingListData,
      tripDetails,
      title: packingList.title,
      weatherData,
      weatherRecommendations,
    });
  } catch (error) {
    console.error('Error fetching packing list:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}