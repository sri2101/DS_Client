// import React, { useState } from "react";
// import { Share2 } from "lucide-react";
// import { useLocation } from "react-router-dom";
// import BreadCrumb from "@/components/BreadCrumb/BreadCrumb"; // Adjust the import based on your project structure

// const userProfile = {
//   initials: "AR",
//   userType: "Individual",
//   username: "Arnab Roy",
//   clientId: "IB 1020 1268",
//   signUpDate: "08/07/2025",
//   lastLogin: "08/07/2025 – 08:48:34 PM",
//   onEditTypeClick: () => alert("Edit user type clicked"),
// };

// const referralStats = {
//   activeReferrals: 0,
//   investedReferrals: 0,
//   rewardsEarned: 0,
//   rewardsRedeemed: 0,
//   kycStatus: true,
// };

// const referralUrl = "www.DeltaSafari.com/referral/YKMefBle";

// const rewardsTable = [];

// const termsAccordion = [
//   {
//     title: "Who can I refer?",
//     content:
//       "You can refer anyone – friends, family, contacts, networks or anyone you think will be interested in investing in Bonds.",
//   },
//   {
//     title: "How can I refer someone?",
//     content:
//       "Log in to your DeltaSafari account, generate your unique referral link from your dashboard and share it with your contacts.",
//   },
//   {
//     title: "When am I eligible to earn the referral rewards?",
//     content:
//       "You’re eligible once the referred person completes their first transaction, and your own KYC is complete.",
//   },
//   {
//     title: "Is there a limit on the number of people I can refer?",
//     content:
//       "No limit. Refer as many as you want to earn uncapped rewards.",
//   },
//   {
//     title: "What is the duration of the current referral program?",
//     content: "Valid until 31st March 2026. Only transactions during this period are eligible.",
//   },
//   {
//     title: "Can the referee earn more rewards on subsequent transactions?",
//     content: "No, only the first transaction is eligible for rewards.",
//   },
// ];

// const redemptionAccordion = [
//   {
//     title: "Is there a time limit till when the referral award can be claimed?",
//     content: "Yes, referee must complete their first trade within 30 days of opening their account.",
//   },
//   {
//     title: "Can I exchange my rewards for cash?",
//     content: "Rewards cannot be exchanged for cash or any other alternative.",
//   },
//   {
//     title: "How can I track my referrals?",
//     content: "Track referral status from your dashboard on DeltaSafari profile.",
//   },
//   {
//     title: "How can I claim the reward? How long will it take to process?",
//     content:
//       "Rewards are sent as vouchers by the 10th of each month for previous month’s earnings. TDS of 10% applies.",
//   },
//   {
//     title: "Can I claim rewards for past investments?",
//     content:
//       "Only investments made within the active referral program duration (and within 30 days) are eligible.",
//   },
//   {
//     title: "What if I don’t receive my rewards?",
//     content:
//       "Contact support at 080-6919 9888 or email contactus@DeltaSafari.com with your details.",
//   },
// ];

// export default function ReferAndEarnCard() {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState("terms");

//   const generateBreadcrumbs = () => {
//     const paths = location.pathname.split("/").filter(Boolean);
//     return paths.map((path, index) => ({
//       label: path.charAt(0).toUpperCase() + path.slice(1),
//       path: `/${paths.slice(0, index + 1).join("/")}`,
//     }));
//   };

//   const breadcrumbs = generateBreadcrumbs();

//   return (
//     <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full px-4 py-8">
//       {/* Breadcrumbs */}
//       <div className="w-full mb-4">
//         <BreadCrumb segments={breadcrumbs} />
//       </div>

//       {/* Left User Info Card */}
//       <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 max-w-sm">
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 rounded-full bg-purple-200 text-purple-900 border-2 border-purple-600 text-3xl font-bold flex items-center justify-center">
//             {userProfile.initials}
//           </div>
//           <span className="mt-2 text-sm px-4 py-1 bg-green-500 text-white rounded-full">
//             {userProfile.userType}
//           </span>
//           <button
//             onClick={userProfile.onEditTypeClick}
//             className="text-sm text-purple-600 underline mt-1"
//           >
//             Edit User Type
//           </button>
//           <h2 className="mt-2 font-semibold text-lg">{userProfile.username}</h2>
//           <p className="text-sm text-gray-600">
//             Client ID: <span className="font-bold">{userProfile.clientId}</span>
//           </p>
//           <hr className="border-gray-500" />
//           <div className="text-xs text-gray-500 mt-4 text-center">
//             <p>Sign up: {userProfile.signUpDate}</p>
//             <p>Last Login: {userProfile.lastLogin}</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Refer & Earn Card */}
//       <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 max-w-2xl">
//         <h2 className="text-xl md:text-2xl font-semibold text-[#2c2c2c] mb-6">
//           Refer & Earn
//         </h2>

