// "use client";

// import { useState } from "react";
// import { MessageSquare } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { cn } from "@/lib/utils";

// export default function PlanYourTrip() {
//   const [adult, setAdult] = useState(2);
//   const [child, setChild] = useState(0);
//   const [infant, setInfant] = useState(0);

//   const increment = (setter, value) => setter(value + 1);
//   const decrement = (setter, value) => {
//     if (value > 0) setter(value - 1);
//   };

//   return (
//     <Dialog>
//       {/* Floating Button Trigger */}
//       <DialogTrigger asChild>
//         <button
//           className={cn(
//             "fixed bottom-6 right-6 flex items-center gap-2 bg-white shadow-lg border border-orange-200 text-black px-4 py-2 rounded-full hover:shadow-xl transition-all z-50"
//           )}
//         >
//           <MessageSquare className="text-orange-500" size={18} />
//           <span className="font-semibold">Plan Your Trip</span>
//         </button>
//       </DialogTrigger>

//       {/* Dialog Content */}
//       <DialogContent
//         className={cn(
//           // ✅ Mobile bottom sheet
//           "sm:rounded-lg sm:max-w-lg sm:top-1/2 sm:-translate-y-1/2",
//           "fixed bottom-0 inset-x-0 h-[90%] sm:h-auto sm:relative sm:inset-auto sm:translate-y-0",
//           "overflow-y-auto"
//         )}
//       >
//         <DialogHeader>
//           <DialogTitle className="text-lg font-semibold">
//             Want To Go For A Memorable Holiday?
//           </DialogTitle>
//         </DialogHeader>

//         {/* Form */}
//         <form className="space-y-3">
//           <input
//             type="text"
//             placeholder="Package Name / Destination Name"
//             className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//           />

//           <div className="grid grid-cols-2 gap-3">
//             <input type="date" className="w-full border rounded-md px-3 py-2" />
//             <input
//               type="text"
//               placeholder="City of Departure"
//               className="w-full border rounded-md px-3 py-2"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border rounded-md px-3 py-2"
//             />
//             <input
//               type="tel"
//               placeholder="Mobile No."
//               className="w-full border rounded-md px-3 py-2"
//             />
//           </div>

//           <input
//             type="email"
//             placeholder="Your E-mail Address"
//             className="w-full border rounded-md px-3 py-2"
//           />

//           {/* Travellers Counter */}
//           <div className="grid grid-cols-3 gap-2 text-center">
//             {[
//               { label: "Adult", value: adult, setter: setAdult },
//               { label: "Child", value: child, setter: setChild },
//               { label: "Infant", value: infant, setter: setInfant },
//             ].map(({ label, value, setter }) => (
//               <div key={label}>
//                 <label className="block text-sm mb-1">{label}</label>
//                 <div className="flex items-center justify-center gap-2">
//                   <button
//                     type="button"
//                     onClick={() => decrement(setter, value)}
//                     className="w-8 h-8 flex items-center justify-center border rounded-full text-lg hover:bg-gray-100"
//                   >
//                     −
//                   </button>
//                   <span className="w-6 text-center">{value}</span>
//                   <button
//                     type="button"
//                     onClick={() => increment(setter, value)}
//                     className="w-8 h-8 flex items-center justify-center border rounded-full text-lg hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
//           >
//             Enquire Now
//           </button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }


import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function PlanYourTrip() {
  const [open, setOpen] = useState(false);

  // form state
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [packageName, setPackageName] = useState("");
  const [date, setDate] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => value > 0 && setter(value - 1);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send form to API / service
    // close dialog after submit
    setOpen(false);
    // optional: show toast or feedback here
    // alert("Enquiry submitted");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Floating Button Trigger */}
      <DialogTrigger asChild>
        <button
          aria-label="Plan your trip"
          className={cn(
            "fixed bottom-6 right-6 z-50 flex items-center gap-2",
            "bg-white border border-orange-200 text-black shadow-lg px-4 py-2 rounded-full",
            "hover:shadow-xl transition-all"
          )}
        >
          <MessageSquare className="text-orange-500" size={18} />
          <span className="font-semibold">Plan Your Trip</span>
        </button>
      </DialogTrigger>

      {/* Single DialogContent that adapts responsively */}
      {/* <DialogContent
        className={cn(
          // base
          "bg-white z-50 overflow-y-auto shadow-lg",
          // mobile bottom sheet
          "fixed inset-x-0 bottom-0 h-[90%] rounded-t-lg p-5",
          // desktop centered modal (overrides mobile positioning)
          "sm:inset-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-lg sm:h-auto sm:rounded-lg sm:p-6"
        )}
      > */}
      {/* <DialogContent
        className={cn(
          // base
          "bg-white z-50 overflow-y-auto shadow-lg",
          // mobile bottom sheet
          "fixed inset-x-0 bottom-0 h-[90%] rounded-t-lg p-5",
          // desktop centered modal (>=768px)
          "md:inset-auto md:bottom-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:h-auto md:rounded-lg md:p-6"
        )}
      > */}
      <DialogContent
        className={cn(
          "bg-white z-50 overflow-y-auto shadow-lg p-5 rounded-lg",
          "fixed inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-[90%] h-[60%] no-scrollbar",
        )}
      >


        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Want To Go For A Memorable Holiday?
          </DialogTitle>

          {/* fixes aria-describedby warning */}
          <DialogDescription id="plan-trip-desc" className="sr-only">
            Fill the form below to enquire about packages or destinations.
          </DialogDescription>
        </DialogHeader>

        <form aria-describedby="plan-trip-desc" onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="package">
              Package or Destination
            </label>
            <input
              id="package"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              type="text"
              placeholder="Package Name / Destination Name"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="date">
                Travel Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="departure">
                City of Departure
              </label>
              <input
                id="departure"
                type="text"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                placeholder="City of Departure"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="mobile">
                Mobile No.
              </label>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile No."
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail Address"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Travellers Counter */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Adult", value: adult, setter: setAdult },
              { label: "Child", value: child, setter: setChild },
              { label: "Infant", value: infant, setter: setInfant },
            ].map(({ label, value, setter }) => (
              <div key={label}>
                <div className="text-sm mb-1">{label}</div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    aria-label={`Decrease ${label}`}
                    onClick={() => decrement(setter, value)}
                    className="w-8 h-8 flex items-center justify-center border rounded-full text-lg hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="w-8 text-center" aria-live="polite">
                    {value}
                  </span>

                  <button
                    type="button"
                    aria-label={`Increase ${label}`}
                    onClick={() => increment(setter, value)}
                    className="w-8 h-8 flex items-center justify-center border rounded-full text-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Enquire Now
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// helper functions used above
function increment(setter, value) {
  setter(value + 1);
}
function decrement(setter, value) {
  if (value > 0) setter(value - 1);
}
