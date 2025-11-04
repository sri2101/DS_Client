import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const activityData = [
  {
    city: "Dubai",
    activities: "300+ Activities",
    price: "₹489",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/6e/b2/ea.jpg",
  },
  {
    city: "Bangkok",
    activities: "25 Activities",
    price: "₹336",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/e0/53/99.jpg",
  },
  {
    city: "Phuket",
    activities: "150+ Activities",
    price: "₹733",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/6c/46/9a.jpg",
  },
  {
    city: "Singapore",
    activities: "234 Activities",
    price: "₹401",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0f/86/4b/ef.jpg",
  },
  {
    city: "Hikkaduwa",
    activities: "2 Activities",
    price: "₹6,437",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/9c/47/a1.jpg",
  },
];

const InternationalActivities = () => {
  const navigate = useNavigate();

  const handleNavigate = (city) => {
    navigate(`/activities/${city.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-1">
        Exciting Activities of International Destinations
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Relish spine-chilling activities while wandering around our premium international tourist attractions.
      </p>

      {/* Mobile horizontal scroll wrapper */}
      <div className="sm:hidden flex gap-4 overflow-x-auto no-scrollbar">
        {activityData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-54 group">
            <div
              className="relative rounded-3xl overflow-hidden shadow-md cursor-pointer w-full h-full"
              onClick={() => handleNavigate(item.city)}
            >
              <img
                src={item.image}
                alt={item.city}
                className="w-40 h-54 object-cover transition duration-300 group-hover:brightness-50"
              />

              {/* City name + price overlay for mobile */}
              <div className="absolute bottom-2 left-4 text-white text-left z-10">
                <p className="text-sm font-bold">{item.city}</p>
                <p className="text-xs font-semibold">Starting At {item.price}</p>
              </div>


              {/* Arrow button */}
              <div className="absolute bottom-2 right-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(item.city);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop / tablet grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {activityData.map((item, index) => (
          <div key={index} className="group">
            <div
              className="relative rounded-3xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleNavigate(item.city)}
            >
              <img
                src={item.image}
                alt={item.city}
                className="w-full h-[280px] object-cover transition duration-300 group-hover:brightness-50"
              />

              {/* Desktop hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pointer-events-none">
                  <div className="h-1 w-8 bg-orange-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Discover Activities In</p>
                  <p className="text-xl font-semibold">{item.city}</p>
                </div>
              </div>

              {/* Desktop top-left badge */}
              <div className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                {item.activities}
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold drop-shadow-md z-10 transition-opacity duration-300 group-hover:opacity-0">
                {item.city}
              </div>

              <div className="absolute bottom-3 right-3 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(item.city);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-center text-blue-600 text-sm font-semibold mt-2">
              Starting At {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalActivities;
