import React, { useState } from "react";

const Filters = ({ filtersState, setFiltersState, onApply, onClear }) => {
  const [sectionToggles, setSectionToggles] = useState({});

  const toggleSection = (key) => {
    setSectionToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtersData = [
    {
      type: "section",
      title: "Show Properties with",
      key: "showPropertiesWith",
      options: ["Book with ₹0", "Free Breakfast", "Free Parking", "Free Cancellation"],
    },
    {
      type: "range",
      title: "Price Range",
      key: "price",
      min: 500,
      max: 5000,
    },
    // {
    //   type: "select",
    //   title: "Star Rating",
    //   key: "starRating",
    //   options: ["Any", "5 Star", "4 Star", "3 Star", "Budget", "Unrated"],
    // },
    // {
    //   type: "select",
    //   title: "User Review Rating",
    //   key: "userReviewRating",
    //   options: [
    //     "Any",
    //     "4.5 & above (Excellent)",
    //     "4 & above (Very Good)",
    //     "3 & above (Good)",
    //   ],
    // },
    // {
    //   type: "section",
    //   title: "Area Attraction",
    //   key: "areaAttraction",
    //   options: [
    //     "Humayuns Tomb", "saftarjungs Tomb", "Red Fort", "India gate",
    //     "National Museum", "Delhi National Railway Museum", "jantar Mantar",
    //     "Qutub Minar", "Raj Ghat", "Lotus temple", "Pitampura TV Tower"
    //   ],
    // },
    {
      type: "section",
      title: "Amenities",
      key: "amenities",
      options: [
        "Free Cancellation", "24 Hour Front Desk", "AC", "Bar", "Wi-Fi",
        "Breakfast", "Laundry", "Gym", "Restaurant", "Spa", "Room Service"
      ],
    },
    {
      type: "sectionWithCount",
      title: "Property Type",
      key: "propertyType",
      options: [
        ["Hotel", 3451], ["House", 42], ["Inn", 148], ["Motel", 2],
        ["Palace", 63], ["Villas", 47], ["Farm Stay", 15], ["Hostel", 89]
      ],
    },
    {
      type: "select",
      title: "Sort By",
      key: "sortBy",
      options: ["Relevance", "Price: Low to High", "Price: High to Low"],
    },
  ];

  return (
    <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0 sticky top-4 h-fit">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {filtersData.map((filter) => {
        const { type, title, key, options, min, max } = filter;
        const show = sectionToggles[key] ?? true;

        if (type === "range") {
          return (

            <div key={key} className="mb-4">
              <label className="block font-medium mb-1">{title}</label>
              <input
                type="range"
                min={min}
                max={max}
                value={filtersState[key] ?? max}
                className="w-full"
                onChange={(e) =>
                  setFiltersState((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹{min}</span>
                <span>₹{filtersState[key] ?? max}</span>
              </div>
            </div>


          );
        }

        if (type === "select") {
          return (
            <div key={key} className="mb-4">
              <label className="block font-medium mb-1">{title}</label>
              <select
                className="w-full border rounded-md p-2 text-sm"
                value={filtersState[key] || ""}
                onChange={(e) =>
                  setFiltersState((prev) => ({ ...prev, [key]: e.target.value }))
                }
              >
                {options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        if (type === "section" || type === "sectionWithCount") {
          return (
            <div key={key} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
                onClick={() => toggleSection(key)}
              >
                <h3 className="block font-medium">{title}</h3>
                <span className="text-lg font-semibold">{show ? "−" : "+"}</span>
              </div>

              {show && (
                <div className="max-h-36 overflow-y-auto pr-1">
                  <ul className="space-y-2 text-sm">
                    {options.map((item, i) => {
                      const label = type === "sectionWithCount" ? item[0] : item;
                      const count = type === "sectionWithCount" ? item[1] : null;
                      const checked = filtersState[key]?.includes(label) || false;

                      return (
                        <li key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`${key}-${i}`}
                              className="accent-orange-500 w-4 h-4 rounded"
                              checked={checked}
                              onChange={(e) => {
                                setFiltersState((prev) => {
                                  const prevArr = prev[key] || [];
                                  return {
                                    ...prev,
                                    [key]: e.target.checked
                                      ? [...prevArr, label]
                                      : prevArr.filter((val) => val !== label),
                                  };
                                });
                              }}
                            />
                            <label htmlFor={`${key}-${i}`} className="cursor-pointer">
                              {label}
                            </label>
                          </div>
                          {count !== null && (
                            <span className="text-gray-400 font-medium">[{count}]</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        }

        return null;
      })}

      <div className="flex gap-2 mt-4">
        <button
          className="bg-orange-500 text-white flex-1 py-2 rounded-md text-sm font-semibold"
          onClick={onApply}
        >
          Apply Filters
        </button>
        <button
          className="bg-gray-200 text-gray-800 flex-1 py-2 rounded-md text-sm font-semibold"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default Filters;
