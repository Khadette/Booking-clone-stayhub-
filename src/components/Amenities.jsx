import { Check } from 'lucide-react';

export default function Amenities({ amenities }) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold text-ink">Amenities</h2>
      <ul className="mt-3 grid grid-cols-2 gap-y-2 sm:grid-cols-3">
        {amenities.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
            <Check className="h-4 w-4 flex-shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
