import React from "react";

const OffersPromoCode = () => {
  const promoData = {
    code: "EMTGETAWAY25",
    description: "Get flat Rs.1500 instant Discount on holiday packages.",
    minAmount: "Rs.21000*"
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden w-full max-w-sm">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between bg-white border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 text-base">Offers & Promo Code</h3>
        <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        {/* Continue Bookings Link */}
        <div className="mb-4">
          <button className="text-cyan-500 text-sm font-normal">
            Continue Bookings To Avail Coupons
          </button>
        </div>

        {/* Promo Card */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-gray-900 text-base">
              {promoData.code}
            </div>
            <button className="text-cyan-500 text-sm font-medium">
              T&C Apply
            </button>
          </div>
          
          <div className="text-sm text-gray-700 mb-2 leading-relaxed">
            {promoData.description}
          </div>
          
          <div className="text-sm text-gray-500">
            *Minimum transaction amount is {promoData.minAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPromoCode;