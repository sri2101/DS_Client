// HotelOverview.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MapPin, Users, CheckCircle, Wifi, Car, Snowflake, Waves, Bed, Dumbbell,
  Bath, Tv2, Phone, Shirt, ShieldCheck, Plus, Newspaper, Briefcase,
  Coffee, UserRoundCheck, AlarmClock, BookOpen, Camera, Globe,
  Lightbulb, LockKeyhole, ShoppingCart, Building2, Printer, Star, PlusCircle, Umbrella, DoorOpen, Baby, Gift, Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const facilityIconMap = {
  "Free Wi-Fi": Wifi,
  "Wi-Fi": Wifi,
  "Air Conditioning": Umbrella,
  "Parking Facility": Car,
  "Parking facility (As Per Availability)": Car,
  "Free Parking": Car,
  "Daily Housekeeping": Shirt,
  "Airport Shuttle": Briefcase,
  "Luggage Storage": Briefcase,
  "Front Desk": Phone,
  "Library": Newspaper,
  "Shared Lounge": Coffee,
  "Laundry": Shirt,
  "TV": Tv2,
  "24/7 Front Desk": Phone,
  "access via exterior corridors": DoorOpen,
  "air conditioning": Snowflake,
  "attached bathroom": Bath,
  "baby sitting": Baby,
  "Free toiletries": Gift,
  "Resturant": Utensils,
};

const amenityIconMap = {
  "Ironing facilities": Shirt,
  "Parking facility": Car,
  "Luggage Storage": Briefcase,
  "Front Desk": Phone,
  "Newspaper in lobby": Newspaper,
  "Wake-up service": AlarmClock,
  "Room service–On request": Bed,
  "Doctor on call": UserRoundCheck,
  "Travel Desk": Globe,
  "Library": BookOpen,
  "Banquet Hall": Building2,
  "Power Backup": Lightbulb,
  "Central AC": Snowflake,
  "CCTV": Camera,
  "Executive Lounge": Building2,
  "Lawns/Gardens": Waves,
  "Business Centre": Briefcase,
  "Conference Hall": Building2,
  "Bar": Coffee,
  "Laundry": Shirt,
  "Photocopying": Printer,
  "Free WiFi": Wifi,
  "Internet Facility / Cyber Cafe": Tv2,
  "Credit/Debit cards": ShoppingCart,
  "Elevator": Plus,
  "Restaurant": Coffee,
  "Coffee Shop": Coffee,
  "Security [24-hour]": ShieldCheck,
};

