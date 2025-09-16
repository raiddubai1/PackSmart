import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import StickyFooterAd from "@/components/ads/StickyFooterAd";
import ConsentManager from "@/components/consent/ConsentManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PackSmart - Smart Packing Lists for Every Adventure",
  description: "Create personalized packing lists for any trip. AI-powered recommendations for beach vacations, business trips, camping, European winters, tropical cruises, and city breaks.",
  keywords: ["packing list", "travel", "vacation", "AI", "smart packing", "beach vacation", "business trip", "camping", "European winter", "tropical cruise", "city break"],
  authors: [{ name: "PackSmart Team" }],
  openGraph: {
    title: "PackSmart - Smart Packing Lists for Every Adventure",
    description: "AI-powered packing list generator for every type of trip",
    url: "https://packsmart.com",
    siteName: "PackSmart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PackSmart - Smart Packing Lists",
    description: "AI-powered packing list generator for every type of trip",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
          <StickyFooterAd />
          <ConsentManager />
        </div>
      </body>
    </html>
  );
}
