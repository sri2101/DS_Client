import React from "react";
import { useLocation } from "react-router-dom";
import HotelDetails from "@/components/HotelReview/HotelDetails";
import HotelPrices from "@/components/HotelReview/HotelPrices";
import HotelOffers from "@/components/HotelReview/HotelOffers";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";// Adjust the import based on your project structure

const HotelReview = () => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <BreadCrumb segments={breadcrumbs} />

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[68%_32%] gap-6 items-start">
        {/* Left Section: Hotel Details */}
        <HotelDetails />

        {/* Right Section: Sticky */}
        <div className="self-start sticky top-4">
          <div className="space-y-6">
            <HotelPrices />
            <HotelOffers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelReview;

