import React from "react";

export default function AdditionalInfo({ additionalInfo = {} }) {
  const formatTitle = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md" id="additional">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
        Terms & Conditions
      </h2>

      <div className="space-y-4">
        {Object.entries(additionalInfo || {})
          .filter(([key]) => !(String(key).startsWith('_') || key === '__v' || key === 'id'))
          .map(([key, content], idx) => (
          <div
            key={idx}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            {/* Section title */}
            <div className="bg-blue-100 px-4 py-2 font-semibold text-sm text-gray-700">
              {formatTitle(key)}
            </div>

            {/* Section content */}
            <div className="bg-white px-4 py-3 text-sm text-gray-800 whitespace-pre-wrap">
              {Array.isArray(content) ? (
                <ul className="list-disc list-inside space-y-1">
                  {content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

