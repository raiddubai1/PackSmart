'use client';

import AdSenseAd from './AdSenseAd';

export default function StickyFooterAd() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <AdSenseAd 
        slot="footer" 
        className="w-full"
      />
    </div>
  );
}