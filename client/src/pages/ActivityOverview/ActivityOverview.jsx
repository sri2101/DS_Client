import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Filters from "@/components/ActivityOverview/Filters";
import ActivityList from "@/components/ActivityOverview/ActivityList";
import Banner from "@/components/ActivityOverview/Banner";
import ActivityIntro from "@/components/ActivityOverview/ActivityIntro";
import ActivityFAQ from "@/components/ActivityOverview/ActivityFaq";
import CityActivities from "@/components/ActivityData/CityActivities";
import SortAndSearchBar from "@/components/ActivityOverview/SortAndSearchBar";
import CategoryCarousel from "@/components/ActivityOverview/CategoryCarousel";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

function ActivityOverview() {
  const { city } = useParams();
  const location = useLocation();

  const normalizedCity = city.replace(/-/g, "").toLowerCase();
  const activityData = CityActivities[normalizedCity];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("Traveller Rating");
  const [selectedCategory, setSelectedCategory] = useState("Day Trips");

  const [filters, setFilters] = useState({
    price: [
      activityData?.filters?.price.min || 0,
      activityData?.filters?.price.max || 99999,
    ],
    duration: [],
    rating: null,
    specials: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const baseCategories = [
    "Ports of Call Tours",
    "Shore Excursions",
    "Day Trips",
    "Half-day Tours",
    "Bus Tours",
    "Photography Tours",
    "Adventure Tours",
    "4WD Tours",
    "Dining Experiences",
    "Safaris",
    "Nature and Wildlife Tours",
    "Likely To Sell Out",
  ];

  const images = activityData?.results?.map((a) => a.image) || [];

  const categories = baseCategories.map((label, i) => ({
    label,
    image:
      images[i % images.length] ||
      "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/07/3c/e4/e6.jpg",
  }));

  const filteredActivities = (activityData?.results || []).filter((activity) => {
    const priceNum = parseInt(activity.price.replace(/[₹, ]/g, "")) || 0;
    const matchesPrice =
      priceNum >= filters.price[0] && priceNum <= filters.price[1];
    const matchesDuration =
      filters.duration.length === 0 || filters.duration.includes(activity.time);
    const matchesRating =
      !filters.rating ||
      (activity.reviewsSummary?.overall || 0) >= parseInt(filters.rating);
    const matchesSpecials =
      filters.specials.length === 0 ||
      filters.specials.every((s) => activity.specials?.includes(s));
    const matchesSearch = activity.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return (
      matchesPrice &&
      matchesDuration &&
      matchesRating &&
      matchesSpecials &&
      matchesSearch
    );
  });

  const sortedActivities = [...filteredActivities].sort((a, b) => {
    if (selectedSort === "Traveller Rating") return b.reviews - a.reviews;
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
    if (selectedSort === "Price (Low to High)") return priceA - priceB;
    if (selectedSort === "Price (High to Low)") return priceB - priceA;
    return 0;
  });

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  if (!activityData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          No activities found for "{city}"
        </h1>
      </div>
    );
  }

  return (
    <div>
      <section>
        <Banner />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <BreadCrumb segments={breadcrumbs} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{activityData.title}</h1>

            <Filters
              filters={activityData.filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="md:col-span-3 space-y-6">
            <SortAndSearchBar
              sortOptions={[
                "Traveller Rating",
                "Price (Low to High)",
                "Price (High to Low)",
              ]}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <CategoryCarousel
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <ActivityList activities={sortedActivities} />
          </div>
        </div>
      </div>

      <ActivityIntro {...activityData.intro} />
      <ActivityFAQ {...activityData.faqs} />
    </div>
  );
}

export default ActivityOverview;