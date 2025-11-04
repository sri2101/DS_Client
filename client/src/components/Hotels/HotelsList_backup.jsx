// import React, { useState, useMemo } from "react";
// import hotels from "../HotelData/HotelData";
// import HotelsCard from "./HotelsCard";

// const HotelsList = ({ filtersState, searchParams }) => {
//   const [visible, setVisible] = useState(3);

//   const filteredHotels = useMemo(() => {
//     console.log("🟢 FILTERS RUNNING...");
//     console.log("🔍 filtersState:", filtersState);
//     console.log("🔍 searchParams:", searchParams);

//     const isDefaultSearch = (() => {
//       const defaultGuests = 2;
//       const defaultRooms = 1;

//       const isLocationEmpty =
//         !searchParams?.location || searchParams.location.trim() === "";

//       const defaultFrom = new Date();
//       const defaultTo = new Date(new Date().setDate(new Date().getDate() + 1));

//       const isDateDefault = (
//         new Date(searchParams.date?.from).toDateString() === defaultFrom.toDateString() &&
//         new Date(searchParams.date?.to).toDateString() === defaultTo.toDateString()
//       );


//       const isGuestDefault =
//         !searchParams?.guests || searchParams.guests === defaultGuests;

//       const isRoomDefault =
//         !searchParams?.rooms || searchParams.rooms === defaultRooms;

//       const areFiltersEmpty =
//         !filtersState ||
//         Object.keys(filtersState).every(
//           (key) =>
//             filtersState[key] === "" ||
//             filtersState[key] === "Any" ||
//             (Array.isArray(filtersState[key]) &&
//               filtersState[key].length === 0)
//         );
//       console.log("🧪 isDefaultSearch breakdown:", {
//         isLocationEmpty,
//         isDateDefault,
//         isGuestDefault,
//         isRoomDefault,
//         areFiltersEmpty
//       });


//       return (
//         isLocationEmpty &&
//         isDateDefault &&
//         isGuestDefault &&
//         isRoomDefault &&
//         areFiltersEmpty
//       );
//     })();

//     // Return all hotels if no filters/search applied
//     if (isDefaultSearch) {
//       console.log("✅ No filters/search: showing ALL hotels:", hotels.length);
//       return { data: hotels, isDefault: true };
//     }

//     // Filtered result
//     console.log("🚨 Filters active: filtering hotels now...");
//     const result = hotels.filter((hotel) => {
//       const {
//         price,
//         starRating,
//         userReviewRating,
//         amenities = [],
//         areaAttraction = [],
//         showPropertiesWith = [],
//         propertyType = [],
//       } = filtersState;

//       const hotelName = hotel.name;

//       function stripTime(date) {
//         return new Date(date.getFullYear(), date.getMonth(), date.getDate());
//       }

//       if (searchParams?.date?.from && searchParams?.date?.to) {
//         const userFrom = stripTime(new Date(searchParams.date.from));
//         const userTo = stripTime(new Date(searchParams.date.to));
//         const hotelFrom = stripTime(new Date(hotel.availableFrom));
//         const hotelTo = stripTime(new Date(hotel.availableTo));
//         if (userFrom < hotelFrom || userTo > hotelTo) return false;
//       }

//       if (searchParams?.location) {
//         const keyword = searchParams.location.toLowerCase();
//         const locationMatch =
//           hotel.location.toLowerCase().includes(keyword) ||
//           hotel.name.toLowerCase().includes(keyword);
//         if (!locationMatch) return false;
//       }

//       if (searchParams?.guests && hotel.people < searchParams.guests) return false;
//       if (searchParams?.rooms && hotel.rooms < searchParams.rooms) return false;
//       if (price && hotel.price > Number(price)) return false;

//       if (starRating && starRating !== "Any") {
//         if (!hotel.name.toLowerCase().includes(starRating[0])) return false;
//       }

//       if (userReviewRating && userReviewRating !== "Any") {
//         const minRating = parseFloat(userReviewRating.split("&")[0]);
//         if (hotel.rating < minRating) return false;
//       }

//       if (showPropertiesWith.length > 0) {
//         const match = showPropertiesWith.some((tag) =>
//           (hotel.perk && hotel.perk.includes(tag)) ||
//           (hotel.facilities || []).some((f) => f.includes(tag))
//         );
//         if (!match) return false;
//       }

//       if (amenities.length > 0) {
//         const matchAll = amenities.every((a) => hotel.amenities.includes(a));
//         if (!matchAll) return false;
//       }

