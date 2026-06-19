import Hero from '../components/Hero';
import WhyStayHub from '../components/WhyStayHub';
import OffersBanner from '../components/OffersBanner';
import PropertyTypeTabs from '../components/PropertyTypeTabs';
import TrendingDestinations from '../components/TrendingDestinations';
import PropertyRow from '../components/PropertyRow';
import SignInBanner from '../components/SignInBanner';
import PopularSearches from '../components/PopularSearches';
import properties from '../data/properties.json';

export default function Home() {
  const topProperties = properties.slice(0, 4);
  const homesGuestsLove = properties.slice(4, 8);

  return (
    <div className="pb-16">
      <Hero />
      <WhyStayHub />
      <OffersBanner />
      <PropertyTypeTabs />
      <TrendingDestinations />
      <PropertyRow
        title="Stay at our top unique properties"
        subtitle="From lakeside lodges to volcano villas, we've got it all"
        items={topProperties}
      />
      <PropertyRow
        title="Homes guests love"
        items={homesGuestsLove}
      />
      <SignInBanner />
      <PopularSearches />
    </div>
  );
}
