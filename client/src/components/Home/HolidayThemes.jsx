import React from "react";

const themes = [
  // {
  //   iconUrl: "https://images.emtcontent.com/holiday-img/home-img/safari-trails.svg",
  //   title: "Safari Trails",
  // },
  {
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/family-retreat.svg",
    title: "Family Retreat",
  },
  {
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/luxury.svg",
    title: "Luxury",
  },
  // {
  //   iconUrl: "https://images.emtcontent.com/holiday-img/home-img/smart-city.svg",
  //   title: "Weekend",
  // },
  {
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/hn_moon.svg",
    title: "Honeymoon",
  },
  // {
  //   iconUrl: "https://images.emtcontent.com/holiday-img/home-img/pilgrimage.svg",
  //   title: "Piligrimage",
  // },
  {
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/beach.svg",
    title: "Beach",
  },
  {
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/adventure.svg",
    title: "Adventure",
  },
];

const HolidayThemes = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto md:pl-20 md:pr-20">
      <h2 className="text-3xl font-bold mb-2">
        Explore Holidays By Theme
      </h2>
      <p className="text-sm text-gray-600 mb-8">
        Find your perfect getaway, tailored to your interests.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="rounded-full border border-blue-100 bg-blue-50 text-center p-8 w-[180px] h-[180px] flex flex-col items-center justify-center shadow-sm"
          >
            <img
              src={theme.iconUrl}
              alt={theme.title}
              className="w-8 h-8 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{theme.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Explore Now</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HolidayThemes;
