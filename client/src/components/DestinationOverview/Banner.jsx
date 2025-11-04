// import React, { useState } from "react";

// const Banner = () => {
//   // Dynamic data
//   const locations = ["New Delhi", "Mumbai", "Bangalore", "Hyderabad"];
//   const destinations = ["Kashmir", "Ladakh", "Shimla", "Manali"];

//   const [from, setFrom] = useState(locations[0]);
//   const [destination, setDestination] = useState(destinations[0]);

//   const handleSearch = () => {
//     alert(`Searching packages from ${from} to ${destination}`);
//   };

//   return (
//     <div
//       className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/banner-kashmir.jpg')", // replace with your image path
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       {/* Content */}
//       <div className="relative text-center text-white w-full px-4">
//         <h1 className="text-2xl md:text-4xl font-bold mb-6">
//           Kashmir Holiday Packages
//         </h1>

//         {/* Search box */}
//         <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-full shadow-lg p-2 max-w-2xl mx-auto">
//           {/* From Input */}
//           <select
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             className="px-3 py-2 md:px-4 md:py-3 text-gray-700 rounded-l-full focus:outline-none w-full md:w-auto"
//           >
//             {locations.map((loc, idx) => (
//               <option key={idx} value={loc}>
//                 {loc}
//               </option>
//             ))}
//           </select>

//           {/* Destination Input */}
//           <select
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="px-3 py-2 md:px-4 md:py-3 text-gray-700 focus:outline-none w-full md:w-auto"
//           >
//             {destinations.map((dest, idx) => (
//               <option key={idx} value={dest}>
//                 {dest}
//               </option>
//             ))}
//           </select>

//           {/* Search Button */}
//           <button
//             onClick={handleSearch}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 md:py-3 rounded-full transition w-full md:w-auto"
//           >
//             Search
//           </button>
//         </div>

//         {/* Glimpse Button */}
//         <button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm">
//           Glimpse of Kashmir
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React from "react";
// import { Search, ChevronDown } from "lucide-react";

// const Banner = () => {
//   return (
//     <div className="bg-gray-300 flex items-center justify-center min-h-[300px] p-6">
//       {/* Search Box */}
//       <div className="bg-white rounded-full shadow-lg flex items-center max-w-3xl w-full overflow-hidden">
//         {/* From Section with icon */}
//         <div className="flex items-center gap-2 border-r border-gray-300 px-4 h-14 flex-1">
//           {/* Circle Icon */}
//           <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
//             <Search className="text-gray-500 w-4 h-4" />
//           </div>
//           <div>
//             <p className="text-xs text-gray-500">From</p>
//             <p className="font-semibold text-gray-800">New Delhi</p>
//           </div>
//         </div>

//         {/* Destination Section */}
//         <div className="flex items-center px-4 h-14 flex-1 relative">
//           <div>
//             <p className="text-xs text-gray-500">To Destination/Category</p>
//             <p className="font-semibold text-gray-800">Kashmir</p>
//           </div>
//           {/* Chevron Icon */}
//           <ChevronDown className="absolute right-3 text-gray-500 w-5 h-5" />
//         </div>

//         {/* Search Button */}
//         <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-14 text-sm rounded-full transition">
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;




import React, { useEffect, useRef, useState } from "react";

/* === Inline SVG icons (no external deps) === */
const SearchIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="6" strokeWidth="2"></circle>
        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

