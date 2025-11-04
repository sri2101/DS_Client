import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: 'Russia Holiday Package',
    subtitle: 'Radiant',
    price: '1,54,999',
    image: 'https://images.emtcontent.com/holiday-img/home-img/russia-slider.webp',
  },
  {
    title: 'Beautiful places of Egypt',
    subtitle: 'Discover',
    price: '38,559',
    image: 'https://images.emtcontent.com/holiday-img/home-img/egypt-bnnr.webp',
  },
  {
    title: 'Cambodia Holiday Package',
    subtitle: 'enchanting',
    price: '32,890',
    image: 'https://images.emtcontent.com/holiday-img/home-img/gems_cambodia.webp',
  },
  {
    title: 'Jordan is an Arab Destination',
    subtitle: 'Amazing Destination',
    price: '51,990',
    image: 'https://images.emtcontent.com/holiday-img/home-img/jordan-bnnr.webp',
  },
  {
    title: 'Georgia Holiday Package',
    subtitle: 'Unveiled',
    price: '31,990',
    image: 'https://images.emtcontent.com/holiday-img/home-img/georgia-slider.webp',
  },
  {
    title: 'Serbia Holiday Package',
    subtitle: 'Spectacular',
    price: '1,32,990',
    image: 'https://images.emtcontent.com/holiday-img/home-img/serbia-slider.webp',
  }

];

const HiddenGems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % slides.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h2 className="text-3xl md:text-3xl font-bold">Explore The Hidden Gems</h2>
        <p className="text-muted-foreground text-lg mt-2">
          Tap into the untapped tourist spots for amazing vacations.
        </p>
      </div>

      <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
              <span className="text-xl font-light">{slide.subtitle}</span>
              <h3 className="text-3xl md:text-4xl font-bold">{slide.title}</h3>
              <p className="mt-2 text-lg">
                Starting From <span className="font-semibold">{slide.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-3 rounded-full transition-all bg-gray-300",
              index === currentIndex ? "w-6 bg-primary" : "w-3"
            )}
          ></button>
        ))}
      </div>
    </section>
  );
}
export default HiddenGems;

