"use client";

import { Cloud, CloudRain, Sun, Wind, Thermometer, Droplets, AlertTriangle } from "lucide-react";

interface WeatherForecast {
  city: string;
  country: string;
  daily: Array<{
    date: string;
    temp_min: number;
    temp_max: number;
    temp_day: number;
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
    precipitation_chance: number;
    humidity: number;
    wind_speed: number;
  }>;
}

interface WeatherRecommendation {
  category: string;
  items: string[];
  reason: string;
  priority: 'essential' | 'recommended' | 'optional';
}

interface WeatherDisplayProps {
  forecast?: WeatherForecast;
  recommendations?: WeatherRecommendation[];
  isLoading?: boolean;
  error?: string;
}

export default function WeatherDisplay({ 
  forecast, 
  recommendations, 
  isLoading = false, 
  error 
}: WeatherDisplayProps) {
  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <Sun className="w-6 h-6 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-6 h-6 text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-6 h-6 text-blue-400" />;
      default:
        return <Cloud className="w-6 h-6 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'essential':
        return 'text-red-400 bg-red-900/20 border-red-700';
      case 'recommended':
        return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      case 'optional':
        return 'text-green-400 bg-green-900/20 border-green-700';
      default:
        return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'essential':
        return 'Essential';
      case 'recommended':
        return 'Recommended';
      case 'optional':
        return 'Optional';
      default:
        return 'Standard';
    }
  };

  const toFahrenheit = (celsius: number): number => {
    return (celsius * 9/5) + 32;
  };

  if (isLoading) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffd166]"></div>
        </div>
        <p className="text-center text-gray-400 mt-4">Loading weather forecast...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 text-red-400">
          <AlertTriangle className="w-5 h-5" />
          <p className="font-medium">Weather Information Unavailable</p>
        </div>
        <p className="text-gray-400 mt-2 text-sm">{error}</p>
        <p className="text-gray-500 mt-3 text-xs">
          Packing list will be generated based on general climate information.
        </p>
      </div>
    );
  }

  if (!forecast || !forecast.daily || forecast.daily.length === 0) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 text-gray-400">
          <Cloud className="w-5 h-5" />
          <p className="font-medium">No Weather Data Available</p>
        </div>
        <p className="text-gray-500 mt-2 text-sm">
          Enter destination and dates to get weather-based recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Weather Summary */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cloud className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">Weather Forecast</h3>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium text-white mb-1">
            {forecast.city}, {forecast.country}
          </h4>
          <p className="text-gray-400 text-sm">
            {forecast.daily.length} day forecast
          </p>
        </div>

        {/* Daily Forecast */}
        <div className="space-y-3">
          {forecast.daily.slice(0, 5).map((day, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getWeatherIcon(day.weather[0]?.main)}
                  <span className="text-white font-medium">
                    {new Date(day.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">
                    {Math.round(day.temp_max)}° / {Math.round(day.temp_min)}°
                  </div>
                  <div className="text-gray-400 text-sm">
                    {day.weather[0]?.description}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-1 text-gray-300">
                  <Droplets className="w-4 h-4" />
                  <span>{day.precipitation_chance.toFixed(0)}% rain</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <Wind className="w-4 h-4" />
                  <span>{day.wind_speed.toFixed(1)} m/s</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  <Thermometer className="w-4 h-4" />
                  <span>{day.humidity}% humidity</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-semibold text-white">Weather-Based Recommendations</h3>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium mb-1">{rec.category}</h4>
                    <p className="text-gray-400 text-sm">{rec.reason}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rec.priority)}`}>
                    {getPriorityLabel(rec.priority)}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {rec.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weather Insights */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Sun className="w-5 h-5 text-yellow-400" />
          <h4 className="text-lg font-medium text-white">Weather Insights</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Weather-based items are marked with a weather icon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-300">Essential items are prioritized based on conditions</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Recommendations adapt to forecast changes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-gray-300">Pack smart, travel light, stay comfortable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}