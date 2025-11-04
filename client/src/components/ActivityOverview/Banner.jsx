import React, { useEffect, useState } from "react";
import { Search, Calendar, MapPin } from "lucide-react"; 

const slides = [
    { image: "https://images.emtcontent.com/activities-img/banrhome.jpg" },
    { image: "https://images.emtcontent.com/activities-img/activities-bnr-nw.png" },
    { image: "https://images.emtcontent.com/activities-img/banner5.webp" },
    { image: "https://images.emtcontent.com/activities-img/banner3.webp" },
    { image: "https://images.emtcontent.com/activities-img/banner4.webp" },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const { image } = slides[current];

    return (
        <div
            className="relative w-full h-[380px] sm:h-[400px] bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black/40 z-0" />


            <div className="relative z-10 h-full flex flex-col items-center justify-start text-white px-4 text-center pt-6 sm:pt-10">

                <h2
                    className="text-5xl font-thin leading-tight py-5"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    Unleash the Joy with Thrilling Activities
                </h2>

                <p className="text-xl mt-1 font-medium">
                    Discover over-the-top exhilarating and adrenaline-rushing activities
                </p>
                <p className="text-xl mt-1 font-medium">
                    around the world with our exclusive activities packages
                </p>

                <div className="w-full max-w-2xl mt-5 rounded-full overflow-hidden flex bg-white shadow-lg pr-2">

                    <div className="flex items-center flex-1 px-4 py-2 border-r border-gray-300 min-w-0">
                        <div className="flex items-center space-x-2 w-full">
                            <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                            <div className="text-left w-full">
                                <p className="text-sm font-semibold text-black">Where?</p>
                                <input
                                    type="text"
                                    placeholder="Search for a location or activity"
                                    className="w-full text-sm text-gray-500 focus:outline-none placeholder:text-gray-500 truncate"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center flex-1 px-4 py-2 min-w-0">
                        <div className="flex items-center space-x-2 w-full">
                            <Calendar className="w-5 h-5 text-gray-500 shrink-0" />
                            <div className="text-left w-full">
                                <p className="text-sm font-semibold text-black">When?</p>
                                <input
                                    type="text"
                                    placeholder="Select your preferred date"
                                    className="w-full text-sm text-gray-500 focus:outline-none placeholder:text-gray-500 truncate"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 w-12 h-12 m-2 rounded-full flex items-center justify-center text-white">
                        <Search className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;