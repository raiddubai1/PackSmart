import { NextRequest, NextResponse } from 'next/server';
import { weatherService } from '@/lib/weather';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { destination, startDate, endDate } = body;

    if (!destination || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'Missing required fields: destination, startDate, endDate' },
        { status: 400 }
      );
    }

    // Parse dates
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    if (start > end) {
      return NextResponse.json(
        { error: 'Start date must be before end date' },
        { status: 400 }
      );
    }

    // Get weather forecast
    const forecast = await weatherService.getWeatherForecast(destination, start, end);

    // Generate weather-based recommendations
    const recommendations = weatherService.generateWeatherRecommendations(forecast);

    return NextResponse.json({
      ...forecast,
      recommendations
    });

  } catch (error) {
    console.error('Weather API error:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return NextResponse.json(
          { error: 'Destination not found. Please check the city name and try again.' },
          { status: 404 }
        );
      }
      
      if (error.message.includes('Failed to get coordinates') || 
          error.message.includes('Failed to get weather forecast')) {
        return NextResponse.json(
          { error: 'Unable to fetch weather data. Please try again later.' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred while fetching weather data' },
      { status: 500 }
    );
  }
}