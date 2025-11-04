import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { X } from "lucide-react";

const HotelOffers = () => {
  const [selectedPromo, setSelectedPromo] = useState("EMTHOTELS");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const promoList = [
    {
      code: "EMTHOTELS",
      desc: "EMTHOTELS – Get Rs. 203 Off on hotel booking",
      discount: "₹203",
    },
    {
      code: "GRAB20",
      desc: "GRAB20 – Get Up to 20% instant Off",
      discount: "20%",
    },
    {
      code: "UPIPAY",
      desc: "UPIPAY – Get up to Rs.1500 Off on Hotel Booking",
      discount: "₹1500",
    },
    {
      code: "EMTSCB",
      desc: "Use this coupon and get Rs.339 OFF for payments made via Standard Chartered Bank Credit Cards.",
      discount: "₹339",
    },
  ];

  const handleApplyOrRemove = () => {
    if (selectedPromo) {
      setSelectedPromo(""); // Remove
    }
  };

  const handlePromoCardClick = (code, context) => {
    setSelectedPromo(code);
    if (context === "drawer") setDrawerOpen(false);
  };

  const renderPromoCard = (context = "main") => (
    <div className="space-y-3">
      {promoList.map((item) => {
        const isSelected = selectedPromo === item.code;
        return (
          <label
            key={item.code}
            onClick={() => handlePromoCardClick(item.code, context)}
            className={`flex items-start gap-3 px-4 py-3 rounded-md cursor-pointer border transition-all duration-200 ${
              isSelected
                ? "bg-blue-50 border-blue-500"
                : "bg-[#f5f5f5] border border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={`promo-${context}`}
              checked={isSelected}
              readOnly
              className="accent-blue-600 mt-1"
            />
            <div className="flex-1">
              <div className="text-sm font-bold text-gray-800">
                <span className="inline-block border border-dashed border-gray-400 px-2 py-0.5 rounded-sm bg-white text-xs">
                  {item.code}
                </span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
            </div>
          </label>
        );
      })}
    </div>
  );

  return (
    <>
      <Card className="rounded-xl border shadow-sm overflow-hidden p-0">
        <div className="bg-gradient-to-r from-[#d0e8ff] to-[#fcb4c3] px-4 py-2 flex items-center justify-between rounded-t-xl">
          <h3 className="font-semibold text-sm">Offers & Promo Codes</h3>
          <img
            src="https://www.easemytrip.com/Hotels/img/coupons.svg"
            alt="offer"
            className="w-5 h-5"
          />
        </div>

        <div className="bg-white p-4 text-sm text-gray-700 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={selectedPromo}
              onChange={(e) => setSelectedPromo(e.target.value)}
              placeholder="ENTER PROMO CODE"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 font-semibold placeholder-gray-400"
            />
            <button
              onClick={handleApplyOrRemove}
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-all"
            >
              {selectedPromo ? "Remove" : "Apply"}
            </button>
          </div>

          {selectedPromo && (
            <p className="text-xs text-green-600 font-medium">
              Congratulations! Instant Discount of{" "}
              {promoList.find((p) => p.code === selectedPromo)?.discount || "₹0"} has
              been applied successfully.
            </p>
          )}

          {renderPromoCard("main")}

          <button
            onClick={() => setDrawerOpen(true)}
            className="text-xs text-blue-600 underline text-center block mt-2 font-medium"
          >
            View All Offers
          </button>
        </div>
      </Card>

      {/* Drawer for All Offers */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
        <DrawerContent className="w-full max-w-sm ml-auto shadow-lg rounded-none border-l bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">All Offers & Promo Codes</h2>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 py-3 space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={selectedPromo}
                onChange={(e) => setSelectedPromo(e.target.value)}
                placeholder="ENTER PROMO CODE"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 font-semibold"
              />
              <button
                onClick={handleApplyOrRemove}
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-all"
              >
                {selectedPromo ? "Remove" : "Apply"}
              </button>
            </div>

            {selectedPromo && (
              <p className="text-xs text-green-600 font-medium">
                Congratulations! Instant Discount of{" "}
                {promoList.find((p) => p.code === selectedPromo)?.discount || "₹0"} has
                been applied successfully.
              </p>
            )}

            {renderPromoCard("drawer")}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HotelOffers;




















// import React, { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Drawer, DrawerContent } from "@/components/ui/drawer";
// import { X } from "lucide-react";

// const HotelOffers = () => {
//   const [selectedPromo, setSelectedPromo] = useState("EMTHOTELS");
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const promoList = [
//     {
//       code: "EMTHOTELS",
//       desc: "EMTHOTELS – Get Rs. 203 Off on hotel booking",
//       discount: "₹203",
//     },
//     {
//       code: "GRAB20",
//       desc: "GRAB20 – Get Up to 20% instant Off",
//       discount: "20%",
//     },
//     {
//       code: "UPIPAY",
//       desc: "UPIPAY – Get up to Rs.1500 Off on Hotel Booking",
//       discount: "₹1500",
//     },
//     {
//       code: "EMTSCB",
//       desc: "Use this coupon and get Rs.339 OFF for payments made via Standard Charted Bank Credit Cards.",
//       discount: "₹339",
//     },
//   ];

//   const renderPromoCard = (context = "main") => (
//     <div className="space-y-3">
//       {promoList.map((item) => {
//         const isSelected = selectedPromo === item.code;
//         return (
//           <label
//             key={item.code}
//             onClick={() => {
//               setSelectedPromo(item.code);
//               if (context === "drawer") setDrawerOpen(false);
//             }}
//             className={`flex items-start gap-3 px-4 py-3 rounded-md cursor-pointer border transition-all duration-200 ${
//               isSelected
//                 ? "bg-blue-50 border-blue-500"
//                 : "bg-[#f5f5f5] border border-gray-300"
//             }`}
//           >
//             <input
//               type="radio"
//               name={`promo-${context}`}
//               checked={isSelected}
//               readOnly
//               className="accent-blue-600 mt-1"
//             />
//             <div className="flex-1">
//               <div className="text-sm font-bold text-gray-800">
//                 <span className="inline-block border border-dashed border-gray-400 px-2 py-0.5 rounded-sm bg-white text-xs">
//                   {item.code}
//                 </span>
//               </div>
//               <div className="text-xs text-gray-600 mt-1">{item.desc}</div>
//             </div>
//           </label>
//         );
//       })}
//     </div>
//   );

//   return (
//     <>
//       <Card className="rounded-xl border shadow-sm overflow-hidden p-0">
//         <div className="bg-gradient-to-r from-[#d0e8ff] to-[#fcb4c3] px-4 py-2 flex items-center justify-between rounded-t-xl">
//           <h3 className="font-semibold text-sm">Offers & Promo Codes</h3>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/9462/9462067.png"
//             alt="offer"
//             className="w-5 h-5"
//           />
//         </div>

//         <div className="bg-white p-4 text-sm text-gray-700 space-y-4">
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               value={selectedPromo}
//               placeholder="ENTER PROMO CODE"
//               onChange={(e) => setSelectedPromo(e.target.value)}
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 font-semibold placeholder-gray-400"
//             />
//             <button
//               onClick={() => {
//                 if (selectedPromo) {
//                   setSelectedPromo("");
//                 }
//               }}
//               className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-all"
//             >
//               {selectedPromo ? "Remove" : "Apply"}
//             </button>
//           </div>
//           {selectedPromo && (
//             <p className="text-xs text-green-600 font-medium">
//               Congratulations! Instant Discount of{" "}
//               {promoList.find((p) => p.code === selectedPromo)?.discount} has
//               been applied successfully.
//             </p>
//           )}
//           {renderPromoCard("main")}
//           <button
//             onClick={() => setDrawerOpen(true)}
//             className="text-xs text-blue-600 underline text-center block mt-2 font-medium"
//           >
//             View All Offers
//           </button>
//         </div>
//       </Card>
//       <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
//         <DrawerContent className="w-full max-w-sm ml-auto shadow-lg rounded-none border-l bg-white">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-lg font-semibold">All Offers & Promo Codes</h2>
//             <button
//               onClick={() => setDrawerOpen(false)}
//               className="p-1 hover:bg-gray-100 rounded-full"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 py-3 space-y-4">
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={selectedPromo}
//                 placeholder="ENTER PROMO CODE"
//                 onChange={(e) => setSelectedPromo(e.target.value)}
//                 className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 font-semibold placeholder-gray-400"
//               />
//               <button
//                 onClick={() => setSelectedPromo("")}
//                 className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition-all"
//               >
//                 {selectedPromo ? "Remove" : "Apply"}
//               </button>
//             </div>
//             {selectedPromo && (
//               <p className="text-xs text-green-600 font-medium">
//                 Congratulations! Instant Discount of{" "}
//                 {promoList.find((p) => p.code === selectedPromo)?.discount} has
//                 been applied successfully.
//               </p>
//             )}
//             {renderPromoCard("drawer")}
//           </div>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// };

// export default HotelOffers;









