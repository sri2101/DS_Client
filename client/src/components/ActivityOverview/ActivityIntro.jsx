import React from "react";

const ActivityIntro = ({ title, paragraphs, buttonText }) => {
  return (
    <div className="bg-[#f2f9fb] py-10 px-4 md:px-6 lg:px-10 text-[#1d1d1d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-center mb-6">
          {title}
        </h2>

        <div className="space-y-5 text-[14px] md:text-[15px] leading-[1.8] md:leading-[1.6] text-left">
          {paragraphs?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#1a8df0] hover:bg-[#0078d4] transition-colors duration-200 text-white font-medium py-2.5 px-6 rounded-full text-sm md:text-base">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityIntro;


