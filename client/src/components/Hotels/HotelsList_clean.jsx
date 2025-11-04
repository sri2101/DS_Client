import React, { useState, useMemo } from "react";
import hotels from "../HotelData/HotelData";
import HotelsCard from "./HotelsCard";

const HotelsList = ({ filtersState, searchParams, visible, setVisible }) => {
  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    console.log("🔄 Filtering hotels with:", { filtersState, searchParams });

    // 🔍 Apply MiniSearch (from MiniSearchAndSortBar)
    if (filtersState?.miniSearchText?.trim()) {
      const keyword = filtersState.miniSearchText.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(keyword) ||
          hotel.location.toLowerCase().includes(keyword)
      );
    }

    // 🔃 Apply Sort
    const sortOption = filtersState?.miniSortOption || "popularity";
    if (sortOption === "priceLowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.rating - a.rating); // Popularity by rating
    }

    // ✅ Apply Blue Banner Search (searchParams)
    if (searchParams?.location?.trim()) {
      const locationKeyword = searchParams.location.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.location.toLowerCase().includes(locationKeyword) ||
          hotel.name.toLowerCase().includes(locationKeyword)
      );
    }

    // Date filtering
    if (searchParams?.date?.from && searchParams?.date?.to) {
      const stripTime = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const userFrom = stripTime(new Date(searchParams.date.from));
      const userTo = stripTime(new Date(searchParams.date.to));
      
      result = result.filter((hotel) => {
        const hotelFrom = stripTime(new Date(hotel.availableFrom));
        const hotelTo = stripTime(new Date(hotel.availableTo));
        return userFrom >= hotelFrom && userTo <= hotelTo;
      });
    }

    // Guest and room filtering
    if (searchParams?.guests && searchParams.guests > 0) {
      result = result.filter((hotel) => hotel.guests >= searchParams.guests);
    }

    if (searchParams?.rooms && searchParams.rooms > 0) {
      result = result.filter((hotel) => hotel.rooms >= searchParams.rooms);
    }

    // ✅ Apply Left-side Filters
    const {
      price,
      starRating,
      userReviewRating,
      amenities = [],
      areaAttraction = [],
      showPropertiesWith = [],
      propertyType = [],
    } = filtersState;

    // Price filter
    if (price && !isNaN(Number(price))) {
      result = result.filter((hotel) => hotel.price <= Number(price));
    }

    // Star rating filter
    if (starRating && starRating !== "Any") {
      const starNum = starRating.charAt(0);
      if (!isNaN(starNum)) {
        result = result.filter((hotel) => {
          // Simple star rating matching - you might want to improve this logic
          return hotel.name.toLowerCase().includes(starNum) || 
                 (hotel.starRating && hotel.starRating >= Number(starNum));
        });
      }
    }

    // User review rating filter
    if (userReviewRating && userReviewRating !== "Any") {
      const minRating = parseFloat(userReviewRating.split("&")[0]);
      if (!isNaN(minRating)) {
        result = result.filter((hotel) => hotel.rating >= minRating);
      }
    }

    // Show properties with filter
    if (showPropertiesWith.length > 0) {
      result = result.filter((hotel) => {
        return showPropertiesWith.some((tag) => {
          const lowerTag = tag.toLowerCase();
          return (
            (hotel.perk && hotel.perk.toLowerCase().includes(lowerTag)) ||
            (hotel.facilities && hotel.facilities.some((f) => f.toLowerCase().includes(lowerTag))) ||
            (hotel.amenities && hotel.amenities.some((a) => a.toLowerCase().includes(lowerTag)))
          );
        });
      });
    }

    // Amenities filter (must have ALL selected amenities)
    if (amenities.length > 0) {
      result = result.filter((hotel) => {
        return amenities.every((amenity) =>
          hotel.amenities && hotel.amenities.some((a) => 
            a.toLowerCase().includes(amenity.toLowerCase())
          )
        );
      });
    }

    // Property type filter
    if (propertyType.length > 0) {
      result = result.filter((hotel) => {
        return propertyType.some((type) =>
          hotel.name.toLowerCase().includes(type.toLowerCase())
        );
      });
    }

    // Area attraction filter
    if (areaAttraction.length > 0) {
      result = result.filter((hotel) => {
        return areaAttraction.some((area) =>
          hotel.location && hotel.location.toLowerCase().includes(area.toLowerCase())
        );
      });
    }

    console.log("🧮 Final filtered hotel count:", result.length);
    return result;
  }, [filtersState, searchParams]);

  // Check if all filters are empty/default
  const isAllFiltersEmpty = () => {
    // Check searchParams
    const isSearchEmpty = !searchParams?.location?.trim();
    const defaultFrom = new Date();
    const defaultTo = new Date(new Date().setDate(new Date().getDate() + 1));
    const isDateDefault = 
      new Date(searchParams?.date?.from).toDateString() === defaultFrom.toDateString() &&
      new Date(searchParams?.date?.to).toDateString() === defaultTo.toDateString();
    const isGuestDefault = !searchParams?.guests || searchParams.guests === 2;
    const isRoomDefault = !searchParams?.rooms || searchParams.rooms === 1;

    // Check filtersState
    const isFiltersEmpty = !filtersState || Object.keys(filtersState).every((key) => {
      const value = filtersState[key];
      return (
        value === "" ||
        value === "Any" ||
        value === undefined ||
        value === "popularity" ||
        (Array.isArray(value) && value.length === 0) ||
        (key === "miniSearchText" && (!value || value.trim() === ""))
      );
    });

    return isSearchEmpty && isDateDefault && isGuestDefault && isRoomDefault && isFiltersEmpty;
  };

  // Show all if no filters/search applied, otherwise paginate
  const hotelsToShow = isAllFiltersEmpty() 
    ? filteredHotels 
    : filteredHotels.slice(0, visible);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Find Your Best Stay at Delhi's Budget Hotels
      </h1>

      {hotelsToShow.length === 0 ? (
        <p className="text-gray-500">No hotels match your filters.</p>
      ) : (
        <>
          <div className="space-y-6">
            {hotelsToShow.map((hotel, index) => (
              <HotelsCard key={`${hotel.name}-${index}`} hotel={hotel} />
            ))}
          </div>

          {/* Load More only when filters are active and there are more hotels */}
          {!isAllFiltersEmpty() && visible < filteredHotels.length && (
            <div className="mt-6 text-center">
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors"
              >
                Load More ({filteredHotels.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HotelsList;
