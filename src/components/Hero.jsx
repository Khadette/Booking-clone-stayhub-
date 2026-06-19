import SearchCard from './SearchCard';

export default function Hero() {
  return (
    <section className="relative bg-primary pb-28 pt-10 sm:pb-32 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Find your next stay
        </h1>
        <p className="mt-2 max-w-xl text-base text-white/85 sm:text-lg">
          Search hotels, apartments, resorts and villas across Rwanda's most loved destinations.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SearchCard />
      </div>
    </section>
  );
}
