import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Where Can I Get Affordable Luxury Hotels In Delhi?",
    a: "You can find them in central and south Delhi with filters applied.",
  },
  {
    q: "What Are The Best Hotels To Stay In Delhi?",
    a: "Mehra Residency, Hotel Rivasa, and Amigos Hostel are great options.",
  },
  {
    q: "How To Book The Best Hotel In Delhi For Two Days?",
    a: "Use the filters and sort by user ratings and price.",
  },
  {
    q: "What Are Some Safe Hotels To Stay At In Delhi?",
    a: "Look for hotels with verified guest ratings and 24/7 front desk.",
  },
  {
    q: "Which Are The Best Hotels And Restaurants In Delhi?",
    a: "Try hotels in Old Delhi with on-site dining and reviews above 4.5.",
  },
  {
    q: "Which 5-Star Hotels In Delhi Allow Guests Any Time Of The Day?",
    a: "Check properties with 24-hour check-in like The Himalayan.",
  },
  {
    q: "Which Is The Best Business-Friendly Hotel In Delhi?",
    a: "Look for places with conference rooms and strong Wi-Fi.",
  },
  {
    q: "Different Types Of Accommodation Options In Delhi?",
    a: "Hostels, homestays, budget hotels, and luxury resorts are all available.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQ's</h2>
      <div className="divide-y">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex justify-between items-center text-left py-4 px-2 md:px-4 hover:bg-gray-50 transition-all"
              onClick={() => toggle(i)}
            >
              <span className="text-sm md:text-base font-medium">{`Q${i + 1}. ${faq.q}`}</span>
              <ChevronDown
                className={`transition-transform duration-200 w-5 h-5 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-2 md:px-4 pb-4 text-sm text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

