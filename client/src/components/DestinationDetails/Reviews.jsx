import React, { useState } from 'react';
import { Star, Camera } from 'lucide-react';

const Reviews = ({ reviewsData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultData = {
    totalReviews: 817,
    averageRating: 4.7,
    fromCountries: "65+ countries",
    ratingBreakdown: [
      { stars: 5, count: 540, percentage: 66 },
      { stars: 4, count: 277, percentage: 34 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 }
    ],
    travelerImages: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
      "https://images.unsplash.com/photo-1605538883669-825200433431?w=200&h=150&fit=crop"
    ],
    reviews: [
      {
        id: 1,
        name: "Vinay Lohakare",
        date: "21 Oct 2023",
        rating: 5,
        booked: "Romantic Escape to Kashmir | FREE Excursion to Gulmarg",
        comment: "One of the great experiences great hotel, food, driver Ishika helped is alot",
        images: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1605538883669-825200433431?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1571019614332-b4d4c4e32251?w=150&h=150&fit=crop"
        ],
        moreImages: 10
      },
      {
        id: 2,
        name: "Sukanya Saha",
        date: "18 May 2023",
        rating: 5,
        booked: "Romantic Escape to Kashmir | FREE Excursion to Gulmarg",
        comment: "",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1605538883669-825200433431?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1571019614332-b4d4c4e32251?w=150&h=150&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop"
        ],
        moreImages: 22
      }
    ]
  };

  const data = reviewsData || defaultData;

  const StarRating = ({ rating, size = "w-4 h-4" }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${star <= rating ? 'text-green-500 fill-green-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const ImageModal = ({ src, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-full">
        <img src={src} alt="Full size" className="max-w-full max-h-full object-contain" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 md:p-6 space-y-6">
      {/* Reviews Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
        {/* Rating Summary */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Reviews({data.totalReviews})
          </h2>
          
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-6 h-6 text-green-500 fill-green-500" />
              ))}
              <Star className="w-6 h-6 text-green-500 fill-green-500" style={{clipPath: 'inset(0 30% 0 0)'}} />
            </div>
          </div>
          
          <div className="text-3xl font-bold text-green-600 mb-1">{data.averageRating}</div>
          <div className="text-sm text-blue-600">From {data.fromCountries}</div>
        </div>

        {/* Rating Breakdown */}
        <div className="flex-1 max-w-md">
          {data.ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center space-x-3 mb-2">
              <div className="flex items-center space-x-1">
                <span className="text-sm">{item.stars}</span>
                <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-400 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-8">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Traveler Image Gallery */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4">Traveller Image Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 relative">
            <img
              src={data.travelerImages[0]}
              alt="Main traveler"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(data.travelerImages[0])}
            />
            <button className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
              <Camera className="w-3 h-3" />
              <span>View All (40)</span>
            </button>
          </div>
          
          {/* Smaller images */}
          {data.travelerImages.slice(1).map((image, index) => (
            <div key={index} className="aspect-square">
              <img
                src={image}
                alt={`Traveler ${index + 2}`}
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {data.reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {review.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Review Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">Reviewed: {review.date}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-600">{review.rating}.0/5</span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-sm text-gray-600">Booked: </span>
                  <span className="text-sm text-blue-600">{review.booked}</span>
                </div>

                {review.comment && (
                  <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
                )}

                {/* Review Images */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {review.images.slice(0, 5).map((image, index) => (
                    <div key={index} className="aspect-square">
                      <img
                        src={image}
                        alt={`Review ${index + 1}`}
                        className="w-full h-full object-cover rounded cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      />
                    </div>
                  ))}
                  {review.moreImages > 0 && (
                    <div className="aspect-square bg-gray-900 rounded flex items-center justify-center cursor-pointer">
                      <div className="text-white text-center">
                        <div className="text-sm font-semibold">({review.moreImages}+)</div>
                        <div className="text-xs">View All</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Reviews;