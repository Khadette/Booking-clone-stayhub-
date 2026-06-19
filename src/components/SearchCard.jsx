import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

export default function SearchCard() {
  const { search, updateSearch } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/properties');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mx-auto -mb-16 grid w-full max-w-5xl grid-cols-1 gap-3 rounded-xl2 bg-white p-4 shadow-widget sm:grid-cols-2 sm:p-5 lg:grid-cols-[2fr_1fr_1fr_1fr_auto] lg:gap-2"
    >
      <label className="flex flex-col gap-1 rounded-lg border border-gray-200 px-3 py-2 focus-within:border-primary sm:col-span-2 lg:col-span-1">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
          <MapPin className="h-3.5 w-3.5" /> Destination
        </span>
        <input
          type="text"
          placeholder="Where are you going?"
          value={search.destination}
          onChange={(e) => updateSearch({ destination: e.target.value })}
          className="bg-transparent text-sm font-medium text-ink outline-none placeholder:text-ink-muted/70"
        />
      </label>

      <label className="flex flex-col gap-1 rounded-lg border border-gray-200 px-3 py-2 focus-within:border-primary">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
          <Calendar className="h-3.5 w-3.5" /> Check-in
        </span>
        <input
          type="date"
          value={search.checkIn}
          onChange={(e) => updateSearch({ checkIn: e.target.value })}
          className="bg-transparent text-sm font-medium text-ink outline-none"
        />
      </label>

      <label className="flex flex-col gap-1 rounded-lg border border-gray-200 px-3 py-2 focus-within:border-primary">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
          <Calendar className="h-3.5 w-3.5" /> Check-out
        </span>
        <input
          type="date"
          value={search.checkOut}
          onChange={(e) => updateSearch({ checkOut: e.target.value })}
          className="bg-transparent text-sm font-medium text-ink outline-none"
        />
      </label>

      <label className="flex flex-col gap-1 rounded-lg border border-gray-200 px-3 py-2 focus-within:border-primary">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
          <Users className="h-3.5 w-3.5" /> Guests
        </span>
        <select
          value={search.guests}
          onChange={(e) => updateSearch({ guests: Number(e.target.value) })}
          className="bg-transparent text-sm font-medium text-ink outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-primary-dark transition-colors hover:bg-accent-dark focus-ring lg:py-2"
      >
        <Search className="h-4 w-4" />
        Search
      </button>
    </form>
  );
}
