"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Share2, 
  Copy, 
  Twitter, 
  Pinterest, 
  CheckCircle,
  Link2,
  MessageCircle
} from "lucide-react";

interface ShareComponentProps {
  url: string;
  title: string;
  description: string;
  className?: string;
}

export default function ShareComponent({ 
  url, 
  title, 
  description, 
  className = "" 
}: ShareComponentProps) {
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } else {
        // Fallback to copy link
        await handleCopyLink();
      }
    } catch (err) {
      console.log('Share cancelled or failed:', err);
    } finally {
      setIsSharing(false);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} - ${description}`
    )}&url=${encodeURIComponent(url)}&via=packsmart_app`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handlePinterestShare = () => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      url
    )}&description=${encodeURIComponent(
      `${title} - ${description}`
    )}&media=${encodeURIComponent(
      `${window.location.origin}/api/og?title=${encodeURIComponent(title.split(' ')[0])}&climate=adventure&duration=7`
    )}`;
    window.open(pinterestUrl, '_blank', 'width=750,height=550');
  };

  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5 text-[#ffd166]" />
              Share Your Packing List
            </h3>
            <p className="text-sm text-gray-400">
              Share your list and help other travelers! 🌍✈️
            </p>
          </div>

          {/* Native Share Button (Mobile-first) */}
          <Button
            onClick={handleNativeShare}
            disabled={isSharing}
            className="w-full bg-[#ffd166] hover:bg-[#e6ba5c] text-gray-900 font-medium"
          >
            {isSharing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2" />
                Sharing...
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </>
            )}
          </Button>

          {/* Desktop Share Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Copy Link */}
            <Button
              variant="outline"
              onClick={handleCopyLink}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {copied ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </>
              )}
            </Button>

            {/* Twitter */}
            <Button
              variant="outline"
              onClick={handleTwitterShare}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>

            {/* Pinterest */}
            <Button
              variant="outline"
              onClick={handlePinterestShare}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <Pinterest className="h-4 w-4 mr-2" />
              Pinterest
            </Button>
          </div>

          {/* Sharing Incentive */}
          <div className="text-center pt-2 border-t border-gray-700">
            <p className="text-sm text-[#ffd166] font-medium">
              💡 Help fellow travelers pack smarter!
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Your shared list could save someone from packing headaches
            </p>
          </div>

          {/* Direct Link Display */}
          <div className="bg-gray-900 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Link2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={url}
                readOnly
                className="bg-transparent text-xs text-gray-400 flex-1 outline-none cursor-text select-all"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}