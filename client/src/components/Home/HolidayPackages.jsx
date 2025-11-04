import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const handpickedPackages = {
  Domestic: [
    {
      title: "Himachal",
      days: 3,
      nights: 2,
      price: "₹9,999",
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/himachal-handpckd.webp",
    },
    {
      title: "South India",
      days: 3,
      nights: 4,
      price: "₹9,999",
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/south-india-handpckd.webp",
    },
    {
      title: "North East",
      price: "₹ 17,999",
      days: 3,
      nights: 3,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/north-east-handpckd.webp",
    },
    {
      title: "Goa",
      price: "₹ 8,000",
      days: 3,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/goa-handpckd.webp",
    },
    {
      title: "Kerala",
      price: "₹ 11,999",
      days: 3,
      nights: 4,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/kerala-handpckd.webp",
    },
    {
      title: "Andaman",
      price: "₹ 14,999",
      days: 2,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp",
    },
    {
      title: "Gujarat",
      price: "₹ 14,999",
      days: 3,
      nights: 4,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/gujarat-handpckd.webp",
    },
    {
      title: "Rajasthan",
      price: "₹ 6,199",
      days: 3,
      nights: 1,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/rajesthan-handpckd.webp",
    },
  ],
  International: [
    {
      title: "Bali",
      price: "₹39,999",
      days: 3,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/bali-handpckd.webp",
    },
    {
      title: "Dubai",
      price: "₹44,000",
      days: 2,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/dubai-handpckd.webp",
    },
    {
      title: "Thailand",
      price: "₹29,500",
      days: 4,
      nights: 3,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/thailand-handpckd.webp",
    },
    {
      title: "Singapore",
      price: "₹35,999",
      days: 3,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/singapore-seasnl.webp",
    },
    {
      title: "Malaysia",
      price: "₹32,500",
      days: 3,
      nights: 3,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
    },
    {
      title: "Mauritius",
      price: "₹77,990",
      days: 2,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/Mauritius.png",
    },
    {
      title: "NewZealand",
      price: "₹55,990",
      days: 3,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/new-zealand.png",
    },
    {
      title: "Saudi Arabia",
      price: "₹25,999",
      days: 1,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/saudi-arabia.png",
    },
    {
      title: "Vietnam",
      price: "₹14,499",
      days: 4,
      nights: 2,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/vietnam-handpckd.webp",
    },
    {
      title: "Europe",
      price: "₹88,990",
      days: 3,
      nights: 3,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/europe-handpckd.webp",
    },
    {
      title: "Australia",
      price: "₹41,990",
      days: 3,
      nights: 4,
      rating: 4.5,
      image: "https://images.emtcontent.com/holiday-img/home-img/australia-handpckd.webp",
    },
  ],
};
const HolidayPackages = () => {
  const [api, setApi] = useState(null);
  const [activeTab, setActiveTab] = useState("Domestic");


  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="pop_dstn mt-24 pl-6 pr-6 md:pl-50 md:pr-50">
      <div className="containernew">
        <h2 className="custom_heading font-bold text-3xl mb-2">
          <span className="text-black">Handpicked</span> Holiday Packages
        </h2>
        <div className="text text-gray-600 mb-6">
          Indulge in unforgettable adventure with special tour plans.
        </div>

        {/* Tabs */}
        <div className="tab_nav flex items-center mt-8">
          <div className="flex gap-3">
            {["Domestic", "International"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg border transition-all duration-200 font-medium ${activeTab === tab
                  ? "bg-white-500 text-blue-500 border-blue-500"
                  : "bg-white text-gray-500 border-gray-300 hover:border-gray-400"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {handpickedPackages[activeTab].map((item, i) => (
                // <CarouselItem key={`${activeTab}-${i}`} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                //   <div className="bg-white border rounded-xl shadow overflow-hidden relative">
                //     <img
                //       src={item.image}
                //       alt={item.title}
                //       className="h-48 w-full object-cover"
                //     />
                //     <div className="absolute bottom-4 left-4 right-4">
                //       <div className=" rounded-lg p-3 shadow-lg">
                //         <div className="flex items-center justify-between mb-2">
                //           <h3 className="font-semibold text-lg text-stone-100">
                //             {item.title}
                //           </h3>
                //         </div>
                //         <div className="flex items-center justify-between">
                //           <p className="text-sm text-stone-100">
                //             From <span className="font-semibold text-slate-100">{item.price}</span>
                //           </p>
                //           <button className="text-zinc-100 font-semibold hover:text-blue-600 text-sm transition-colors duration-200">
                //             Explore →
                //           </button>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </CarouselItem>
                <CarouselItem key={`${activeTab}-${i}`} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover brightness-55"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-3">
                      <p className="text-white text-xs mb-1">
                        {item.days} Days {item.nights} Night
                      </p>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-white text-xs">
                        <p className="font-medium">{item.price}/person</p>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default HolidayPackages;

