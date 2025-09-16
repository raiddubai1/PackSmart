"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Cloud, CloudRain, Sun, Wind, Thermometer, Droplets } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

interface WeatherDisplay {
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

export default function TripDetails() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destination: "",
    arrivalDate: undefined as Date | undefined,
    departureDate: undefined as Date | undefined,
    accommodation: "",
    transportation: [] as string[]
  });

  const [weatherData, setWeatherData] = useState<WeatherDisplay | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (field: 'arrivalDate' | 'departureDate', date: Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: date }));
  };

  const handleTransportationChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      transportation: checked
        ? [...prev.transportation, value]
        : prev.transportation.filter(t => t !== value)
    }));
  };

  const fetchWeatherData = async () => {
    if (!formData.destination || !formData.arrivalDate || !formData.departureDate) {
      setWeatherError("Please fill in destination and dates to get weather information");
      return;
    }

    setIsLoading(true);
    setWeatherError(null);

    try {
      const response = await fetch('/api/weather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: formData.destination,
          startDate: formData.arrivalDate.toISOString(),
          endDate: formData.departureDate.toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeatherError('Unable to fetch weather data. Please check the destination and try again.');
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for next step
    const formDataForStorage = {
      ...formData,
      arrivalDate: formData.arrivalDate ? formData.arrivalDate.toISOString().split('T')[0] : '',
      departureDate: formData.departureDate ? formData.departureDate.toISOString().split('T')[0] : '',
      weatherData: weatherData
    };
    localStorage.setItem("tripDetails", JSON.stringify(formDataForStorage));
    router.push("/traveler-profile");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto pt-8">
        <div className="mb-8">
          <Link href="/" className="text-[#ffd166] hover:text-[#e6ba5c]">
            ← Back to Home
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trip Details Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Step 1: Trip Details</CardTitle>
              <CardDescription className="text-gray-300">
                Tell us about your upcoming trip. This information will help us create a personalized packing list for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-gray-300">Destination *</Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Paris, France"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                    required
                    className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="arrivalDate" className="text-gray-300">Arrival Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-[#E8F0FE] border-gray-300 text-gray-900 hover:bg-[#D2E3FC]"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white border-gray-300">
                        <Calendar
                          mode="single"
                          selected={formData.arrivalDate}
                          onSelect={(date) => handleDateChange('arrivalDate', date)}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          initialFocus
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="departureDate" className="text-gray-300">Departure Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-[#E8F0FE] border-gray-300 text-gray-900 hover:bg-[#D2E3FC]"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.departureDate ? format(formData.departureDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white border-gray-300">
                        <Calendar
                          mode="single"
                          selected={formData.departureDate}
                          onSelect={(date) => handleDateChange('departureDate', date)}
                          disabled={(date) => 
                            date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                            (formData.arrivalDate ? date < formData.arrivalDate : false)
                          }
                          initialFocus
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation" className="text-gray-300">Accommodation Type</Label>
                  <Select value={formData.accommodation} onValueChange={(value) => handleInputChange("accommodation", value)}>
                    <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectItem value="hotel" className="text-gray-900 hover:bg-gray-200">Hotel</SelectItem>
                      <SelectItem value="airbnb" className="text-gray-900 hover:bg-gray-200">Airbnb</SelectItem>
                      <SelectItem value="hostel" className="text-gray-900 hover:bg-gray-200">Hostel</SelectItem>
                      <SelectItem value="camping" className="text-gray-900 hover:bg-gray-200">Camping</SelectItem>
                      <SelectItem value="resort" className="text-gray-900 hover:bg-gray-200">Resort</SelectItem>
                      <SelectItem value="other" className="text-gray-900 hover:bg-gray-200">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-300">Transportation Method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Flight", "Car", "Train", "Bus"].map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <Checkbox
                          id={method.toLowerCase()}
                          checked={formData.transportation.includes(method)}
                          onCheckedChange={(checked) => handleTransportationChange(method, checked as boolean)}
                        />
                        <Label htmlFor={method.toLowerCase()} className="text-gray-300">{method}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="submit" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                    Next
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Weather Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Cloud className="w-6 h-6" />
                Weather Forecast
              </CardTitle>
              <CardDescription className="text-gray-300">
                Get weather information for your destination to help pack appropriately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  onClick={fetchWeatherData}
                  disabled={isLoading || !formData.destination || !formData.arrivalDate || !formData.departureDate}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isLoading ? "Fetching Weather..." : "Get Weather Forecast"}
                </Button>

                {weatherError && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {weatherError}
                  </div>
                )}

                {weatherData && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white">
                        {weatherData.city}, {weatherData.country}
                      </h3>
                      <p className="text-gray-400">Weather forecast for your trip dates</p>
                    </div>

                    <div className="space-y-3">
                      {weatherData.daily.map((day, index) => (
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
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}