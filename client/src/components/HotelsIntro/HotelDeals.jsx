import React, { useState } from "react";

const hotelDeal = {
  title: "Cheapest Deals on Budget & Luxury Hotels are Available at EaseMyTrip",
  shortDescription: `Due to the huge influx of tourists in India, EaseMyTrip offers a wide range of luxury, deluxe 
  and budget hotels to them. Choose to stay in luxury and comfort with the greatest discounts available on hotel bookings. 
  We list the classiest budget hotels on our site along with some of the prominent international hotel chains of India 
  including Oberoi Group, ITC Group, Taj Group, Le Meridian Group and many others. Ranging from class hotels to luxury 
  beach resorts, each hotel on our site gives you a memorable staying experience. Along with deluxe, budget and luxury hotels, 
  EaseMyTrip also displays a number of heritage hotels that offer you a royal stay. Enjoy cheap hotel deals for any destination 
  with great savings.`,
  fullDescription: `Find Best Luxurious and Wallet-Friendly Hotels with EaseMyTrip
As one of the leading online hotel booking platforms across India we offer an exclusive selection of top hotels that are situated near you. 
The partnerships which we forged with prominent hotel chains allow us to show an impressive array of lodging suites, resorts, villas, motels and palaces. 
From these properties, you can select any accommodation that suits you the most and is nearby your destination. So, whether it's a normal vacation or a business trip, 
we enable guests like you to select luxury hotels that exceed expectations seamlessly and provide you with an amazing opportunity to unwind in serenity.

At EaseMyTrip, we take immense pride in providing premium services, including 24/7 customer support, dedicated assistance, a wide selection of top hotels, 
personalised experiences and exclusive deals. We understand that everyone desires to have unforgettable stays at affordable prices. 
That’s why we offer every traveller with the best offers and discounts on hotels. So, if you’re all set to begin your luxurious journey or still searching 
for the best hotels near me then why wait? Book budget hotels online with EaseMyTrip and get ready to feel enchanted by our stunning properties.`,
  image: "https://images.emtcontent.com/hotel-img/luxuary-hotel4.webp",
};

const HotelDeals = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-5xl mx-auto bg-[#f9fbff] rounded-xl shadow-sm p-6 md:p-10">
        {/* Top row with text + image */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg md:text-2xl font-bold text-black mb-3">
              {hotelDeal.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 whitespace-normal">
              {hotelDeal.shortDescription}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-5 py-2 text-sm md:text-base bg-white border border-[#4a90e2] text-[#4a90e2] rounded-full shadow-sm hover:bg-[#4a90e2] hover:text-white transition"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              src={hotelDeal.image}
              alt="Hotel Deals"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Extra Content appears BELOW image */}
        {expanded && (
          <div className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed whitespace-normal">
            {hotelDeal.fullDescription}
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelDeals;
