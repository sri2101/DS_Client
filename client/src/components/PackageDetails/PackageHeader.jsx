import React, { useEffect, useState } from 'react';

export default function PackageHeader({ packageData }) {
  const {
    title,
    nights,
    days,
    tag,
    location,
    images = []
  } = packageData;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex flex-wrap items-center gap-2">
          {title}
          <span className="text-base font-semibold text-gray-700">
            {nights} Nights / {days} Days
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        </h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">{location}</p>
      </div>

      {images.length > 0 && (
        <div className="overflow-hidden rounded-xl mt-3 aspect-[16/9]">
          <img
            src={images[activeIndex]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      )}
    </div>
  );
}
