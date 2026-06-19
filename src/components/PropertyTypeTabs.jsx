import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TYPES = [
  {
    label: 'Hotels',
    value: 'Hotel',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
  },
  {
    label: 'Apartments',
    value: 'Apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
  },
  {
    label: 'Resorts',
    value: 'Resort',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&q=80',
  },
  {
    label: 'Villas',
    value: 'Villa',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&q=80',
  },
];

export default function PropertyTypeTabs() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Browse by property type</h2>
      <div className="relative mt-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TYPES.map(({ label, value, image }) => (
            <Link
              key={value}
              to="/properties"
              state={{ type: value }}
              className="group overflow-hidden rounded-lg focus-ring"
            >
              <div className="h-28 w-full overflow-hidden sm:h-36">
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">{label}</p>
            </Link>
          ))}
        </div>
        <span className="absolute right-0 top-12 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-card lg:flex">
          <ChevronRight className="h-4 w-4 text-ink" />
        </span>
      </div>
    </section>
  );
}
