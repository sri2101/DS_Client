// import { Card, CardContent } from "@/components/ui/card"
// import { Umbrella, Wallet, Flame, Headphones, Star } from "lucide-react"

// const benefits = [
//   {
//     icon: <Umbrella className="text-orange-500 w-10 h-10" />,
//     title: "Customised Itineraries",
//     description:
//       "Enjoy our bespoke tour packages that can be tailored according to your preferences for personalised experience.",
//   },
//   {
//     icon: <Wallet className="text-blue-500 w-10 h-10" />,
//     title: "Wallet-Friendly Prices",
//     description:
//       "Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.",
//   },
  
//   {
//     icon: <Flame className="text-red-500 w-10 h-10" />,
//     title: "Exciting Deals",
//     description:
//       "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value-for-money.",
//   },
//   {
//     icon: <Headphones className="text-purple-500 w-10 h-10" />,
//     title: "24/7 Support",
//     description:
//       "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
//   },
// ]

// const BookingBenefits = () => {
//   return (
//     <section className="py-16 px-4 bg-[url('/background-pattern.png')] bg-cover bg-no-repeat md:pl-50 md:pr-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mb-12 gap-6">
//           <div>
//             <h2 className="text-3xl font-bold">Benefits of Booking With Us</h2>
//             <p className="text-muted-foreground mt-2">
//               Discover the unrivalled benefits that promise memorable journeys all along.
//             </p>
//           </div>
//           <div className="flex items-center bg-green-50 border border-green-200 rounded-xl px-4 py-2 space-x-3 shadow-sm">
//             <span className="font-medium text-lg">Great</span>
//             <div className="flex space-x-1 text-green-600">
//               {[...Array(4)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 fill-green-600 stroke-green-600" />
//               ))}
//               <Star className="w-4 h-4 fill-slate-300 stroke-slate-300" />
//             </div>
//             <span className="text-sm text-gray-700">13,308 reviews on</span>
//             <span className="text-green-600 font-semibold">★ Trustpilot</span>
//           </div>
//         </div>    
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {benefits.map((benefit, idx) => (
//             <Card key={idx} className="rounded-2xl border-blue-200 shadow-md">
//               <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
//                 {benefit.icon}
//                 <h3 className="font-semibold text-lg">{benefit.title}</h3>
//                 <p className="text-sm text-muted-foreground">{benefit.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// export default BookingBenefits;




import { Card, CardContent } from "@/components/ui/card";
import { Umbrella, Wallet, Flame, Headphones, Star, Coffee, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Umbrella className="text-orange-500 w-8 h-8" />,
    title: "Customised Itineraries",
    description:
      "Enjoy our bespoke tour packages that can be tailored according to your preferences for personalised experience.",
  },
  {
    icon: <Coffee className="text-yellow-500 w-8 h-8" />,
    title: "Premium Comfort",
    description:
      "Experience the utmost comfort during your travels with premium amenities and exclusive services.",
  },
  {
    icon: <Wallet className="text-blue-500 w-8 h-8" />,
    title: "Wallet-Friendly Prices",
    description:
      "Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.",
  },
  {
    icon: <Flame className="text-red-500 w-8 h-8" />,
    title: "Exciting Deals",
    description:
      "Our platform comprises perfect deals and discounts on all exclusive holiday packages to ensure value-for-money.",
  },
  {
    icon: <DollarSign className="text-green-500 w-8 h-8" />,
    title: "Transparent Pricing",
    description:
      "No hidden costs! All our holiday packages provide complete transparency in pricing for peace of mind.",
  },
  {
    icon: <Headphones className="text-purple-500 w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
  },
];

const BookingBenefits = () => {
  return (
    <section className="py-16 px-4 bg-[url('/background-pattern.png')] bg-cover bg-no-repeat">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold">Benefits of Booking With Us</h2>
            <p className="text-muted-foreground mt-2">
              Discover the unrivalled benefits that promise memorable journeys all along.
            </p>
          </div>
          <div className="flex items-center bg-green-50 border border-green-200 rounded-xl px-4 py-2 space-x-3 shadow-sm">
            <span className="font-medium text-lg">Great</span>
            <div className="flex space-x-1 text-green-600">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-600 stroke-green-600" />
              ))}
              <Star className="w-4 h-4 fill-slate-300 stroke-slate-300" />
            </div>
            <span className="text-sm text-gray-700">13,308 reviews on</span>
            <span className="text-green-600 font-semibold">★ Trustpilot</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="rounded-xl border-blue-200 shadow-md">
              <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                {benefit.icon}
                <h3 className="font-semibold text-sm">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingBenefits;

