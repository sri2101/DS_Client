// import React from "react";

// export default function DayWiseItinerary({ itinerary }) {
//   // Only show Day 1 itinerary
//   const day1Only = itinerary && itinerary.length > 0 ? [itinerary[0]] : [];

//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
//         Day Wise Itinerary
//       </h2>
      
//       <div className="relative">
//         <div className="space-y-10">
//           {day1Only.map((day, index) => (
//             <div key={index} className="flex items-start gap-6 relative z-10">
//               {/* Timeline column (left side) */}
//               <div className="w-20 flex justify-center relative">
//                 {/* Blue Day circle */}
//                 <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
//                   Day {day.day}
//                 </div>
//               </div>
              
//               {/* Card content */}
//               <div className="flex-1">
//                 <div className="bg-blue-100 px-4 py-2 font-semibold text-blue-900 rounded-t-md border border-blue-200">
//                   {day.title}
//                 </div>
//                 <div className="bg-white border border-t-0 border-blue-200 p-4 rounded-b-md shadow text-gray-800 text-sm space-y-2">
//                   {(day.points || []).map((point, i) => (
//                     <div key={i} className="flex items-start gap-2">
//                       <span className="text-lg text-gray-700 leading-5">◦</span>
//                       <span>{point}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function DayWiseItinerary({ itinerary }) {
  const [visibleDays, setVisibleDays] = useState([1]); // Initially only Day 1

  const showNextDay = () => {
    const nextDay = visibleDays.length + 1;
    if (nextDay <= itinerary.length) {
      setVisibleDays([...visibleDays, nextDay]);
    }
  };

  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
        Day Wise Itinerary
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-10 top-[38px] bottom-0 w-0.5 bg-gray-300 z-0" />

        <div className="space-y-10">
          {itinerary
            .filter((day) => visibleDays.includes(day.day))
            .map((day, index) => (
              <div key={day.day} className="flex items-start gap-6 relative z-10">
                {/* Timeline column (left side) */}
                <div className="w-20 flex flex-col items-center relative">
                  {/* Day circle */}
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
                    Day {day.day}
                  </div>

                  {/* Gray dot */}
                  {index < visibleDays.length - 1 && (
                    <div className="w-3 h-3 rounded-full bg-gray-400 mt-2"></div>
                  )}
                </div>

                {/* Card content */}
                <div className="flex-1">
                  <div className="bg-blue-100 px-4 py-2 font-semibold text-blue-900 rounded-t-md border border-blue-200">
                    {day.title}
                  </div>
                  <div className="bg-white border border-t-0 border-blue-200 p-4 rounded-b-md shadow text-gray-800 text-sm space-y-2">
                    {(day.points || []).map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-lg text-gray-700 leading-5">◦</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show Next Day Button */}
        {visibleDays.length < itinerary.length && (
          <div className="text-center mt-6">
            <button
              onClick={showNextDay}
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              Show Day {visibleDays.length + 1}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
