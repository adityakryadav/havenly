'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FilterSidebarProps {
  onClose?: () => void;
  isOpen?: boolean;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

export function FilterSidebar({
  onClose,
  isOpen = true,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  selectedTypes,
  setSelectedTypes,
}: FilterSidebarProps) {
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    rating: true,
    type: true,
  });

  const toggleFilter = (filter: keyof typeof expandedFilters) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const propertyTypes = [
    { id: 'entire', label: 'Entire Place' },
    { id: 'room', label: 'Room' },
    { id: 'shared', label: 'Shared Room' },
  ];

  const ratings = [
    { value: 4.5, label: '4.5+ (Excellent)' },
    { value: 4.0, label: '4.0+ (Very Good)' },
    { value: 3.5, label: '3.5+ (Good)' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-80 border-r border-border bg-white px-6 py-4 transform transition-transform md:relative md:inset-auto md:w-64 md:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between md:mb-6">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <button
            onClick={onClose}
            className="md:hidden p-1 hover:bg-muted rounded transition"
            aria-label="Close filters"
          >
            <X size={20} className="text-foreground" />
          </button>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6 border-b border-border pb-6">
          <button
            onClick={() => toggleFilter('price')}
            className="flex w-full items-center justify-between font-semibold text-foreground hover:text-primary transition"
          >
            <span>Price Range</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedFilters.price ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedFilters.price && (
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Minimum Price
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">$</span>
                  <Input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
                    }
                    className="h-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Maximum Price
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">$</span>
                  <Input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
                    }
                    className="h-9"
                  />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
                }
                className="w-full accent-primary"
              />
            </div>
          )}
        </div>

        {/* Minimum Rating Filter */}
        <div className="mb-6 border-b border-border pb-6">
          <button
            onClick={() => toggleFilter('rating')}
            className="flex w-full items-center justify-between font-semibold text-foreground hover:text-primary transition"
          >
            <span>Rating</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedFilters.rating ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedFilters.rating && (
            <div className="mt-4 space-y-2">
              {ratings.map((rating) => (
                <label key={rating.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating.value}
                    checked={minRating === rating.value}
                    onChange={() => setMinRating(rating.value)}
                    className="h-4 w-4 cursor-pointer accent-primary"
                  />
                  <span className="text-sm text-foreground">{rating.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Property Type Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleFilter('type')}
            className="flex w-full items-center justify-between font-semibold text-foreground hover:text-primary transition"
          >
            <span>Property Type</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                expandedFilters.type ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedFilters.type && (
            <div className="mt-4 space-y-2">
              {propertyTypes.map((type) => (
                <label key={type.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.label)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTypes([...selectedTypes, type.label]);
                      } else {
                        setSelectedTypes(selectedTypes.filter((t) => t !== type.label));
                      }
                    }}
                    className="h-4 w-4 cursor-pointer accent-primary rounded"
                  />
                  <span className="text-sm text-foreground">{type.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters Button */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setPriceRange({ min: 0, max: 1000 });
            setMinRating(0);
            setSelectedTypes([]);
          }}
        >
          Clear All
        </Button>
      </aside>
    </>
  );
}