const ChevronIcon = ({ className = "w-5 h-5", open = false }) => (
    <svg
        className={`${className} transition-transform ${open ? "rotate-180" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
    >
        <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* === sample data (replace / fetch as needed) === */
const CITIES = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Srinagar",
    "Leh",
    "Goa",
    "Varanasi",
    "Chandigarh",
];

const DESTINATIONS = ["kolkata", "Kashmir", "Ladakh", "Shimla", "Manali", "Goa", "Kerala"];

/* === Main component === */
export default function Banner({ slug = "kashmir" }) {
    const [fromCity, setFromCity] = useState("New Delhi");
    // derive a display destination from slug if provided
    const normalizeTitle = (s) => {
        if (!s) return "Kashmir";
        return s
            .split(/[-_ ]+/)
            .map((w) => w[0]?.toUpperCase() + w.slice(1))
            .join(" ");
    };
    const [toDest, setToDest] = useState(normalizeTitle(slug));

    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);

    const [fromFilter, setFromFilter] = useState("");
    const [toFilter, setToFilter] = useState("");

    const fromRef = useRef(null);
    const toRef = useRef(null);

    // Close dropdowns if clicked outside
    useEffect(() => {
        function handleDocClick(e) {
            if (fromRef.current && !fromRef.current.contains(e.target)) setOpenFrom(false);
            if (toRef.current && !toRef.current.contains(e.target)) setOpenTo(false);
        }
        function handleEsc(e) {
            if (e.key === "Escape") {
                setOpenFrom(false);
                setOpenTo(false);
            }
        }
        document.addEventListener("mousedown", handleDocClick);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleDocClick);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    // filtered lists
    const filteredFrom = CITIES.filter((c) => c.toLowerCase().includes(fromFilter.toLowerCase()));
    const filteredTo = DESTINATIONS.filter((d) => d.toLowerCase().includes(toFilter.toLowerCase()));

    const handleSelectFrom = (city) => {
        setFromCity(city);
        setOpenFrom(false);
        setFromFilter("");
    };
    const handleSelectTo = (dest) => {
        setToDest(dest);
        setOpenTo(false);
        setToFilter("");
    };

    const handleSearch = () => {
        // replace with real search logic
        alert(`Searching packages from ${fromCity} → ${toDest}`);
    };

    // update title when slug prop changes
    useEffect(() => {
        setToDest(normalizeTitle(slug));
    }, [slug]);

    // pick banner image by slug (simple mapping with sensible fallbacks)
    const bannerMap = {
        kolkata: '/sunderban.png',
        kashmir: 'https://media.easemytrip.com/media/ppc/destination/Common/CommongqxYeL.png',
        thailand: 'https://media1.thrillophilia.com/filestore/jgy1a6sk4q1oi6g3uvuw07i0ofar_shutterstock_1327510355.jpg?w=auto&h=600',
        bali: 'https://media.easemytrip.com/media/ppc/destination/Common/CommongqxYeL.png',
        europe: 'https://images.unsplash.com/photo-1503414265207-7cc73f0b3b2d?auto=format&fit=crop&w=1600&q=60',
        maldives: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=60',
        default: 'https://media.easemytrip.com/media/ppc/destination/Common/CommongqxYeL.png'
    };
    const bannerKey = (slug || 'default').toLowerCase();
    const backgroundImage = bannerMap[bannerKey] || bannerMap.default;

    return (
        <div
            className="relative w-full bg-cover bg-center"
            style={{
                minHeight: "320px",
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* content (z-20 so it's above overlay) */}
            <div className="relative z-20 max-w-3xl mx-auto px-4 py-13 flex flex-col items-center">
                <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">{toDest} Holiday Packages</h1>

                {/* Search bar */}
                <div className="w-full max-w-3xl py-5">
                    <div className="bg-white rounded-full shadow-lg flex items-stretch">
                        {/* FROM: left */}
                        <div
                            ref={fromRef}
                            className="relative flex-1 flex items-center gap-4 px-4 sm:px-6 h-14 border-r border-gray-200"
                        >
                            {/* icon circle */}
                            <div
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0"
                                aria-hidden
                            >
                                <SearchIcon className="w-4 h-4 text-gray-600" />
                            </div>

                            {/* label + value (click toggles dropdown) */}
                            <button
                                type="button"
                                onClick={() => {
                                    setOpenFrom((s) => !s);
                                    setOpenTo(false);
                                }}
                                className="text-left w-full"
                                aria-expanded={openFrom}
                                aria-haspopup="listbox"
                            >
                                <div className="text-xs text-gray-500 leading-tight">From</div>
                                <div className="font-semibold text-gray-900 leading-tight">{fromCity}</div>
                            </button>

                            {/* Dropdown for FROM */}
                            {openFrom && (
                                <div className="absolute left-4 right-4 top-full mt-3 z-50">
                                    <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        {/* search inside dropdown */}
                                        <div className="flex items-center gap-2 px-3 py-2 border-b">
                                            <SearchIcon className="w-4 h-4 text-gray-500" />
                                            <input
                                                autoFocus
                                                value={fromFilter}
                                                onChange={(e) => setFromFilter(e.target.value)}
                                                placeholder="Search for a city"
                                                className="w-full text-sm outline-none px-1 py-1"
                                            />
                                        </div>

                                        {/* scrollable list */}
                                        <div className="max-h-56 overflow-y-auto">
                                            {filteredFrom.length > 0 ? (
                                                filteredFrom.map((city) => (
                                                    <div
                                                        key={city}
                                                        role="option"
                                                        tabIndex={0}
                                                        onClick={() => handleSelectFrom(city)}
                                                        onKeyDown={(e) => e.key === "Enter" && handleSelectFrom(city)}
                                                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
                                                    >
                                                        {city}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="px-4 py-3 text-sm text-gray-400">No results</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* TO: middle */}
                        <div
                            ref={toRef}
                            className="relative flex-1 px-6 h-14 flex items-center cursor-pointer"
                            onClick={() => {
                                setOpenTo((s) => !s);
                                setOpenFrom(false);
                            }}
                            aria-expanded={openTo}
                            aria-haspopup="listbox"
                        >
                            <div className="w-full text-left">
                                <div className="text-xs text-gray-500">To Destination/Category</div>
                                <div className="font-semibold text-gray-900">{toDest}</div>
                            </div>

                            {/* chevron at right */}
                            <span className="ml-3">
                                <ChevronIcon open={openTo} />
                            </span>

                            {/* Dropdown panel for TO */}
                            {openTo && (
                                <div className="absolute left-6 right-6 top-full mt-3 z-50">
                                    <div className="bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        {/* search bar */}
                                        <div className="flex items-center gap-2 px-3 py-2 border-b">
                                            <SearchIcon className="w-4 h-4 text-gray-500" />
                                            <input
                                                autoFocus
                                                value={toFilter}
                                                onChange={(e) => setToFilter(e.target.value)}
                                                placeholder="Search destinations"
                                                className="w-full text-sm outline-none px-1 py-1"
                                            />
                                        </div>

                                        {/* Empty panel with big icon + helper text */}
                                        <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                                            <SearchIcon className="w-12 h-12 mb-3 text-gray-400" />
                                            <p className="text-sm">Search by city or airport</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SEARCH button on right */}
                        {/* <div className="flex items-center pr-2 sm:pr-4">
                            <button
                                onClick={handleSearch}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 h-14 rounded-full transition"
                            >
                                Search
                            </button>
                        </div> */}
                        {/* SEARCH button on right */}
                        <div className="flex-shrink-0">
                            <button
                                onClick={handleSearch}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold 
               px-6 sm:px-8 h-14 rounded-full ml-2"
                            >
                                Search
                            </button>
                        </div>

                    </div>
                </div>

                {/* Glimpse button */}
                {/* <button className="mt-6 bg-slate-600 bg-opacity-80 text-white px-5 py-2 rounded-full flex items-center gap-3">
                    <span className="w-3 h-3 bg-white rounded-full inline-block" />
                    Glimpse of Kashmir
                </button> */}
            </div>
        </div>
    );
}

