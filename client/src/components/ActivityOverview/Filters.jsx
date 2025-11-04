import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";

const Filters = ({ filters, onFilterChange }) => {
  const [price, setPrice] = useState([filters.price.min, filters.price.max]);
  const [duration, setDuration] = useState([]);
  const [rating, setRating] = useState(null);
  const [specials, setSpecials] = useState([]);
  const [showMoreSpecials, setShowMoreSpecials] = useState(false);

  useEffect(() => {
    onFilterChange({
      price,
      duration,
      rating,
      specials,
    });
  }, [price, duration, rating, specials]);


  const handleReset = () => {
    setPrice([filters.price.min, filters.price.max]);
    setDuration([]);
    setRating(null);
    setSpecials([]);
  };

  const toggleDuration = (value) => {
    setDuration((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
    );
  };

  const toggleSpecial = (value) => {
    setSpecials((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };


  return (
    <aside className="space-y-6 w-[260px]">

      <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button
          className="text-blue-500 text-sm"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold">Price</p>
        </div>
        <Slider
          min={filters.price.min}
          max={filters.price.max}
          value={price}
          step={100}
          onValueChange={setPrice}
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>₹{price[0].toLocaleString()}</span>
          <span>₹{price[1].toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">Duration</p>
        {filters.duration.map((d, i) => {
          const id = `duration-${i}`;
          return (
            <div key={id} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <input
                id={id}
                type="checkbox"
                checked={duration.includes(d)}
                onChange={() => toggleDuration(d)}
                className="form-checkbox text-blue-600 border-blue-400 rounded"
              />
              <label htmlFor={id}>{d}</label>
            </div>
          );
        })}
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">User Rating</p>
        {filters.rating.map((r, i) => {
          const stars = parseInt(r);
          const id = `rating-${i}`;
          return (
            <div key={id} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <input
                id={id}
                type="radio"
                name="rating"
                checked={rating === r}
                onChange={() => setRating(r)}
                className="form-radio text-blue-600 border-blue-400"
              />
              <label htmlFor={id} className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${idx < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    fill={idx < stars ? "#facc15" : "none"}
                  />
                ))}
                <span>({r})</span>
              </label>
            </div>
          );
        })}
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">Specials</p>
        {(showMoreSpecials ? filters.specials : filters.specials.slice(0, 4)).map((s, i) => {
          const id = `special-${i}`;
          return (
            <div key={id} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
              <input
                id={id}
                type="checkbox"
                checked={specials.includes(s)}
                onChange={() => toggleSpecial(s)}
                className="form-checkbox text-blue-600 border-blue-400 rounded"
              />
              <label htmlFor={id}>{s}</label>
            </div>
          );
        })}
        {filters.specials.length > 4 && (
          <button
            className="text-blue-500 text-xs mt-1"
            onClick={() => setShowMoreSpecials(prev => !prev)}
          >
            {showMoreSpecials ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Filters;

