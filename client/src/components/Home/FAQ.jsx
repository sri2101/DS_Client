import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What’s the price of the Kashmir Trip Package from India?", answer: "The price depends on the season, duration, and inclusions. Packages usually start from ₹12,000 onwards." },
  { question: "What’s the best time to visit Kashmir?", answer: "March to October is ideal, with tulip blooms in spring and snow activities in winter." },
  { question: "What are the best places to visit in Kashmir?", answer: "Popular spots include Srinagar, Gulmarg, Pahalgam, Sonmarg, and Dal Lake." },
  { question: "How to plan a Kashmir trip?", answer: "Decide your duration, pick destinations (Gulmarg, Pahalgam, Srinagar), and book hotels & cabs in advance." },
  { question: "Which Airline flies to Kashmir?", answer: "Major airlines like IndiGo, Vistara, and Air India operate flights to Srinagar." },
  { question: "What’s the average flight duration between Delhi to Kashmir?", answer: "The average flight time from Delhi to Srinagar is around 1 hour 30 minutes." },
  { question: "What kind of activities does Kashmir offer to travellers?", answer: "Houseboat stays, shikara rides, skiing in Gulmarg, trekking, and local shopping are popular." },
  { question: "How many days are enough to explore Kashmir?", answer: "A 5 to 7-day trip is ideal to cover Srinagar, Gulmarg, Pahalgam, and Sonmarg." },
  { question: "Is Kashmir worth travelling to?", answer: "Absolutely! It’s called 'Paradise on Earth' for its breathtaking natural beauty and rich culture." },
  { question: "Why book the Kashmir Tour Package with EaseMyTrip?", answer: "EaseMyTrip offers affordable pricing, curated packages, and 24x7 customer support." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        FAQs on Kashmir Tour Packages
      </h2>
      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center py-4 px-3">
              <p className="text-base sm:text-lg font-medium">
                Q.{faq.question}
              </p>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <div className="px-3 pb-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
