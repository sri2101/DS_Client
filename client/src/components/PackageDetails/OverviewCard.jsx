import React from 'react';

export default function OverviewCard({ overview }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6 border border-gray-200">
      <div className="flex items-center mb-2">
        <div className="w-1.5 h-5 bg-blue-600 rounded-sm mr-2" />
        <h2 className="text-lg font-bold">Package Overview</h2>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{overview}</p>
    </div>
  );
}
