// import {
//     Phone,
//     Mail,
//     MapPin,
//     SendHorizontal,
//     Globe,
//     Handshake, CalendarCheck2, Sparkles
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/inquiry`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         fullName: form.fullname,
//         email: form.email,
//         phone: form.phone,
//         travelPlans: form.message,
//       }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (data.success) {
//       setSuccess(true);
//       setForm({ fullname: "", email: "", phone: "", message: "" });
//     } else {
//       alert(data.error || "Something went wrong");
//     }
//   } catch (err) {
//     setLoading(false);
//     alert("Server not reachable. Please try again later.");
//   }
// };


// export default function ContactPage() {
//     return (
//         <div className="min-h-screen bg-white">

//             {/* ---------------------------------------------------
//       HERO SECTION — Full Safari Image Background
// ---------------------------------------------------- */}
//             <section
//                 className="w-full h-[420px] md:h-[230px] relative flex items-center px-6"
//                 style={{
//                     backgroundImage: `url("https://evergen.energy/wp-content/uploads/2022/12/the-tech-bg-scaled-1.jpg")`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}

//             >
//                 {/* Dark Overlay for readability */}
//                 <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

//                 {/* Optional Subtle Safari Pattern */}
//                 <div className="absolute inset-0 opacity-10 bg-[url('/patterns/safari-pattern.svg')] bg-cover" />

//                 <div className="relative z-10 max-w-5xl mx-auto text-white">
//                     <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//                         Contact Delta Safari 🦁
//                     </h1>

//                     <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-3 drop-shadow-md">
//                         Plan your dream safari with expert-guided tours, premium hotel bookings,
//                         and personalized international travel packages.
//                     </p>
//                 </div>
//             </section>


//             <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12">

//                 {/* ---------------------------------------------------
//                   LEFT — CONTACT FORM
//         ---------------------------------------------------- */}
//                 <div>
//                     <h2 className="text-2xl font-semibold text-blue-900 mb-6">
//                         Let’s Start Planning Your Journey
//                     </h2>

//                     <div className="bg-white shadow-xl border border-blue-100 rounded-2xl p-8">
//                         <form className="grid gap-5">

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-800 mb-1">
//                                     Full Name *
//                                 </label>
//                                 <Input placeholder="Your Name" className="p-3" />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-800 mb-1">
//                                     Email *
//                                 </label>
//                                 <Input type="email" placeholder="you@example.com" className="p-3" />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-800 mb-1">
//                                     Phone Number *
//                                 </label>
//                                 <Input type="tel" placeholder="+91 98765 43210" className="p-3" />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-800 mb-1">
//                                     Tell Us About Your Travel Plans *
//                                 </label>
//                                 <Textarea
//                                     className="h-32 p-3"
//                                     placeholder="Destination, dates, group size, budget..."
//                                 />
//                             </div>

//                             <Button className="bg-gradient-to-r from-blue-700 to-orange-500 text-white text-lg py-3 rounded-xl shadow-md hover:scale-[1.02] transition flex items-center gap-2">
//                                 <SendHorizontal size={20} /> Send Inquiry
//                             </Button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* ---------------------------------------------------
//                   RIGHT — GLOBAL CONTACT CARD
//         ---------------------------------------------------- */}
//                 <div className="bg-blue-50 border border-blue-100 rounded-3xl p-10">
//                     <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                         <Globe size={22} /> Reach Us Worldwide
//                     </h3>

//                     <p className="text-gray-700 mb-6">
//                         We provide safari experiences, luxury travel, and personalized
//                         destination packages across multiple regions.
//                     </p>

//                     {/* India Office */}
//                     <div className="mb-8">
//                         <h4 className="text-lg font-semibold text-blue-800 mb-1">🇮🇳 India Office</h4>
//                         <p className="flex items-center gap-2 text-gray-700">
//                             <MapPin size={18} /> MG Road, Bengaluru, India
//                         </p>
//                         <p className="flex items-center gap-2 text-gray-700 mt-1">
//                             <Phone size={18} /> +91 98765 43210
//                         </p>
//                         <p className="flex items-center gap-2 text-gray-700 mt-1">
//                             <Mail size={18} /> support@deltasafari.com
//                         </p>
//                     </div>

//                     {/* Africa Office */}
//                     <div className="mb-8">
//                         <h4 className="text-lg font-semibold text-blue-800 mb-1">🌍 Africa Office</h4>
//                         <p className="flex items-center gap-2 text-gray-700">
//                             <MapPin size={18} /> Nairobi, Kenya
//                         </p>
//                         <p className="flex items-center gap-2 text-gray-700 mt-1">
//                             <Phone size={18} /> +254 712 345678
//                         </p>
//                     </div>

//                     {/* UAE */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-blue-800 mb-1">🇦🇪 UAE Office</h4>
//                         <p className="flex items-center gap-2 text-gray-700">
//                             <MapPin size={18} /> Business Bay, Dubai
//                         </p>
//                         <p className="flex items-center gap-2 text-gray-700 mt-1">
//                             <Phone size={18} /> +971 55 987 6543
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* ---------------------------------------------------
//               DESTINATIONS IMAGE STRIP
//       ---------------------------------------------------- */}
//             {/* <section className="w-full px-6 pb-20">
//                 <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {[
//                         "/burj-al-arab.webp",
//                         "/camel-ride.webp",
//                         "/Agra.webp",
//                         "/FamilyVacation.webp",
//                     ].map((img) => (
//                         <div
//                             key={img}
//                             className="h-40 rounded-xl bg-cover bg-center shadow-md"
//                             style={{ backgroundImage: `url(${img})` }}
//                         />
//                     ))}
//                 </div>
//             </section> */}
//             <section className="w-full mt-20 mb-10">

//     {/* Top Banner */}
//     <div
//         className="w-full py-33 text-center text-white"
//         style={{
//   backgroundImage: `
//     linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
//     url("https://www.intersect360.com/wp-content/uploads/hero-image.jpg")
//   `,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}

