// import React, { useState, useEffect } from "react";
// import Filters from "@/components/Hotels/Filters";
// import HotelsList from "@/components/Hotels/HotelsList";
// import FAQs from "@/components/Hotels/FAQ's";
// import { Button } from "@/components/ui/button";
// import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

// const Hotels = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [tempFilters, setTempFilters] = useState({});
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [filtersState, setFiltersState] = useState({});
//   const [visible, setVisible] = useState(3);
//   const [sortOption, setSortOption] = useState("popularity");

//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     date: {
//       from: new Date(),
//       to: new Date(new Date().setDate(new Date().getDate() + 1)),
//     },
//     rooms: 1,
//     guests: 2,
//   });

//   useEffect(() => {
//     console.log("🔍 Search Params Received in Hotels.jsx:", searchParams);
//   }, [searchParams]);

//   return (
//     <div className="max-w-xl mx-auto px-4">

//       {/* Top Bar: Search + Sort */}
//       <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 my-6">
//         <HotelSearchBar
//           searchParams={searchParams}
//           setSearchParams={setSearchParams}
//           filtersState={filtersState}
//           setFiltersState={setFiltersState}
//           setVisible={setVisible}
//         />

//         {/* Breadcrumb */}
//         <div className="mt-6">
//           <BreadCrumb
//             segments={[
//               { label: "Home", path: "/" },
//               { label: "Hotels", path: "/hotels" },
//               { label: searchParams.location ? `Hotels in ${searchParams.location}` : "Search", path: "" },
//             ]}
//           />
//         </div>

//         {/* Sort Dropdown */}
//         <div className="relative w-48">
//           <select
//             className="w-full border border-gray-300 rounded-md p-2 text-sm"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="popularity">Popularity</option>
//             <option value="priceLowToHigh">Price: Low to High</option>
//             <option value="priceHighToLow">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Mobile Filters Button */}
//       <div className="sm:hidden my-4">
//         <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
//         <div
//           className={`${showFilters ? "block" : "hidden"
//             } sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}
//         >
//           <Filters
//             filtersState={tempFilters}
//             setFiltersState={setTempFilters}
//             onApply={() => setAppliedFilters(tempFilters)}
//             onClear={() => {
//               setTempFilters({});
//               setAppliedFilters({});
//             }}
//           />
//         </div>

//         <div className="flex-1 space-y-12">
//           <HotelsList
//             filtersState={appliedFilters}
//             searchParams={searchParams}
//             visible={visible}
//             setVisible={setVisible}
//             sortOption={sortOption} // pass sort option to HotelsList
//           />
//         </div>
//       </div>

//       <div className="mt-12 max-w-4xl mx-auto">
//         <FAQs />
//       </div>
//     </div>
//   );
// };

// export default Hotels;







// import React, { useState, useEffect } from "react";
// import Filters from "@/components/Hotels/Filters";
// import HotelsList from "@/components/Hotels/HotelsList";
// import FAQs from "@/components/Hotels/FAQ's";
// import { Button } from "@/components/ui/button";
// import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
// import MiniSearchAndSortBar from "@/components/Hotels/MiniSearchAndSortBar";


// const Hotels = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [tempFilters, setTempFilters] = useState({});
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [filtersState, setFiltersState] = useState({});
//   const [visible, setVisible] = useState(3);
//   const [sortOption, setSortOption] = useState("popularity");
//   const [searchText, setSearchText] = useState("");

//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     date: {
//       from: new Date(),
//       to: new Date(new Date().setDate(new Date().getDate() + 1)),
//     },
//     rooms: 1,
//     guests: 2,
//   });

//   useEffect(() => {
//     console.log("🔍 Search Params Received in Hotels.jsx:", searchParams);
//   }, [searchParams]);

//   // Called by MiniSearchAndSortBar after searchText or sortOption change
//   const handleMiniFilteredHotels = ({ text, sort }) => {
//     setAppliedFilters((prev) => ({
//       ...prev,
//       miniSearchText: text || "",
//       miniSortOption: sort || "popularity",
//     }));
//   };



//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="my-6">
//         <HotelSearchBar searchParams={searchParams} setSearchParams={setSearchParams} filtersState={filtersState}
//           setFiltersState={setFiltersState} setVisible={setVisible} />
//       </div>
//       {/* Top Row: Breadcrumb on Left, Search + Sort on Right */}
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 my-6">
//         {/* Breadcrumb - Left */}
//         <div className="w-full md:w-auto mt-2 md:mt-0">
//           <BreadCrumb
//             segments={[
//               { label: "Home", path: "/" },
//               { label: "Hotels", path: "/hotels" },
//               {
//                 label: searchParams.location
//                   ? `Hotels in ${searchParams.location}`
//                   : "Search",
//                 path: "",
//               },
//             ]}
//           />
//         </div>