const HotelOverview = () => {
  const reduxHotel = useSelector((state) => state.hotelInfo.hotel);
  const [hotelData, setHotelData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fromLocal = localStorage.getItem("selectedHotel");
    if (reduxHotel && Object.keys(reduxHotel).length > 0) {
      setHotelData(reduxHotel);
    } else if (fromLocal) {
      setHotelData(JSON.parse(fromLocal));
    }
  }, [reduxHotel]);

  if (!hotelData) return <div>Loading or Hotel not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hotel & Room Images Section */}
      {hotelData?.images?.length >= 5 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
            <img src={hotelData?.images[0]} alt="Hotel" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {hotelData?.images?.slice(1, 5).map((img, i) => (
              <div key={i} className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
                <img src={img} alt={`room-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-start">
        {/* Left: Hotel Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {hotelData?.name}
            </h1>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              {hotelData?.location}
            </p>
            {/* <div className="flex items-center space-x-2 text-yellow-500 text-lg">
              {"★".repeat(Math.floor(hotelData.rating))}{hotelData.rating % 1 >= 0.5 ? "☆" : ""}
              <span className="text-gray-500 px-2 text-sm">{hotelData?.reviewCount} Reviews</span>
            </div> */}
            <div className="flex items-center text-yellow-500 text-lg">
              {"★".repeat(hotelData.star)}
              {"☆".repeat(5 - hotelData.star)}
              <span className="ml-2 text-sm text-gray-600">
                {hotelData.starCategory} • {hotelData.rating.toFixed(1)}/5 ({hotelData.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center text-green-600 text-sm font-medium gap-2">
              <CheckCircle className="w-4 h-4" />
              {hotelData?.perk} Included
            </div>
          </div>

          {/* Room & Basic Info */}
          <div className="text-sm text-gray-700">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-gray-500" /> {hotelData.guests || 2} x Guest | {hotelData.rooms || 1} x Room
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {hotelData.facilities?.map((facility, index) => {
                const Icon = facilityIconMap[facility] || PlusCircle;
                return (
                  <span
                    key={index}
                    className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-gray-600 bg-white shadow-sm hover:bg-gray-50 transition"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {facility}
                  </span>
                );
              })}

              {hotelData.amenities?.length > 6 && (
                <span className="text-xs px-3 py-1 bg-gray-100 border rounded-full text-gray-600">
                  +{hotelData.amenities.length - 6} more
                </span>
              )}
            </div>

          </div>
        </div>

        {/* Right: Price Card */}
        <div className="w-full md:max-w-sm border rounded-2xl shadow-lg p-4 md:ml-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="line-through text-sm text-red-400">₹{hotelData.originalPrice}</p>
              <p className="text-2xl font-bold text-green-700">₹{hotelData.price}</p>
              <p className="text-xs text-gray-500">+ ₹{hotelData.tax} Taxes & Fees</p>
              <p className="text-xs text-gray-400">Base price (Per Night)</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-green-700 font-medium">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {hotelData.rating}
              <span className="text-gray-500"> ({hotelData.reviewCount})</span>
            </div>
          </div>

          {hotelData.initialAmount !== undefined && (
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="text-green-600 w-4 h-4" />
              <span className="text-sm font-semibold text-green-600">
                {hotelData.initialAmount === 0
                  ? 'Book with ₹0'
                  : `Pay ₹${hotelData.initialAmount} now`}
              </span>
            </div>
          )}


          <Button
            onClick={() => navigate("/hotel-review", { state: { hotelData } })}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-medium text-sm"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Hotel Description */}
      <Card className="mb-10 bg-gray-50 rounded-2xl border">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              {hotelData.name}
              <span className="text-yellow-500 text-base">
                {"★".repeat(Math.floor(hotelData.rating))}
                {hotelData.rating % 1 >= 0.5 && "☆"}
              </span>
              {/* <span className="text-yellow-500 text-base">
                {"★".repeat(hotelData.star)}
                {"☆".repeat(5 - hotelData.star)}
              </span>
              <span className="ml-2 text-sm text-gray-600">
                {hotelData.starCategory} • {hotelData.rating.toFixed(1)}/5
              </span> */}

            </h3>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              {hotelData.description?.[0]?.place}
            </p>
          </div>

          {hotelData.description?.[0]?.info?.map((para, index) => (
            <p key={index} className="text-sm text-gray-600 mb-2">{para}</p>
          ))}
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card className="mt-10 border rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700">
            {hotelData.amenities?.map((label, i) => {
              const Icon = amenityIconMap[label] || Plus;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg border"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  {label}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelOverview;
















// import React from "react";
// import { useLocation } from "react-router-dom";
// import { MapPin, Users, CheckCircle, Star, ShieldCheck, Shirt, Car, Briefcase, Phone, Newspaper, PlusCircle, Wifi, Snowflake, Waves, Bed, Dumbbell, Tv2, Plus, Bath } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const HotelOverview = () => {
//   // const location = useLocation();
//   // const hotel = location.state?.hotel;
//   const navigate = useNavigate();
//   const hotelData = useSelector(state => state?.hotel?.payload)

//   console.log(hotelData);


//   if (!hotelData) {
//     return <div>Loading or Hotel not found</div>;
//   }

//   return (
//     <div>
//       <h2>{hotelData.name}</h2>
//       <p>{hotelData.location}</p>
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         {/* Hotel & Room Images Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//           {/* Main Image */}
//           <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
//             <img
//               src={hotelData?.images[Number(0)]}
//               alt="Hotel"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* 2x2 Thumbnail Grid */}
//           <div className="grid grid-cols-2 grid-rows-2 gap-2">
//             {hotelData?.images?.slice(1, 5).map((img, i) => (
//               <div key={i} className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
//                 <img
//                   src={img}
//                   alt={`room-${i}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-start">
//           {/* Left: Hotel Info */}
//           <div className="md:col-span-2 space-y-4">
//             <div className="space-y-1">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//                 {hotelData?.name}
//               </h1>
//               <p className="text-sm text-gray-500 flex items-center gap-1">
//                 <MapPin className="w-4 h-4 text-gray-400" />
//                 {hotelData?.location}
//               </p>
//               <div className="flex items-center space-x-2 text-yellow-500 text-sm">
//                 <span>★★★★☆</span>
//                 <span className="text-gray-500">{hotelData?.reviewCount} Reviews</span>
//               </div>
//               <div className="flex items-center text-green-600 text-sm font-medium gap-2">
//                 <CheckCircle className="w-4 h-4" />
//                 {hotelData?.perk} Included
//               </div>
//             </div>

//             {/* Room & Basic Info */}
//             <div className="text-sm text-gray-700">
//               <div className="flex items-center gap-2 mb-1">
//                 <Users className="w-4 h-4 text-gray-500" />
//                 2 x Guest | 1 x Room
//               </div>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {[
//                   { label: "Free Cancellation", icon: ShieldCheck },
//                   { label: "Ironing Facilities", icon: Shirt },
//                   { label: "Parking Facility", icon: Car },
//                   { label: "Luggage Storage", icon: Briefcase },
//                   { label: "Front Desk", icon: Phone },
//                   { label: "Newspaper in Lobby", icon: Newspaper },
//                   { label: "More Amenities", icon: PlusCircle },
//                 ].map(({ label, icon: Icon }, i) => (
//                   <span
//                     key={i}
//                     className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-gray-600 bg-white shadow-sm hover:bg-gray-50 transition"
//                   >
//                     <Icon className="w-4 h-4 text-primary" />
//                     {label}
//                   </span>
//                 ))}
//               </div>

//             </div>
//           </div>


//           {/* Right: Price Card */}
//           <div className="w-full md:max-w-sm border rounded-2xl shadow-lg p-4 md:ml-auto">
//             {/* Rating */}
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <p className="line-through text-sm text-red-400">₹2000</p>
//                 <p className="text-2xl font-bold text-green-700">₹1637</p>
//                 <p className="text-xs text-gray-500">+ ₹232 Taxes & Fees</p>
//                 <p className="text-xs text-gray-400">Base price (Per Night)</p>
//               </div>
//               <div className="flex items-center gap-1 text-sm text-green-700 font-medium">
//                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                 4.8
//                 <span className="text-gray-500"> (167)</span>
//               </div>
//             </div>

//             {/* Book with ₹0 */}
//             <div className="flex items-center gap-2 mb-3">
//               <CheckCircle className="text-green-600 w-4 h-4" />
//               <span className="text-sm font-semibold text-green-600">Book with ₹0</span>
//             </div>

//             <Button
//               onClick={() => navigate("/hotel-review", { state: { hotelData } })}
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-medium text-sm"
//             >
//               Book Now
//             </Button>

//           </div>
//         </div>



//         {/* Hotel Description */}
//         <Card className="mb-10 bg-gray-50 rounded-2xl border">
//           <CardContent className="p-6">
//             {/* Header with stars and location */}
//             <div className="mb-4">
//               <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//                 Hotel Signature Grand
//                 <span className="text-yellow-500 text-base">★★★</span>
//               </h3>
//               <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
//                 <MapPin className="w-4 h-4 text-gray-400" />
//                 Hari Nagar, West Delhi, India
//               </p>
//             </div>

//             {/* Description Body */}
//             <p className="text-sm text-gray-600 mb-2">
//               Hotel Signature Grand in West Delhi is celebrated for its exceptional hospitality, offering
//               unparalleled accommodations and dining experiences. Indulge in a blend of Indian and
//               international cuisine that promises excellent value for money.
//             </p>
//             <p className="text-sm text-gray-600">
//               Situated in Hari Nagar, Hotel Signature Grand enjoys a prime location within easy reach of
//               local trading centers and the public sector community. Conveniently located 15 minutes
//               from IGI Airport and 25 minutes from New Delhi Railway Station.
//             </p>
//           </CardContent>
//         </Card>


//         <Card className="mt-10 border rounded-2xl shadow-sm">
//           <CardContent className="p-6">
//             <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
//               Amenities
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700">
//               {[
//                 { label: "Free Wi-Fi", icon: Wifi },
//                 { label: "Parking Facility", icon: Car },
//                 { label: "Air Conditioning", icon: Snowflake },
//                 { label: "Swimming Pool", icon: Waves },
//                 { label: "Room Service", icon: Bed },
//                 { label: "Gym Access", icon: Dumbbell },
//                 { label: "Private Bathroom", icon: Bath },
//                 { label: "TV", icon: Tv2 },
//                 { label: "24/7 Front Desk", icon: Phone },
//                 { label: "Laundry Service", icon: Shirt },
//                 { label: "Security", icon: ShieldCheck },
//                 { label: "More Amenities", icon: Plus },
//               ].map(({ label, icon: Icon }, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg border"
//                 >
//                   <Icon className="w-5 h-5 text-primary" />
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//       </div>
//     </div>

//   );
// };

// export default HotelOverview;
