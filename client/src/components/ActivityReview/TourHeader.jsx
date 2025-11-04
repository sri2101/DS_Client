import React, { useState } from "react";
import { Star, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function TourHeader({ activity }) {
  if (!activity) return null;

  const images = activity.images || Array(5).fill(activity.image);
  const infoTags = activity.infoTags || [];

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);


  return (
    <div className="space-y-4">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-900">
        {activity.title}
      </h1>

      {/* Rating and Location */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-0 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <span>{activity.reviews} Reviews</span>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{activity.location || "Goa"}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-5 gap-2">
        {/* Left Column: 4 thumbnails */}
        <div className="col-span-1 flex flex-col gap-2">
          {images.slice(0, 4).map((img, i) => {
            const isLastThumb = i === 3;
            return (
              <div
                key={i}
                className="relative cursor-pointer"
                onClick={() => {
                  setCurrentIndex(i);
                  setShowModal(true);
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-[64px] md:h-[80px] rounded-lg object-cover brightness-50"
                />
                {isLastThumb && (
                  <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center rounded-lg text-white text-xs font-medium">
                    See More
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Large Main Image */}
        {/* Right Column: Large Main Image with arrows */}
        <div className="col-span-4 relative">
          {/* Large image */}
          <img
            src={images[mainImageIndex]}
            alt="Main"
            className="w-full h-[240px] md:h-[345px] object-cover rounded-xl"
          />

          {/* Left Arrow */}
          {mainImageIndex > 0 && (
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => setMainImageIndex(mainImageIndex - 1)}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
          )}

          {/* Right Arrow */}
          {mainImageIndex < images.length - 1 && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
              onClick={() => setMainImageIndex(mainImageIndex + 1)}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          )}
        </div>

      </div>

      {/* Info Tags with dividers */}
      <hr className="border-gray-300" />
      <div className="flex flex-wrap gap-6 text-sm text-gray-800">
        {infoTags.map((tag, i) => (
          <span key={i} className="flex items-center gap-1">
            {tag.includes("Pickup") && "🚗"}
            {tag.includes("Mobile") && "📱"}
            {tag.includes("Offered") && "🗣️"}
            {tag}
          </span>
        ))}
      </div>
      <hr className="border-gray-300" />

      {/* Modal Viewer */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl px-4">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-white text-2xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt="Modal View"
              className="w-full h-[400px] object-cover rounded-xl"
            />

            {/* Left Arrow */}
            {currentIndex > 0 && (
              <button
                className="absolute left-8 top-1/2 transform bg-gray-500 rounded-full -translate-y-1/2 z-50"
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Right Arrow */}
            {currentIndex < images.length - 1 && (
              <button
                className="absolute right-8 top-1/2 transform bg-gray-500 rounded-full -translate-y-1/2 z-50"
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}


