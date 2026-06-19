import { Link } from 'react-router-dom';

const DESTINATIONS = [
  {
    name: 'Karongi',
    count: '3 properties',
    image: 'https://images.trvl-media.com/lodging/111000000/110860000/110858400/110858324/a5ccfaeb.jpg?impolicy=resizecrop&rw=1200&ra=fit',
    size: 'large',
  },
  {
    name: 'Rubavu',
    count: '2 properties',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
    size: 'large',
  },
  {
    name: 'Musanze',
    count: '2 properties',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&q=80',
    size: 'small',
  },
  {
    name: 'Nyungwe',
    count: '1 property',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    size: 'small',
  },
  {
    name: 'Huye',
    count: '1 property',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
    size: 'small',
  },
];

export default function TrendingDestinations() {
  const large = DESTINATIONS.filter((d) => d.size === 'large');
  const small = DESTINATIONS.filter((d) => d.size === 'small');

  const Tile = ({ d, heightClass }) => (
    <Link
      to="/properties"
      state={{ destination: d.name }}
      className={`group relative block overflow-hidden rounded-lg shadow-card transition-shadow hover:shadow-card-hover focus-ring ${heightClass}`}
    >
      <img
        src={d.image}
        alt={d.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-3 left-4 text-white">
        <p className="font-heading text-lg font-bold leading-tight">{d.name}</p>
        <p className="text-xs text-white/80">{d.count}</p>
      </div>
    </Link>
  );

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">Trending destinations</h2>
      <p className="mt-1 text-sm text-ink-muted">Most searched stays in Rwanda this month</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {large.map((d) => (
          <Tile key={d.name} d={d} heightClass="h-48 sm:h-56" />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {small.map((d) => (
          <Tile key={d.name} d={d} heightClass="h-40" />
        ))}
      </div>
    </section>
  );
}
