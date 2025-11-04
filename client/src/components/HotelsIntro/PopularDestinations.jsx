// import React from "react";

// const destinations = [
//   {
//     city: "Delhi",
//     image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/India_Gate_in_New_Delhi_03-2016_img3.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Goa",
//     image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Palolem_Beach_Goa.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Mumbai",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Gateway_of_India_Mumbai_03-2016_img3.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Shimla",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Shimla_snow_view.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Manali",
//     image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Manali_scenery.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Hyderabad",
//     image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Charminar_Hyderabad_India.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Chennai",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Kapaleeshwarar_temple_tower_in_Chennai.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Kolkata",
//     image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Victoria_Memorial_Kolkata.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Jaipur",
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Hawa_Mahal_in_Jaipur_2016_img3.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Pune",
//     image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Shaniwarwada_Pune.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Gurugram",
//     image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/DLF_CyberHub_Gurgaon.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Ahemdabad",
//     image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Sabarmati_Ashram_Ahmedabad.jpg",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
// ];

// export default function PopularDestinations() {
//   return (
//     <section className="px-4 py-10 max-w-6xl mx-auto">
//       <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
//         Book Hotels At Popular Destinations
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {destinations.map((place) => (
//           <div
//             key={place.city}
//             className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition"
//           >
//             <img
//               src={place.image}
//               alt={place.city}
//               className="w-16 h-16 object-cover rounded-md"
//             />
//             <div>
//               <h3 className="font-semibold text-lg">{place.city}</h3>
//               <p className="text-sm text-gray-600">
//                 {place.types.join(", ")}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
//           View More
//         </button>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const destinations = [
//   {
//     city: "Delhi",
//     image: "https://images.emtcontent.com/hotel-img/del-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Goa",
//     image: "https://images.emtcontent.com/hotel-img/goa-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Mumbai",
//     image: "https://images.emtcontent.com/hotel-img/mumb-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Shimla",
//     image: "https://images.emtcontent.com/hotel-img/shimla-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Manali",
//     image: "https://images.emtcontent.com/hotel-img/manali-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Hyderabad",
//     image: "https://images.emtcontent.com/hotel-img/hyd-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Chennai",
//     image: "https://images.emtcontent.com/hotel-img/chennai-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Kolkata",
//     image: "https://images.emtcontent.com/hotel-img/kolkata-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Jaipur",
//     image: "https://images.emtcontent.com/hotel-img/jaipur-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Pune",
//     image: "https://images.emtcontent.com/hotel-img/pune-sm.webp",
//     types: ["Hotels",
//       "Budget Hotels",
//       "3 Star Hotels",
//       "4 Star Hotels",
//       "5 Star Hotels"],
//   },
//   {
//     city: "Gurugram",
//     image: "https://images.emtcontent.com/hotel-img/gurgrm-sm.webp",
//     types: ["Hotels",
//       "Budget Hotels",
//       "3 Star Hotels",
//       "4 Star Hotels",
//       "5 Star Hotels"],
//   },
//   {
//     city: "Ahmedabad",
//     image: "https://images.emtcontent.com/hotel-img/ahmd-sm.webp",
//     types: ["Hotels",
//       "Budget Hotels",
//       "3 Star Hotels",
//       "4 Star Hotels",
//       "5 Star Hotels"],
//   },
//   {
//     city: "Varnasi",
//     image: "https://images.emtcontent.com/hotel-img/varn-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Chandigarh",
//     image: "https://images.emtcontent.com/hotel-img/chnd-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Lucknow",
//     image: "https://images.emtcontent.com/hotel-img/lkcnw-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Udaipur",
//     image: "https://images.emtcontent.com/hotel-img/udr-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
//   {
//     city: "Agra",
//     image: "https://images.emtcontent.com/hotel-img/agra-sm.webp",
//     types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
//   },
// ];

// export default function PopularDestinations() {
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const goToTypePage = (city, type) => {
//     const slug = type.toLowerCase().replace(/\s+/g, "-").replace("-hotels", "");
//     navigate(`/hotels/${city.toLowerCase()}/${slug}`);
//   };

//   const visibleDestinations = showAll ? destinations : destinations.slice(0, 12);

//   return (

//     <section className="px-2 py-6 max-w-5xl mx-auto">
//       <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
//         Book Hotels At Popular Destinations
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//         {visibleDestinations.map((place) => (
//           <div
//             key={place.city}
//             className="flex items-center gap-3 p-3 border border-blue-400 bg-blue-50 rounded-md hover:shadow-sm transition"
//           >
//             <img
//               src={place.image}
//               alt={place.city}
//               className="w-12 h-12 object-cover rounded"
//             />
//             <div>
//               <h3 className="font-semibold text-base">{place.city}</h3>

//               <div className="text-[11px] text-gray-700">
//                 {place.types.slice(0, 3).map((type, index) => (
//                   <React.Fragment key={type}>
//                     <button
//                       onClick={() => goToTypePage(place.city, type)}
//                       className="hover:underline hover:text-blue-500"
//                     >
//                       {type}
//                     </button>
//                     {index < 2 && ", "}
//                   </React.Fragment>
//                 ))}
//               </div>

//               <div className="text-[11px] text-gray-700">
//                 {place.types.slice(3).map((type, index) => (
//                   <React.Fragment key={type}>
//                     <button
//                       onClick={() => goToTypePage(place.city, type)}
//                       className="hover:underline hover:text-blue-500"
//                     >
//                       {type}
//                     </button>
//                     {index < 1 && ", "}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-6">
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition"
//         >
//           {showAll ? "View Less" : "View More"}
//         </button>
//       </div>
//     </section>

//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    city: "Delhi",
    image: "https://images.emtcontent.com/hotel-img/del-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Goa",
    image: "https://images.emtcontent.com/hotel-img/goa-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Mumbai",
    image: "https://images.emtcontent.com/hotel-img/mumb-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Shimla",
    image: "https://images.emtcontent.com/hotel-img/shimla-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Manali",
    image: "https://images.emtcontent.com/hotel-img/manali-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Hyderabad",
    image: "https://images.emtcontent.com/hotel-img/hyd-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Chennai",
    image: "https://images.emtcontent.com/hotel-img/chennai-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Kolkata",
    image: "https://images.emtcontent.com/hotel-img/kolkata-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Jaipur",
    image: "https://images.emtcontent.com/hotel-img/jaipur-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Pune",
    image: "https://images.emtcontent.com/hotel-img/pune-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Gurugram",
    image: "https://images.emtcontent.com/hotel-img/gurgrm-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Ahmedabad",
    image: "https://images.emtcontent.com/hotel-img/ahmd-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Varnasi",
    image: "https://images.emtcontent.com/hotel-img/varn-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Chandigarh",
    image: "https://images.emtcontent.com/hotel-img/chnd-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Lucknow",
    image: "https://images.emtcontent.com/hotel-img/lkcnw-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Udaipur",
    image: "https://images.emtcontent.com/hotel-img/udr-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
  {
    city: "Agra",
    image: "https://images.emtcontent.com/hotel-img/agra-sm.webp",
    types: ["Hotels", "Budget Hotels", "3 Star Hotels", "4 Star Hotels", "5 Star Hotels"],
  },
];

export default function PopularDestinations() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const goToCityPage = (city) => {
    navigate(`/hotels/${city.toLowerCase()}`);
  };

  const goToTypePage = (city, type) => {
    const typeSlug = type.toLowerCase().replace(/\s+/g, "-").replace("-hotels", "");
    navigate(`/hotels/${city.toLowerCase()}/${typeSlug}`);
  };

  const visibleDestinations = showAll ? destinations : destinations.slice(0, 12);

  return (
    <section className="px-2 py-6 max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Book Hotels At Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {visibleDestinations.map((place) => (
          <div
            key={place.city}
            className="flex items-center gap-3 p-3 border border-blue-400 bg-blue-50 rounded-md hover:shadow-sm transition cursor-pointer"
            onClick={() => goToCityPage(place.city)}
          >
            <img
              src={place.image}
              alt={place.city}
              className="w-12 h-12 object-cover rounded"
            />
            <div onClick={(e) => e.stopPropagation()}>
              <h3
                className="font-semibold text-base cursor-pointer hover:underline"
                onClick={() => goToCityPage(place.city)}
              >
                {place.city}
              </h3>

              <div className="text-[11px] text-gray-700">
                {place.types.slice(0, 3).map((type, index) => (
                  <React.Fragment key={type}>
                    <button
                      onClick={() => goToTypePage(place.city, type)}
                      className="hover:underline hover:text-blue-500"
                    >
                      {type}
                    </button>
                    {index < 2 && ", "}
                  </React.Fragment>
                ))}
              </div>

              <div className="text-[11px] text-gray-700">
                {place.types.slice(3).map((type, index) => (
                  <React.Fragment key={type}>
                    <button
                      onClick={() => goToTypePage(place.city, type)}
                      className="hover:underline hover:text-blue-500"
                    >
                      {type}
                    </button>
                    {index < 1 && ", "}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