//         {/* Right Section: Search + Sort */}
//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-end items-center mt-2 md:mt-0">
//           <MiniSearchAndSortBar
//             searchText={searchText}
//             setSearchText={setSearchText}
//             sortOption={sortOption}
//             setSortOption={setSortOption}
//             onFilteredHotels={handleMiniFilteredHotels}
//           />
//         </div>

//       </div>


//       <div className="sm:hidden my-4">
//         <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
//         <div className={`${showFilters ? "block" : "hidden"} sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}>
//           <Filters
//             filtersState={tempFilters}
//             setFiltersState={setTempFilters}
//             onApply={() => setAppliedFilters(tempFilters)}
//             onClear={() => {
//               setTempFilters({});
//               setAppliedFilters({});
//             }}
//           />
//         </div>

//         <div className="flex-1 space-y-12">
//           <HotelsList filtersState={appliedFilters} searchParams={searchParams} visible={visible}
//             setVisible={setVisible} />
//         </div>
//       </div>

//       <div className="mt-12 max-w-4xl mx-auto">
//         <FAQs />
//       </div>
//     </div>
//   );
// };

// export default Hotels;


// import React, { useState, useEffect } from "react";
// import Filters from "@/components/Hotels/Filters";
// import HotelsList from "@/components/Hotels/HotelsList";
// import FAQs from "@/components/Hotels/FAQ's";
// import { Button } from "@/components/ui/button";
// import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
// import MiniSearchAndSortBar from "@/components/Hotels/MiniSearchAndSortBar";

// const Hotels = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [tempFilters, setTempFilters] = useState({});
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [filtersState, setFiltersState] = useState({});
//   const [visible, setVisible] = useState(3);

//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     date: {
//       from: new Date(),
//       to: new Date(new Date().setDate(new Date().getDate() + 1)),
//     },
//     rooms: 1,
//     guests: 2,
//   });

//   const handleMiniFilteredHotels = ({ text, sort }) => {
//     setAppliedFilters((prev) => ({
//       ...prev,
//       miniSearchText: text || "",
//       miniSortOption: sort || "popularity",
//     }));
//   };

//   useEffect(() => {
//     console.log("🔍 Search Params Received in Hotels.jsx:", searchParams);
//   }, [searchParams]);

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="my-6">
//         <HotelSearchBar
//           searchParams={searchParams}
//           setSearchParams={setSearchParams}
//           filtersState={filtersState}
//           setFiltersState={setFiltersState}
//           setVisible={setVisible}
//         />
//       </div>

//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 my-6">
//         <div className="w-full md:w-auto mt-2 md:mt-0">
//           <BreadCrumb
//             segments={[
//               { label: "Home", path: "/" },
//               { label: "Hotels", path: "/hotels" },
              
//             ]}
//           />
//         </div>

//         <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-end items-center mt-2 md:mt-0">
//           <MiniSearchAndSortBar onSearchChange={handleMiniFilteredHotels} />
//         </div>
//       </div>

//       <div className="sm:hidden my-4">
//         <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
//         <div
//           className={`${
//             showFilters ? "block" : "hidden"
//           } sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}
//         >
//           <Filters
//             filtersState={tempFilters}
//             setFiltersState={setTempFilters}
//             onApply={() => setAppliedFilters((prev) => ({ ...prev, ...tempFilters }))}
//             onClear={() => {
//               setTempFilters({});
//               setAppliedFilters({});
//             }}
//           />
//         </div>

//         <div className="flex-1 space-y-12">
//           <HotelsList
//             filtersState={appliedFilters}
//             searchParams={searchParams}
//             visible={visible}
//             setVisible={setVisible}
//           />
//         </div>
//       </div>

//       <div className="mt-12 max-w-4xl mx-auto">
//         <FAQs />
//       </div>
//     </div>
//   );
// };

// export default Hotels;


// import React, { useState, useEffect } from "react";
// import Filters from "@/components/Hotels/Filters";
// import HotelsList from "@/components/Hotels/HotelsList";
// import FAQs from "@/components/Hotels/FAQ's";
// import { Button } from "@/components/ui/button";
// import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
// import MiniSearchAndSortBar from "@/components/Hotels/MiniSearchAndSortBar";

// const Hotels = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [tempFilters, setTempFilters] = useState({});
//   const [appliedFilters, setAppliedFilters] = useState({});
//   const [visible, setVisible] = useState(3);