//         {/* Pill stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <div className="bg-[#fbeedc] rounded-2xl p-4 text-center">
//             <div className="text-xl font-bold text-[#e6852b]">
//               {referralStats.activeReferrals}
//             </div>
//             <div className="text-sm font-medium text-[#5f5f5f]">Active Referrals</div>
//           </div>
//           <div className="bg-[#d2f1f3] rounded-2xl p-4 text-center">
//             <div className="text-xl font-bold text-[#11a3a3]">
//               {referralStats.investedReferrals}
//             </div>
//             <div className="text-sm font-medium text-[#5f5f5f]">Referral Invested</div>
//           </div>
//           <div className="bg-[#e4dcf5] rounded-2xl p-4 text-center">
//             <div className="text-xl font-bold text-[#6d3cc7]">
//               ₹ {referralStats.rewardsEarned}
//             </div>
//             <div className="text-sm font-medium text-[#5f5f5f]">Rewards Earned</div>
//           </div>
//           <div className="bg-[#fbd6dc] rounded-2xl p-4 text-center relative">
//             <div className="text-xl font-bold text-[#d43d58]">
//               ₹ {referralStats.rewardsRedeemed}
//             </div>
//             <div className="text-sm font-medium text-[#5f5f5f]">Rewards Redeemed</div>
//             {referralStats.kycStatus && (
//               <div className="absolute top-2 right-2 bg-[#d43d58] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
//                 KYC
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Referral Link Section */}
//         <div className="w-full rounded-xl bg-[#fff3e7] border border-[#f6d3b6] p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
//           <div className="font-semibold text-lg text-[#3d3d3d]">
//             Refer-Earn-Repeat
//           </div>
//           <div className="flex flex-grow items-center rounded-full bg-white px-2 py-1 max-w-full md:max-w-md overflow-hidden">
//             <input
//               readOnly
//               type="text"
//               value={referralUrl}
//               className="flex-grow px-2 py-2 text-sm text-[#3d3d3d] bg-transparent outline-none"
//             />
//             <button className="bg-[#a133ec] text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-[#8c29d0] transition">
//               Copy Link
//             </button>
//             <button className="ml-2 rounded-full w-9 h-9 bg-[#dff0e2] flex items-center justify-center">
//               <img src="/whatsapp_logo_icon.svg" alt="WhatsApp" className="w-7 h-7" />
//             </button>
//             <button className="ml-2 rounded-full w-9 h-9 bg-[#f8faf8] flex items-center justify-center">
//               <Share2 size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Rewards Table */}
//         <h3 className="text-lg font-semibold text-[#2c2c2c] mb-3">Rewards Summary</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border border-gray-200 rounded-md overflow-hidden">
//             <thead className="bg-[#f8f8f8] text-[#7c7c7c]">
//               <tr>
//                 <th className="px-4 py-2 font-medium">Referral Name</th>
//                 <th className="px-4 py-2 font-medium">Signup Date</th>
//                 <th className="px-4 py-2 font-medium">Status</th>
//                 <th className="px-4 py-2 font-medium">Reward</th>
//                 <th className="px-4 py-2 font-medium">Expiry Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rewardsTable.length === 0 ? (
//                 <tr>
//                   <td className="px-4 py-3 text-center text-gray-400" colSpan="5">
//                     No referrals yet.
//                   </td>
//                 </tr>
//               ) : (
//                 rewardsTable.map((row, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-2">{row.name}</td>
//                     <td className="px-4 py-2">{row.signup}</td>
//                     <td className="px-4 py-2">{row.status}</td>
//                     <td className="px-4 py-2">{row.reward}</td>
//                     <td className="px-4 py-2">{row.expiry}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Expiry Note */}
//         <p className="text-xs text-gray-500 mt-3">
//           Referral who have not invested during the validity period, will expire and only active referral will be showcased in rewards section
//         </p>

