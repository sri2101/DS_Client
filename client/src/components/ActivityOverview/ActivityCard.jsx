import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Clock, CheckCircle } from "lucide-react";

const ActivityCard = ({ activity }) => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        localStorage.setItem("selectedActivity", JSON.stringify(activity));
        const citySlug = activity.city.toLowerCase().replace(/\s+/g, "-");
        navigate(`/activities/${citySlug}/${activity.slug}`);
    };
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">

            <div className="md:w-80 p-4">
                <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-53 object-cover rounded-xl"
                />
            </div>

            <div className="flex-1 p-4">
                <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>

                <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Goa
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                        <span className="text-gray-500 text-sm ml-1">({activity.reviews} Reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {activity.time}
                    </div>
                </div>

                <hr className="my-3 border-gray-200" />

                <p className="text-sm text-gray-600 line-clamp-2">{activity.description}</p>
            </div>

            <div className="flex flex-col justify-between border-l border-gray-200 p-4 min-w-[140px] text-right">
                <div>
                    <p className="text-lg font-bold text-gray-800">{activity.price}</p>
                    <p className="text-sm text-gray-500">Per Person</p>
                </div>

                <div className="my-4 text-xs text-green-600 font-medium flex items-center gap-1 justify-end">
                    <CheckCircle className="w-4 h-4 text-green-600" /> Free Cancellation
                </div>

                <button onClick={handleBookNow} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default ActivityCard;
