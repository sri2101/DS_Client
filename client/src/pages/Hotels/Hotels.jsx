import React, { useState, useCallback, useMemo, useEffect } from "react";
import Filters from "@/components/Hotels/Filters";
import HotelsList from "@/components/Hotels/HotelsList";
import FAQs from "@/components/Hotels/FAQ's";
import { Button } from "@/components/ui/button";
import HotelSearchBar from "@/components/Hotels/HotelSearchBar";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import MiniSearchAndSortBar from "@/components/Hotels/MiniSearchAndSortBar";
import { useLocation, useSearchParams } from "react-router-dom";
import hotels from "@/components/HotelData/HotelData";

const Hotels = () => {
  const location = useLocation();
  const [urlSearchParams] = useSearchParams();
  const destinationFromUrl = urlSearchParams.get("destination"); // e.g. ?destination=Delhi

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  const [showFilters, setShowFilters] = useState(false);
  const [tempFilters, setTempFilters] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const [miniFilters, setMiniFilters] = useState({
    miniSearchText: "",
    miniSortOption: "popularity"
  });

  const [searchParams, setSearchParams] = useState(() => ({
    location: "",
    date: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
    rooms: 1,
    guests: 2,
  }));

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    if (destinationFromUrl) {
      setSearchParams(prev => ({
        ...prev,
        location: destinationFromUrl,
      }));
    }
  }, [destinationFromUrl]);

  const mergedFilters = useMemo(() => ({
    ...appliedFilters,
    ...miniFilters,
  }), [appliedFilters, miniFilters]);

  const handleMiniFilteredHotels = useCallback(({ text, sort }) => {
    setMiniFilters(prev => {
      const newFilters = {
        miniSearchText: text || "",
        miniSortOption: sort || "popularity",
      };
      if (prev.miniSearchText !== newFilters.miniSearchText ||
        prev.miniSortOption !== newFilters.miniSortOption) {
        return newFilters;
      }
      return prev;
    });
  }, []);

  const handleApplyFilters = useCallback(() => {
    setAppliedFilters({ ...tempFilters });
  }, [tempFilters]);

  const handleClearFilters = useCallback(() => {
    setTempFilters({});
    setAppliedFilters({});
    setMiniFilters({
      miniSearchText: "",
      miniSortOption: "popularity"
    });
    setVisible(3);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="my-6">
        <HotelSearchBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setVisible={setVisible}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 my-6">
        <div className="w-full md:w-auto mt-2 md:mt-0">
          <BreadCrumb segments={breadcrumbs} />
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-end items-center mt-2 md:mt-0">
          <MiniSearchAndSortBar
            onFilteredHotels={handleMiniFilteredHotels}
          />
        </div>
      </div>

      <div className="sm:hidden my-4">
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
        <div className={`${showFilters ? "block" : "hidden"
          } sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}>
          <Filters
            filtersState={tempFilters}
            setFiltersState={setTempFilters}
            onApply={handleApplyFilters}
            onClear={handleClearFilters}
          />
        </div>

        <div className="flex-1 space-y-12">
          <HotelsList
            destination={destinationFromUrl}       // ✅ pass destination
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
