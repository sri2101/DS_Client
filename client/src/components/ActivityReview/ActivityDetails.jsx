import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

const tabs = ["Package Options", "Overview", "Inclusion", "Address & Map", "Reviews"];

export default function ActivityDetails({ activity }) {
  const [activeTab, setActiveTab] = useState("Package Options");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Package Options":
        return (
          <div className="border rounded-xl p-4 space-y-2 shadow-sm">
            <h3 className="text-lg font-semibold">Select Package Options</h3>
            <div className="border border-blue-400 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center relative">
              <div className="w-full sm:w-[80%]">
                <p className="font-semibold my-2">{activity.packages?.packagetag}</p>
                <div className="flex items-center gap-2 mt-1 my-2">
                  <span className="text-green-700 text-sm bg-green-100 px-2 py-0.5 rounded-full">
                    ⏱ {activity.time} (approx.)
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 max-w-[85%] sm:max-w-[90%]">{activity.packages?.packageinfo}</p>
              </div>
              <div className="absolute -top-3 -right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-xl font-bold text-right sm:ml-auto mt-3 sm:mt-0">{activity.price}</div> 
            </div>
          </div>
        );

      case "Overview":
        return (
          <div className="bg-white rounded-xl p-4 border shadow-sm text-gray-700 leading-relaxed">
            {activity.overview || activity.description}
          </div>
        );

      case "Inclusion":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Inclusions */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-green-800">Inclusions</h4>
              <ul className="space-y-1 text-green-800 text-sm">
                {activity.inclusions?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-red-800">Exclusions</h4>
              <p className="text-sm text-red-700">
                {activity.exclusions?.length ? activity.exclusions.join(", ") : "Not mentioned specifically"}
              </p>
            </div>
          </div>
        );

      case "Address & Map":
        return (
          <div>
            <p className="text-gray-700 mb-2">
              Meeting Point: {activity.address?.meetingPoint || "Not specified"}
            </p>
            <iframe
              title="Map"
              src={activity.address?.mapUrl || "https://maps.google.com"}
              className="w-full h-60 rounded-md border"
              loading="lazy"
            />
          </div>
        );

      case "Reviews":
        const summary = activity.reviewsSummary || {};
        const breakdown = summary.breakdown || {};
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Wider Summary */}
            <div className="md:col-span-2 bg-white border rounded-lg p-4 shadow-sm text-center">
              <p className="text-4xl font-bold text-green-600">{summary.overall || "-"}</p>
              <p className="font-semibold mt-1 text-gray-700">Excellent</p>
              <p className="text-sm text-green-700 mb-4">
                Based on {summary.totalReviews || 0} reviews
              </p>
              <div className="space-y-2 text-sm text-left">
                {Object.entries(breakdown).map(([label, count]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="capitalize">{label} ({count})</span>
                    <div className="flex-1 ml-2 h-2 rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${(count / (summary.totalReviews || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrower Reviews */}
            <div className="md:col-span-3 space-y-6">
              {activity.full_reviews?.map((review, index) => (
                <div key={index} className="space-y-2 border-b pb-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-800 font-medium">Excellent</p>
                      <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block mt-1">
                        {review.rating} / 5
                      </span>
                    </div>
                  </div>

                  {/* Review Content Box */}
                  <div className="bg-gray-100 p-4 rounded-xl relative">
                    {/* Stars top-right */}
                    <div className="absolute top-2 right-3 text-yellow-400 text-sm">
                      {"★".repeat(review.rating)}
                    </div>
                    <h4 className="text-base font-semibold mb-2">{review.title}</h4>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap border rounded-xl overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-4 py-2 text-sm font-medium flex-1 text-center transition-all",
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-500 bg-white"
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{renderTabContent()}</div>
    </div>
  );
}
