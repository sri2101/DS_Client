import React from "react";


const favourites = [
  {
    name: "Andaman",
    image: "https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp",
    nights: 3,
    days: 5,
  },
  {
    name: "Thailand",
    image: "https://api.tourismthailand.org/upload/live/destination/4-9026.png",
    nights: 4,
    days: 5,
  },
  {
    name: "Bali",
    image: "https://images.emtcontent.com/holiday-img/home-img/bali.png",
    nights: 5,
    days: 6,
  },
  {
    name: "Kerala",
    image: "https://images.emtcontent.com/holiday-img/home-img/kerala-tymltd.webp",
    nights: 5,
    days: 6,
  },
  {
    name: "North East",
    image: "https://images.emtcontent.com/holiday-img/home-img/north-east.png",
    nights: 3,
    days: 4,
  },
  {
    name: "Malaysia",
    image: "https://images.emtcontent.com/holiday-img/home-img/malaysia.png",
    nights: 3,
    days: 4,
  },
];

const TravellersFavourite = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-1">Traveller's favourite</h2>
        <p className="text-muted-foreground text-sm">
          Travel beyond boundaries with incredible savings
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favourites.map((place) => (
          <div key={place.name} className="rounded-xl overflow-hidden shadow-md">
            <div className="p-0 relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                <p className="text-xl font-semibold">{place.name}</p>
                <p className="text-xs">
                  {place.nights} Nights / {place.days} Days
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravellersFavourite;
