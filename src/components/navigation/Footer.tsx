import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#ffd166]">Pack</span><span className="text-gray-400">Smart</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The perfect packing companion for every traveler. Create personalized packing lists and never forget essential items again.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
          
          {/* Packing Lists */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Packing Lists</h3>
            <ul className="space-y-2">
              <li><Link href="/packing-lists/beach-vacation" className="text-gray-300 hover:text-white transition-colors">Beach Vacation</Link></li>
              <li><Link href="/packing-lists/business-trip" className="text-gray-300 hover:text-white transition-colors">Business Trip</Link></li>
              <li><Link href="/packing-lists/camping-hiking" className="text-gray-300 hover:text-white transition-colors">Camping & Hiking</Link></li>
              <li><Link href="/packing-lists/european-winter" className="text-gray-300 hover:text-white transition-colors">European Winter</Link></li>
              <li><Link href="/packing-lists/tropical-cruise" className="text-gray-300 hover:text-white transition-colors">Tropical Cruise</Link></li>
              <li><Link href="/packing-lists/city-break" className="text-gray-300 hover:text-white transition-colors">Weekend City Break</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PackSmart. All rights reserved. Made with ❤️ for travelers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}