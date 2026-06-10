import React, { useState } from 'react';
import { X, Gift } from 'lucide-react';

interface PromoRibbonProps {
  onQuoteClick: () => void;
}

export default function PromoRibbon({ onQuoteClick }: PromoRibbonProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="promo-ribbon" className="relative bg-accent text-white px-4 py-2.5 text-center text-xs md:text-sm font-semibold z-50 flex items-center justify-center gap-2 shadow-md animate-water-flow bg-gradient-to-r from-accent via-red-500 to-accent">
      <Gift className="w-4 h-4 animate-bounce" />
      <span>Special Offer: Get <strong className="underline decoration-2">10% OFF</strong> your professional first service!</span>
      <button 
        onClick={onQuoteClick}
        className="ml-3 px-3 py-1 bg-white text-secondary hover:bg-secondary hover:text-white transition-colors duration-200 text-[11px] uppercase tracking-wider rounded-md font-bold cursor-pointer"
      >
        Claim Offer
      </button>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