//       if (propertyType.length > 0) {
//         const match = propertyType.some((type) =>
//           hotel.name.toLowerCase().includes(type.toLowerCase())
//         );
//         if (!match) return false;
//       }

//       if (areaAttraction.length > 0) {
//         const match = areaAttraction.some((area) =>
//           (hotel.location || "").toLowerCase().includes(area.toLowerCase())
//         );
//         if (!match) return false;
//       }

//       return true;
//     });

//     console.log("🧮 Filtered hotel count:", result.length);
//     return { data: result, isDefault: false };
//   }, [filtersState, searchParams]);

//   const handleLoadMore = () => {
//     setVisible((prev) => prev + 3);
//   };

//   const hotelsToShow = filteredHotels.isDefault
//     ? filteredHotels.data // Show all when no filters
//     : filteredHotels.data.slice(0, visible); // Paginate only when filters are active

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         Find Your Best Stay at Delhi’s Budget Hotels
//       </h1>

//       {hotelsToShow.length === 0 ? (
//         <p className="text-gray-500">No hotels match your filters.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {hotelsToShow.map((hotel, index) => (
//               <HotelsCard key={index} hotel={hotel} />
//             ))}
//           </div>

//           {/* Load More only when filters are active */}
//           {!filteredHotels.isDefault &&
//             visible < filteredHotels.data.length && (
//               <div className="mt-6 text-center">
//                 <button
//                   onClick={handleLoadMore}
//                   className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm"
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}
//         </>
//       )}
//     </div>
//   );
// };

// export default HotelsList;




// import React, { useMemo } from "react";
// import hotels from "../HotelData/HotelData"; // your local data
// import HotelCard from "./HotelsCard";

// const HotelsList = ({ filtersState, searchParams, visible, setVisible }) => {
//   const filteredHotels = useMemo(() => {
//     let result = [...hotels];

//     // 🔍 Mini Search
//     if (filtersState?.miniSearchText) {
//       const keyword = filtersState.miniSearchText.toLowerCase();
//       result = result.filter(hotel =>
//         hotel.name.toLowerCase().includes(keyword) ||
//         hotel.location.toLowerCase().includes(keyword)
//       );
//     }

//     // 🔃 Sort
//     if (filtersState?.miniSortOption === "priceLowToHigh") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (filtersState?.miniSortOption === "priceHighToLow") {
//       result.sort((a, b) => b.price - a.price);
//     } else {
//       result.sort((a, b) => b.rating - a.rating);
//     }

//     // 🎯 Filters
//     const {
//       price,
//       starRating,
//       userReviewRating,
//       amenities = [],
//       areaAttraction = [],
//       showPropertiesWith = [],
//       propertyType = [],
//     } = filtersState;

//     result = result.filter((hotel) => {
//       if (price && hotel.price > Number(price)) return false;

//       if (starRating && starRating !== "Any") {
//         if (!hotel.name.toLowerCase().includes(starRating[0])) return false;
//       }

//       if (userReviewRating && userReviewRating !== "Any") {
//         const minRating = parseFloat(userReviewRating.split("&")[0]);
//         if (hotel.rating < minRating) return false;
//       }

//       if (showPropertiesWith.length > 0) {
//         const match = showPropertiesWith.some((tag) =>
//           (hotel.perk && hotel.perk.includes(tag)) ||
//           (hotel.facilities || []).some((f) => f.includes(tag))
//         );
//         if (!match) return false;
//       }

//       if (amenities.length > 0) {
//         const matchAll = amenities.every((a) => hotel.amenities.includes(a));
//         if (!matchAll) return false;
//       }

//       if (propertyType.length > 0) {
//         const match = propertyType.some((type) =>
//           hotel.name.toLowerCase().includes(type.toLowerCase())
//         );
//         if (!match) return false;
//       }

//       if (areaAttraction.length > 0) {
//         const match = areaAttraction.some((area) =>
//           (hotel.location || "").toLowerCase().includes(area.toLowerCase())
//         );
//         if (!match) return false;
//       }

//       // 🔵 HotelSearchBar filters
//       const { location, date, rooms, guests } = searchParams;

//       if (location && !hotel.location.toLowerCase().includes(location.toLowerCase())) return false;

