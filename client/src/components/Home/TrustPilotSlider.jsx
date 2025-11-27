// import { Card, CardContent } from "@/components/ui/card"
// import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
// import { useRef } from "react"

// const reviews = [
//   {
//     title: "YES I AM VERY SATISFI...",
//     content: "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. THE STAFF IS",
//     author: "customer",
//     time: "4 hours ago",
//   },
//   {
//     title: "It was extremely easy ...",
//     content: "It was extremely easy to book on your sight.",
//     author: "ASHOKKUMA...",
//     time: "10 hours ago",
//   },
//   {
//     title: "Good service",
//     content: "Good service",
//     author: "customer",
//     time: "11 hours ago",
//   },
//   {
//     title: "Easy access to choose...",
//     content: "Easy access to choose rooms",
//     author: "customer",
//     time: "15 hours ago",
//   },
//   {
//     title: "Excellent and shown b...",
//     content: "Excellent and shown best price among others. Happy",
//     author: "Vamsi",
//     time: "15 hours ago",
//   },
// ]

// const TrustpilotSlider =() =>  {
//   const containerRef = useRef(null)

//   const scroll = (direction) => {
//     const scrollAmount = 300
//     if (direction === "left") containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
//     else containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
//   }

//   return (
//     <section className="bg-[url('/trust-bg.png')] bg-cover bg-no-repeat py-16 text-black">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* 💬 TrustPilot Review Slider */}
//         <div className="relative mb-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>

//           <div
//             ref={containerRef}
//             className="flex overflow-x-auto no-scrollbar space-x-4 py-2 px-4"
//           >
//             {reviews.map((review, index) => (
//               <Card key={index} className="min-w-[250px] max-w-sm flex-shrink-0">
//                 <CardContent className="p-4 space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="flex space-x-1 text-green-600">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-green-600 stroke-green-600" />
//                       ))}
//                     </div>
//                     <div className="flex items-center space-x-1 text-sm text-muted-foreground">
//                       <ShieldCheck className="w-4 h-4 text-blue-400" />
//                       <span>Verified</span>
//                     </div>
//                   </div>
//                   <h3 className="font-bold text-sm line-clamp-1">{review.title}</h3>
//                   <p className="text-sm text-muted-foreground line-clamp-2">{review.content}</p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold lowercase">{review.author}</span>, {review.time}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//   <div>
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Holiday With DeltaSafari</h2>
//     <p className="text-lg text-muted-foreground mb-4">
//       Book Your Holiday Packages With DeltaSafari and discover a world of meticulously curated, affordable itineraries
//       designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that
//       every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both,
//       our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience
//       the perfect escape with our exceptional itineraries.
//     </p>

//     <h3 className="font-semibold mb-2">Enjoy Seamless Booking At Budget-Friendly Prices!</h3>
//     <p className="mb-4">
//       Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations,
//       preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach
//       escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a
//       smooth start to your travel adventure.
//     </p>
//     <p className="mb-4">
//       Unlock unbeatable savings on your next getaway with us, your ultimate travel companion! Discover a world of affordable
//       packages customised to meet the diverse needs of every traveller. Embark on a mountain escape or a city adventure with our
//       exclusive travel at competitive prices and leverage exclusive discounts, ensuring your travel is as economical as it is
//       enjoyable. Don’t miss out on it, and book your next vacation with us to experience the perfect blend of luxury and value!
//     </p>

//     <h3 className="font-semibold mb-2">Create Memories That Last A Lifetime!</h3>
//     <p>
//       Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure
//       that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family,
//       we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details,
//       guaranteeing a seamless and memorable experience. Start your adventure with DeltaSafari today and cherish every moment of your
//       journey.
//     </p>
//   </div>
// </div>
//     </section>
//   )
// }
// export default TrustpilotSlider;



// import { Card, CardContent } from "@/components/ui/card"
// import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
// import { useRef } from "react"

