// import React, { useState, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import hotels from "../HotelData/HotelData";
// import HotelsCard from "./HotelsCard";

// const HotelsList = ({ destination, filtersState, searchParams, visible, setVisible }) => {
//   const { city: cityParam, type } = useParams();

//   // Decide final city: prefer destination query param > path param
//   const city = destination || cityParam;

//   const filteredHotels = useMemo(() => {
//     let result = [...hotels];

//     console.log("🔄 Filtering hotels with:", { filtersState, searchParams, city, type });

//     if (city) {
//       result = result.filter(
//         (hotel) => hotel.city?.toLowerCase() === city.toLowerCase()
//       );
//     }

//     if (type) {
//       if (type.includes("budget")) {
//         result = result.filter((hotel) => hotel.price <= 2000);
//       } else if (type.includes("3")) {
//         result = result.filter((hotel) => hotel.star === 3);
//       } else if (type.includes("4")) {
//         result = result.filter((hotel) => hotel.star === 4);
//       } else if (type.includes("5")) {
//         result = result.filter((hotel) => hotel.star === 5);
//       }
//     }


//     if (filtersState?.miniSearchText?.trim()) {
//       const keyword = filtersState.miniSearchText.toLowerCase();
//       result = result.filter(
//         (hotel) =>
//           hotel.name.toLowerCase().includes(keyword) ||
//           hotel.location.toLowerCase().includes(keyword)
//       );
//     }

//     const sortOption = filtersState?.miniSortOption || "popularity";
//     if (sortOption === "priceLowToHigh") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "priceHighToLow") {
//       result.sort((a, b) => b.price - a.price);
//     } else {
//       result.sort((a, b) => b.rating - a.rating);
//     }

//     if (searchParams?.location?.trim()) {
//       const locationKeyword = searchParams.location.toLowerCase();
//       result = result.filter(
//         (hotel) =>
//           hotel.location.toLowerCase().includes(locationKeyword) ||
//           hotel.name.toLowerCase().includes(locationKeyword)
//       );
//     }

//     // other filters stay unchanged...

//     return result;
//   }, [filtersState, searchParams, city, type]);

//   const hotelsToShow = filteredHotels.slice(0, visible);
//   const handleLoadMore = () => setVisible((prev) => prev + 3);

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         {`Find Your Best Stay at ${city ? city[0].toUpperCase() + city.slice(1) : "Our Top Cities"} ${type ? `(${type.replace("-", " ")})` : ""}`}
//       </h1>

//       {hotelsToShow.length === 0 ? (
//         <p className="text-gray-500">No hotels match your filters.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {hotelsToShow.map((hotel, index) => (
//               <HotelsCard key={`${hotel.name}-${index}`} hotel={hotel} />
//             ))}
//           </div>

//           {visible < filteredHotels.length && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={handleLoadMore}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors"
//               >
//                 Load More ({filteredHotels.length - visible} remaining)
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default HotelsList;





// import React, { useState, useEffect, useMemo } from "react";
// import { useParams } from "react-router-dom";
// import HotelsCard from "./HotelsCard";

// const HotelsList = ({ destination, filtersState, searchParams, visible, setVisible }) => {
//   const { city: cityParam, type } = useParams();

//   // ✅ Decide final city: prefer destination query param > path param
//   const city = destination || cityParam;

//   // ✅ States for hotels and loading/error
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // ✅ Backend API URL
//   const API_URL = "http://localhost:3000/api/v1/hotel";

//   // ✅ Fetch hotels from backend
//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const query = city ? `?city=${encodeURIComponent(city)}` : "";
//         const response = await fetch(`${API_URL}${query}`);

//         if (!response.ok) throw new Error("Failed to fetch hotels");

//         const data = await response.json();

//         // The API returns { success, count, data }, so we access `data.data`
//         setHotels(data?.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching hotels:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, [city]);

//   // ✅ Apply filters and sorting
//   const filteredHotels = useMemo(() => {
//     let result = [...hotels];

//     console.log("🔄 Filtering hotels with:", { filtersState, searchParams, city, type });

//     if (type) {
//       if (type.includes("budget")) {
//         result = result.filter((hotel) => hotel.price <= 2000);
//       } else if (type.includes("3")) {
//         result = result.filter((hotel) => hotel.star === 3);
//       } else if (type.includes("4")) {
//         result = result.filter((hotel) => hotel.star === 4);
//       } else if (type.includes("5")) {
//         result = result.filter((hotel) => hotel.star === 5);
//       }
//     }