//       const strip = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
//       const userFrom = strip(new Date(date.from));
//       const userTo = strip(new Date(date.to));
//       const hotelFrom = strip(new Date(hotel.availableFrom));
//       const hotelTo = strip(new Date(hotel.availableTo));
//       if (userFrom < hotelFrom || userTo > hotelTo) return false;

//       if (guests && hotel.people < guests) return false;
//       if (rooms && hotel.rooms < rooms) return false;

//       return true;
//     });

//     return result;
//   }, [filtersState, searchParams]);


//   return (
//     <div className="space-y-6">
//       {filteredHotels.slice(0, visible).map((hotel) => (
//         <HotelCard key={hotel.id} hotel={hotel} />
//       ))}

//       {visible < filteredHotels.length && (
//         <div className="text-center mt-6">
//           <button
//             className="px-4 py-2 bg-primary text-white rounded-md"
//             onClick={() => setVisible((prev) => prev + 3)}
//           >
//             Show More
//           </button>
//         </div>
//       )}

//       {filteredHotels.length === 0 && (
//         <div className="text-center text-gray-500">No hotels found.</div>
//       )}
//     </div>
//   );
// };

// export default HotelsList;




import React, { useState, useMemo } from "react";
import hotels from "../HotelData/HotelData";
import HotelsCard from "./HotelsCard";

const HotelsList = ({ filtersState, searchParams, visible, setVisible }) => {
  const filteredHotels = useMemo(() => {
    let result = [...hotels];

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
      result.sort((a, b) => b.rating - a.rating); // Popularity
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

    result = result.filter((hotel) => {
      if (price && hotel.price > Number(price)) return false;

      if (starRating && starRating !== "Any") {
        if (!hotel.name.toLowerCase().includes(starRating[0])) return false;
      }

      if (userReviewRating && userReviewRating !== "Any") {
        const minRating = parseFloat(userReviewRating.split("&")[0]);
        if (hotel.rating < minRating) return false;
      }

      if (showPropertiesWith.length > 0) {
        const match = showPropertiesWith.some((tag) =>
          (hotel.perk && hotel.perk.includes(tag)) ||
          (hotel.facilities || []).some((f) => f.includes(tag))
        );
        if (!match) return false;
      }

      if (amenities.length > 0) {
        const matchAll = amenities.every((a) => hotel.amenities.includes(a));
        if (!matchAll) return false;
      }

      if (propertyType.length > 0) {
        const match = propertyType.some((type) =>
          hotel.name.toLowerCase().includes(type.toLowerCase())
        );
        if (!match) return false;
      }

      if (areaAttraction.length > 0) {
        const match = areaAttraction.some((area) =>
          (hotel.location || "").toLowerCase().includes(area.toLowerCase())
        );
        if (!match) return false;
      }

      // ✅ Apply Blue Banner Search (searchParams)
      const { location, date, rooms, guests } = searchParams;

      if (
        location &&
        !hotel.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;

      const strip = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const userFrom = strip(new Date(date.from));
      const userTo = strip(new Date(date.to));
      const hotelFrom = strip(new Date(hotel.availableFrom));
      const hotelTo = strip(new Date(hotel.availableTo));
      if (userFrom < hotelFrom || userTo > hotelTo) return false;

      if (guests && hotel.people < guests) return false;
      if (rooms && hotel.rooms < rooms) return false;

      return true;
    });

    console.log("🧮 Final filtered hotel count:", result.length);
    return result;
  }, [filtersState, searchParams]);

  // 🧠 Detect if all filters/searches are empty
  const isAllFiltersEmpty = Object.values(filtersState).every(
    (v) =>
      v === "" ||
      v === "Any" ||
      v === undefined ||
      (Array.isArray(v) && v.length === 0)
  );

  // Show all if no filters/search applied
  const hotelsToShow = isAllFiltersEmpty
    ? filteredHotels
    : filteredHotels.slice(0, visible);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Find Your Best Stay at Delhi’s Budget Hotels
      </h1>

      {hotelsToShow.length === 0 ? (
        <p className="text-gray-500">No hotels match your filters.</p>
      ) : (
        <>
          <div className="space-y-6">
            {hotelsToShow.map((hotel, index) => (
              <HotelsCard key={index} hotel={hotel} />
            ))}
          </div>

          {/* Load More only when filters are active */}
          {!isAllFiltersEmpty &&
            visible < filteredHotels.length && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm"
                >
                  Load More
                </button>
              </div>
            )}
        </>
      )}
    </div>
  );
};

export default HotelsList;

