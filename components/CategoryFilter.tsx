'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Mountain,
  Building2,
  Trees,
  Crown,
  Home,
  Sparkles,
  Waves,
  Palmtree,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { categories } from '@/lib/dummy-data';

const getIconMap = () => ({
  Mountain: <Mountain size={24} />,
  Building2: <Building2 size={24} />,
  Trees: <Trees size={24} />,
  Crown: <Crown size={24} />,
  Home: <Home size={24} />,
  Sparkles: <Sparkles size={24} />,
  Waves: <Waves size={24} />,
  Palmtree: <Palmtree size={24} />,
});

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const iconMap = getIconMap();

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 350);
    }
  };

  useEffect(() => {
    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <div className="relative border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition bg-white/80 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition bg-white/80 backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          )}

          {/* Categories */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto py-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange?.(category.id)}
                className={`flex flex-col items-center gap-2 flex-shrink-0 py-2 px-2 rounded-lg transition-all border-b-2 ${
                  selectedCategory === category.id
                    ? 'border-foreground text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                <div className="text-muted-foreground hover:text-foreground transition">
                  {iconMap[category.icon as keyof typeof iconMap]}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
