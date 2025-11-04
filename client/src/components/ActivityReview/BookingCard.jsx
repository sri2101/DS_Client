import React, { useState } from "react";
import { Clock, User } from "lucide-react";
import DatePicker from "./DatePicker"; // adjust path

export default function BookingCard({ activity }) {
  const info = activity?.bookingInfo;
  const maxTravellers = info?.travelerLimit || 6;

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="bg-[#f5f5f5] rounded-xl shadow-md p-5 w-full space-y-4">
      {/* Price */}
      <p className="text-base font-medium text-gray-800">
        Starting from{" "}
        <span className="text-2xl font-bold text-black">
          {info?.price || "N/A"}
        </span>{" "}
        <span className="text-sm text-gray-700">per Person</span>
      </p>

      {/* Date + Time */}
      <div className="flex gap-2">
        {/* Date Picker */}
        <div className="w-1/2">
          <DatePicker date={selectedDate} onChange={setSelectedDate} />
        </div>

        {/* Time Dropdown */}
        <div className="relative w-1/2">
          <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <select className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-8 text-sm text-gray-700 appearance-none">
            {(info?.timeOptions || ["9:00 AM", "10:00 AM"]).map((time, i) => (
              <option key={i}>{time}</option>
            ))}
          </select>
          <div className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Travellers */}
      <div className="relative">
        <User className="absolute left-3 top-2.5 h-4 w-4 text-purple-600" />
        <button className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-left text-sm text-gray-700">
          Select Travellers (max {maxTravellers})
        </button>
      </div>

      {/* Book Now */}
      <button className="w-full bg-[#ff6600] hover:bg-orange-600 text-white py-2 rounded-full font-semibold text-sm">
        Book Now
      </button>
    </div>
  );
}


