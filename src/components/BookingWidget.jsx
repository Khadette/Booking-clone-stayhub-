import { useState } from 'react';
import { useSearch } from '../context/SearchContext';

export default function BookingWidget({ pricePerNight, selectedRoom, onClearRoom }) {
  const { search, updateSearch } = useSearch();
  const [confirmed, setConfirmed] = useState(false);

  const nights = Math.max(
    1,
    Math.round((new Date(search.checkOut) - new Date(search.checkIn)) / 86400000)
  );
  const activePrice = selectedRoom?.price ?? pricePerNight;
  const subtotal = activePrice * nights;
  const serviceFee = Math.round(subtotal * 0.08);
  const total = subtotal + serviceFee;

  const handleReserve = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="rounded-xl2 border border-gray-200 bg-white p-5 shadow-card lg:sticky lg:top-24">
      <div className="flex items-baseline justify-between">
        <p className="font-heading text-2xl font-bold text-ink">${activePrice}</p>
        <span className="text-sm text-ink-muted">per night</span>
      </div>

      {selectedRoom && (
        <div className="mt-2 flex items-center justify-between rounded-md bg-primary-50 px-3 py-2 text-sm">
          <span className="font-medium text-primary">{selectedRoom.name} selected</span>
          <button onClick={onClearRoom} className="text-xs font-semibold text-primary underline">Change</button>
        </div>
      )}

      {confirmed ? (
        <div className="mt-4 rounded-md bg-green-50 p-4 text-center">
          <p className="font-semibold text-green-700">Booking request sent!</p>
          <p className="mt-1 text-sm text-green-600">This is a UI demo, no real reservation was made.</p>
          <button
            onClick={() => setConfirmed(false)}
            className="mt-3 text-sm font-semibold text-primary underline"
          >
            Book again
          </button>
        </div>
      ) : (
        <form onSubmit={handleReserve} className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1 rounded-md border border-gray-200 px-2 py-1.5">
              <span className="text-[11px] font-semibold text-ink-muted">Check-in</span>
              <input
                type="date"
                value={search.checkIn}
                onChange={(e) => updateSearch({ checkIn: e.target.value })}
                className="bg-transparent text-sm font-medium text-ink outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 rounded-md border border-gray-200 px-2 py-1.5">
              <span className="text-[11px] font-semibold text-ink-muted">Check-out</span>
              <input
                type="date"
                value={search.checkOut}
                onChange={(e) => updateSearch({ checkOut: e.target.value })}
                className="bg-transparent text-sm font-medium text-ink outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1 rounded-md border border-gray-200 px-2 py-1.5">
            <span className="text-[11px] font-semibold text-ink-muted">Guests</span>
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

          <div className="space-y-1.5 border-t border-gray-200 pt-3 text-sm">
            <div className="flex justify-between text-ink-soft">
              <span>${activePrice} x {nights} {nights === 1 ? 'night' : 'nights'}</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-ink-soft">
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-1.5 font-bold text-ink">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-accent py-2.5 font-bold text-primary-dark transition-colors hover:bg-accent-dark focus-ring"
          >
            Reserve
          </button>
          <p className="text-center text-xs text-ink-muted">You won't be charged yet</p>
        </form>
      )}
    </div>
  );
}
