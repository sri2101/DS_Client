// import React from "react";

// const hotelChains = [
//   {
//     name: "Amritara",
//     logo: "https://images.emtcontent.com/hotelchains/amritara.png",
//   },
//   {
//     name: "Byke",
//     logo: "https://images.emtcontent.com/hotelchains/byke.png",
//   },
//   {
//     name: "RedHouse",
//     logo: "https://images.emtcontent.com/hotelchains/redhouse.png",
//   },
//   {
//     name: "VITS",
//     logo: "https://images.emtcontent.com/hotelchains/vits.png",
//   },
//   {
//     name: "Windflower",
//     logo: "https://images.emtcontent.com/hotelchains/windflower.png",
//   },
//   {
//     name: "Sterling",
//     logo: "https://images.emtcontent.com/hotelchains/sterling.png",
//   },
//   {
//     name: "Spree",
//     logo: "https://images.emtcontent.com/hotelchains/spree.png",
//   },
//   {
//     name: "Hosteller",
//     logo: "https://images.emtcontent.com/hotelchains/hosteller.png",
//   },
//   {
//     name: "Magnus",
//     logo: "https://images.emtcontent.com/hotelchains/magnus.png",
//   },
//   {
//     name: "Suba",
//     logo: "https://images.emtcontent.com/hotelchains/suba.png",
//   },
//   {
//     name: "Zinc",
//     logo: "https://images.emtcontent.com/hotelchains/zinc.png",
//   },
//   {
//     name: "Lords",
//     logo: "https://images.emtcontent.com/hotelchains/lords.png",
//   },
//   {
//     name: "Aliyaa",
//     logo: "https://images.emtcontent.com/hotelchains/aliyaa.png",
//   },
//   {
//     name: "FXS",
//     logo: "https://images.emtcontent.com/hotelchains/fxs.png",
//   },
// ];

// const HotelChains = () => {
//   return (
//     <div className="w-full px-4 py-12 bg-white">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Our Top Hotel Chains
//         </h2>
//         {/* Subtitle */}
//         <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-10">
//           EaseMyTrip has a wide range of luxury and budget-friendly hotel chain
//           properties. We have picked the finest hotels in India with world-class
//           amenities. We bring you not only a stay option, but an experience in
//           your budget to enjoy the luxury. We make sure that all the hotels are
//           safe, hygienic, comfortable, and easily approachable when it comes to
//           location. Book your hotel with EaseMyTrip and don’t forget to grab an
//           amazing hotel deal to save huge on your stay.
//         </p>

//         {/* Logos Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {hotelChains.map((hotel, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
//             >
//               <img
//                 src={hotel.logo}
//                 alt={hotel.name}
//                 className="max-h-16 object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelChains;

import React from "react";

const hotelChains = [
  { name: "Amritara", logo: "https://images.emtcontent.com/hotel-img/amritara-hotel-hp.png" },
  { name: "Byke", logo: "https://images.emtcontent.com/hotel-img/the-byke-hotels-hp-logo.webp" },
  { name: "RedHouse", logo: "https://images.emtcontent.com/hotel-img/tree-house-group-hp-logo.webp" },
  { name: "VITS", logo: "https://images.emtcontent.com/hotel-img/vits-hotels-hp-logo.webp" },
  { name: "Windflower", logo: "https://images.emtcontent.com/hotel-img/windflower-hp-logo.webp" },
  { name: "Sterling", logo: "https://images.emtcontent.com/hotel-img/sterling-hotels-17june24-hp-logo.png" },
  { name: "Spree", logo: "https://images.emtcontent.com/hotel-img/spree-hotels-hp.png" },
  { name: "Hosteller", logo: "https://images.emtcontent.com/hotel-img/the-hosteller-hp-logo.webp" },
  { name: "Magnus", logo: "https://images.emtcontent.com/hotel-img/Magnus-Hotels-logo.png" },
  { name: "Suba", logo: "https://images.emtcontent.com/hotel-img/Suba-Group-Hotels-27-03-25-logo.webp" },
  { name: "Zone", logo: "https://images.emtcontent.com/hotel-img/zone-the-park-04-04-25-logo.webp" },
  { name: "Lords", logo: "https://www.easemytrip.com/images/emt-sale/lords-hotels.png" },
  { name: "Aliyaa", logo: "https://images.emtcontent.com/hotel-img/Alivaa-logo.webp" },
  { name: "FXS", logo: "https://images.emtcontent.com/hotel-img/Foxoso-Hotels-logo.webp" },
];

const HotelChains = () => {
  return (
    <section className="w-full px-3 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
          Our Top Hotel Chains
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto mb-6 leading-relaxed">
          EaseMyTrip has a wide range of luxury and budget-friendly hotel chain
          properties. We have picked the finest hotels in India with world-class
          amenities. We bring you not only a stay option, but an experience in
          your budget to enjoy the luxury. We make sure that all the hotels are
          safe, hygienic, comfortable, and easily approachable when it comes to
          location. Book your hotel with EaseMyTrip and don’t forget to grab an
          amazing hotel deal to save huge on your stay.
        </p>

        {/* Grid of logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {hotelChains.map((hotel, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-md p-2 bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={hotel.logo}
                alt={hotel.name}
                className="h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelChains;