// const reviews = [
//   {
//     title: "YES I AM VERY SATISFI...",
//     content: "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. THE STAFF IS",
//     author: "customer",
//     time: "4 hours ago",
//   },
//   {
//     title: "It was extremely easy ...",
//     content: "It was extremely easy to book on your sight.",
//     author: "ASHOKKUMA...",
//     time: "10 hours ago",
//   },
//   {
//     title: "Good service",
//     content: "Good service",
//     author: "customer",
//     time: "11 hours ago",
//   },
//   {
//     title: "Easy access to choose...",
//     content: "Easy access to choose rooms",
//     author: "customer",
//     time: "15 hours ago",
//   },
//   {
//     title: "Excellent and shown b...",
//     content: "Excellent and shown best price among others. Happy",
//     author: "Vamsi",
//     time: "15 hours ago",
//   },
// ]

// const TrustpilotSlider = () => {
//   const containerRef = useRef(null)

//   const scroll = (direction) => {
//     const scrollAmount = 300
//     containerRef.current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <section className="bg-[url('/trust-bg.png')] bg-cover bg-no-repeat py-16 text-black">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Slider Navigation */}
//         <div className="relative mb-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>

//           <div
//             ref={containerRef}
//             className="flex overflow-x-auto no-scrollbar space-x-4 py-2 px-4"
//           >
//             {reviews.map((review, index) => (
//               <Card
//                 key={index}
//                 className="min-w-[280px] max-w-[280px] h-[220px] flex flex-col justify-between flex-shrink-0 rounded-xl border shadow-sm"
//               >
//                 <CardContent className="p-4 flex flex-col justify-between h-full">

//                   {/* ⭐ Stars + Google & Verified tick */}
//                   <div className="flex items-center justify-between mb-2">

//                     {/* GREEN STARS */}
//                     <div className="flex space-x-1 text-green-600">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-4 h-4 fill-green-600 stroke-green-600"
//                         />
//                       ))}
//                     </div>

//                     {/* Verified tick + Google */}
//                     <div className="flex items-center space-x-2">

//                       {/* Blue tick icon */}
//                       <img
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Verification-badge.png/640px-Verification-badge.png"
//                         alt="verified"
//                         className="w-4 h-4"
//                       />

//                       <img
//                         src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
//                         alt="Google"
//                         className="w-5 h-5"
//                       />
//                     </div>

//                   </div>

//                   {/* Title */}
//                   <h3 className="font-bold text-sm line-clamp-1">{review.title}</h3>

//                   {/* Description */}
//                   <p className="text-sm text-gray-600 line-clamp-2">{review.content}</p>

//                   {/* Footer - author + time */}
//                   <p className="text-sm text-gray-500 mt-3">
//                     <span className="font-semibold lowercase">{review.author}</span>, {review.time}
//                   </p>

//                 </CardContent>
//               </Card>

//             ))}
//           </div>
//         </div>

//         {/* Text Section Below — unchanged */}
//       </div>
//     </section>
//   )
// }

// export default TrustpilotSlider




// import { Card, CardContent } from "@/components/ui/card"
// import { Star, ChevronLeft, ChevronRight } from "lucide-react"
// import { useRef } from "react"

// const reviews = [
//   {
//     title: "Very Satisfied with DeltaSafari",
//     content:
//       "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. The staff was extremely supportive and provided proper guidance. The overall booking experience was very smooth.",
//     author: "Customer",
//     time: "4 hours ago",
//   },
//   {
//     title: "Smooth & Easy Booking",
//     content:
//       "It was extremely easy to book on your site. I found exactly what I was looking for and the entire process was effortless. Highly recommended!",
//     author: "Ashokkumar",
//     time: "10 hours ago",
//   },
//   {
//     title: "Good service",
//     content:
//       "Good service, efficient support, and quick query resolution. The team ensured everything was handled professionally.",
//     author: "Customer",
//     time: "11 hours ago",
//   },
//   {
//     title: "Hassle-free Experience",
//     content:
//       "Easy access to choose rooms and compare options. The website layout made it simple to browse multiple choices.",
//     author: "Customer",
//     time: "15 hours ago",
//   },
//   {
//     title: "Best Price & Good Support",
//     content:
//       "Excellent and shown best price among others. Happy with the support and transparency throughout the process.",
//     author: "Vamsi",
//     time: "15 hours ago",
//   },
// ]

