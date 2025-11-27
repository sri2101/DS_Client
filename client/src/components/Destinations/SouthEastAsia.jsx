import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  { id: 1, image: "/Thailand.webp" },
  { id: 2, image: "/Bali.webp" },
  { id: 3, image: "/Vietnam.webp" },
  { id: 4, image: "/Singapore.webp" },
  { id: 5, image: "/Srilanka.webp" },
  { id: 6, image: "/Malaysia.webp" },
];

export default function SouthEastAsia() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move one card at a time
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 < destinations.length ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="py-14 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Explore South East Asia
        </h2>
        <p className="text-md text-gray-600 mt-3">
          One Region Countless Wonders- Beaches, temples and Countless Culture
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 276}px)`,
            }}
          >
            {destinations.map((item) => (
              <div
                key={item.id}  // <-- FIXED: unique key
                className="w-[260px] h-[207px] mr-4 rounded-xl overflow-hidden shadow-lg relative flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={`Destination ${item.id}`}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-5 space-x-3">
          
          {/* Prev Button */}
          <Button
            onClick={prevSlide}
            size="icon"
            variant="outline"
            className="rounded-full w-10 h-10 bg-slate-800 text-white hover:bg-slate-700 border-0"
          >
            <ChevronLeft className="w-3 h-3" />
          </Button>

          {/* Dash + Dots */}
          <div className="flex items-center space-x-2">

            {/* Red dash */}
            <span className="w-6 h-1 bg-red-500 rounded-full"></span>

            {/* Fixed red dots */}
            {Array.from({ length: 3 }).map((_, idx) => (
              <span
                key={idx}  // <-- Already correct
                className="h-2 w-2 rounded-full bg-red-500"
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            onClick={nextSlide}
            size="icon"
            variant="outline"
            className="rounded-full w-10 h-10 bg-slate-800 text-white hover:bg-slate-700 border-0"
          >
            <ChevronRight className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
