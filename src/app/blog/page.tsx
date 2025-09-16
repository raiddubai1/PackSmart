import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Filter,
  BookOpen,
  Star,
  Heart,
  Share2,
  ArrowRight,
  Tag
} from "lucide-react";
import Link from "next/link";

// Function to create URL-friendly slugs
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Do NOT Pack for Winter Trip in ONLY a Carry-On Bag",
      excerpt: "Learn why winter travel requires more than just a carry-on and discover smart packing strategies for cold weather destinations.",
      category: "Winter Travel",
      author: "Sarah Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "/winter-travel.jpg",
      tags: ["winter travel", "packing tips", "cold weather", "luggage", "carry-on"],
      featured: true
    },
    {
      id: 2,
      title: "How Do I Pack for a Business Trip?",
      excerpt: "Master the art of professional packing with our comprehensive guide to business travel essentials, wardrobe strategies, and efficiency tips.",
      category: "Business Travel",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      image: "/business-travel.jpg",
      tags: ["business travel", "professional packing", "wardrobe strategy", "efficiency", "corporate travel"],
      featured: true
    },
    {
      id: 3,
      title: "Sustainable Travel: Eco-Friendly Packing",
      excerpt: "Discover how to pack sustainably and reduce your environmental impact while traveling.",
      category: "Sustainable Travel",
      author: "Emily Watson",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "/sustainable-travel.jpg",
      tags: ["sustainable", "eco-friendly", "environment", "green travel"],
      featured: true
    },
    {
      id: 4,
      title: "The Ultimate Family Travel Packing Guide: Stress-Free Adventures with Kids",
      excerpt: "Master the art of family vacation packing with our comprehensive guide to traveling with children of all ages, from toddlers to teens.",
      category: "Family Travel",
      author: "David Kim",
      date: "November 28, 2024",
      readTime: "12 min read",
      image: "/family-travel.jpg",
      tags: ["family travel", "kids packing", "vacation with children", "parenting tips", "stress-free travel"],
      featured: true
    },
    {
      id: 5,
      title: "Digital Nomad Packing: What You Really Need",
      excerpt: "Minimalist packing guide for remote workers and digital nomads on the move.",
      category: "Digital Nomad",
      author: "Lisa Park",
      date: "November 20, 2024",
      readTime: "6 min read",
      image: "/digital-nomad.jpg",
      tags: ["digital nomad", "remote work", "minimalist", "technology"],
      featured: false
    },
    {
      id: 6,
      title: "Adventure Travel: Packing for Extreme Conditions",
      excerpt: "Essential gear and packing strategies for hiking, camping, and adventure travel.",
      category: "Adventure Travel",
      author: "Alex Thompson",
      date: "November 15, 2024",
      readTime: "9 min read",
      image: "/adventure-travel.jpg",
      tags: ["adventure", "hiking", "camping", "outdoor"],
      featured: false
    },
    {
      id: 7,
      title: "Luxury Travel: Packing in Style",
      excerpt: "How to pack elegantly for luxury vacations without sacrificing practicality.",
      category: "Luxury Travel",
      author: "Sophie Laurent",
      date: "November 8, 2024",
      readTime: "5 min read",
      image: "/luxury-travel.jpg",
      tags: ["luxury", "style", "fashion", "elegance"],
      featured: false
    },
    {
      id: 8,
      title: "Budget Travel: Packing Smart on a Shoestring",
      excerpt: "Money-saving packing tips and essential items for budget-conscious travelers.",
      category: "Budget Travel",
      author: "Mike Johnson",
      date: "November 1, 2024",
      readTime: "4 min read",
      image: "/budget-travel.jpg",
      tags: ["budget", "money-saving", "affordable", "tips"],
      featured: false
    },
    {
      id: 9,
      title: "Solo Travel: Safety and Packing Essentials",
      excerpt: "Comprehensive guide to packing safely and efficiently for solo adventures.",
      category: "Solo Travel",
      author: "Rachel Green",
      date: "October 25, 2024",
      readTime: "7 min read",
      image: "/solo-travel.jpg",
      tags: ["solo travel", "safety", "independence", "adventure"],
      featured: false
    },
    {
      id: 10,
      title: "Essential Packing Tips for Summer Travel",
      excerpt: "Master the art of lightweight packing for summer adventures with our comprehensive guide to sun protection, fabric selection, and smart organization.",
      category: "Summer Travel",
      author: "PackSmart Team",
      date: "June 1, 2024",
      readTime: "8 min read",
      image: "/summer-travel-hero.jpg",
      tags: ["summer travel", "packing tips", "lightweight packing", "sun protection", "beach vacation"],
      featured: true
    }
  ];

  const categories = [
    "All Categories",
    "Winter Travel",
    "Business Travel", 
    "Sustainable Travel",
    "Summer Travel",
    "Family Travel",
    "Digital Nomad",
    "Adventure Travel",
    "Luxury Travel",
    "Budget Travel",
    "Solo Travel"
  ];

  const popularTags = [
    "packing tips", "travel essentials", "minimalist", "sustainability", 
    "business travel", "family trips", "adventure", "budget travel"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#ffd166] rounded-full mx-auto mb-6 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel <span className="text-[#ffd166]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert packing tips, travel guides, and insights to make your journeys more enjoyable and stress-free. 
            Discover the art of smart packing from travel enthusiasts and industry experts.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Badge className="bg-[#ffd166] text-gray-900">Expert Advice</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Travel Tips</Badge>
            <Badge className="bg-[#ffd166] text-gray-900">Packing Guides</Badge>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input 
              placeholder="Search articles, topics, or destinations..." 
              className="bg-[#E8F0FE] border-gray-300 text-gray-900 placeholder-gray-500 pl-12 pr-4 py-3"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">
              View All Featured
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="bg-gray-800 border-gray-700 hover:border-[#ffd166] transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[#ffd166] text-gray-900 mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                    <Link href={`/blog/${createSlug(post.title)}`}>
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
                <div className="flex items-center gap-4">
                  <Select defaultValue="newest">
                    <SelectTrigger className="bg-[#E8F0FE] border-gray-300 text-gray-900 w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#E8F0FE] border-gray-300 text-gray-900">
                      <SelectItem value="newest" className="text-gray-900 hover:bg-gray-200">Newest First</SelectItem>
                      <SelectItem value="oldest" className="text-gray-900 hover:bg-gray-200">Oldest First</SelectItem>
                      <SelectItem value="popular" className="text-gray-900 hover:bg-gray-200">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="bg-gray-700 border-gray-600 hover:border-[#ffd166] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="border-[#ffd166] text-[#ffd166]">
                              {post.category}
                            </Badge>
                            <span className="text-gray-400 text-sm">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                          <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <Button variant="ghost" className="text-[#ffd166] hover:text-[#e6ba5c] p-0 h-auto" asChild>
                              <Link href={`/blog/${createSlug(post.title)}`}>
                                Read More <ArrowRight className="h-4 w-4 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">
                    Previous
                  </Button>
                  <Button className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">1</Button>
                  <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">2</Button>
                  <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">3</Button>
                  <Button variant="outline" className="bg-[#1e2938] border-[#ffd166] text-[#ffd166] hover:bg-[#334155]">
                    Next
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Filter className="h-5 w-5 text-[#ffd166]" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          index === 0 
                            ? 'bg-[#ffd166] text-gray-900' 
                            : 'text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Popular Tags */}
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Tag className="h-5 w-5 text-[#ffd166]" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Newsletter */}
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Heart className="h-5 w-5 text-[#ffd166]" />
                    Travel Tips Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get weekly packing tips and travel insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Your email address" 
                      className="bg-gray-600 border-gray-500 text-white"
                    />
                    <Button className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Popular Posts */}
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#ffd166]" />
                    Popular Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm line-clamp-2">{post.title}</h4>
                          <p className="text-gray-400 text-xs">{post.readTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-gray-300">Articles Published</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <User className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300">Expert Writers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300">Happy Readers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <Share2 className="h-12 w-12 text-[#ffd166] mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">100K+</div>
                <div className="text-gray-300">Social Shares</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-gray-300 mb-8">
            Share your travel expertise and packing tips with our community of travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
              Become a Writer
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              Submit Article Idea
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}