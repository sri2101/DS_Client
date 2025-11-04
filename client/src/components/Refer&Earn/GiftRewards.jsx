import React from "react";
import giftImg from "/Gift and tic.png"; 

export default function GiftRewards() {
 
  const content = {
    title: "A Cycle of Limitless Rewards!",
    description:
      "Refer, Earn and Watch Your rewards Multiply! Start earning rewards from Rs. 1000. The more you refer the MORE you get!",
    buttonText: "Rewards Dashboard",
    buttonLink: "/rewards-dashboard",
    contactEmail: "contactus@DeltaSafari.com",
    imageSrc: giftImg,
    bgColor: "#892CDC", 
  };

  return (
    <div
      className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center text-white"
      style={{ backgroundColor: content.bgColor }}
    >
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.title}</h1>
        <p className="text-lg md:text-xl mb-6">{content.description}</p>

        <a href={content.buttonLink}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            {content.buttonText}
          </button>
        </a>

        <p className="text-sm text-white mt-6">
          Please email{" "}
          <a
            href={`mailto:${content.contactEmail}`}
            className="underline text-white font-medium"
          >
            {content.contactEmail}
          </a>{" "}
          for any queries or assistance on the program.
        </p>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 md:ml-8">
        <img
          src={content.imageSrc}
          alt="Gift and Ticket"
          className="w-[300px] md:w-[400px]"
        />
      </div>
    </div>
  );
}

