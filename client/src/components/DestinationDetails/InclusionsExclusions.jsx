import { Check, X } from "lucide-react";

export default function InclusionsExclusions({ inclusions = [], exclusions = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      {/* Inclusions */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold text-green-700 mb-3">
          <span className="inline-block border-l-4 border-green-600 pl-2">
            Inclusions
          </span>
        </h3>
        <ul className="space-y-3 text-sm text-black">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="text-green-600 w-5 h-5 shrink-0 mt-1" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold text-red-700 mb-3">
          <span className="inline-block border-l-4 border-red-600 pl-2">
            Exclusions
          </span>
        </h3>
        <ul className="space-y-3 text-sm text-black">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <X className="text-red-600 w-5 h-5 shrink-0 mt-1" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
