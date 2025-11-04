import React from "react";

const SortAndSearchBar = ({ sortOptions, selectedSort, setSelectedSort, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-between items-center">
      {/* Sort Options */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Sort By:</span>
        {sortOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedSort(opt)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${selectedSort === opt
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}

        />
        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SortAndSearchBar;
