import React, { useState, useEffect } from "react";

const DubaiAbudhabi = () => {
  const tiles = [
    { id: 1, image: "/abu-dhabi-skyline.webp", alt: "Abu Dhabi Skyline" },
    { id: 2, image: "/dubai-main.webp", alt: "Dubai Highlight" },
    { id: 3, image: "/burj-khalifa.webp", alt: "Burj Khalifa" },
    { id: 4, image: "/burj-al-arab.webp", alt: "Burj Al Arab" },
    { id: 5, image: "/camel-ride.webp", alt: "Camel Ride" },
    { id: 6, image: "/museum-future.webp", alt: "Museum of the Future" },
    { id: 7, image: "/skydiving-dubai.webp", alt: "Skydiving Dubai" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore Dubai & Abudhabi
        </h2>
        <p className="mt-2 text-gray-500">#Customer Choice</p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="h-48">
            <img
              src={tiles[0].image}
              alt={tiles[0].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 h-48">
            <img
              src={tiles[2].image}
              alt={tiles[2].alt}
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src={tiles[4].image}
              alt={tiles[4].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="h-full">
          <img
            src={tiles[1].image}
            alt={tiles[1].alt}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 h-48">
            <img
              src={tiles[3].image}
              alt={tiles[3].alt}
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src={tiles[6].image}
              alt={tiles[6].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="h-48">
            <img
              src={tiles[5].image}
              alt={tiles[5].alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile Story-style */}
      <div className="md:hidden relative w-full">
        {/* Main Image */}
        <div className="w-full h-80 relative">
          <img
            src={tiles[activeIndex].image}
            alt={tiles[activeIndex].alt}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Thumbnails */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {tiles.map((thumb, i) => (
              <div
                key={thumb.id}
                className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden transition-transform duration-300 ${
                  i === activeIndex
                    ? "scale-125 shadow-lg opacity-100"
                    : "scale-100 opacity-70"
                }`}
              >
                <img
                  src={thumb.image}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DubaiAbudhabi;
