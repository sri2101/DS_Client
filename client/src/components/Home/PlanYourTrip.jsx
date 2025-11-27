import React, { useState } from "react";
import { MessageSquare, MapPin, Calendar as CalendarIcon, User, Phone, Mail } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function PlanYourTrip() {
  const [open, setOpen] = useState(false);

  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  const [packageName, setPackageName] = useState("");
  const [date, setDate] = useState(null);
  const [departureCity, setDepartureCity] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => value > 0 && setter(value - 1);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setOpen(false);
  // };
  const onSubmit = async (e) => {
  e.preventDefault();

  try {
      // const res = await fetch("http://localhost:3000/api/v1/trip/submit", {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/v1/trip/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        packageName,
        date: date ? date.toISOString().split("T")[0] : "",
        departureCity,
        name,
        mobile,
        email,
        adult,
        child,
        infant,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Enquiry Sent Successfully!");
      setOpen(false);
    } else {
      alert(data.message || "Error submitting enquiry");
    }
  } catch (error) {
    alert("Server not reachable");
    console.error(error);
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white border border-orange-200 shadow-xl px-4 py-2 rounded-full hover:shadow-2xl transition"
        >
          <MessageSquare className="text-orange-500" size={18} />
          <span className="font-semibold">Plan Your Trip</span>
        </button>
      </DialogTrigger>

      <DialogContent
        className={cn(
          "bg-white rounded-xl shadow-xl p-6 border border-gray-100",
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[92%] md:w-[720px] !max-w-[720px]",   // slightly smaller + natural width
          "max-h-[78vh] overflow-y-auto"          // gives enough height to fit form
        )}
      >

        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-gray-800">
            Want To Go For A Memorable Holiday?
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-5 mt-3">

          {/* PACKAGE NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Destination</label>
            <div className="relative">
              <input
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                placeholder="Package Name / Destination Name"
                className="w-full border border-[#BBD7FF] rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#C6DEFF]"

              />
              <MapPin className="absolute right-3 top-3.5 text-[#9AA6B2]" size={20} />
            </div>
          </div>

          {/* DATE & CITY */}
          <div className="grid grid-cols-2 gap-4">
            {/* Date Picker */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Date of Departure</label>

              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="relative w-full text-left border-[1.8px] border-[#D6E4FF] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring focus:ring-[#C7D9FF]"
                  >
                    {date ? (
                      <span className="text-gray-800">{date.toDateString()}</span>
                    ) : (
                      <span className="text-gray-500">Select Date</span>
                    )}
                    <CalendarIcon size={20} className="absolute right-3 top-3.5 text-[#9AA6B2]" />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="p-0 bg-white rounded-xl shadow-lg border border-gray-100">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d)}
                    className="rounded-md"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">City of Departure</label>
              <div className="relative">
                <input
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  placeholder="City of Departure"
                  className="w-full border-[1.8px] border-[#D6E4FF] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring focus:ring-[#C7D9FF]"
                />
                <MapPin className="absolute right-3 top-3.5 text-[#9AA6B2]" size={20} />
              </div>
            </div>
          </div>

          {/* NAME & PHONE */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full border-[1.8px] border-[#D6E4FF] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring focus:ring-[#C7D9FF]"
                />
                <User className="absolute right-3 top-3.5 text-[#9AA6B2]" size={20} />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile No."
                  className="w-full border-[1.8px] border-[#D6E4FF] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring focus:ring-[#C7D9FF]"
                />
                <Phone className="absolute right-3 top-3.5 text-[#9AA6B2]" size={20} />
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Email ID</label>
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your E-mail Address"
                className="w-full border-[1.8px] border-[#D6E4FF] rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring focus:ring-[#C7D9FF]"
              />
              <Mail className="absolute right-3 top-3.5 text-[#9AA6B2]" size={20} />
            </div>
          </div>

          {/* COUNTERS */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[{ label: "Adult", value: adult, setter: setAdult },
            { label: "Child", value: child, setter: setChild },
            { label: "Infant", value: infant, setter: setInfant }]
              .map(({ label, value, setter }) => (
                <div key={label}>
                  <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>

                  <div className="flex items-center justify-center gap-3 border-[1.8px] border-[#D6E4FF] rounded-xl py-2 bg-white">
                    <button
                      type="button"
                      onClick={() => decrement(setter, value)}
                      className="w-6 h-6 flex items-center justify-center rounded-full text-lg border border-gray-300 hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="w-8 text-center text-gray-800">{value}</span>

                    <button
                      type="button"
                      onClick={() => increment(setter, value)}
                      className="w-6 h-6 flex items-center justify-center rounded-full text-lg border border-gray-300 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#3A7DFF] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#316ee0] transition"
          >
            Enquire Now
          </button>

        </form>
      </DialogContent>
    </Dialog>
  );
}