//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     date: {
//       from: new Date(),
//       to: new Date(new Date().setDate(new Date().getDate() + 1)),
//     },
//     rooms: 1,
//     guests: 2,
//   });

//   // MiniSearchBar handler
//   const handleMiniFilteredHotels = ({ text, sort }) => {
//     setAppliedFilters((prev) => ({
//       ...prev,
//       miniSearchText: text || "",
//       miniSortOption: sort || "popularity",
//     }));
//   };

//   useEffect(() => {
//     console.log("🔍 Search Params:", searchParams);
//     console.log("🎛️ Applied Filters:", appliedFilters);
//   }, [searchParams, appliedFilters]);

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="my-6">
//         <HotelSearchBar
//           searchParams={searchParams}
//           setSearchParams={setSearchParams}
//           filtersState={appliedFilters}
//           setFiltersState={setAppliedFilters}
//           setVisible={setVisible}
//         />
//       </div>

//       {/* Breadcrumb + MiniSort */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-6">
//         <div className="w-full md:w-auto">
//           <BreadCrumb
//             segments={[
//               { label: "Home", path: "/" },
//               { label: "Hotels", path: "/hotels" },
              
//             ]}
//           />
//         </div>

//         <div className="w-full md:w-auto">
//           <MiniSearchAndSortBar onSearchChange={handleMiniFilteredHotels} />
//         </div>
//       </div>

//       {/* Filters + List */}
//       <div className="sm:hidden my-4">
//         <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
//         <div className={`${showFilters ? "block" : "hidden"} sm:block sm:w-1/3 md:w-1/4 min-w-[250px]`}>
//           <Filters
//             filtersState={tempFilters}
//             setFiltersState={setTempFilters}
//             onApply={() => setAppliedFilters((prev) => ({ ...prev, ...tempFilters }))}
//             onClear={() => {
//               setTempFilters({});
//               setAppliedFilters({});
//             }}
//           />
//         </div>

//         <div className="flex-1 space-y-12">
//           <HotelsList
//             filtersState={appliedFilters}
//             searchParams={searchParams}
//             visible={visible}
//             setVisible={setVisible}
//           />
//         </div>
//       </div>

//       <div className="mt-12 max-w-4xl mx-auto">
//         <FAQs />
//       </div>
//     </div>
//   );
// };

// export default Hotels;




import React, { useState, useEffect } from "react";
import Filters from "@/components/Hotels/Filters";
import HotelsList from "@/components/Hotels/HotelsList";
import FAQs from "@/components/Hotels/FAQ's";
import { Button } from "@/components/ui/button";
import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import MiniSearchAndSortBar from "@/components/Hotels/MiniSearchAndSortBar";

const Hotels = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const [miniFilters, setMiniFilters] = useState({});

  const [searchParams, setSearchParams] = useState({
    location: "",
    date: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    rooms: 1,
    guests: 2,
  });

  const [visible, setVisible] = useState(3);

  const mergedFilters = {
    ...tempFilters,
    ...miniFilters,
  };

  // For debugging
  useEffect(() => {
    console.log("📌 Applied Filters:", mergedFilters);
    console.log("📌 Search Params:", searchParams);
  }, [mergedFilters, searchParams]);

  const handleMiniFilteredHotels = ({ text, sort }) => {
    setMiniFilters({
      miniSearchText: text || "",
      miniSortOption: sort || "popularity",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="my-6">
        <HotelSearchBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setVisible={setVisible}
        />
      </div>

      {/* Top: Breadcrumb + MiniSearch */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 my-6">
        <div className="w-full md:w-auto mt-2 md:mt-0">
          <BreadCrumb
            segments={[
              { label: "Home", path: "/" },
              { label: "Hotels", path: "/hotels" },
              {
                label: searchParams.location
                  ? `Hotels in ${searchParams.location}`
                  : "Search",
                path: "",
              },
            ]}
          />
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-end items-center mt-2 md:mt-0">
          <MiniSearchAndSortBar
            onFilteredHotels={handleMiniFilteredHotels}
          />
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="sm:hidden my-4">
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {/* Filters + Hotel List */}
      <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}
        >
          <Filters
            filtersState={tempFilters}
            setFiltersState={setTempFilters}
            onApply={() => setTempFilters({ ...tempFilters })}
            onClear={() => {
              setTempFilters({});
              setMiniFilters({});
            }}
          />
        </div>

        <div className="flex-1 space-y-12">
          <HotelsList
            filtersState={mergedFilters}
            searchParams={searchParams}
            visible={visible}
            setVisible={setVisible}
          />
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <FAQs />
      </div>
    </div>
  );
};

export default Hotels;