// export default function TrustpilotSlider() {
//   const containerRef = useRef(null)

//   const scroll = (dir) => {
//     containerRef.current?.scrollBy({
//       left: dir === "left" ? -350 : 350,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 relative">

//         {/* Scroll Buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         {/* Slider Scroll Container */}
//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto no-scrollbar space-x-5 px-2 py-4"
//         >
//           {reviews.map((review, idx) => (
//             <Card
//               key={idx}
//               className="min-w-[360px] max-w-[360px] h-[300px] flex flex-col justify-between rounded-2xl border shadow-sm bg-white"
//             >
//               <CardContent className="p-5 flex flex-col justify-between h-full">

//                 {/* AVATAR + NAME + GOOGLE BADGE */}
//                 <div className="flex items-center justify-between mb-2">

//                   <div className="flex items-center gap-3">
//                     {/* Avatar */}
//                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-lg">
//                       {review.author?.[0]?.toUpperCase()}
//                     </div>

//                     {/* Name + Verified + Time */}
//                     <div className="flex flex-col leading-tight">
//                       <div className="flex items-center gap-1">
//                         <span className="font-semibold text-gray-900 text-sm">{review.author}</span>

//                         {/* Blue tick */}
//                         <img
//                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Verification-badge.png/640px-Verification-badge.png"
//                           alt="verified"
//                           className="w-4 h-4"
//                         />
//                       </div>

//                       <span className="text-gray-500 text-xs">{review.time}</span>
//                     </div>
//                   </div>

//                   {/* Google Logo */}
//                   <img
//                     src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
//                     className="w-6 h-6"
//                     alt="Google"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-[15px] font-bold text-gray-900 line-clamp-1 mb-1">
//                   {review.title}
//                 </h3>

//                 {/* Stars */}
//                 <div className="flex items-center space-x-1 text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 fill-yellow-500 stroke-yellow-500"
//                     />
//                   ))}
//                 </div>

//                 {/* Review Text */}
//                 <p className="text-sm text-gray-700 line-clamp-3">{review.content}</p>

//                 {/* Read More */}
//                 <button className="text-sm text-gray-500 underline mt-3 text-left">
//                   Read more
//                 </button>

//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// import { Card, CardContent } from "@/components/ui/card"
// import { Star, ChevronLeft, ChevronRight } from "lucide-react"
// import { useRef } from "react"

// const reviews = [
//   {
//     title: "Very Satisfied with DeltaSafari",
//     content:
//       "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. The staff was extremely supportive and provided proper guidance throughout the journey.",
//     author: "Manisha sharma",
//     avatar: "", // no image → will use fallback initial
//     time: "4 hours ago",
//   },
//   {
//     title: "Smooth & Easy Booking",
//     content:
//       "It was extremely easy to book on your site. I found exactly what I was looking for and the entire process was effortless. Highly recommended!",
//     author: "Ashokkumar",
//     avatar: "https://randomuser.me/api/portraits/men/31.jpg",
//     time: "10 hours ago",
//   },
//   {
//     title: "Good service",
//     content:
//       "Good service, efficient support, and quick query resolution. The team ensured everything was handled professionally.",
//     author: "Vamsi",
//     avatar: "",
//     time: "11 hours ago",
//   },
//   {
//     title: "Hassle-free Experience",
//     content:
//       "Easy access to choose rooms and compare options. The website layout made it simple to browse multiple choices. Loved it!",
//     author: "Alexsa Noel",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     time: "15 hours ago",
//   },
//   {
//     title: "Best Price & Support",
//     content:
//       "Excellent and shown best price among others. Happy with the support and transparency throughout the process.",
//     author: "Meghana",
//     avatar: "",
//     time: "15 hours ago",
//   },
// ]

