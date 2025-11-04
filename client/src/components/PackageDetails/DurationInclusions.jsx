// import {
//   Clock,
//   MapPin,
//   Hotel,
//   Binoculars,
//   Car,
//   UtensilsCrossed,
// } from "lucide-react";

// const iconMap = {
//   hotel: <Hotel className="w-7 h-7 text-gray-700" />,
//   sightseeing: <Binoculars className="w-7 h-7 text-gray-700" />,
//   transfer: <Car className="w-7 h-7 text-gray-700" />,
//   meal: <UtensilsCrossed className="w-7 h-7 text-gray-700" />,
// };

// export default function DurationInclusions({ duration, location, includes }) {
//   return (
//     <div className="border rounded-2xl p-4 shadow-sm bg-white w-full max-w-md mx-auto">
//       <div className="space-y-2">
//         <div className="flex items-center gap-2">
//           <Clock className="text-pink-600 w-5 h-5" />
//           <span className="font-semibold">Duration :</span>
//           <span>{duration}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <MapPin className="text-rose-600 w-5 h-5" />
//           <span className="font-semibold">Places to Visit :</span>
//           <span>{location}</span>
//         </div>
//       </div>

//       <div className="border-t mt-4 pt-4">
//         <div className="text-center text-sm font-semibold border px-4 py-1 w-fit mx-auto rounded-full bg-gray-100 text-gray-700 mb-4">
//           Package Includes
//         </div>
//         <div className="grid grid-cols-4 gap-4 justify-items-center">
//           {/* {includes.map(({ label, icon }) => ( */}
//           {(includes || []).map(({ label, icon }) => (
//             <div key={label} className="flex flex-col items-center text-sm text-gray-700">
//               {iconMap[icon]}
//               <span className="mt-1">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import {
  Clock,
  MapPin,
  Hotel,
  Binoculars,
  Car,
  UtensilsCrossed,
} from "lucide-react";

const iconMap = {
  hotel: <Hotel className="w-7 h-7 text-gray-700" />,
  sightseeing: <Binoculars className="w-7 h-7 text-gray-700" />,
  transfer: <Car className="w-7 h-7 text-gray-700" />,
  meal: <UtensilsCrossed className="w-7 h-7 text-gray-700" />,
};

export default function DurationInclusions({ duration, location, includes }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white w-full max-w-md mx-auto">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock className="text-pink-600 w-5 h-5" />
          <span className="font-semibold">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-rose-600 w-5 h-5" />
          <span className="font-semibold">Places to Visit:</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="text-center text-sm font-semibold border px-4 py-1 w-fit mx-auto rounded-full bg-gray-100 text-gray-700 mb-4">
          Package Includes
        </div>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {(includes || []).map(({ label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-sm text-gray-700"
            >
              {iconMap[icon] || <span className="w-7 h-7" />} {/* fallback */}
              <span className="mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
