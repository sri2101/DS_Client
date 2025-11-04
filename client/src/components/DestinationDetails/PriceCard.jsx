import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default function PriceCard({ price = {}, onEnquire }) {
  const {
    originalPrice = 0,
    discountedPrice = 0,
    emiOptions = {}
  } = price;

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("noCost"); // 'noCost' or 'standard'

  const currentPlans =
    selectedTab === "noCost" ? emiOptions.noCostPlans : emiOptions.standardPlans;

  return (
    <>
      <div className="rounded-xl border shadow-sm w-full overflow-hidden">
        {/* Price Banner */}
        <div className="bg-gradient-to-b from-[#e9f4ff] to-[#d5eaff] p-5 space-y-1">
          <p className="text-base font-medium text-black">Starting from</p>
          <p className="text-base line-through text-gray-500">
            ₹{originalPrice.toLocaleString()}
          </p>
          <p className="text-4xl font-extrabold text-black leading-snug">
            ₹{discountedPrice.toLocaleString()}{" "}
            <span className="text-base font-semibold text-black">
              Per Person
            </span>
          </p>

          {(emiOptions?.noCostPlans?.length || emiOptions?.standardPlans?.length) > 0 && (
            <div className="flex items-center gap-1.5 mt-2 text-sm text-green-600">
              <CreditCard className="w-4 h-4" />
              <span>
                EMI Starts from ₹
                {[
                  ...(emiOptions.noCostPlans || []),
                  ...(emiOptions.standardPlans || [])
                ]
                  .sort((a, b) => a.amount - b.amount)[0]
                  ?.amount.toLocaleString()}
              </span>
              <button
                onClick={() => setOpen(true)}
                className="text-blue-500 text-xs underline hover:text-blue-600"
              >
                see option
              </button>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Enquire Button Section */}
        <div className="p-5 bg-white">
          <Button
            onClick={onEnquire}
            className="w-full h-14 text-lg font-bold rounded-full border-2 border-[#3290ff] text-[#3290ff] bg-white hover:bg-blue-50 transition-all duration-200"
          >
            ENQUIRE NOW
          </Button>
        </div>
      </div>

      {/* EMI Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>EMI plan with EMT</DialogTitle>
          </DialogHeader>

          {/* Tab Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              className={`px-4 py-1 rounded-full text-sm ${
                selectedTab === "noCost"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab("noCost")}
            >
              No Cost EMI
            </button>
            <button
              className={`px-4 py-1 rounded-full text-sm ${
                selectedTab === "standard"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab("standard")}
            >
              Standard EMI
            </button>
          </div>

          {/* EMI Table */}
          {currentPlans?.length > 0 ? (
            <table className="w-full text-left border mb-6 text-sm">
              <thead>
                <tr className="border-b font-semibold">
                  <th className="p-2">Months</th>
                  <th className="p-2">Monthly EMI</th>
                </tr>
              </thead>
              <tbody>
                {currentPlans.map((plan) => (
                  <tr key={plan.months} className="border-b">
                    <td className="p-2">{plan.months}</td>
                    <td className="p-2">₹{plan.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-gray-500 mb-4">
              No EMI options available for selected plan.
            </p>
          )}

          {/* Contact Form */}
          <div className="bg-blue-50 p-4 rounded-md mb-3">
            <h3 className="font-semibold mb-2">Get in touch with us.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input placeholder="Full Name" className="border p-2 rounded" />
              <input placeholder="Email" className="border p-2 rounded" />
              <input placeholder="Mobile Number" className="border p-2 rounded" />
            </div>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Apply</Button>
          </div>

          {/* Notes */}
          <ul className="text-xs text-gray-500 space-y-1">
            <li>Please Note:</li>
            <li>• EMI is inclusive of the processing fee and applicable GST.</li>
            <li>
              • Loan Protector Insurance: 1% of the package amount is mandatory and
              included in the EMI.
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}






