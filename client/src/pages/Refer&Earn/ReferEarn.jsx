import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import giftImg from '/Gift and tic.png';

export default function ReferEarn() {
  const [activeTab, setActiveTab] = useState('terms');
  const navigate = useNavigate();

  // 🔹 Dynamic Data Content
  const referralInfo = {
    title: "Rewards are just a reference away! Start from ₹1000 to No Limit*",
    link: "www.DeltaSafari.com/referral/YKMefBl",
    videoSrc: "/referal-main-page.webm",
    tncLink: "#"
  };

  const giftRewards = {
    heading: "A Cycle of Limitless Rewards!",
    subText: "Refer, Earn and Watch Your rewards Multiply! Start earning rewards from Rs. 1000. The more you refer the MORE you get!",
    buttonText: "Rewards Dashboard",
    buttonLink: "/referearn/rewards",
    contactEmail: "contactus@DeltaSafari.com",
    imageSrc: giftImg
  };

  const howItWorks = {
    heading: "How it Works",
    subText: "Spread the Link, Share the Rewards in just 3 steps",
    videoSrc: "/rp_animation_desktop.webm"
  };

  const earnings = [
    { amount: "₹200", label: "On Refer", bg: "cyan-100" },
    { amount: "₹2000", label: "On Booking with Referral code", bg: "purple-100" },
    { amount: "₹5000", label: "If ₹500 withdrawal as Cash", bg: "orange-100" },
    { amount: "₹500", label: "Discount on Tour Points", bg: "pink-100" },
  ];

  const accordions = {
    terms: [
      { title: "Who can I refer?", content: "You can refer anyone – friends, family, contacts, networks or anyone you think will be interested in investing in Bonds." },
      { title: "How can I refer someone?", content: "Log in to your DeltaSafari account, generate your unique referral link from your dashboard and share it with your contacts." },
      { title: "When am I eligible to earn the referral rewards?", content: "You’re eligible once the referred person completes their first transaction, and your own KYC is complete." },
      { title: "Is there a limit on the number of people I can refer?", content: "No limit. Refer as many as you want to earn uncapped rewards." },
      { title: "What is the duration of the current referral program?", content: "Valid until 31st March 2026. Only transactions during this period are eligible." },
      { title: "Can the referee earn more rewards on subsequent transactions?", content: "No, only the first transaction is eligible for rewards." }
    ],
    redemption: [
      { title: "Is there a time limit till when the referral award can be claimed?", content: "Yes, referee must complete their first trade within 30 days of opening their account." },
      { title: "Can I exchange my rewards for cash?", content: "Rewards cannot be exchanged for cash or any other alternative." },
      { title: "How can I track my referrals?", content: "Track referral status from your dashboard on DeltaSafari profile." },
      { title: "How can I claim the reward? How long will it take to process?", content: "Rewards are sent as vouchers by the 10th of each month for previous month’s earnings. TDS of 10% applies." },
      { title: "Can I claim rewards for past investments?", content: "Only investments made within the active referral program duration (and within 30 days) are eligible." },
      { title: "What if I don’t receive my rewards?", content: "Contact support at 080-6919 9888 or email contactus@DeltaSafari.com with your details." }
    ]
  };

  return (
    <div className="w-full bg-[radial-gradient(circle_at_top_right,_#d0b0f2,_#ffffff)] py-12 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col gap-16">

        {/* REFER & EARN TOP SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-green-500">Rewards</span> are just a <br />
              reference away! Start <br />
              from <span className="text-purple-600">₹1000</span> to{' '}
              <span className="text-purple-500">No Limit*</span>
            </h1>

            {/* Referral Bar */}
            <div className="mt-6 bg-white shadow-md rounded-full flex items-center overflow-hidden w-full max-w-sm mx-auto md:mx-0">
              <input
                type="text"
                readOnly
                value={referralInfo.link}
                className="flex-grow px-4 py-3 text-sm text-purple-600 font-medium bg-transparent outline-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-3 rounded-full h-full">
                Share
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              *<a href={referralInfo.tncLink} className="underline">T&C</a> apply
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <video autoPlay muted loop playsInline className="w-full max-w-6xl rounded-xl">
              <source src={referralInfo.videoSrc} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* GIFT REWARDS SECTION */}
        <div className="bg-[#892CDC] rounded-3xl p-6 md:p-10 text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{giftRewards.heading}</h2>
            <p className="text-lg mb-6">{giftRewards.subText}</p>
            <button
              onClick={() => navigate(giftRewards.buttonLink)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              {giftRewards.buttonText}
            </button>
            <p className="text-sm mt-6">
              Please email{' '}
              <a href={`mailto:${giftRewards.contactEmail}`} className="underline">
                {giftRewards.contactEmail}
              </a>{' '}
              for any queries or assistance on the program.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={giftRewards.imageSrc} alt="Gift Rewards" className="w-[250px] md:w-[320px]" />
          </div>
        </div>

        {/* HOW IT WORKS SECTION */}
        <div className="bg-white rounded-3xl p-6 md:p-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">{howItWorks.heading}</h2>
            <p className="text-xl text-gray-600 mb-8">{howItWorks.subText}</p>
            <div className="flex justify-center">
              <video autoPlay muted loop playsInline className="w-full max-w-6xl rounded-xl">
                <source src={howItWorks.videoSrc} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* EARNINGS SECTION */}
        <section className="w-full mx-auto space-y-8 bg-white rounded-3xl p-6 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">How much will you earn?</h2>
            <p className="text-gray-600 mt-2">Earn rewards without any limits!</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {earnings.map((item, idx) => (
              <Card key={idx} amount={item.amount} label={item.label} bg={item.bg} />
            ))}
          </div>

          <p className="text-sm text-center text-gray-500">
            <strong>Note:</strong> Minimum investment of ₹1 Lakh in any of the products above to be eligible for Rewards
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-6 border-b text-sm">
            <button
              onClick={() => setActiveTab('terms')}
              className={`pb-2 border-b-2 ${activeTab === 'terms' ? 'border-purple-600 font-semibold text-purple-600' : 'border-transparent text-gray-600'}`}
            >
              Terms and Eligibility
            </button>
            <button
              onClick={() => setActiveTab('redemption')}
              className={`pb-2 border-b-2 ${activeTab === 'redemption' ? 'border-purple-600 font-semibold text-purple-600' : 'border-transparent text-gray-600'}`}
            >
              Reward Redemption
            </button>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {accordions[activeTab].map((item, idx) => (
              <Accordion key={idx} title={item.title} content={item.content} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            <a href="#" className="underline">Read full Terms & Conditions</a>
          </p>
        </section>
      </div>
    </div>
  );
}

// Accordion Component
function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
      >
        {title}
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
}

// Card Component
function Card({ amount, label, bg }) {
  return (
    <div className={`bg-${bg} text-center px-4 py-3 rounded-lg w-40 shadow`}>
      <div className="text-xl font-bold">{amount}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </div>
  );
}
