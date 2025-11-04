import React from 'react';

export default function TripHighlights({ tripHighlights }) {
  // defensive normalization: accept arrays, JSON-stringified arrays, or '||' separated strings
  let highlights = tripHighlights;
  try {
    if (!highlights) highlights = [];
    else if (typeof highlights === 'string') {
      const s = highlights.trim();
      // try JSON parse
      try {
        const parsed = JSON.parse(s.replace(/&quot;/g, '"'));
        if (Array.isArray(parsed)) highlights = parsed.map(String);
        else highlights = String(highlights).split('||').map(s => s.trim()).filter(Boolean);
      } catch (e) {
        highlights = String(highlights).split('||').map(s => s.trim()).filter(Boolean);
      }
    } else if (Array.isArray(highlights)) {
      highlights = highlights.map(String);
    } else {
      // unknown type, cast to string and split
      highlights = String(highlights).split('||').map(s => s.trim()).filter(Boolean);
    }
  } catch (e) {
    highlights = [];
  }

  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-1.5 h-5 bg-blue-600 rounded-sm mr-2" />
        <h2 className="text-lg font-bold text-gray-900">Trip Highlights</h2>
      </div>

      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {highlight}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
