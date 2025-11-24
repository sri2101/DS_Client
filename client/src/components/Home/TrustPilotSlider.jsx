import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import { useRef } from "react"

const reviews = [
  {
    title: "YES I AM VERY SATISFI...",
    content: "YES I AM VERY SATISFIED WITH THE SERVICES OF DELTASAFARI. THE STAFF IS",
    author: "customer",
    time: "4 hours ago",
  },
  {
    title: "It was extremely easy ...",
    content: "It was extremely easy to book on your sight.",
    author: "ASHOKKUMA...",
    time: "10 hours ago",
  },
  {
    title: "Good service",
    content: "Good service",
    author: "customer",
    time: "11 hours ago",
  },
  {
    title: "Easy access to choose...",
    content: "Easy access to choose rooms",
    author: "customer",
    time: "15 hours ago",
  },
  {
    title: "Excellent and shown b...",
    content: "Excellent and shown best price among others. Happy",
    author: "Vamsi",
    time: "15 hours ago",
  },
]

const TrustpilotSlider =() =>  {
  const containerRef = useRef(null)

  const scroll = (direction) => {
    const scrollAmount = 300
    if (direction === "left") containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    else containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="bg-[url('/trust-bg.png')] bg-cover bg-no-repeat py-16 text-black">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 💬 TrustPilot Review Slider */}
        <div className="relative mb-16">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar space-x-4 py-2 px-4"
          >
            {reviews.map((review, index) => (
              <Card key={index} className="min-w-[250px] max-w-sm flex-shrink-0">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1 text-green-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-green-600 stroke-green-600" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm line-clamp-1">{review.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{review.content}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold lowercase">{review.author}</span>, {review.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
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
export default TrustpilotSlider;


