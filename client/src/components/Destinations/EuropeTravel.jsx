import React, { useState } from 'react';

const EuropeTravel = () => {
  const destinations = [
    {
      id: 1,
      image: 'Switzerland.webp'
    },
    {
      id: 2,
      image: 'France.webp'
    },
    {
      id: 3,
      image: 'Italy.webp'
    },
    {
      id: 4,
      image: 'UK.webp'
    },
    {
      id: 5,
      image: 'Greece.webp'
    },
    {
      id: 6,
      image: 'Spain.webp'
    }
  ];

  // Extra destinations (just images)
  const moreDestinations = [
    { id: 7, image: '/eastern-europe.webp' },
    { id: 8, image: '/iceland.webp' },
    { id: 9, image: '/croatia.webp' },
    { id: 10, image: '/amsterdam.webp' },
    { id: 11, image: '/finland.webp' },
    { id: 12, image: '/norway.webp' }
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white via-yellow-100 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side - Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Escape & Explore{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Europe
              </span>
            </h1>
            <p className="text-md sm:text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              From romantic streets in Paris to the snowy Alps and Mediterranean coasts — your unforgettable European adventure begins here.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-7 py-3 rounded-full font-semibold text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Our Travel Experts
            </button>
          </div>

          {/* Right Side - Images Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="space-y-4">
              {/* Top Row */}
              <div className="grid grid-cols-3 gap-4">
                {destinations.slice(0, 3).map((destination, index) => (
                  <div
                    key={destination.id}
                    className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl aspect-[4/3]"
                  >
                    <img
                      src={destination.image}
                      alt={`European destination ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-3 gap-4">
                {destinations.slice(3, 6).map((destination, index) => (
                  <div
                    key={destination.id}
                    className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-xl aspect-[4/3]"
                  >
                    <img
                      src={destination.image}
                      alt={`European destination ${index + 4}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* Show More Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-slate-600 hover:text-blue-600 font-medium text-sm sm:text-base transition-colors duration-300 flex items-center mx-auto gap-2 group"
                >
                  {showMore ? 'Show Less' : 'Show More Destinations'}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Extra Destinations */}
              {showMore && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {moreDestinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="relative rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105 aspect-[4/3]"
                    >
                      <img
                        src={dest.image}
                        alt={`More European destination ${dest.id}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeTravel;
