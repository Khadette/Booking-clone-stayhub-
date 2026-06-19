import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import properties from '../data/properties.json';

export default function DealsCarousel() {
  const scrollerRef = useRef(null);
  const deals = properties.slice(0, 6);

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Deals for this weekend</h2>
          <p className="mt-1 text-sm text-ink-muted">Save on stays across Rwanda</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            onClick={() => scrollBy(-320)}
            className="rounded-full border border-gray-200 p-2 text-ink hover:bg-gray-50 focus-ring"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollBy(320)}
            className="rounded-full border border-gray-200 p-2 text-ink hover:bg-gray-50 focus-ring"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-hide mt-4 flex gap-4 overflow-x-auto pb-2"
      >
        {deals.map((p) => (
          <PropertyCard key={p.id} property={p} className="min-w-[260px] max-w-[260px] flex-shrink-0 sm:min-w-[280px]" />
        ))}
      </div>
    </section>
  );
}
