// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { UserCircle } from "lucide-react";

// const testimonials = [
//   {
//     name: "Mr Subodh Rawat",
//     date: "27 Apr, 2023",
//     text: `Embarking on a 4-night, 5-days escapade to Kashmir with EaseMyTrip was an enchanting experience that left me spellbound. Showkat, our courteous chauffeur, skillfully navigated through the picturesque valleys, ensuring a seamless journey. Special thanks t...`,
//   },
//   {
//     name: "Mr Sourav Mondal",
//     date: "18 Mar, 2023",
//     text: `Thank you Shalini Mam for a wonderful trip to Shimla Manali. Everything was just perfect. The driver came in right time to pick up from Delhi Rly station and drop to hotel in perfect time. The location of the hotels is awesome specially in Manali. We were enjoying the...`,
//   },
//   {
//     name: "Ms Priya Sharma",
//     date: "09 Jan, 2023",
//     text: `We had a lovely experience in Bali. Everything was very well planned. The itinerary was comfortable and covered all major attractions. Looking forward to our next trip with you guys.`,
//   },
//   {
//     name: "Mr Rakesh Mehta",
//     date: "02 Feb, 2023",
//     text: `Amazing experience with their Thailand package. Very budget-friendly and smooth trip. Highly recommended for families!`,
//   },
// ];

// const TravellerTestimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const groupSize = 2;
//   const totalSlides = Math.ceil(testimonials.length / groupSize);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const currentGroup = testimonials.slice(
//     currentIndex * groupSize,
//     currentIndex * groupSize + groupSize
//   );

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-16">
//       <div className="mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold">What Travellers Say?</h2>
//         <p className="text-muted-foreground text-lg mt-2">
//           See real tourists and their real opinions, helping you create the best memories.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000">
//         {currentGroup.map((testimonial, index) => (
//           <Card key={index} className="p-6 md:p-8 shadow-xl rounded-2xl">
//             <p className="text-gray-800 text-lg leading-relaxed">
//               <span className="text-2xl text-black">"</span> {testimonial.text}
//               <span className="text-blue-500 ml-2 cursor-pointer">View more</span>
//             </p>
//             <div className="flex items-center justify-between mt-6">
//               <div className="flex items-center gap-3">
//                 <UserCircle className="text-blue-500 w-6 h-6" />
//                 <span className="font-medium">{testimonial.name}</span>
//               </div>
//               <span className="text-sm text-muted-foreground">{testimonial.date}</span>
//             </div>
//           </Card>
//         ))}
//       </div>
//       <div className="flex justify-center items-center gap-3 mt-6">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={cn(
//               "h-3 rounded-full transition-all bg-gray-300",
//               index === currentIndex ? "w-6 bg-primary" : "w-3"
//             )}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TravellerTestimonials;



import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Mr Subodh Rawat",
    date: "27 Apr, 2023",
    text: `Embarking on a 4-night, 5-days escapade to Kashmir with EaseMyTrip was an enchanting experience that left me spellbound. Showkat, our courteous chauffeur, skillfully navigated through the picturesque valleys, ensuring a seamless journey.`,
  },
  {
    name: "Mr Sourav Mondal",
    date: "18 Mar, 2023",
    text: `Thank you Shalini Mam for a wonderful trip to Shimla Manali. Everything was just perfect. The driver came in right time to pick up from Delhi Rly station and drop to hotel in perfect time. The location of the hotels is awesome.`,
  },
  {
    name: "Ms Priya Sharma",
    date: "09 Jan, 2023",
    text: `We had a lovely experience in Bali. Everything was very well planned. The itinerary was comfortable and covered all major attractions. Looking forward to our next trip with you guys.`,
  },
  {
    name: "Mr Rakesh Mehta",
    date: "02 Feb, 2023",
    text: `Amazing experience with their Thailand package. Very budget-friendly and smooth trip. Highly recommended for families!`,
  },
  {
    name: "Ms Ananya Gupta",
    date: "12 Jun, 2023",
    text: `Kerala backwaters tour was simply magical. The houseboat stay and authentic food made the trip unforgettable.`,
  },
  {
    name: "Mr Rahul Verma",
    date: "25 Jul, 2023",
    text: `Went to Dubai with their package. Excellent hotel choices and guided tours. Worth every penny.`,
  },
  {
    name: "Ms Neha Singh",
    date: "03 Aug, 2023",
    text: `The Maldives package was dreamy! Crystal-clear waters, luxury resort, and smooth planning. Thank you EMT!`,
  },
  {
    name: "Mr Arjun Patel",
    date: "19 Sep, 2023",
    text: `Singapore trip was super smooth. From airport transfers to tickets, everything was well-organized.`,
  },
  {
    name: "Ms Kavya Nair",
    date: "04 Oct, 2023",
    text: `We booked a Europe tour and it was flawless. Paris, Rome, and Switzerland — every detail was taken care of.`,
  },
  {
    name: "Mr Vikram Desai",
    date: "15 Nov, 2023",
    text: `Great experience with their Bhutan package. Peaceful, scenic, and very well managed.`,
  },
];

const TravellerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const groupSize = 3; // now showing 3 cards in a row
  const totalSlides = Math.ceil(testimonials.length / groupSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentGroup = testimonials.slice(
    currentIndex * groupSize,
    currentIndex * groupSize + groupSize
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">What Travellers Say?</h2>
        <p className="text-muted-foreground text-lg mt-2">
          See real tourists and their real opinions, helping you create the best memories.
        </p>
      </div>

      {/* grid for testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000">
        {currentGroup.map((testimonial, index) => (
          <Card key={index} className="p-6 md:p-8 shadow-xl rounded-2xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              <span className="text-2xl text-black">"</span> {testimonial.text}
              <span className="text-blue-500 ml-2 cursor-pointer">View more</span>
            </p>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <UserCircle className="text-blue-500 w-6 h-6" />
                <span className="font-medium">{testimonial.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{testimonial.date}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* navigation dots */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-3 rounded-full transition-all bg-gray-300",
              index === currentIndex ? "w-6 bg-primary" : "w-3"
            )}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TravellerTestimonials;

