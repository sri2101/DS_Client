import React from "react";
import {
  MapPin,
  Eye,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addHotelInfo } from "@/app/features/hotelInfo.js";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();

  const addHotelData = () => {
    dispatch(addHotelInfo(hotel));
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4">
      <div className="md:w-1/3 w-full">
        <img
          src={hotel.images[0]}
          alt="Main"
          className="rounded-xl w-full h-40 object-cover mb-2"
        />
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {hotel.images.slice(1, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-16 object-cover rounded-md"
            />
          ))}
          <div className="relative w-full h-16 rounded-md overflow-hidden cursor-pointer">
            <img
              src={hotel.images[4]}
              alt="View All"
              className="w-full h-full object-cover blur-[2px] brightness-75 scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-semibold">View All</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-base md:text-lg font-bold">{hotel.name}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            {hotel.location}
          </p>

          <div className="flex items-center text-yellow-400 text-lg mt-1">
            {"★".repeat(Math.floor(hotel.rating))}
            {hotel.rating % 1 >= 0.5 && <span className="text-gray-400">☆</span>}
          </div>      
          


          <div className="mt-2 text-green-600 text-sm font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {hotel.perk}
          </div>
          <div className="text-orange-500 text-sm mt-1 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            {hotel.people} People viewing
          </div>
          <div className="mt-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
              {hotel.promocode}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 flex flex-col items-end justify-between text-right">
        <div className="mb-2">
          <p className="text-sm font-semibold text-gray-800">{hotel.reviewLabel}</p>
          <p className="text-xs text-gray-500 mb-1">{hotel.reviewCount} reviews</p>
          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
            {hotel.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-2">
          {hotel.originalPrice && (
            <p className="line-through text-sm text-red-400 mb-1">₹{hotel.originalPrice}</p>
          )}
          <p className="text-2xl font-bold text-gray-800">₹{hotel.price}</p>
          <p className="text-xs text-gray-500">+ ₹{hotel.tax} Taxes & fees</p>
          <p className="text-xs text-gray-400">Per Night</p>
        </div>

        <Link to="/hotel-overview" onClick={addHotelData}>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full mt-3 text-sm font-semibold">
            View Room
          </button>
        </Link>

        <p className="text-xs text-gray-600 mt-2">
          <span className="text-blue-600 cursor-pointer">Login</span> &{" "}
          <span className="text-blue-700 font-semibold cursor-pointer">Save More</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;




