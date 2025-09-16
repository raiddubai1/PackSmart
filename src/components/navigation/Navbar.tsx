"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavbarWeatherWidget from "@/components/weather/NavbarWeatherWidget";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trip-details", label: "Create List" },
    { href: "/results", label: "My Lists" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <span className="text-[#ffd166]">Pack</span>
            <span className="text-gray-400">Smart</span>
          </Link>
        </div>
        
        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Account Button */}
        <div className="hidden md:flex items-center gap-4">
          <NavbarWeatherWidget />
          <Button asChild size="sm" className="bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900">
            <Link href="/traveler-profile">
              Account
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors text-sm font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-700 mt-2 space-y-2">
              <div className="px-3 py-2">
                <NavbarWeatherWidget />
              </div>
              <Link
                href="/traveler-profile"
                className="block px-3 py-2 bg-[#ffd166] text-gray-900 hover:bg-[#e6ba5c] rounded-md transition-colors text-sm font-medium text-center"
                onClick={closeMenu}
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}