//     if (filtersState?.miniSearchText?.trim()) {
//       const keyword = filtersState.miniSearchText.toLowerCase();
//       result = result.filter(
//         (hotel) =>
//           hotel.name.toLowerCase().includes(keyword) ||
//           hotel.location.toLowerCase().includes(keyword)
//       );
//     }

//     const sortOption = filtersState?.miniSortOption || "popularity";
//     if (sortOption === "priceLowToHigh") {
//       result.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "priceHighToLow") {
//       result.sort((a, b) => b.price - a.price);
//     } else {
//       result.sort((a, b) => b.rating - a.rating);
//     }

//     if (searchParams?.location?.trim()) {
//       const locationKeyword = searchParams.location.toLowerCase();
//       result = result.filter(
//         (hotel) =>
//           hotel.location.toLowerCase().includes(locationKeyword) ||
//           hotel.name.toLowerCase().includes(locationKeyword)
//       );
//     }

//     return result;
//   }, [filtersState, searchParams, type, hotels]);

//   const hotelsToShow = filteredHotels.slice(0, visible);
//   const handleLoadMore = () => setVisible((prev) => prev + 3);

//   // ✅ Loading / Error handling
//   if (loading)
//     return <p className="text-center text-gray-500 mt-6">Loading hotels...</p>;
//   if (error)
//     return (
//       <p className="text-center text-red-500 mt-6">
//         Failed to load hotels: {error}
//       </p>
//     );

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         {`Find Your Best Stay at ${
//           city ? city[0].toUpperCase() + city.slice(1) : "Our Top Cities"
//         } ${type ? `(${type.replace("-", " ")})` : ""}`}
//       </h1>

//       {hotelsToShow.length === 0 ? (
//         <p className="text-gray-500">No hotels match your filters.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {hotelsToShow.map((hotel, index) => (
//               <HotelsCard key={hotel._id || index} hotel={hotel} />
//             ))}
//           </div>

//           {visible < filteredHotels.length && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={handleLoadMore}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors"
//               >
//                 Load More ({filteredHotels.length - visible} remaining)
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default HotelsList;



import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import HotelsCard from "./HotelsCard";

const HotelsList = ({ destination, filtersState, searchParams, visible, setVisible }) => {
  const { city: cityParam, type } = useParams();
  const city = destination || cityParam;

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:3000/api/v1/hotel";

  useEffect(() => {
  const fetchHotels = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!city) return;

      const response = await fetch(`${API_URL}/location/${encodeURIComponent(city)}`);
      if (!response.ok) throw new Error("Failed to fetch hotels");
      const data = await response.json();
      setHotels(data?.data || []);
    } catch (err) {
      console.error("❌ Error fetching hotels:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchHotels();
}, [city]);


  const filteredHotels = useMemo(() => {
    let result = [...hotels];

    if (type) {
      if (type.includes("budget")) result = result.filter(h => h.price <= 2000);
      else if (type.includes("3")) result = result.filter(h => h.star === 3);
      else if (type.includes("4")) result = result.filter(h => h.star === 4);
      else if (type.includes("5")) result = result.filter(h => h.star === 5);
    }

    if (filtersState?.miniSearchText?.trim()) {
      const keyword = filtersState.miniSearchText.toLowerCase();
      result = result.filter(
        h => h.name.toLowerCase().includes(keyword) || h.location.toLowerCase().includes(keyword)
      );
    }

    const sortOption = filtersState?.miniSortOption || "popularity";
    if (sortOption === "priceLowToHigh") result.sort((a, b) => a.price - b.price);
    else if (sortOption === "priceHighToLow") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => b.rating - a.rating);

    if (searchParams?.location?.trim()) {
      const keyword = searchParams.location.toLowerCase();
      result = result.filter(
        h => h.location.toLowerCase().includes(keyword) || h.name.toLowerCase().includes(keyword)
      );
    }

    return result;
  }, [filtersState, searchParams, type, hotels]);

  const hotelsToShow = filteredHotels.slice(0, visible);
  const handleLoadMore = () => setVisible(prev => prev + 3);

  if (loading) return <p className="text-gray-500 p-4">Loading hotels...</p>;
  if (error) return <p className="text-red-500 p-4">Error: {error}</p>;

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {`Find Your Best Stay at ${city ? city[0].toUpperCase() + city.slice(1) : "Our Top Cities"} ${type ? `(${type.replace("-", " ")})` : ""}`}
      </h1>

      {hotelsToShow.length === 0 ? (
        <p className="text-gray-500">No hotels match your filters.</p>
      ) : (
        <>
          <div className="space-y-6">
            {hotelsToShow.map((hotel, index) => (
              <HotelsCard key={hotel._id || index} hotel={hotel} />
            ))}
          </div>

          {visible < filteredHotels.length && (
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