//     >
        
//         <div className="flex flex-col items-center -mt-23">

//     {/* Location SVG Above Heading */}
//     <img
//         src="https://images.emtcontent.com/contact/location.svg"
//         alt="location icon"
//         className="w-8 h-8 mb-3"
//     />

//     {/* Heading */}
//     <h2 className="text-4xl font-bold text-center">
//         Where to find <span className="text-blue-500">Us ?</span>
//     </h2>
// </div>

//     </div>

//     {/* Google Map (UNCHANGED) */}
//     <div className="flex justify-center -mt-30">
//         <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.796040312756!2d77.29296927506809!3d28.628911075668807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e9a54e1285%3A0xaea0a48a3c6fba79!2sEaseMyTrip.com%20(Head%20Office)!5e0!3m2!1sen!2sin!4v1732602000000"
//             width="67%"
//             height="270"      
//             allowFullScreen=""
//             loading="lazy"
//             className="rounded-2xl shadow-xl border border-gray-200"
//             referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//     </div>

//     {/* Contact Cards — EXACT SAME WIDTH AS MAP (85%) */}
//     <div className="mt-14 mx-auto w-[85%]">

//         <h2 className="text-4xl font-bold text-center mb-10">
//             Connect With <span className="text-blue-600">Us At</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//             {/* Card 1 — Light Blue */}
//             <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
//                     <Sparkles className="h-7 w-7 text-blue-700" />
//                 </div>
//                 <h3 className="font-bold text-lg text-center">Holidays Enquiry</h3>
//                 <p className="text-gray-700 text-center text-sm mt-1">
//                     holidays@deltasafari.com
//                 </p>
//             </div>

//             {/* Card 2 — Light Grey */}
//             <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
//                 <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-3">
//                     <Handshake className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-lg text-center">Partnership</h3>
//                 <p className="text-gray-700 text-center text-sm mt-1">
//                     partners@deltasafari.com
//                 </p>
//             </div>

//             {/* Card 3 — Light Blue */}
//             <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
//                     <CalendarCheck2 className="h-7 w-7 text-blue-700" />
//                 </div>
//                 <h3 className="font-bold text-lg text-center">Booking Status</h3>
//                 <p className="text-gray-700 text-center text-sm mt-1">
//                     care@deltasafari.com
//                 </p>
//             </div>

//             {/* Card 4 — Light Grey */}
//             <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
//                 <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-3">
//                     <Mail className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="font-bold text-lg text-center">Event Sponsorships</h3>
//                 <p className="text-gray-700 text-center text-sm mt-1">
//                     events@deltasafari.com
//                 </p>
//             </div>

//         </div>
//     </div>
// </section>


//         </div>
//     );
// }



