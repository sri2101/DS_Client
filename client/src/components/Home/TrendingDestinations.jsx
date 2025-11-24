import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { name: 'Europe', image: '/europe-tpt.webp' },
  { name: 'Andaman', image: 'https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp' },
  { name: 'Bali', image: 'https://images.emtcontent.com/holiday-img/home-img/bali-qckv.webp', slug: '/corporatepackages/tales-of-love-in-bali' },
  { name: 'Kerala', image: 'https://images.emtcontent.com/holiday-img/home-img/kerala-handpckd.webp' },
  { name: 'Thailand', image: 'https://images.emtcontent.com/holiday-img/home-img/thailand.png' },
];

const TrendingDestinations = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 sm:pt-12 pb-12">
      {/* ↑ added pt-16 (mobile) to create breathing space above section */}

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-left">
        Top Trending Destinations
      </h2>

      <p className="text-sm text-gray-600 mb-8 text-left">
        Explore the hottest travel spots around the globe.
      </p>


      <div
        className="
    flex gap-4 overflow-x-auto flex-nowrap pb-2
    md:flex-wrap md:justify-start md:overflow-x-visible no-scrollbar
  "
      >

        {destinations.map((dest, index) => (
          <div
            key={index}
            onClick={() => dest.slug && navigate(dest.slug)}
            className="min-w-[8rem] sm:min-w-[10rem] md:w-52 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={dest.image}
                alt={dest.name}
                className="rounded-2xl w-full h-48 sm:h-52 md:h-56 object-cover shadow-md transition-transform duration-300 md:group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-center text-base sm:text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
              {dest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;
