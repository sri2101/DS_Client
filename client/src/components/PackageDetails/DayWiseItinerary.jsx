// import React from "react";

// export default function DayWiseItinerary({ itinerary = [] }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4">
//       <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-500 pl-2">Day Wise Itinerary</h3>
//       <div className="relative border-l-2 border-gray-300 ml-6">
//         {itinerary.map((day, index) => (
//           <div key={index} className="mb-8 flex items-start">
//             {/* Day Circle */}
//             <div className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold shadow-md">
//               Day {day.day}
//             </div>

//             {/* Itinerary Card */}
//             <div className="ml-8 w-full bg-blue-50 rounded-xl overflow-hidden shadow">
//               <div className="bg-blue-100 font-semibold px-4 py-2 text-gray-800">
//                 {day.title}
//               </div>
//               <ul className="list-disc list-inside p-4 space-y-2 text-sm text-gray-700">
//                 {day.points.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React from "react";

// export default function DayWiseItinerary({ itinerary }) {
//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
//       <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
//         Day Wise Itinerary
//       </h2>

//       <div className="relative border-l-2 border-gray-300 ml-6">
//         {itinerary.map((day, index) => (
//           <div key={index} className="relative mb-12">
//             {/* Circle with Day Number */}
//             <div className="absolute -left-9 top-1">
//               <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold shadow">
//                 Day {day.day}
//               </div>
//             </div>

//             {/* Connector Dot */}
//             <div className="absolute -left-[7px] top-12 w-3 h-3 rounded-full bg-gray-400 z-10"></div>

//             {/* Day Card */}
//             <div className="ml-4 bg-blue-50 rounded-md overflow-hidden shadow">
//               <div className="bg-blue-200 px-4 py-2 font-semibold text-blue-900 border-b border-blue-300">
//                 {day.title}
//               </div>
//               <div className="bg-white p-4 text-sm text-gray-800 space-y-1 leading-relaxed">
//                 {(day.points || []).map((point, i) => (
//                   <p key={i} className="flex items-start gap-1">
//                     <span className="text-blue-500 text-lg leading-5">•</span>
//                     <span>{point}</span>
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function DayWiseItinerary({ itinerary }) {
//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
//         Day Wise Itinerary
//       </h2>

//       <div className="relative ml-10 border-l-2 border-gray-300">
//         {itinerary.map((day, index) => (
//           <div key={index} className="relative pl-12 mb-12">
//             {/* Blue Circle - Day Label */}
//             <div className="absolute -left-10 top-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
//               Day {day.day}
//             </div>

//             {/* Gray Connector Dot */}
//             {index < itinerary.length - 1 && (
//               <div className="absolute -left-[6px] top-[64px] w-3 h-3 rounded-full bg-gray-400 z-10"></div>
//             )}

//             {/* Itinerary Card */}
//             <div className="ml-2">
//               <div className="bg-blue-100 px-4 py-2 font-semibold text-blue-900 rounded-t-md border border-blue-200">
//                 {day.title}
//               </div>
//               <div className="bg-white border border-t-0 border-blue-200 p-4 rounded-b-md shadow text-gray-800 text-sm space-y-2">
//                 {(day.points || []).map((point, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <span className="text-lg text-gray-700 leading-5">◦</span>
//                     <span>{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function DayWiseItinerary({ itinerary }) {
//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
//         Day Wise Itinerary
//       </h2>

//       <div className="space-y-6">
//         {itinerary.map((day, index) => (
//           <div key={index} className="flex items-start gap-4 px-4 relative">
//             {/* Timeline connector */}
//             <div className="flex flex-col items-center">
//               {/* Day Circle */}
//               <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
//                 Day {day.day}
//               </div>

//               {/* Gray Connector Line */}
//               {index < itinerary.length - 1 && (
//                 <div className="w-px h-full bg-gray-300 mt-1"></div>
//               )}
//             </div>

//             {/* Itinerary Card */}
//             <div className="flex-1">
//               <div className="bg-blue-100 px-4 py-2 font-semibold text-blue-900 rounded-t-md border border-blue-200">
//                 {day.title}
//               </div>
//               <div className="bg-white border border-t-0 border-blue-200 p-4 rounded-b-md shadow text-gray-800 text-sm space-y-2">
//                 {(day.points || []).map((point, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <span className="text-lg text-gray-700 leading-5">◦</span>
//                     <span>{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function DayWiseItinerary({ itinerary }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
        Day Wise Itinerary
      </h2>

      <div className="relative">
        {/* Vertical line exactly through gray dots */}
        <div className="absolute left-10 top-[38px] bottom-0 w-0.5 bg-gray-300 z-0" />

        <div className="space-y-10">
          {itinerary.map((day, index) => (
            <div key={index} className="flex items-start gap-6 relative z-10">
              {/* Timeline column (left side) */}
              <div className="w-20 flex justify-center relative">
                {/* Blue Day circle */}
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
                  Day {day.day}
                </div>

                {/* Gray dot (placed on same vertical line) */}
                {index < itinerary.length - 1 && (
                  <div className="absolute left-1/2 top-[64px] -translate-x-1/2 w-3 h-3 rounded-full bg-gray-400 z-10"></div>
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
      </div>
    </div>
  );
}






// import React from "react";

// export default function DayWiseItinerary({ itinerary }) {
//   return (
//     <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="itinerary">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-l-4 border-blue-600 pl-3">
//         Day Wise Itinerary
//       </h2>

//       <div className="relative ml-10 border-l-2 border-gray-300">
//         {itinerary.map((day, index) => (
//           <div key={index} className="relative pl-12 mb-16">
//             {/* Blue Circle */}
//             <div className="absolute -left-10 top-1 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm shadow">
//               Day {day.day}
//             </div>

//             {/* Gray Dot Connector (only if not last item) */}
//             {index < itinerary.length - 1 && (
//               <div className="absolute -left-[2px] top-[72px] w-3 h-3 rounded-full bg-gray-400 z-10" />
//             )}

//             {/* Day Card */}
//             <div className="ml-2">
//               <div className="bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-900 rounded-t-md border border-blue-200">
//                 {day.title}
//               </div>
//               <div className="bg-white border border-t-0 border-blue-200 p-3 rounded-b-md shadow text-gray-800 text-sm space-y-1.5">
//                 {(day.points || []).map((point, i) => (
//                   <div key={i} className="flex items-start gap-2">
//                     <span className="text-base text-gray-700 leading-5">◦</span>
//                     <span>{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



