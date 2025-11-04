
import React, { useEffect, useState } from "react";
import { Search, Calendar, MapPin } from "lucide-react";

const slides = [
  { image: "https://images.emtcontent.com/activities-img/banrhome.jpg" },
  { image: "https://images.emtcontent.com/activities-img/activities-bnr-nw.png" },
  { image: "https://images.emtcontent.com/activities-img/banner5.webp" },
  { image: "https://images.emtcontent.com/activities-img/banner3.webp" },
  { image: "https://images.emtcontent.com/activities-img/banner4.webp" },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image } = slides[current];

  return (
    <div
      className="relative w-full h-[380px] sm:h-[420px] bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content wrapper (centers + limits width) */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start text-white text-center pt-8 sm:pt-12 px-4">
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Title */}
          <h2
            className="text-3xl sm:text-5xl font-thin leading-tight py-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Unleash the Joy with Thrilling Activities
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl mt-1 font-medium">
            Discover over-the-top exhilarating and adrenaline-rushing activities
          </p>
          <p className="text-base sm:text-xl mt-1 font-medium">
            around the world with our exclusive activities packages
          </p>

          {/* Search bar */}
          <div className="mt-5 flex justify-center">
            <div className="w-full max-w-lg sm:max-w-2xl flex bg-white shadow-lg rounded-full overflow-hidden">
              {/* Where input */}
              <div className="flex items-center flex-1 px-4 py-3 min-w-0 border-r border-gray-300">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                <div className="text-left w-full ml-2">
                  <p className="text-xs sm:text-sm font-semibold text-black">Where?</p>
                  <input
                    type="text"
                    placeholder="Search location"
                    className="w-full text-xs sm:text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 truncate"
                  />
                </div>
              </div>

              {/* When input */}
              <div className="flex items-center flex-1 px-4 py-3 min-w-0">
                <Calendar className="w-5 h-5 text-gray-500 shrink-0" />
                <div className="text-left w-full ml-2">
                  <p className="text-xs sm:text-sm font-semibold text-black">When?</p>
                  <input
                    type="text"
                    placeholder="Select date"
                    className="w-full text-xs sm:text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 truncate"
                  />
                </div>
              </div>

              {/* Search button */}
              <button className="bg-orange-500 hover:bg-orange-600 w-12 h-12 m-2 rounded-full flex items-center justify-center text-white shrink-0">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;

