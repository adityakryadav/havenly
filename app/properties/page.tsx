'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { FilterSidebar } from '@/components/FilterSidebar';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Property } from '@/lib/dummy-data';
import { getStoredProperties } from '@/lib/properties';
import { Menu, ArrowUpDown } from 'lucide-react';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

function PropertiesPageContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [propertyList, setPropertyList] = useState<Property[]>(getStoredProperties());

  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location') || '';

  useEffect(() => {
    setPropertyList(getStoredProperties());

    const handleUpdate = () => {
      setPropertyList(getStoredProperties());
    };

    window.addEventListener('propertiesUpdated', handleUpdate);
    return () => {
      window.removeEventListener('propertiesUpdated', handleUpdate);
    };
  }, []);

  // Filter properties
  let filtered = propertyList.filter((p) => {
    const matchesPrice =
      p.pricePerNight >= priceFilter.min && p.pricePerNight <= priceFilter.max;
    const matchesRating = p.rating >= ratingFilter;
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(p.type);
    
    // Fuzzy match on city, state, country
    const matchesLocation =
      !locationParam ||
      p.location.city.toLowerCase().includes(locationParam.toLowerCase()) ||
      p.location.state.toLowerCase().includes(locationParam.toLowerCase()) ||
      p.location.country.toLowerCase().includes(locationParam.toLowerCase());
      
    return matchesPrice && matchesRating && matchesType && matchesLocation;
  });

  // Sort properties
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerNight - b.pricePerNight;
      case 'price-high':
        return b.pricePerNight - a.pricePerNight;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          priceRange={priceFilter}
          setPriceRange={setPriceFilter}
          minRating={ratingFilter}
          setMinRating={setRatingFilter}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Header Bar */}
            <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Properties
                </h1>
                {locationParam && (
                  <p className="text-sm font-semibold text-primary mt-1">
                    Showing results for "{locationParam}"
                  </p>
                )}
                <p className="text-muted-foreground mt-1">
                  {sorted.length} properties available
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                {/* Filter Button - Mobile */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="md:hidden"
                >
                  <Menu size={16} className="mr-2" />
                  Filters
                </Button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition">
                    <ArrowUpDown size={16} />
                    <span className="hidden sm:inline">Sort</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rating</option>
                    </select>
                  </button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            {sorted.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sorted.map((property, index) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    priority={index < 4}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    No properties found
                  </h2>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or location search to find more properties.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex flex-col">
        <div className="h-16 border-b border-border bg-background animate-pulse" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading properties...</p>
        </div>
      </div>
    }>
      <PropertiesPageContent />
    </Suspense>
  );
}
