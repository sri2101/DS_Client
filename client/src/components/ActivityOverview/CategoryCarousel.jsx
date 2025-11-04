import React, { useRef } from "react";

const CategoryCarousel = ({ categories, selectedCategory, setSelectedCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-4 mb-6">

      <button
        onClick={() => scroll("left")}
        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex-1 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const isSelected = cat.label === selectedCategory;
            return (
              <div
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className="flex flex-col items-center min-w-max cursor-pointer group"
              >
                <div className="relative mb-2">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm">
                    <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                  </div>
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <span
                  className={`text-xs text-center leading-tight max-w-20 ${
                    isSelected ? "text-blue-600 font-medium" : "text-gray-700"
                  }`}
                >
                  {cat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => scroll("right")}
        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center flex-shrink-0"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CategoryCarousel;
