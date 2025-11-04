import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@/components/ui/card';
import { Info } from "lucide-react";

const useHotelData = () => {
  const hotel = useSelector((state) => state.hotelInfo.hotel);
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    if (hotel && Object.keys(hotel).length > 0) {
      setHotelData(hotel);
    } else {
      const localHotel = JSON.parse(localStorage.getItem('selectedHotel'));
      if (localHotel) setHotelData(localHotel);
    }
  }, [hotel]);

  return hotelData;
};

const HotelPrices = () => {
  const hotel = useHotelData();
  if (!hotel) return null;

  const discount = hotel.originalPrice - hotel.price;
  const total = hotel.price + hotel.tax;

  return (
    <Card className="rounded-xl border shadow-sm overflow-hidden p-0">
      <div className="bg-gradient-to-r from-[#d0e8ff] to-[#e7f3ff] px-4 py-2 flex items-center gap-2">
        <span className="text-xl">₹</span>
        <h3 className="font-semibold text-sm">Room Price Details</h3>
      </div>
      <div className="bg-white pt-1 pb-4 px-4 text-sm text-gray-700 leading-tight">
        <div className="flex justify-between py-2">
          <span>1 Room X 1 Night</span>
          <span className="font-medium">₹{hotel.originalPrice}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center text-blue-600 font-medium py-2">
          <span className="flex items-center gap-1">Total Discount <Info className="w-3 h-3 text-blue-400" /></span>
          <span>-₹{discount}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between py-2">
          <span>Price After Discount</span>
          <span className="font-medium">₹{hotel.price}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between py-2">
          <span>Taxes & Service Fees</span>
          <span>₹{hotel.tax}</span>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between font-bold text-red-600 text-base pt-3">
          <span>Grand Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </Card>
  );
};
export default HotelPrices

