import { Headset } from "lucide-react";

export default function NeedHelpCard({ phoneNumbers = [], email = "" }) {
  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white w-full max-w-md mx-auto flex items-start gap-4">
      <Headset className="text-gray-700 w-8 h-8 flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-lg mb-1">Need Help?</h3>
        {phoneNumbers.length > 0 && (
          <p className="text-sm text-gray-800">
            <span className="font-medium">Call us :</span>{" "}
            {phoneNumbers.join(" | ")}
          </p>
        )}
        {email && (
          <p className="text-sm text-gray-800">
            <span className="font-medium">Mail us :</span> {email}
          </p>
        )}
      </div>
    </div>
  );
}
