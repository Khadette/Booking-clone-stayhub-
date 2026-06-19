import PropertyCard from './PropertyCard';

export default function PropertyRow({ title, subtitle, items }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
