import React from "react";
import TripCard from "@/components/CorporatePackages/TripCard";
import RequirementForm from "@/components/CorporatePackages/RequirementForm";
import { useNavigate } from "react-router-dom";
import tripPackages from "@/components/PackageData/PackageData";

export default function CorporatePackages() {
  const navigate = useNavigate();
  console.log("📦 Corporate Packages Loaded");
  console.log("📦 Trip Packages:", tripPackages);

  return (
    <div className="bg-gray-100 pb-10">
      {/* Banner Section */}
      <div className="bg-blue-800 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Corporate Packages</h1>
        <p className="text-md">
          Explore pre-planned trips for your team or drop your custom requirement
        </p>
      </div>

      {/* Pre-Planned Trips Title */}
      <div className="px-4 mt-10 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 ml-58">Pre-Planned Trips</h2>
      </div>

      {/* Trip Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {tripPackages.map((trip, index) => (
          <TripCard
            key={index}
            {...trip}
            onViewPackage={() =>
              navigate(`/corporatepackages/${trip.slug}`, {
                state: { trip, showEnquiry: true },
              })
            }
          />
        ))}
      </div>

      {/* Requirement Form */}
      <RequirementForm />
    </div>
  );
}



