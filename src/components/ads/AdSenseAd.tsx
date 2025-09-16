'use client';

interface AdSenseAdProps {
  slot: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSenseAd({ slot, className = "", style = {} }: AdSenseAdProps) {
  // Only render ads in production to avoid false clicks during development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Different ad configurations based on slot
  const getAdConfig = (slot: string) => {
    switch (slot) {
      case 'footer':
        return {
          style: {
            ...style,
            width: '100%',
            height: '90px',
          },
          className: `adsense-footer ${className}`,
        };
      case 'horizontal':
        return {
          style: {
            ...style,
            width: '100%',
            height: '90px',
            maxWidth: '728px',
          },
          className: `adsense-horizontal ${className}`,
        };
      case 'inline-rectangle':
        return {
          style: {
            ...style,
            width: '100%',
            height: '250px',
            maxWidth: '336px',
          },
          className: `adsense-rectangle ${className}`,
        };
      case 'leaderboard':
        return {
          style: {
            ...style,
            width: '100%',
            height: '90px',
            maxWidth: '728px',
          },
          className: `adsense-leaderboard ${className}`,
        };
      default:
        return {
          style: {
            ...style,
            width: '100%',
            height: '250px',
          },
          className: `adsense-default ${className}`,
        };
    }
  };

  const adConfig = getAdConfig(slot);

  return (
    <div className="adsense-container my-4 flex justify-center">
      {/* Placeholder div for Google AdSense */}
      <div
        className={adConfig.className}
        style={adConfig.style}
        data-ad-slot={slot}
        data-ad-client="ca-pub-0000000000000000" // Placeholder - will be replaced with actual publisher ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
        {/* AdSense ad code will be inserted here by Google */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          Ad Placeholder - Slot: {slot}
        </div>
      </div>
    </div>
  );
}