// export default function TrustpilotSlider() {
//   const containerRef = useRef(null)

//   const scroll = (dir) => {
//     containerRef.current?.scrollBy({
//       left: dir === "left" ? -350 : 350,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 relative">

//         {/* Scroll Buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg border rounded-full p-2 z-10"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         {/* Slider Track */}
//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto no-scrollbar space-x-5 px-2 py-4"
//         >
//           {reviews.map((review, idx) => (
//             <Card
//               key={idx}
//               className="min-w-[360px] max-w-[360px] h-[310px] flex flex-col justify-between rounded-2xl border shadow-sm bg-white"
//             >
//               <CardContent className="p-5 flex flex-col justify-between h-full">

//                 {/* AVATAR + NAME + GOOGLE BADGE */}
//                 <div className="flex items-center justify-between">

//                   {/* Avatar + Name */}
//                   <div className="flex items-center gap-3">

//                     {/* Avatar with fallback */}
//                     {review.avatar ? (
//                       <img
//                         src={review.avatar}
//                         alt={review.author}
//                         className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
//                         onError={(e) => {
//                           e.target.src = "";
//                         }}
//                       />
//                     ) : (
//                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-lg shadow-sm">
//                         {review.author?.[0]?.toUpperCase()}
//                       </div>
//                     )}

//                     {/* Name + Verified + Time */}
//                     <div className="flex flex-col leading-tight">
//                       <div className="flex items-center gap-1">
//                         <span className="font-semibold text-gray-900 text-sm">
//                           {review.author}
//                         </span>

//                         {/* Blue tick */}
//                         <img
//                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Verification-badge.png/640px-Verification-badge.png"
//                           alt="verified"
//                           className="w-4 h-4"
//                         />
//                       </div>

//                       <span className="text-gray-500 text-xs">{review.time}</span>
//                     </div>
//                   </div>

//                   {/* Google Logo */}
//                   <img
//                     src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
//                     className="w-6 h-6"
//                     alt="Google"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-3 text-[15px] font-bold text-gray-900 line-clamp-1">
//                   {review.title}
//                 </h3>

//                 {/* Stars */}
//                 <div className="flex items-center space-x-1 text-yellow-500 mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-4 h-4 fill-yellow-500 stroke-yellow-500"
//                     />
//                   ))}
//                 </div>

//                 {/* Content */}
//                 <p className="mt-2 text-sm text-gray-700 line-clamp-3">
//                   {review.content}
//                 </p>

//                 {/* Read More (optional expand future) */}
//                 <button className="text-sm text-gray-500 underline mt-3 text-left">
//                   Read more
//                 </button>

//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Holiday With DeltaSafari</h2>
//           <p className="text-lg text-muted-foreground mb-4">
//             Book Your Holiday Packages With DeltaSafari and discover a world of meticulously curated, affordable itineraries
//             designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that
//             every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both,
//             our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience
//             the perfect escape with our exceptional itineraries.
//           </p>

//           <h3 className="font-semibold mb-2">Enjoy Seamless Booking At Budget-Friendly Prices!</h3>
//           <p className="mb-4">
//             Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations,
//             preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach
//             escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a
//             smooth start to your travel adventure.
//           </p>
//           <p className="mb-4">
//             Unlock unbeatable savings on your next getaway with us, your ultimate travel companion! Discover a world of affordable
//             packages customised to meet the diverse needs of every traveller. Embark on a mountain escape or a city adventure with our
//             exclusive travel at competitive prices and leverage exclusive discounts, ensuring your travel is as economical as it is
//             enjoyable. Don’t miss out on it, and book your next vacation with us to experience the perfect blend of luxury and value!
//           </p>

//           <h3 className="font-semibold mb-2">Create Memories That Last A Lifetime!</h3>
//           <p>
//             Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure
//             that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family,
//             we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details,
//             guaranteeing a seamless and memorable experience. Start your adventure with DeltaSafari today and cherish every moment of your
//             journey.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }









