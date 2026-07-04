'use client';

import { Search } from 'lucide-react';

interface ExpandedSearchBarProps {
  visible: boolean;
}

/**
 * The large "Where / When / Who" search pill.
 * Lives OUTSIDE the normal navbar flow — it is absolutely positioned
 * directly beneath the navbar so it never affects the navbar's height.
 * Slides up/down + fades based on scroll direction (Airbnb-style).
 */
export function ExpandedSearchBar({ visible }: ExpandedSearchBarProps) {
  return (
    <div
      className={`absolute left-0 top-full z-30 hidden w-full justify-center overflow-hidden transition-all duration-300 ease-in-out md:flex ${
        visible
          ? 'max-h-24 translate-y-0 opacity-100'
          : 'pointer-events-none max-h-0 -translate-y-full opacity-0'
      }`}
    >
      <div className="w-full max-w-7xl px-4 pb-4 pt-3 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-[850px] items-center rounded-full border border-border bg-background shadow-md mx-auto">
          {/* Where */}
          <div className="flex-1 px-8 py-3 hover:bg-muted rounded-full cursor-pointer transition">
            <div className="text-[12px] font-bold text-foreground tracking-wide">Where</div>
            <div className="text-[14px] text-muted-foreground truncate">Search destinations</div>
          </div>
          <div className="h-8 w-[1px] bg-border shrink-0"></div>
          {/* When */}
          <div className="flex-1 px-8 py-3 hover:bg-muted rounded-full cursor-pointer transition">
            <div className="text-[12px] font-bold text-foreground tracking-wide">When</div>
            <div className="text-[14px] text-muted-foreground truncate">Add dates</div>
          </div>
          <div className="h-8 w-[1px] bg-border shrink-0"></div>
          {/* Who */}
          <div className="flex-1 pl-8 pr-2 py-2 hover:bg-muted rounded-full cursor-pointer transition flex items-center justify-between">
            <div>
              <div className="text-[12px] font-bold text-foreground tracking-wide">Who</div>
              <div className="text-[14px] text-muted-foreground truncate">Add guests</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 shadow-md shrink-0">
              <Search size={20} className="stroke-[3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
