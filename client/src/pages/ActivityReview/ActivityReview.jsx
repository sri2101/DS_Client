import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import CityActivities from "@/components/ActivityData/CityActivities";
import TourHeader from "@/components/ActivityReview/TourHeader";
import ActivityDetails from "@/components/ActivityReview/ActivityDetails";
import BookingCard from "@/components/ActivityReview/BookingCard";
import CancellationPolicy from "@/components/ActivityReview/CancellationPolicy";
import ImportantInfoCard from "@/components/ActivityReview/ImportantInfoCard";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

export default function ActivityReview() {
  const { city, slug } = useParams();
  const location = useLocation();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedActivity");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (
        parsed.slug === slug &&
        parsed.city.toLowerCase().replace(/\s+/g, "-") === city
      ) {
        setActivity(parsed);
        return;
      }
    }

    const activityData = CityActivities[city];
    const found = activityData?.results?.find((a) => a.slug === slug);
    if (found) {
      setActivity(found);
    }
  }, [city, slug]);

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  if (!activity) {
    return <p className="text-center py-10">Loading activity details...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* ✅ Breadcrumb placed above all content */}
      <div className="mb-4">
        <BreadCrumb segments={breadcrumbs} />
      </div>

      {/* ✅ Grid layout below breadcrumb */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="md:col-span-2">
          <TourHeader activity={activity} />
          <ActivityDetails activity={activity} />
        </div>

        {/* Right side cards */}
        <div className="flex flex-col gap-3 sm:items-start mt-20">
          <BookingCard activity={activity} />
          <CancellationPolicy activity={activity} />
          <ImportantInfoCard activity={activity} />
        </div>
      </div>
    </div>
  );
}
