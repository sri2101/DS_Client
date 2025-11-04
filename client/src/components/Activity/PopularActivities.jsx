import React from 'react';
import { ArrowRight } from 'lucide-react';
import CityActivities from "@/components/ActivityData/CityActivities";
import { useNavigate } from 'react-router-dom';

const domesticCities = ["goa", "mumbai", "newdelhi", "shimla", "jaipur"];
const internationalCities = ["dubai", "bangkok", "singapore","phuket","hikkaduwa"];

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const getFirstActivityFromCities = (cityList) =>
  cityList
    .map((city) => {
      const cityData = CityActivities?.[city];
      const activity = cityData?.results?.[0];

      if (activity) {
        const location = `${capitalize(activity.city)}, ${cityData.country || ""}`;
        return {
          ...activity,
          location,
        };
      }

      return null;
    })
    .filter(Boolean);

const activities = {
  domestic: getFirstActivityFromCities(domesticCities),
  international: getFirstActivityFromCities(internationalCities),
};

export default function PopularActivities() {
  const navigate = useNavigate();

  const handleBookNow = (activity) => {
    const citySlug = (activity.city || activity.location || '').toLowerCase().split(',')[0].trim().replace(/\s+/g, '-');
    const slug = activity.slug || activity.title.toLowerCase().replace(/\s+/g, '-');
    localStorage.setItem("selectedActivity", JSON.stringify(activity));
    navigate(`/activities/${citySlug}/${slug}`);
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Popular Activities in Top Attractions</h1>
      <p className="text-gray-600 mb-6">
        Witness some of the most phenomenal activities with our specially curated domestic & international tour plans.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-gray-300 pt-6">
        {/* Domestic Activities */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Handpicked Domestic Activities</h2>
          {activities.domestic.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row bg-blue-50 border border-blue-300 rounded-xl mb-4 p-3 gap-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-24 h-20 rounded-md object-cover flex-shrink-0"
              />
              <div className="flex-1 pr-0 sm:pr-16 overflow-hidden mt-2 sm:mt-0">
                <h3 className="font-semibold text-sm md:text-base leading-snug truncate">
                  {item.title}
                </h3>
                <p className="text-blue-500 text-sm mb-1">{item.location}</p>
                <p className="font-semibold text-sm">{item.price}</p>
              </div>
              <button
                className="absolute bottom-3 right-3 text-blue-600 text-sm font-medium flex items-center"
                onClick={() => handleBookNow(item)}
              >
                Book Now <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* International Activities */}
        <div className="md:border-l border-gray-300 md:pl-6">
          <h2 className="text-xl font-semibold mb-4">Handpicked International Activities</h2>
          {activities.international.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row bg-blue-50 border border-blue-300 rounded-xl mb-4 p-3 gap-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-24 h-20 rounded-md object-cover flex-shrink-0"
              />
              <div className="flex-1 pr-0 sm:pr-16 overflow-hidden mt-2 sm:mt-0">
                <h3 className="font-semibold text-sm md:text-base leading-snug truncate">
                  {item.title}
                </h3>
                <p className="text-blue-500 text-sm mb-1">{item.location}</p>
                <p className="font-semibold text-sm">{item.price}</p>
              </div>
              <button
                className="absolute bottom-3 right-3 text-blue-600 text-sm font-medium flex items-center"
                onClick={() => handleBookNow(item)}
              >
                Book Now <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
