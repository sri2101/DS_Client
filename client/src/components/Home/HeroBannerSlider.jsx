import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const slides = [
    {
        title: "Australia Tour Packages",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/australia-banner-home.webp",
    },
    {
        title: "Rajasthan Tour Packages",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/rajasthan-banner-home.png",
    },
    {
        title: "Europe Tour Packages",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/europe-banner-home.webp",
    },
    {
        title: "Kerala Tour Packages",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/kerala_newbb.png",
    },
    {
        title: "Dubai Tour Packages",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/dubai_newbb.png",
    },
    {
        title: "Jai Hind Sound & Light Show",
        subtitle: "Where Every Experience Counts!",
        image: "https://images.emtcontent.com/holiday-img/home-img/lightsound-banner-home.webp",
    }
];

const categories = [
    { label: "Group Departure", tag: "NEW", img: "https://images.emtcontent.com/holiday-img/home-img/grpdept-holsm.png" },
    { label: "Honeymoon", img: "https://images.emtcontent.com/holiday-img/home-img/honymn_holsm.png" },
    { label: "Pilgrimage", img: "https://images.emtcontent.com/holiday-img/home-img/pilgrimage-holsm.png" },
    { label: "Luxury", img: "https://images.emtcontent.com/holiday-img/home-img/leisure-holsm.png" },
    { label: "Adventure", img: "https://images.emtcontent.com/holiday-img/home-img/advntu-holsm.png" },
];

const HeroBannerSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const { title, subtitle, image } = slides[current];

    return (

        <div
            className="relative w-full h-[260px] sm:h-[312px] bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >

            {/* Title + Subtitle + Search */}
            <div className="relative z-10 h-full flex flex-col items-center justify-start text-white px-4 text-center pt-6 sm:pt-10">
                {/* Title with script font */}
                <h2
                    className="text-4xl font-thin leading-tight py-2"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    {title}
                </h2>

                {/* Subtitle */}
                <p className="text-2xl mt-1 font-bold">{subtitle}</p>

                {/* Search bar */}
                <div className="w-full max-w-xl mt-5 rounded-full overflow-hidden flex shadow-lg bg-white">
                    {/* Icon + input field */}
                    <div className="flex items-center flex-1 px-4">
                        <Search className="text-gray-400 w-5 h-5 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter Your Dream Destination!"
                            className="w-full py-6 sm:py-3 text-gray-700 text-sm sm:text-base outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Right-side search button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-6 font-semibold rounded-full h-full py-4">
                        Search
                    </button>
                </div>
            </div>


            {/* Chips/Category Scrollable Bar */}
            <div
                className="z-20 w-full px-4
             lg:absolute lg:-bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2
             lg:w-auto lg:px-0
             relative mt-6"
            >
                <div
                    className="bg-white py-2 px-4 rounded-full shadow-md border border-blue-300 
               flex items-center gap-4 whitespace-nowrap scroll-smooth no-scrollbar
               overflow-x-auto lg:overflow-x-visible lg:mx-auto w-full lg:w-auto"
                >
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-2 py-1 transition-all duration-300 hover:text-blue-600 cursor-pointer"
                        >
                            <div className="w-9 h-9 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
                                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[14px] font-bold whitespace-nowrap">{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
};

export default HeroBannerSlider;


