import React from "react";

export default function ImportantInfoCard({ activity }) {
  const points = activity?.importantInfo || [];

  if (!points.length) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-2 max-h-100 overflow-y-auto">
      <h3 className="font-bold text-lg flex items-center gap-2">
        📋 Important Information
      </h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pr-2">
        {points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}
