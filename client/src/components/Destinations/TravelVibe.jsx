import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  { id: 1, image: "/FamilyVacation.webp" },
  { id: 2, image: "/HoneyMoon.webp" },
  { id: 3, image: "/HillStation.webp" },
  { id: 4, image: "/BeachHoliday.webp" },
  { id: 5, image: "/Adventure.webp" },
  { id: 6, image: "/TeamTour.webp" },
];

const GAP = 16; 
const CARD_WIDTH = 180; 

export default function TravelVibe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(6);

  // responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3); // tablet
      } else {
        setCardsPerView(6); // desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(destinations.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl p-10 bg-gradient-to-r from-[#dff2ee] via-[#dce4ae] to-[#dfedc3]">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-pink-600 tracking-tight">
              Pick Your Travel Vibe
            </h2>
            <p className="text-md text-black mt-3">
              Whether you’re a thrill-seeker, a laid-back beach lover, a cultural explorer,
              your perfect trip starts here. Browse handpicked experiences tailored to
            </p>
            <p className="text-md text-black mt-1">
              your unique travel personality and let your next adventure unfold effortlessly.
              Because travel isn’t one-size-fits-all — it’s personal.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${
                    currentIndex * (CARD_WIDTH + GAP) * cardsPerView
                  }px)`,
                }}
              >
                {destinations.map((item) => (
                  <div
                    key={item.id}
                    className="w-[180px] h-[210px] mr-4 rounded-2xl overflow-hidden shadow-lg relative flex-shrink-0"
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

              {/* Static dash + dots */}
              <div className="flex items-center space-x-2">
                <span className="w-6 h-1 bg-red-500 rounded-full"></span>
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
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
        </div>
      </div>
    </section>
  );
}
