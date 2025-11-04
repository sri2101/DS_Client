import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dynamic Data
const features = [
    {
        icon: "🏨",
        title: "Extensive Hotel Options",
        description:
            "Best hotels available for different destinations to offer you the stay of a lifetime.",
    },
    {
        icon: "💳",
        title: "Savings on Hotel Booking",
        description:
            "Enjoy hotel bookings with the best offers and discounts and make your stay unforgettable.",
    },
    {
        icon: "⭐",
        title: "Hotel Ratings",
        description:
            "All our hotels have good ratings on Trip Advisor and are recommended by users.",
    },
    {
        icon: "🏖️",
        title: "Best Price",
        description:
            "Get excellent hotels/resorts at the best prices to pamper your desires.",
    },
];

const reviews = [
    {
        rating: 5,
        title: "The most amazing prices on flights",
        content:
            "The most amazing prices on flight tickets, has been my go-to website for all my India...",
        author: "Ravi",
        date: "September 11",
        verified: true,
    },
    {
        rating: 5,
        title: "Very Good platform for ticket booking",
        content: "Very good platform for ticket booking.",
        author: "Jagadeesh Bhaskar",
        date: "September 10",
        verified: true,
    },
    {
        rating: 5,
        title: "Very nice",
        content: "Very good dealings.",
        author: "KartikChandra Das",
        date: "September 10",
        verified: false,
    },
    {
        rating: 5,
        title: "My query where solved within short time",
        content:
            "My query where solved within very short period. Thank you easemytrip.",
        author: "customer",
        date: "September 8",
        verified: true,
    },
];

const WhyBookHotels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full px-4 py-12">
            <div className="max-w-5xl mx-auto text-left">
                {/* Heading + Trustpilot Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h2 className="text-xl md:text-2xl font-bold">
                        Why Book Hotels with EaseMyTrip.com?
                    </h2>

                    {/* Trustpilot */}
                    <div className="flex justify-center md:justify-end items-center gap-2 text-sm mt-4 md:mt-0">
                        <span className="font-medium">Great</span>
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                            ★★★★★
                        </span>
                        <a
                            href="#"
                            className="text-[#0f7c90] underline hover:text-[#095861]"
                        >
                            14,298 reviews on
                        </a>
                        <span className="font-semibold">Trustpilot</span>
                    </div>
                </div>


                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            className="p-6 border rounded-lg text-center flex flex-col items-center bg-white shadow-sm"
                        >
                            <div className="text-4xl mb-3">{f.icon}</div>
                            <h3 className="font-semibold mb-2">{f.title}</h3>
                            <p className="text-sm text-gray-600">{f.description}</p>
                        </div>
                    ))}
                </div>


                {/* Reviews Carousel */}
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 bg-white border rounded-full p-2 shadow-sm hover:bg-gray-100"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-hidden px-8">
                        {reviews
                            .slice(currentIndex, currentIndex + 3)
                            .map((review, idx) => (
                                <div
                                    key={idx}
                                    className="border rounded-lg p-4 bg-white shadow-sm text-left"
                                >
                                    {/* Stars */}
                                    <div className="flex items-center text-green-600 mb-2">
                                        {"★".repeat(review.rating)}
                                        <span className="ml-2 text-gray-500 text-xs">
                                            {review.verified && "Verified"}
                                        </span>
                                    </div>
                                    {/* Title */}
                                    <h4 className="font-semibold text-sm mb-2 truncate">
                                        {review.title}
                                    </h4>
                                    {/* Content */}
                                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                        {review.content}
                                    </p>
                                    {/* Author */}
                                    <p className="text-xs text-gray-800">
                                        <span className="font-medium">{review.author}</span>,{" "}
                                        {review.date}
                                    </p>
                                </div>
                            ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 bg-white border rounded-full p-2 shadow-sm hover:bg-gray-100"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyBookHotels;
