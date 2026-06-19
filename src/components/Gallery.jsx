import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images, name }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const close = () => setLightboxIndex(null);
  const prev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 overflow-hidden rounded-lg sm:h-80">
        <button
          onClick={() => setLightboxIndex(0)}
          className="col-span-4 row-span-2 h-56 overflow-hidden sm:col-span-2 sm:h-full focus-ring"
        >
          <img src={images[0]} alt={`${name} main`} className="h-full w-full object-cover transition-transform hover:scale-105" />
        </button>
        {images.slice(1, 5).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightboxIndex(idx + 1)}
            className="hidden h-full overflow-hidden sm:col-span-1 sm:block focus-ring"
          >
            <img src={img} alt={`${name} ${idx + 2}`} className="h-full w-full object-cover transition-transform hover:scale-105" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button onClick={close} className="absolute right-4 top-4 text-white focus-ring rounded-md p-1" aria-label="Close gallery">
            <X className="h-7 w-7" />
          </button>
          <button onClick={prev} className="absolute left-2 text-white focus-ring rounded-full p-2 sm:left-6" aria-label="Previous image">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`${name} full size`}
            className="max-h-[85vh] max-w-full rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={next} className="absolute right-2 text-white focus-ring rounded-full p-2 sm:right-6" aria-label="Next image">
            <ChevronRight className="h-8 w-8" />
          </button>
          <span className="absolute bottom-4 text-sm text-white/70">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
