import { useState } from 'react';

const TABS = {
  Domestic: ['Kigali hotels', 'Rubavu hotels', 'Musanze hotels', 'Huye hotels', 'Nyungwe lodges'],
  International: ['Nairobi hotels', 'Kampala hotels', 'Dar es Salaam hotels', 'Bujumbura hotels'],
  Countries: ['Rwanda', 'Kenya', 'Uganda', 'Tanzania', 'Burundi'],
};

export default function PopularSearches() {
  const [active, setActive] = useState('Domestic');

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-lg font-bold text-ink">Popular with travellers from Rwanda</h2>
      <div className="mt-3 flex gap-2">
        {Object.keys(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              active === tab
                ? 'border-primary bg-primary-50 text-primary'
                : 'border-gray-200 text-ink-soft hover:border-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-ink-muted">
        {TABS[active].map((item, idx) => (
          <span key={item}>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary hover:underline">
              {item}
            </a>
            {idx < TABS[active].length - 1 && <span className="mx-1">&middot;</span>}
          </span>
        ))}
      </p>
    </section>
  );
}
