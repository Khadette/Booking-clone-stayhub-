import { Star } from 'lucide-react';

export default function Reviews({ rating, reviewCount, reviews }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h2 className="font-heading text-lg font-bold text-ink">Guest reviews</h2>
        <span className="flex items-center gap-1 rounded-md bg-primary px-2 py-0.5 text-sm font-bold text-white">
          <Star className="h-3.5 w-3.5 fill-current" /> {rating}
        </span>
        <span className="text-sm text-ink-muted">{reviewCount} reviews</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {reviews.map((r) => (
          <div key={r.author} className="rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink">{r.author}</p>
              <span className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-bold text-primary">{r.score}</span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
