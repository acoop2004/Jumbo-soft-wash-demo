import React from 'react';
import { CalendarClock } from 'lucide-react';

interface MobileCallButtonProps {
  onQuoteClick: () => void;
}

export default function MobileCallButton({ onQuoteClick }: MobileCallButtonProps) {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-2 md:hidden">
      {/* Short quick action form button */}
      <button
        onClick={onQuoteClick}
        className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
      >
        <CalendarClock className="w-4 h-4" />
        <span>Free Quote</span>
      </button>
    </div>
  );
}