//         {/* Declaration */}
//         <div className="mt-4 flex items-start gap-2">
//           <input type="checkbox" defaultChecked className="mt-1" />
//           <p className="text-xs text-gray-500">
//             I hereby declare that I shall not undertake any form of selling and/or advisory activities in secondary market with respect to securities and I shall not manage the portfolio of any person referred. My role shall be strictly confined to referral only.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-4 mt-6">
//           <button
//             className={`text-sm px-4 py-2 rounded-full transition ${activeTab === "terms" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
//             onClick={() => setActiveTab("terms")}
//           >
//             Terms
//           </button>
//           <button
//             className={`text-sm px-4 py-2 rounded-full transition ${activeTab === "redemption" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
//             onClick={() => setActiveTab("redemption")}
//           >
//             Redemption
//           </button>
//         </div>

//         {/* Accordion */}
//         <div className="space-y-4 mt-6">
//           {(activeTab === "terms" ? termsAccordion : redemptionAccordion).map((item, index) => (
//             <Accordion key={index} title={item.title} content={item.content} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Accordion({ title, content }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border rounded-lg">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
//       >
//         {title}
//         <span className="text-lg">{open ? '-' : '+'}</span>
//       </button>

//       {open && (
//         <div className="px-4 pb-4 text-sm text-gray-600">
//           {content}
//         </div>
//       )}
//     </div>
//   );
// }

// function Card({ amount, label, bg = "gray-100" }) {
//   const bgClass = `bg-${bg}`; // This only works if used safely in Tailwind JIT

//   return (
//     <div className={`text-center px-4 py-3 rounded-lg w-40 shadow ${bgClass}`}>
//       <div className="text-lg font-semibold">{amount}</div>
//       <div className="text-sm text-gray-700">{label}</div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Share2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb"; // Adjust if needed

const userProfile = {
  initials: "AR",
  userType: "Individual",
  username: "Arnab Roy",
  clientId: "IB 1020 1268",
  signUpDate: "08/07/2025",
  lastLogin: "08/07/2025 – 08:48:34 PM",
  onEditTypeClick: () => alert("Edit user type clicked"),
};

const referralStats = {
  activeReferrals: 0,
  investedReferrals: 0,
  rewardsEarned: 0,
  rewardsRedeemed: 0,
  kycStatus: true,
};

const referralUrl = "www.DeltaSafari.com/referral/YKMefBle";
const rewardsTable = [];

const termsAccordion = [
  { title: "Who can I refer?", content: "You can refer anyone – friends, family, contacts, networks or anyone you think will be interested in investing in Bonds." },
  { title: "How can I refer someone?", content: "Log in to your DeltaSafari account, generate your unique referral link from your dashboard and share it with your contacts." },
  { title: "When am I eligible to earn the referral rewards?", content: "You’re eligible once the referred person completes their first transaction, and your own KYC is complete." },
  { title: "Is there a limit on the number of people I can refer?", content: "No limit. Refer as many as you want to earn uncapped rewards." },
  { title: "What is the duration of the current referral program?", content: "Valid until 31st March 2026. Only transactions during this period are eligible." },
  { title: "Can the referee earn more rewards on subsequent transactions?", content: "No, only the first transaction is eligible for rewards." },
];

const redemptionAccordion = [
  { title: "Is there a time limit till when the referral award can be claimed?", content: "Yes, referee must complete their first trade within 30 days of opening their account." },
  { title: "Can I exchange my rewards for cash?", content: "Rewards cannot be exchanged for cash or any other alternative." },
  { title: "How can I track my referrals?", content: "Track referral status from your dashboard on DeltaSafari profile." },
  { title: "How can I claim the reward? How long will it take to process?", content: "Rewards are sent as vouchers by the 10th of each month for previous month’s earnings. TDS of 10% applies." },
  { title: "Can I claim rewards for past investments?", content: "Only investments made within the active referral program duration (and within 30 days) are eligible." },
  { title: "What if I don’t receive my rewards?", content: "Contact support at 080-6919 9888 or email contactus@DeltaSafari.com with your details." },
];

