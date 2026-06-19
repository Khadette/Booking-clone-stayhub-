import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FilterDrawer from '../components/FilterDrawer';
import properties from '../data/properties.json';
import { useSearch } from '../context/SearchContext';

export default function Properties() {
  const { search } = useSearch();
  const location = useLocation();
  const navState = location.state || {};

  const [filters, setFilters] = useState({
    type: navState.type || '',
    maxPrice: 300,
    minRating: 0,
  });
  const [sortBy, setSortBy] = useState('recommended');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const destinationQuery = (navState.destination || search.destination || '').toLowerCase();

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (filters.type && p.type !== filters.type) return false;
      if (p.pricePerNight > filters.maxPrice) return false;
      if (p.rating < filters.minRating) return false;
      if (destinationQuery && !p.location.toLowerCase().includes(destinationQuery) && !p.name.toLowerCase().includes(destinationQuery)) {
        return false;
      }
      return true;
    });

    switch (sortBy) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [filters, sortBy, destinationQuery]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-ink">
            {destinationQuery ? `Stays in ${navState.destination || search.destination}` : 'All stays in Rwanda'}
          </h1>
          <p className="mt-1 text-sm text-ink-muted">{filtered.length} properties found</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-ink sm:hidden focus-ring"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <label className="flex items-center gap-2 text-sm">
            <span className="hidden text-ink-muted sm:inline">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-gray-200 px-3 py-2 font-medium text-ink focus-ring"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-6 flex gap-6">
        <FilterDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-ink-muted">
              No properties match your filters. Try widening your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