import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const reviews = [
  {
    title: "Very Satisfied with DeltaSafari",
    content:
      "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. The staff was extremely supportive and provided proper guidance throughout the journey.",
    author: "Manisha sharma",
    avatar: "",
    time: "4 hours ago",
  },
  {
    title: "Smooth & Easy Booking",
    content:
      "It was extremely easy to book on your site. I found exactly what I was looking for and the entire process was effortless. Highly recommended!",
    author: "Ashokkumar",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    time: "10 hours ago",
  },
  {
    title: "Good service",
    content:
      "Good service, efficient support, and quick query resolution. The team ensured everything was handled professionally.",
    author: "Vamsi",
    avatar: "",
    time: "11 hours ago",
  },
  {
    title: "Hassle-free Experience",
    content:
      "Easy access to choose rooms and compare options. The website layout made it simple to browse multiple choices. Loved it!",
    author: "Alexsa Noel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "15 hours ago",
  },
  {
    title: "Best Price & Support",
    content:
      "Excellent and shown best price among others. Happy with the support and transparency throughout the process.",
    author: "Meghana",
    avatar: "",
    time: "15 hours ago",
  },
]

export default function TrustpilotSlider() {
  const containerRef = useRef(null)

  const scroll = (dir) => {
    containerRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 relative">

        <div className="relative flex items-center">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 bg-white shadow-lg border rounded-full p-2 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider Track */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar space-x-5 px-2 py-4"
          >
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="min-w-[330px] max-w-[300px] h-[230px] flex flex-col justify-between rounded-2xl border shadow-sm bg-white"
              >
                <CardContent className="p-3 flex flex-col justify-between h-full">

                  {/* Top Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">

                      {/* Smaller Avatar */}
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-11 h-11 rounded-full object-cover border border-gray-200 shadow-sm ml-2"
                          onError={(e) => (e.target.src = "")}
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm shadow-sm">
                          {review.author?.[0]?.toUpperCase()}
                        </div>
                      )}

                      <div className="leading-tight">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-gray-900 text-sm">
                            {review.author}
                          </span>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Verification-badge.png/640px-Verification-badge.png"
                            alt="verified"
                            className="w-3 h-3"
                          />
                        </div>

                        <span className="text-gray-500 text-[10px]">{review.time}</span>
                      </div>
                    </div>

                    <img
                      src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                      className="w-7 h-7 mr-3"
                      alt="Google"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-[15px] font-semibold text-gray-900 line-clamp-1">
                    {review.title}
                  </h3>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-500 stroke-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mt-1 text-xs text-gray-700 leading-snug line-clamp-2">
                    {review.content}
                  </p>

                  <button className="text-xs text-gray-500 underline mt-1 text-left">
                    Read more
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 bg-white shadow-lg border rounded-full p-2 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content Below */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Holiday With DeltaSafari</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Book Your Holiday Packages With DeltaSafari and discover a world of meticulously curated, affordable itineraries
            designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that
            every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both,
            our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience
            the perfect escape with our exceptional itineraries.
          </p>

          <h3 className="font-semibold mb-2">Enjoy Seamless Booking At Budget-Friendly Prices!</h3>
          <p className="mb-4">
            Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations,
            preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach
            escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a
            smooth start to your travel adventure.
          </p>
          <p className="mb-4">
             Unlock unbeatable savings on your next getaway with us, your ultimate travel companion! Discover a world of affordable
             packages customised to meet the diverse needs of every traveller. Embark on a mountain escape or a city adventure with our
             exclusive travel at competitive prices and leverage exclusive discounts, ensuring your travel is as economical as it is
             enjoyable. Don’t miss out on it, and book your next vacation with us to experience the perfect blend of luxury and value!
           </p>

          <h3 className="font-semibold mb-2">Create Memories That Last A Lifetime!</h3>
          <p>
            Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure
            that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family,
            we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details,
            guaranteeing a seamless and memorable experience. Start your adventure with DeltaSafari today and cherish every moment of your
            journey.
          </p>
        </div>
      </div>
    </section>
  )
}
