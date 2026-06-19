import { X } from 'lucide-react';

const TYPES = ['Hotel', 'Apartment', 'Resort', 'Villa'];

export default function FilterDrawer({ open, onClose, filters, setFilters }) {
  const toggleType = (type) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type === type ? '' : type,
    }));
  };

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 p-4 sm:hidden">
        <h2 className="font-heading text-lg font-bold text-ink">Filters</h2>
        <button onClick={onClose} className="rounded-md p-1 hover:bg-gray-100 focus-ring" aria-label="Close filters">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Property type</h3>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-ring ${
                  filters.type === t
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 text-ink hover:border-primary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">
            Max price: ${filters.maxPrice} / night
          </h3>
          <input
            type="range"
            min="50"
            max="300"
            step="5"
            value={filters.maxPrice}
            onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
            className="w-full accent-primary"
          />
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Minimum rating</h3>
          <div className="flex gap-2">
            {[0, 4, 4.5].map((r) => (
              <button
                key={r}
                onClick={() => setFilters((prev) => ({ ...prev, minRating: r }))}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-ring ${
                  filters.minRating === r
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 text-ink hover:border-primary'
                }`}
              >
                {r === 0 ? 'Any' : `${r}+`}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setFilters({ type: '', maxPrice: 300, minRating: 0 })}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Clear all filters
        </button>
      </div>

      <div className="border-t border-gray-200 p-4 sm:hidden">
        <button
          onClick={onClose}
          className="w-full rounded-md bg-accent py-2.5 font-semibold text-primary-dark hover:bg-accent-dark focus-ring"
        >
          Show results
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop: static sidebar */}
      <aside className="hidden w-64 flex-shrink-0 rounded-lg border border-gray-200 sm:block">
        {content}
      </aside>

      {/* Mobile: slide-over drawer */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-xs bg-white shadow-xl">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
