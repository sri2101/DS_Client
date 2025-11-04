import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const activityData = [
  {
    city: "Mumbai",
    activities: "300+ Activities",
    price: "₹433",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/9f/03/d0.jpg",
  },
  {
    city: "Shimla",
    activities: "25 Activities",
    price: "₹956",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/12/71/ff/10.jpg",
  },
  {
    city: "New Delhi",
    activities: "150+ Activities",
    price: "₹239",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/10/59/31/77.jpg",
  },
  {
    city: "Jaipur",
    activities: "300+ Activities",
    price: "₹515",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/12/5c/57/20.jpg",
  },
  {
    city: "Goa",
    activities: "199 Activities",
    price: "₹339",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/0a/50/8d/1f.jpg",
  },
];

const IndianActivities = () => {
  const navigate = useNavigate();

  const handleNavigate = (city) => {
    navigate(`/activities/${city.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">

      {/* Mobile heading (short) */}
      <h2 className="text-lg font-extrabold mb-5 whitespace-nowrap block sm:hidden">
        Discover Best Experience of India
      </h2>

      {/* Desktop heading */}
      <h2 className="hidden sm:block text-2xl md:text-4xl font-extrabold mb-1">
        Create Experiences with Top Indian Activities
      </h2>

      {/* Desktop subheading */}
      <p className="hidden sm:block text-gray-600 mb-8 max-w-2xl text-sm sm:text-base">
        From trekking to skiing, indulge in every electrifying activity of sublimely divine India.
      </p>


      {/* Cards */}
      <div
        className="
          flex gap-4 overflow-x-auto no-scrollbar pb-2
          sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 sm:overflow-visible
        "
      >
        {activityData.map((item, index) => (
          <div key={index} className="group min-w-[10rem] sm:min-w-0">
            <div
              className="relative rounded-3xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleNavigate(item.city)}
            >
              <img
                src={item.image}
                alt={item.city}
                className="
    w-40 h-54
    sm:w-full sm:h-[280px]
    object-cover transition duration-300 group-hover:brightness-50
  "

              />

              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center pointer-events-none">
                  <div className="h-1 w-8 bg-orange-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Discover Activities In</p>
                  <p className="text-xl font-semibold">{item.city}</p>
                </div>
              </div>

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

export default IndianActivities;

