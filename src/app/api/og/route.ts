import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Travel Packing List';
    const climate = searchParams.get('climate') || 'Adventure';
    const duration = searchParams.get('duration') || '7';

    // Generate a compelling description based on climate
    const climateEmojis = {
      hot: '☀️',
      cold: '❄️',
      moderate: '🌤️',
      tropical: '🏝️',
      desert: '🏜️',
      mountain: '⛰️',
      city: '🏙️',
      beach: '🏖️',
    };

    const emoji = climateEmojis[climate as keyof typeof climateEmojis] || '✈️';

    // Create SVG image
    const svg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ffd166;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e6ba5c;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d1d5db;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>
        
        <!-- Background pattern -->
        <circle cx="240" cy="504" r="120" fill="rgba(255, 209, 102, 0.1)"/>
        <circle cx="960" cy="126" r="120" fill="rgba(255, 209, 102, 0.1)"/>
        <circle cx="480" cy="252" r="60" fill="rgba(255, 209, 102, 0.05)"/>
        
        <!-- Logo -->
        <text x="600" y="120" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="url(#brand)">Pack</text>
        <text x="680" y="120" font-family="Inter, system-ui, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#9ca3af">Smart</text>
        
        <!-- Main Title -->
        <text x="600" y="220" font-family="Inter, system-ui, sans-serif" font-size="64" font-weight="bold" text-anchor="middle" fill="url(#text)" max-width="800">${title}</text>
        
        <!-- Subtitle with emoji -->
        <text x="520" y="280" font-family="Inter, system-ui, sans-serif" font-size="36" text-anchor="middle" fill="#ffd166" font-weight="600">${emoji} ${climate.charAt(0).toUpperCase() + climate.slice(1)} Adventure ${emoji}</text>
        
        <!-- Duration -->
        <text x="600" y="330" font-family="Inter, system-ui, sans-serif" font-size="24" text-anchor="middle" fill="#9ca3af">${duration} Days • Complete Packing List</text>
        
        <!-- Features -->
        <text x="450" y="400" font-family="Inter, system-ui, sans-serif" font-size="32" text-anchor="middle">📋</text>
        <text x="450" y="425" font-family="Inter, system-ui, sans-serif" font-size="16" text-anchor="middle" fill="#d1d5db">Smart Lists</text>
        
        <text x="600" y="400" font-family="Inter, system-ui, sans-serif" font-size="32" text-anchor="middle">🌤️</text>
        <text x="600" y="425" font-family="Inter, system-ui, sans-serif" font-size="16" text-anchor="middle" fill="#d1d5db">Weather Aware</text>
        
        <text x="750" y="400" font-family="Inter, system-ui, sans-serif" font-size="32" text-anchor="middle">✈️</text>
        <text x="750" y="425" font-family="Inter, system-ui, sans-serif" font-size="16" text-anchor="middle" fill="#d1d5db">Travel Ready</text>
        
        <!-- CTA Button -->
        <rect x="450" y="470" width="300" height="50" rx="8" fill="rgba(255, 209, 102, 0.1)" stroke="#ffd166" stroke-width="2"/>
        <text x="600" y="500" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle" fill="#ffd166">Create Your Perfect Packing List</text>
      </svg>
    `;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new NextResponse('Error generating image', { status: 500 });
  }
}