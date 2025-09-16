interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

interface DailyWeather {
  date: string;
  temp_min: number;
  temp_max: number;
  temp_day: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  weather: WeatherCondition[];
  precipitation_chance: number;
  uv_index?: number;
}

interface WeatherForecast {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  daily: DailyWeather[];
}

interface WeatherRecommendation {
  category: string;
  items: string[];
  reason: string;
  priority: 'essential' | 'recommended' | 'optional';
}

export class WeatherService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.OPENWEATHER_API_KEY || '';
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  /**
   * Get coordinates for a city name
   */
  async getCoordinates(cityName: string): Promise<{ lat: number; lon: number; name: string; country: string }> {
    try {
      // Check if we have a valid API key (not a demo key)
      if (!this.apiKey || this.apiKey === 'demo_key_for_purposes') {
        // Return mock coordinates for demo purposes
        const mockCities: Record<string, { lat: number; lon: number; name: string; country: string }> = {
          'dubai': { lat: 25.2048, lon: 55.2708, name: 'Dubai', country: 'AE' },
          'new york': { lat: 40.7128, lon: -74.0060, name: 'New York', country: 'US' },
          'london': { lat: 51.5074, lon: -0.1278, name: 'London', country: 'GB' },
          'paris': { lat: 48.8566, lon: 2.3522, name: 'Paris', country: 'FR' },
          'tokyo': { lat: 35.6762, lon: 139.6503, name: 'Tokyo', country: 'JP' },
          'sydney': { lat: -33.8688, lon: 151.2093, name: 'Sydney', country: 'AU' }
        };
        
        const key = cityName.toLowerCase();
        if (mockCities[key]) {
          return mockCities[key];
        }
        
        // Default to Dubai if city not found
        return mockCities['dubai'];
      }

      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Failed to get coordinates: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.length === 0) {
        throw new Error(`City "${cityName}" not found`);
      }

      return {
        lat: data[0].lat,
        lon: data[0].lon,
        name: data[0].name,
        country: data[0].country
      };
    } catch (error) {
      console.error('Error getting coordinates:', error);
      throw error;
    }
  }

  /**
   * Get weather forecast for a location and date range
   */
  async getWeatherForecast(
    cityName: string, 
    startDate: Date, 
    endDate: Date
  ): Promise<WeatherForecast> {
    try {
      // Get coordinates first
      const coords = await this.getCoordinates(cityName);
      
      // Check if we have a valid API key (not a demo key)
      if (!this.apiKey || this.apiKey === 'demo_key_for_purposes') {
        // Return consistent mock weather data for demo purposes
        const mockDaily: DailyWeather[] = [];
        
        // Define consistent weather data for different cities
        const cityWeatherData: Record<string, {
          baseTemp: number;
          tempVariation: number;
          conditions: Array<{ main: string; description: string }>;
          humidity: number;
          windSpeed: number;
          precipitationChance: number;
        }> = {
          'dubai': {
            baseTemp: 32,
            tempVariation: 8,
            conditions: [
              { main: 'Clear', description: 'clear sky' },
              { main: 'Clear', description: 'sunny' },
              { main: 'Clouds', description: 'few clouds' }
            ],
            humidity: 65,
            windSpeed: 4,
            precipitationChance: 5
          },
          'new york': {
            baseTemp: 18,
            tempVariation: 12,
            conditions: [
              { main: 'Clouds', description: 'overcast clouds' },
              { main: 'Clear', description: 'clear sky' },
              { main: 'Rain', description: 'light rain' }
            ],
            humidity: 70,
            windSpeed: 6,
            precipitationChance: 40
          },
          'london': {
            baseTemp: 15,
            tempVariation: 6,
            conditions: [
              { main: 'Clouds', description: 'overcast clouds' },
              { main: 'Rain', description: 'light rain' },
              { main: 'Clouds', description: 'few clouds' }
            ],
            humidity: 80,
            windSpeed: 5,
            precipitationChance: 60
          },
          'paris': {
            baseTemp: 16,
            tempVariation: 10,
            conditions: [
              { main: 'Clouds', description: 'scattered clouds' },
              { main: 'Clear', description: 'clear sky' },
              { main: 'Rain', description: 'moderate rain' }
            ],
            humidity: 75,
            windSpeed: 4,
            precipitationChance: 45
          },
          'tokyo': {
            baseTemp: 20,
            tempVariation: 8,
            conditions: [
              { main: 'Clouds', description: 'broken clouds' },
              { main: 'Clear', description: 'clear sky' },
              { main: 'Rain', description: 'light rain' }
            ],
            humidity: 70,
            windSpeed: 3,
            precipitationChance: 35
          },
          'sydney': {
            baseTemp: 22,
            tempVariation: 10,
            conditions: [
              { main: 'Clear', description: 'clear sky' },
              { main: 'Clouds', description: 'few clouds' },
              { main: 'Clear', description: 'sunny' }
            ],
            humidity: 60,
            windSpeed: 7,
            precipitationChance: 20
          }
        };
        
        // Get city-specific weather data or default to Dubai
        const cityKey = cityName.toLowerCase();
        const cityData = cityWeatherData[cityKey] || cityWeatherData['dubai'];
        
        // Generate consistent 5-day forecast
        for (let i = 0; i < 5; i++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + i);
          
          // Use day index to get consistent condition (cycles through available conditions)
          const conditionIndex = i % cityData.conditions.length;
          const condition = cityData.conditions[conditionIndex];
          
          // Add small consistent variation based on day (but start with base temp for today)
          const dayVariation = i * 2; // 0, 2, 4, 6, 8 degrees variation (today = base temp)
          
          mockDaily.push({
            date: date.toISOString().split('T')[0],
            temp_min: cityData.baseTemp - cityData.tempVariation/2 + dayVariation,
            temp_max: cityData.baseTemp + cityData.tempVariation/2 + dayVariation,
            temp_day: cityData.baseTemp + dayVariation,
            humidity: cityData.humidity + (Math.sin(i) * 5), // Small sinusoidal variation
            pressure: 1013 + (Math.cos(i) * 5), // Small variation around standard pressure
            wind_speed: cityData.windSpeed + (Math.sin(i * 0.5) * 2),
            weather: [condition],
            precipitation_chance: Math.max(0, Math.min(100, cityData.precipitationChance + (Math.sin(i * 0.7) * 15)))
          });
        }
        
        return {
          city: coords.name,
          country: coords.country,
          latitude: coords.lat,
          longitude: coords.lon,
          timezone: 'Asia/Dubai',
          daily: mockDaily
        };
      }
      
      // Get 5-day forecast (OpenWeatherMap free tier provides 5 days)
      const response = await fetch(
        `${this.baseUrl}/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${this.apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Failed to get weather forecast: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Process the forecast data
      const daily: DailyWeather[] = [];
      const dailyMap = new Map<string, any[]>();

      // Group forecast data by date
      data.list.forEach((item: any) => {
        const date = new Date(item.dt * 1000).toISOString().split('T')[0];
        if (!dailyMap.has(date)) {
          dailyMap.set(date, []);
        }
        dailyMap.get(date)!.push(item);
      });

      // Process each day
      dailyMap.forEach((dayData, date) => {
        const temps = dayData.map(d => d.main.temp);
        const weatherConditions = dayData.map(d => d.weather[0]);
        
        // Calculate precipitation chance from rain/snow data
        const precipitationChance = Math.max(
          ...dayData.map(d => (d.pop || 0) * 100),
          ...dayData.map(d => d.rain?.['3h'] || 0),
          ...dayData.map(d => d.snow?.['3h'] || 0)
        );

        daily.push({
          date,
          temp_min: Math.min(...temps),
          temp_max: Math.max(...temps),
          temp_day: temps.reduce((a, b) => a + b, 0) / temps.length,
          humidity: dayData[0].main.humidity,
          pressure: dayData[0].main.pressure,
          wind_speed: dayData[0].wind?.speed || 0,
          weather: weatherConditions,
          precipitation_chance: Math.min(precipitationChance, 100)
        });
      });

      // Sort by date
      daily.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
      // For demo purposes, we'll return available forecast data
      // In production, you might want to handle this differently
      const availableDays = daily.slice(0, 5); // Limit to 5 days as per API limits

      return {
        city: coords.name,
        country: coords.country,
        latitude: coords.lat,
        longitude: coords.lon,
        timezone: data.city.timezone,
        daily: availableDays
      };
    } catch (error) {
      console.error('Error getting weather forecast:', error);
      throw error;
    }
  }

  /**
   * Generate packing recommendations based on weather conditions
   */
  generateWeatherRecommendations(forecast: WeatherForecast): WeatherRecommendation[] {
    const recommendations: WeatherRecommendation[] = [];
    
    if (forecast.daily.length === 0) {
      return recommendations;
    }

    // Calculate overall weather patterns
    const avgTemp = forecast.daily.reduce((sum, day) => sum + day.temp_day, 0) / forecast.daily.length;
    const minTemp = Math.min(...forecast.daily.map(day => day.temp_min));
    const maxTemp = Math.max(...forecast.daily.map(day => day.temp_max));
    const hasRain = forecast.daily.some(day => day.precipitation_chance > 30);
    const maxWindSpeed = Math.max(...forecast.daily.map(day => day.wind_speed));
    const avgHumidity = forecast.daily.reduce((sum, day) => sum + day.humidity, 0) / forecast.daily.length;

    // Temperature-based recommendations
    if (avgTemp < 10) {
      recommendations.push({
        category: "Cold Weather Gear",
        items: [
          "Heavy winter coat",
          "Thermal underwear",
          "Warm sweaters",
          "Winter hat and gloves",
          "Insulated boots",
          "Scarf or neck gaiter"
        ],
        reason: `Average temperature will be ${avgTemp.toFixed(1)}°C (${this.toFahrenheit(avgTemp).toFixed(1)}°F)`,
        priority: "essential"
      });
    } else if (avgTemp < 20) {
      recommendations.push({
        category: "Cool Weather Clothing",
        items: [
          "Light jacket or cardigan",
          "Long-sleeve shirts",
          "Light sweaters",
          "Pants or jeans",
          "Closed-toe shoes"
        ],
        reason: `Average temperature will be ${avgTemp.toFixed(1)}°C (${this.toFahrenheit(avgTemp).toFixed(1)}°F)`,
        priority: "essential"
      });
    } else if (avgTemp > 30) {
      recommendations.push({
        category: "Hot Weather Essentials",
        items: [
          "Lightweight, breathable clothing",
          "Sun hat or cap",
          "Sunglasses",
          "Sunscreen (SPF 30+)",
          "Light-colored clothing",
          "Comfortable sandals"
        ],
        reason: `Average temperature will be ${avgTemp.toFixed(1)}°C (${this.toFahrenheit(avgTemp).toFixed(1)}°F)`,
        priority: "essential"
      });
    }

    // Rain recommendations
    if (hasRain) {
      recommendations.push({
        category: "Rain Protection",
        items: [
          "Waterproof jacket or raincoat",
          "Umbrella",
          "Waterproof shoes or boots",
          "Quick-dry clothing",
          "Waterproof bag for electronics"
        ],
        reason: "Rain is expected during your trip",
        priority: "essential"
      });
    }

    // Wind recommendations
    if (maxWindSpeed > 20) {
      recommendations.push({
        category: "Wind Protection",
        items: [
          "Windbreaker jacket",
          "Sunglasses (to protect eyes from wind)",
          "Hat that won't blow away",
          "Layers for temperature changes"
        ],
        reason: "Windy conditions expected (up to ${maxWindSpeed} km/h)",
        priority: "recommended"
      });
    }

    // Humidity recommendations
    if (avgHumidity > 70) {
      recommendations.push({
        category: "Humidity Management",
        items: [
          "Moisture-wicking clothing",
          "Extra changes of clothes",
          "Anti-chafe products",
          "Quick-dry towels"
        ],
        reason: `High humidity expected (${avgHumidity.toFixed(0)}%)`,
        priority: "recommended"
      });
    }

    // Temperature variation recommendations
    if (maxTemp - minTemp > 15) {
      recommendations.push({
        category: "Layering System",
        items: [
          "Base layers (t-shirts, tank tops)",
          "Mid layers (light sweaters, fleeces)",
          "Outer layer (jacket, coat)",
          "Versatile pieces that can be layered"
        ],
        reason: `Large temperature variation expected (${minTemp.toFixed(1)}°C to ${maxTemp.toFixed(1)}°C)`,
        priority: "essential"
      });
    }

    return recommendations;
  }

  /**
   * Convert Celsius to Fahrenheit
   */
  private toFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }

  /**
   * Get weather icon URL
   */
  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  /**
   * Get weather description for display
   */
  getWeatherDescription(weather: WeatherCondition): string {
    return weather.description
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

// Export singleton instance
export const weatherService = new WeatherService();