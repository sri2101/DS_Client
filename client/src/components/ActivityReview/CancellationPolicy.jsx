import React from "react";

export default function CancellationPolicy({ activity }) {
  const policy = activity?.cancellationPolicy;

  if (!policy) return null;

  return (
    <div className="border border-green-500 bg-green-50 rounded-md overflow-hidden w-fit">
      {/* Header section with centered content */}
      <div className="bg-green-600 text-white px-4 py-2 text-sm font-semibold flex justify-center items-center gap-2">
        <span className="w-5 h-5 flex items-center justify-center bg-white text-green-600 rounded-full text-sm font-bold">
          ✔
        </span>
        <span className="text-sm">CANCELLATION POLICY</span>
      </div>

      {/* Policy content with tighter spacing */}
      <div className="text-sm text-gray-800 px-4 py-2.5">
        <ul className="pl-5">
          <li className="marker:text-base marker:align-middle leading-tight">
            {policy}
          </li>
        </ul>
      </div>
    </div>
  );
}

