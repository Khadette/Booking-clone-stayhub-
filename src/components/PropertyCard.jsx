import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

function ratingLabel(rating) {
  if (rating >= 4.8) return 'Exceptional';
  if (rating >= 4.5) return 'Superb';
  if (rating >= 4.2) return 'Very good';
  if (rating >= 3.8) return 'Good';
  return 'Fair';
}

export default function PropertyCard({ property, className = '' }) {
  const { id, name, location, type, pricePerNight, rating, reviewCount, images } = property;
  const [saved, setSaved] = useState(false);

  const toggleSave = (e) => {
    e.preventDefault();
    setSaved((v) => !v);
  };

  return (
    <Link
      to={`/property/${id}`}
      className={`group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover focus-ring ${className}`}
    >
      <div className="relative h-44 w-full overflow-hidden bg-gray-100 sm:h-48">
        <img
          src={images[0]}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-xs font-semibold text-primary">
          {type}
        </span>
        <button
          onClick={toggleSave}
          aria-label={saved ? 'Remove from saved' : 'Save property'}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-ink-soft transition-colors hover:text-red-500 focus-ring"
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-heading font-bold leading-tight text-ink line-clamp-1">{name}</h3>
        <p className="flex items-center gap-1 text-xs text-ink-muted">
          <MapPin className="h-3.5 w-3.5" /> {location}
        </p>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-9 items-center justify-center rounded-md bg-primary text-xs font-bold text-white">
              {rating}
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-ink">{ratingLabel(rating)}</p>
              <p className="text-xs text-ink-muted">{reviewCount} reviews</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-ink-muted">Starting from</p>
            <p className="font-heading text-lg font-bold text-ink">${pricePerNight}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