export default function ReferAndEarnCard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("terms");

  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <>
      {/* Breadcrumbs */}
      <div className="w-full px-35 pt-8">
        <BreadCrumb segments={breadcrumbs} />
      </div>

      {/* Cards Section with top margin */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full px-4 mt-6">
        {/* Left User Info Card */}
        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 max-w-sm">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-purple-200 text-purple-900 border-2 border-purple-600 text-3xl font-bold flex items-center justify-center">
              {userProfile.initials}
            </div>
            <span className="mt-2 text-sm px-4 py-1 bg-green-500 text-white rounded-full">
              {userProfile.userType}
            </span>
            <button
              onClick={userProfile.onEditTypeClick}
              className="text-sm text-purple-600 underline mt-1"
            >
              Edit User Type
            </button>
            <h2 className="mt-2 font-semibold text-lg">{userProfile.username}</h2>
            <p className="text-sm text-gray-600">
              Client ID: <span className="font-bold">{userProfile.clientId}</span>
            </p>
            <div className="text-xs text-gray-500 mt-4 text-center">
              <p>Sign up: {userProfile.signUpDate}</p>
              <p>Last Login: {userProfile.lastLogin}</p>
            </div>
          </div>
        </div>

        {/* Right Refer & Earn Card */}
        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-6 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2c2c2c] mb-6">Refer & Earn</h2>

          {/* Pill Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard value={referralStats.activeReferrals} label="Active Referrals" bg="#fbeedc" color="#e6852b" />
            <StatCard value={referralStats.investedReferrals} label="Referral Invested" bg="#d2f1f3" color="#11a3a3" />
            <StatCard value={`₹ ${referralStats.rewardsEarned}`} label="Rewards Earned" bg="#e4dcf5" color="#6d3cc7" />
            <StatCard value={`₹ ${referralStats.rewardsRedeemed}`} label="Rewards Redeemed" bg="#fbd6dc" color="#d43d58" kyc={referralStats.kycStatus} />
          </div>

          {/* Referral Link Section */}
          <div className="w-full rounded-xl bg-[#fff3e7] border border-[#f6d3b6] p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="font-semibold text-lg text-[#3d3d3d]">Refer-Earn-Repeat</div>
            <div className="flex flex-grow items-center rounded-full bg-white px-2 py-1 max-w-full md:max-w-md overflow-hidden">
              <input readOnly type="text" value={referralUrl} className="flex-grow px-2 py-2 text-sm text-[#3d3d3d] bg-transparent outline-none" />
              <button className="bg-[#a133ec] text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-[#8c29d0] transition">Copy Link</button>
              <button className="ml-2 rounded-full w-9 h-9 bg-[#dff0e2] flex items-center justify-center">
                <img src="/whatsapp_logo_icon.svg" alt="WhatsApp" className="w-7 h-7" />
              </button>
              <button className="ml-2 rounded-full w-9 h-9 bg-[#f8faf8] flex items-center justify-center">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Rewards Table */}
          <h3 className="text-lg font-semibold text-[#2c2c2c] mb-3">Rewards Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-[#f8f8f8] text-[#7c7c7c]">
                <tr>
                  <th className="px-4 py-2 font-medium">Referral Name</th>
                  <th className="px-4 py-2 font-medium">Signup Date</th>
                  <th className="px-4 py-2 font-medium">Status</th>
                  <th className="px-4 py-2 font-medium">Reward</th>
                  <th className="px-4 py-2 font-medium">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {rewardsTable.length === 0 ? (
                  <tr>
                    <td className="px-4 py-3 text-center text-gray-400" colSpan="5">No referrals yet.</td>
                  </tr>
                ) : (
                  rewardsTable.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{row.name}</td>
                      <td className="px-4 py-2">{row.signup}</td>
                      <td className="px-4 py-2">{row.status}</td>
                      <td className="px-4 py-2">{row.reward}</td>
                      <td className="px-4 py-2">{row.expiry}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Referral who have not invested during the validity period, will expire and only active referral will be showcased in rewards section
          </p>

          <div className="mt-4 flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-1" />
            <p className="text-xs text-gray-500">
              I hereby declare that I shall not undertake any form of selling and/or advisory activities in secondary market with respect to securities and I shall not manage the portfolio of any person referred. My role shall be strictly confined to referral only.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-6">
            <button className={`text-sm px-4 py-2 rounded-full transition ${activeTab === "terms" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActiveTab("terms")}>Terms</button>
            <button className={`text-sm px-4 py-2 rounded-full transition ${activeTab === "redemption" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActiveTab("redemption")}>Redemption</button>
          </div>

          {/* Accordion */}
          <div className="space-y-4 mt-6">
            {(activeTab === "terms" ? termsAccordion : redemptionAccordion).map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({ value, label, bg, color, kyc }) {
  return (
    <div className="relative rounded-2xl p-4 text-center" style={{ backgroundColor: bg }}>
      <div className="text-xl font-bold" style={{ color }}>{value}</div>
      <div className="text-sm font-medium text-[#5f5f5f]">{label}</div>
      {kyc && (
        <div className="absolute top-2 right-2 bg-[#d43d58] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          KYC
        </div>
      )}
    </div>
  );
}

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-3 font-medium flex justify-between items-center">
        {title}
        <span className="text-lg">{open ? "-" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{content}</div>}
    </div>
  );
}

