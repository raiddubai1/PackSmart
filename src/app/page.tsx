import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] gap-8 p-4 bg-gray-900">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Perfect Pack, Every Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Never forget essential items again. Create personalized packing lists based on your destination, trip duration, activities, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/trip-details">
                Generate Your List
              </Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-gray-800 hover:bg-gray-700 text-[#ffd166] border border-[#ffd166]">
              <Link href="/packing-lists">
                Explore Packing Templates
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-white">Smart Suggestions</h3>
            <p className="text-gray-400">Get personalized recommendations based on your destination and activities</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-white">Weather Aware</h3>
            <p className="text-gray-400">Automatically adjusts for weather conditions at your destination</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-white">Customizable</h3>
            <p className="text-gray-400">Add or remove items to match your personal packing style</p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Travel Tips & Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover expert packing tips, travel guides, and insights to make your journeys more enjoyable and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/winter-travel.jpg" 
                  alt="Winter travel packing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ffd166] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Winter Travel
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>December 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Essential Packing Tips for Winter Travel
                </h3>
                <p className="text-gray-300 mb-4">
                  Learn how to pack efficiently for cold weather destinations without overstuffing your luggage.
                </p>
                <Button variant="outline" className="w-full border-[#ffd166] text-gray-900 hover:bg-[#ffd166] hover:text-gray-900">
                  Read More
                </Button>
              </div>
            </article>
            
            {/* Blog Post 2 */}
            <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/business-travel.jpg" 
                  alt="Business travel packing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ffd166] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Business Travel
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>December 10, 2024</span>
                  <span className="mx-2">•</span>
                  <span>3 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Smart Packing for Business Trips
                </h3>
                <p className="text-gray-300 mb-4">
                  Professional packing strategies that keep you looking sharp while traveling light for business.
                </p>
                <Button variant="outline" className="w-full border-[#ffd166] text-gray-900 hover:bg-[#ffd166] hover:text-gray-900">
                  Read More
                </Button>
              </div>
            </article>
            
            {/* Blog Post 3 */}
            <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/sustainable-travel.jpg" 
                  alt="Sustainable travel packing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#ffd166] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Sustainable Travel
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>December 5, 2024</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sustainable Travel: Eco-Friendly Packing
                </h3>
                <p className="text-gray-300 mb-4">
                  Discover how to pack sustainably and reduce your environmental impact while traveling.
                </p>
                <Button variant="outline" className="w-full border-[#ffd166] text-gray-900 hover:bg-[#ffd166] hover:text-gray-900">
                  Read More
                </Button>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              <Link href="/blog">
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}