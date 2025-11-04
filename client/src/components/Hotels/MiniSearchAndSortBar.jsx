import React, { useState, useCallback } from "react";

const MiniSearchAndSortBar = ({ onFilteredHotels }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("popularity");

  const handleSearchChange = useCallback((e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    if (onFilteredHotels) {
      onFilteredHotels({ text: newSearchText, sort: sortOption });
    }
  }, [sortOption, onFilteredHotels]);

  const handleSortChange = useCallback((e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    if (onFilteredHotels) {
      onFilteredHotels({ text: searchText, sort: newSortOption });
    }
  }, [searchText, onFilteredHotels]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
      <input
        type="text"
        placeholder="Search by hotel or location"
        value={searchText}
        onChange={handleSearchChange}
        className="border px-3 py-1 rounded-md w-full sm:w-[200px]"
      />

      <select
        value={sortOption}
        onChange={handleSortChange}
        className="border px-3 py-1 rounded-md"
      >
        <option value="popularity">Popularity</option>
        <option value="priceLowToHigh">Price (Low to High)</option>
        <option value="priceHighToLow">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default MiniSearchAndSortBar;










