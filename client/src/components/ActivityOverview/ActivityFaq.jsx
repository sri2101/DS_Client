// components/ActivityOverview/ActivityFAQ.jsx

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ActivityFAQ = ({ heading, subheading, list }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-0 py-12">
      <h2 className="text-[20px] md:text-[22px] font-bold text-center text-blue-600">
        {heading}
      </h2>
      <h3 className="text-[18px] md:text-[20px] font-semibold text-center mt-1 mb-8">
        {subheading}
      </h3>

      <div className="divide-y divide-gray-200 border-t border-b">
        {list?.map((faq, index) => (
          <div key={index} className="py-5 px-2 md:px-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <span className="text-[15px] md:text-base font-medium">
                Q{index + 1}. {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-blue-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-3 text-sm md:text-[15px] text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFAQ;
