import { Link } from 'react-router-dom';

export default function OffersBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Offers</h2>
      <p className="mt-1 text-sm text-ink-muted">Promotions, deals, and special offers for you</p>

      <Link
        to="/properties"
        className="mt-4 flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="p-5 sm:p-6">
          <p className="text-xs font-medium text-ink-muted">Escape for less with our Getaway Deals</p>
          <p className="mt-1 font-heading text-lg font-bold text-ink sm:text-xl">No catch. Just getaways.</p>
          <p className="mt-1 text-sm text-ink-soft">At least 15% off select stays across Rwanda — just book and go.</p>
          <span className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
            Save with a getaway deal
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80"
          alt="Travellers enjoying a getaway"
          className="h-40 w-full object-cover sm:h-32 sm:w-56"
        />
      </Link>
    </section>
  );
}
