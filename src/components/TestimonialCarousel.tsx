import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

interface TestimonialCarouselProps {
  reviews: ReviewItem[];
}

export default function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8 bg-white rounded-2xl shadow-xl shadow-secondary/5 border border-primary/10 overflow-hidden">
      {/* Decorative wash splash mark in background */}
      <div className="absolute top-0 right-0 -mr-6 -mt-6 text-primary-light pointer-events-none opacity-40">
        <Quote className="w-32 h-32 transform rotate-180" />
      </div>

      <div className="relative min-h-[220px] md:min-h-[180px] flex items-center">
        {reviews.map((review, idx) => (
          <div
            key={review.id}
            className={`transition-all duration-700 absolute w-full top-0 left-0 flex flex-col justify-center ${
              idx === activeIndex
                ? 'opacity-100 translate-x-0 scale-100 z-10'
                : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1.5 mb-4 text-amber-500">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 stroke-amber-600" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-secondary text-base md:text-lg italic font-medium leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem] md:min-h-[5rem] overflow-hidden">
              "{review.content}"
            </blockquote>

            {/* User Meta */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-secondary-light font-bold flex items-center justify-center font-display text-sm border-2 border-primary">
                {review.name.substring(0, 2).trim()}
              </div>
              <div>
                <cite className="font-display font-black text-lg md:text-xl text-secondary not-italic block">
                  {review.name}
                </cite>
                <span className="block text-xs font-bold text-primary font-mono uppercase">
                  {review.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Arrow Controls */}
      <div className="absolute right-4 bottom-4 flex items-center gap-2 z-20">
        <button
          onClick={handlePrev}
          className="p-1.5 rounded-lg border border-primary/20 bg-white hover:bg-primary-light text-secondary hover:text-primary active:scale-90 transition-all cursor-pointer"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-1.5 rounded-lg border border-primary/20 bg-white hover:bg-primary-light text-secondary hover:text-primary active:scale-90 transition-all cursor-pointer"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Indicators / Dot navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex 
                ? 'bg-primary w-6' 
                : 'bg-primary-light hover:bg-primary/55'
            }`}
            aria-label={`Go to review slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
