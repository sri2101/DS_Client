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
  const [appliedFilters, setAppliedFilters] = useState({});
  const [miniFilters, setMiniFilters] = useState({
    miniSearchText: "",
    miniSortOption: "popularity"
  });

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

  // Merge all filters together
  const mergedFilters = {
    ...appliedFilters,
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

  const handleApplyFilters = () => {
    setAppliedFilters({ ...tempFilters });
  };

  const handleClearFilters = () => {
    setTempFilters({});
    setAppliedFilters({});
    setMiniFilters({
      miniSearchText: "",
      miniSortOption: "popularity"
    });
    setVisible(3);
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
            onApply={handleApplyFilters}
            onClear={handleClearFilters}
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
