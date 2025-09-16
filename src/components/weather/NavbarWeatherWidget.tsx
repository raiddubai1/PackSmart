"use client";

import { useState, useEffect } from "react";
import { Cloud, CloudRain, Sun, Loader2 } from "lucide-react";
import { weatherService } from "@/lib/weather";

interface CurrentWeather {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  main: string;
}

export default function NavbarWeatherWidget() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <Sun className="w-4 h-4 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-4 h-4 text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-4 h-4 text-blue-400" />;
      default:
        return <Cloud className="w-4 h-4 text-gray-400" />;
    }
  };

  const fetchCurrentWeather = async () => {
    try {
      setLoading(true);
      setError(false);
      
      // Changed default city to Dubai
      const defaultCity = "Dubai";
      
      // Get current date for weather fetch
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      // Fetch weather forecast
      const forecast = await weatherService.getWeatherForecast(defaultCity, today, tomorrow);
      
      if (forecast.daily && forecast.daily.length > 0) {
        const todayWeather = forecast.daily[0];
        const currentWeather: CurrentWeather = {
          city: forecast.city,
          country: forecast.country,
          temperature: Math.round(todayWeather.temp_day),
          condition: todayWeather.weather[0]?.description || "Unknown",
          main: todayWeather.weather[0]?.main || "Unknown"
        };
        
        setWeather(currentWeather);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
    
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchCurrentWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-300 text-sm">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="hidden sm:inline">Loading...</span>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-gray-300 transition-colors" 
           onClick={fetchCurrentWeather}
           title="Click to retry">
        <Cloud className="w-4 h-4" />
        <span className="hidden sm:inline">Weather</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors cursor-pointer group"
         onClick={fetchCurrentWeather}
         title={`${weather.city}, ${weather.country} - ${weather.condition} ${weather.temperature}°C`}>
      {getWeatherIcon(weather.main)}
      <span className="hidden sm:inline font-medium">{weather.city}</span>
      <span className="hidden md:inline text-gray-400 group-hover:text-gray-300">
        {weather.temperature}°
      </span>
    </div>
  );
}