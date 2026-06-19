import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, ChevronLeft } from 'lucide-react';
import properties from '../data/properties.json';
import Gallery from '../components/Gallery';
import Amenities from '../components/Amenities';
import RoomTypesTable from '../components/RoomTypesTable';
import BookingWidget from '../components/BookingWidget';
import Reviews from '../components/Reviews';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [selectedRoom, setSelectedRoom] = useState(null);

  if (!property) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-ink">Property not found</h1>
        <p className="mt-2 text-ink-muted">We couldn't find a listing with that ID.</p>
        <button
          onClick={() => navigate('/properties')}
          className="mt-4 rounded-md bg-primary px-5 py-2.5 font-semibold text-white hover:bg-primary-light focus-ring"
        >
          Back to stays
        </button>
      </div>
    );
  }

  const { name, location, rating, reviewCount, images, description, amenities, roomTypes, pricePerNight, reviews } = property;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Link to="/properties" className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        <ChevronLeft className="h-4 w-4" /> Back to stays
      </Link>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{name}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-ink-muted">
            <MapPin className="h-4 w-4" /> {location}
          </p>
        </div>
        <span className="mt-2 flex w-fit items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-sm font-bold text-white sm:mt-0">
          <Star className="h-4 w-4 fill-current" /> {rating} &middot; {reviewCount} reviews
        </span>
      </div>

      <div className="mt-4">
        <Gallery images={images} name={name} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <p className="text-ink-soft">{description}</p>
          <Amenities amenities={amenities} />
          <RoomTypesTable roomTypes={roomTypes} onReserve={setSelectedRoom} />
          <Reviews rating={rating} reviewCount={reviewCount} reviews={reviews} />
        </div>

        <div>
          <BookingWidget
            pricePerNight={pricePerNight}
            selectedRoom={selectedRoom}
            onClearRoom={() => setSelectedRoom(null)}
          />
        </div>
      </div>
    </div>
  );
}