import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  SendHorizontal,
  Globe,
  Handshake,
  CalendarCheck2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {

  // -------------------------
  // FORM STATE
  // -------------------------
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // -------------------------
  // HANDLE SUBMIT
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/api/v1/contact/inquiry`,
    // const response = await fetch("http://localhost:3000/api/v1/contact/inquiry", 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: form.fullname,
            email: form.email,
            phone: form.phone,
            travelPlans: form.message,
          }),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setSuccess(true);
        setForm({ fullname: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      alert("Server not reachable. Please try again later.");
    }
  };

  // ------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-white">

      {/* ---------------------------------------------------
      HERO SECTION — Full Safari Image Background
      ---------------------------------------------------- */}
      <section
        className="w-full h-[420px] md:h-[230px] relative flex items-center px-6"
        style={{
          backgroundImage: `url("https://evergen.energy/wp-content/uploads/2022/12/the-tech-bg-scaled-1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/safari-pattern.svg')] bg-cover" />

        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Contact Delta Safari 🦁
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-3 drop-shadow-md">
            Plan your dream safari with expert-guided tours, premium hotel bookings,
            and personalized international travel packages.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12">

        {/* ---------------------------------------------------
          LEFT — CONTACT FORM
        ---------------------------------------------------- */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Let’s Start Planning Your Journey
          </h2>

          <div className="bg-white shadow-xl border border-blue-100 rounded-2xl p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Full Name *
                </label>
                <Input
                  placeholder="Your Name"
                  className="p-3"
                  value={form.fullname}
                  onChange={(e) =>
                    setForm({ ...form, fullname: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="p-3"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="p-3"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Tell Us About Your Travel Plans *
                </label>
                <Textarea
                  className="h-32 p-3"
                  placeholder="Destination, dates, group size, budget..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-700 to-orange-500 text-white text-lg py-3 rounded-xl shadow-md hover:scale-[1.02] transition flex items-center gap-2"
              >
                <SendHorizontal size={20} />
                {loading ? "Sending..." : "Send Inquiry"}
              </Button>

              {success && (
                <p className="text-green-600 text-sm font-medium">
                  ✔ Inquiry sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ---------------------------------------------------
          RIGHT — GLOBAL CONTACT CARD
        ---------------------------------------------------- */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-10">
          <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Globe size={22} /> Reach Us Worldwide
          </h3>

          <p className="text-gray-700 mb-6">
            We provide safari experiences, luxury travel, and personalized
            destination packages across multiple regions.
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-1">🇮🇳 India Office</h4>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} /> MG Road, Bengaluru, India
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Phone size={18} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Mail size={18} /> support@deltasafari.com
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-1">🌍 Africa Office</h4>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} /> Nairobi, Kenya
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Phone size={18} /> +254 712 345678
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-800 mb-1">🇦🇪 UAE Office</h4>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} /> Business Bay, Dubai
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Phone size={18} /> +971 55 987 6543
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------
      DESTINATIONS IMAGE STRIP + MAP SECTION (unchanged)
      ---------------------------------------------------- */}
      {/* Your remaining code stays EXACTLY as is */}
      <section className="w-full mt-20 mb-10">

    {/* Top Banner */}
    <div
        className="w-full py-33 text-center text-white"
        style={{
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
    url("https://www.intersect360.com/wp-content/uploads/hero-image.jpg")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

    >
        
        <div className="flex flex-col items-center -mt-23">

    {/* Location SVG Above Heading */}
    <img
        src="https://images.emtcontent.com/contact/location.svg"
        alt="location icon"
        className="w-8 h-8 mb-3"
    />

    {/* Heading */}
    <h2 className="text-4xl font-bold text-center">
        Where to find <span className="text-blue-500">Us ?</span>
    </h2>
</div>

    </div>

    {/* Google Map (UNCHANGED) */}
    <div className="flex justify-center -mt-30">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.796040312756!2d77.29296927506809!3d28.628911075668807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e9a54e1285%3A0xaea0a48a3c6fba79!2sEaseMyTrip.com%20(Head%20Office)!5e0!3m2!1sen!2sin!4v1732602000000"
            width="67%"
            height="270"      
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl shadow-xl border border-gray-200"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    {/* Contact Cards — EXACT SAME WIDTH AS MAP (85%) */}
    <div className="mt-14 mx-auto w-[85%]">

        <h2 className="text-4xl font-bold text-center mb-10">
            Connect With <span className="text-blue-600">Us At</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Card 1 — Light Blue */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-center">Holidays Enquiry</h3>
                <p className="text-gray-700 text-center text-sm mt-1">
                    holidays@deltasafari.com
                </p>
            </div>

            {/* Card 2 — Light Grey */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-3">
                    <Handshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center">Partnership</h3>
                <p className="text-gray-700 text-center text-sm mt-1">
                    partners@deltasafari.com
                </p>
            </div>

            {/* Card 3 — Light Blue */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <CalendarCheck2 className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-center">Booking Status</h3>
                <p className="text-gray-700 text-center text-sm mt-1">
                    care@deltasafari.com
                </p>
            </div>

            {/* Card 4 — Light Grey */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-center">Event Sponsorships</h3>
                <p className="text-gray-700 text-center text-sm mt-1">
                    events@deltasafari.com
                </p>
            </div>

        </div>
    </div>
</section>
    </div>
  );
}

