import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, AlertCircle, ArrowRight, Instagram } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryGridProps {
  items: GalleryItem[];
}

type FilterCategory = 'All' | 'Roof' | 'Gutter' | 'Deck' | 'Concrete' | 'Our Team';

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [activeCompareId, setActiveCompareId] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0-100 for comparison slider
  const [isDragging, setIsDragging] = useState(false);

  const categories: FilterCategory[] = ['All', 'Roof', 'Gutter', 'Deck', 'Concrete', 'Our Team'];

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const compareItem = items.find(item => item.id === activeCompareId);

  // Compare Slider Handlers
  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const progress = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(progress);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!activeCompareId) return;
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!activeCompareId || (!isDragging && e.buttons !== 1)) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  return (
    <div>
      {/* Informational Callout */}
      <div className="bg-primary/5 hover:bg-primary-light transition-colors p-4 rounded-xl border border-primary/20 mb-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/20 text-primary">
            <Instagram className="w-5 h-5" />
          </div>
          <div>
            <p className="text-secondary text-sm font-semibold tracking-wide leading-relaxed">
              Check back often — we're always adding new project photos.
            </p>
            <p className="text-xs text-secondary-light/75">
              Follow us on Instagram <a href="https://instagram.com/jumbosoftwash" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">@jumbosoftwash</a> for the latest daily completions.
            </p>
          </div>
        </div>
        <a 
          href="https://instagram.com/jumbosoftwash" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:opacity-90 transition-all text-center"
        >
          Check Instagram
        </a>
      </div>

      {/* Filter Bar */}
      <div id="gallery-filters" className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-4.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer transform hover:scale-102 ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-white text-secondary border border-neutral-200 hover:border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {category === 'All' ? '📸 All Work' : category}
          </button>
        ))}
      </div>

      {/* Grid of before/after placeholders with alternating hover focus */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          // Explicitly define which cards exhibit "after" as the default preview display vs "before"
          const afterIds = ['gal1', 'gal7', 'gal8', 'gal17', 'gal21', 'gal23', 'gal27'];
          const showAfter = afterIds.includes(item.id);
          const displayImage = showAfter ? item.afterImage : item.beforeImage;

          return (
            <div
              key={item.id}
              className="group hover-zoom-container bg-white rounded-2xl overflow-hidden shadow-lg shadow-secondary/5 border border-neutral-100 hover:border-primary/30 hover:shadow-xl transition-all relative"
            >
              {/* Image slot */}
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  src={displayImage}
                  alt={`${item.title} at ${item.location}`}
                  className="w-full h-full object-cover hover-zoom-img"
                  referrerPolicy="no-referrer"
                />

                {/* Clean before/after tiny indicator corner badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between z-10 pointer-events-none">
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono font-extrabold rounded shadow-sm border bg-secondary/85 backdrop-blur-sm text-white border-white/5">
                      {item.category}
                    </span>
                  </div>
                  {item.category !== 'Our Team' && (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono font-extrabold text-white rounded backdrop-blur-sm flex items-center gap-1 shadow bg-secondary/85 border border-white/5">
                      <Sparkles className="w-2.5 h-2.5 text-primary" />
                      {showAfter ? 'After' : 'Before'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 font-semibold mb-2">No projects found in this category.</p>
          <button 
            onClick={() => setSelectedCategory('All')}
            className="text-primary font-bold hover:underline"
          >
            Reset filter view
          </button>
        </div>
      )}

      {/* Lightbox Screen comparison Slider */}
      {activeCompareId && compareItem && (
        <div className="fixed inset-0 bg-secondary/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-primary/10">
            {/* Header */}
            <div className="p-4 md:p-6 bg-secondary text-white flex items-center justify-between border-b border-primary/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-primary font-extrabold bg-primary-light px-2 py-0.5 rounded">
                  {compareItem.category} Project
                </span>
                <h3 className="font-display font-black text-lg md:text-xl text-white tracking-tight mt-1">
                  Before &amp; After Comparison
                </h3>
              </div>
              <button 
                onClick={() => setActiveCompareId(null)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close comparison view"
              >
                ✕
              </button>
            </div>

            {/* Content: Interactive Swipe Comparison Panel */}
            <div className="p-4 md:p-6 bg-slate-50">
              <p className="text-xs md:text-sm text-neutral-500 text-center mb-4">
                Drag the slider handle left/right or hover across the image to see the dramatic transition from <strong>Before</strong> to <strong>After</strong> wash!
              </p>

              {/* Slider Arena */}
              <div 
                className="relative aspect-[4/3] max-h-[500px] w-full select-none overflow-hidden rounded-xl border border-neutral-300 shadow-md cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* AFTER image (Full ground background) */}
                <img 
                  src={compareItem.afterImage} 
                  alt="After Wash" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute right-4 bottom-4 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded shadow-md z-10 pointer-events-none uppercase tracking-wider font-mono">
                  ✨ AFTER SPARKLING WASH
                </div>

                {/* BEFORE image (Left overlay, width clipped based on slider) */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={compareItem.beforeImage} 
                    alt="Before Wash" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ width: '100%', height: '100%', maxWidth: 'none' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute left-4 bottom-4 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded shadow-md z-11 pointer-events-none uppercase tracking-wider font-mono">
                    ⚠️ BEFORE WASH
                  </div>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute inset-y-0 w-1 bg-white hover:bg-primary transition-colors cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Control Handle Badge */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary border-4 border-primary shadow-xl font-bold flex items-center justify-center select-none z-30">
                    ↔️
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="p-4 bg-slate-100 flex justify-end gap-3">
              <button 
                onClick={() => setActiveCompareId(null)}
                className="px-5 py-2.5 bg-secondary text-white hover:bg-secondary-light font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Done Comparing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
