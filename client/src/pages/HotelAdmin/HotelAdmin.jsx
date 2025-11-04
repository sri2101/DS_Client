import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function HotelAdmin() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    // Basic Info
    name: "",
    city: "",
    location: "",
    starCategory: "",
    star: "",
    budget: "",
    
    // Ratings & Reviews
    rating: "",
    reviewLabel: "",
    reviewCount: "",
    
    // Pricing & Offers
    price: "",
    originalPrice: "",
    tax: "",
    initialAmount: "",
    discount: "",
    promocode: "",
    
    // Booking & Availability
    availableFrom: "",
    availableTo: "",
    day: "",
    night: "",
    rooms: "",
    guests: "",
    people: "",
    perk: "",
    bookWithZero: false,
    
    // Property Info
    propertyType: "HOTEL",
    
    // Legacy fields (to be removed gradually)
    descriptionAboutHotel: "",
    taxesAndFees: "",
    freeBreakfast: false,
    freeParking: false,
    freeCancellation: false,
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  const [previews, setPreviews] = useState({});
  
  // New state for complex fields
  const [facilities, setFacilities] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState([{ place: "", info: [""] }]);
  
  // API base (prefer Vite env VITE_API_BASE), fallback to backend default port 3000
  const API_BASE = import.meta?.env?.VITE_API_BASE || "http://localhost:3000";

  // DEPRECATED: Old amenities structure - keeping for reference but no longer used
  // New amenities are stored as simple array of strings
  const AMENITIES = [
    { key: "twentyFourHourFrontDesk", label: "24-Hour Front Desk" },
    { key: "ac", label: "Air Conditioning" },
    { key: "bar", label: "Bar" },
    { key: "wifi", label: "Wi-Fi" },
    { key: "breakfast", label: "Breakfast" },
    { key: "laundry", label: "Laundry" },
    { key: "gym", label: "Gym" },
    { key: "restaurant", label: "Restaurant" },
    { key: "spa", label: "Spa" },
    { key: "roomService", label: "Room Service" },
    { key: "elevator", label: "Elevator" },
    { key: "security", label: "Security" },
    { key: "travelDesk", label: "Travel Desk" },
    { key: "powerBackup", label: "Power Backup" },
    { key: "centralAc", label: "Central AC" },
    { key: "cctv", label: "CCTV" },
    { key: "internetFacility", label: "Internet Facility" },
    { key: "banquetHall", label: "Banquet Hall" },
    { key: "conferenceHall", label: "Conference Hall" },
    { key: "photoCopying", label: "Photo Copying" },
  ];

  // simple icon map for amenity badges (emoji for quick UI)
  const AMENITY_ICONS = {
    twentyFourHourFrontDesk: "🕛",
    ac: "❄️",
    bar: "🍸",
    wifi: "📶",
    breakfast: "🥐",
    laundry: "🧺",
    gym: "🏋️",
    restaurant: "🍽️",
    spa: "💆",
    roomService: "🛎️",
    elevator: "🛗",
    security: "🔒",
    travelDesk: "✈️",
    powerBackup: "⚡",
    centralAc: "🌬️",
    cctv: "🎥",
    internetFacility: "🌐",
    banquetHall: "🏛️",
    conferenceHall: "🏢",
    photoCopying: "🖨️",
  };

  // Predefined facilities with toggle switches
  const PREDEFINED_FACILITIES = [
    { key: "freeWifi", label: "Free Wi-Fi", icon: "📶" },
    { key: "airportShuttle", label: "Airport Shuttle", icon: "🚐" },
    { key: "dailyHousekeeping", label: "Daily Housekeeping", icon: "🧹" },
    { key: "freeParking", label: "Free Parking", icon: "🅿️" },
    { key: "airConditioning", label: "Air Conditioning", icon: "❄️" },
    { key: "swimmingPool", label: "Swimming Pool", icon: "🏊" },
    { key: "fitnessCenter", label: "Fitness Center", icon: "🏋️" },
    { key: "businessCenter", label: "Business Center", icon: "💼" },
    { key: "petFriendly", label: "Pet Friendly", icon: "🐕" },
    { key: "wheelchairAccessible", label: "Wheelchair Accessible", icon: "♿" },
    { key: "conciergeService", label: "Concierge Service", icon: "🛎️" },
    { key: "laundryService", label: "Laundry Service", icon: "👕" },
  ];

  // Predefined amenities with toggle switches
  const PREDEFINED_AMENITIES = [
    { key: "roomService", label: "Room Service", icon: "🛎️" },
    { key: "doctorOnCall", label: "Doctor on Call", icon: "👨‍⚕️" },
    { key: "wakeUpService", label: "Wake-up Service", icon: "⏰" },
    { key: "library", label: "Library", icon: "📚" },
    { key: "banquetHall", label: "Banquet Hall", icon: "🏛️" },
    { key: "centralAC", label: "Central AC", icon: "🌬️" },
    { key: "luggageStorage", label: "Luggage Storage", icon: "🧳" },
    { key: "ironingFacilities", label: "Ironing Facilities", icon: "👔" },
    { key: "freeWiFi", label: "Free WiFi", icon: "📶" },
    { key: "powerBackup", label: "Power Backup", icon: "⚡" },
    { key: "elevator", label: "Elevator", icon: "🛗" },
    { key: "security24Hour", label: "Security [24-hour]", icon: "🔒" },
    { key: "travelDesk", label: "Travel Desk", icon: "✈️" },
    { key: "cctv", label: "CCTV", icon: "📹" },
    { key: "internetFacility", label: "Internet Facility / Cyber Cafe", icon: "💻" },
    { key: "creditDebitCards", label: "Credit/Debit cards", icon: "💳" },
    { key: "restaurant", label: "Restaurant", icon: "🍽️" },
    { key: "bar", label: "Bar", icon: "🍸" },
    { key: "spa", label: "Spa", icon: "💆" },
    { key: "conferenceHall", label: "Conference Hall", icon: "🏢" },
    { key: "photocopying", label: "Photocopying", icon: "🖨️" },
    { key: "coffeeShop", label: "Coffee Shop", icon: "☕" },
  ];

  // 🏨 Fetch all hotels
  const fetchHotels = async () => {
    try {
      const res = await axios.get("/api/v1/hotel/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (res.data.data || []).map((h) => {
        // Ensure amenities is always an array
        let amenities = h.amenities || [];
        if (typeof amenities === 'string') {
          try {
            amenities = JSON.parse(amenities);
          } catch {
            amenities = [];
          }
        }
        if (!Array.isArray(amenities)) {
          amenities = [];
        }
        
        return { ...h, _id: h._id || h.id, amenities };
      });
      setHotels(data);
      setFilteredHotels(data);
    } catch (err) {
      console.error("Fetch hotels failed:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // 🔍 Filter by location
  // useEffect(() => {
  //   if (!searchLocation.trim()) {
  //     setFilteredHotels(hotels);
  //   } else {
  //     setFilteredHotels(
  //       hotels.filter((h) =>
  //         h.location.toLowerCase().includes(searchLocation.toLowerCase())
  //       )
  //     );
  //   }
  // }, [searchLocation, hotels]);

  // Add functionality to fetch hotels by location
  const fetchHotelsByLocation = async () => {
    try {
      setError(null);
      const res = await axios.get(`${API_BASE}/api/v1/hotel/location/${searchLocation}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("✅ Response:", res.data);
      const data = (res.data.data || []).map((h) => {
        // Ensure amenities is always an array
        let amenities = h.amenities || [];
        if (typeof amenities === 'string') {
          try {
            amenities = JSON.parse(amenities);
          } catch {
            amenities = [];
          }
        }
        if (!Array.isArray(amenities)) {
          amenities = [];
        }
        
        return { ...h, _id: h._id || h.id, amenities };
      });
      setFilteredHotels(data);
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to fetch hotels");
    }
  };

  // ✏️ Open modal for Add/Edit
  const handleOpen = (hotel = null) => {
    if (hotel) {
      setForm({
        // Basic Info
        name: hotel.name || "",
        city: hotel.city || "",
        location: hotel.location || "",
        starCategory: hotel.starCategory || "",
        star: hotel.star || "",
        budget: hotel.budget || "",
        
        // Ratings & Reviews
        rating: hotel.rating || "",
        reviewLabel: hotel.reviewLabel || "",
        reviewCount: hotel.reviewCount || "",
        
        // Pricing & Offers
        price: hotel.price || "",
        originalPrice: hotel.originalPrice || "",
        tax: hotel.tax || "",
        initialAmount: hotel.initialAmount || "",
        discount: hotel.discount || "",
        promocode: hotel.promocode || "",
        
        // Booking & Availability
        availableFrom: hotel.availableFrom ? new Date(hotel.availableFrom).toISOString().split('T')[0] : "",
        availableTo: hotel.availableTo ? new Date(hotel.availableTo).toISOString().split('T')[0] : "",
        day: hotel.day || "",
        night: hotel.night || "",
        rooms: hotel.rooms || "",
        guests: hotel.guests || "",
        people: hotel.people || "",
        perk: hotel.perk || "",
        bookWithZero: hotel.bookWithZero || false,
        
        // Property Info
        propertyType: hotel.propertyType || "HOTEL",
        
        // Legacy fields
        descriptionAboutHotel: hotel.descriptionAboutHotel || "",
        taxesAndFees: hotel.taxesAndFees || "",
        freeBreakfast: hotel.freeBreakfast || false,
        freeParking: hotel.freeParking || false,
        freeCancellation: hotel.freeCancellation || false,
      });
      
      // Set complex fields
      setFacilities(Array.isArray(hotel.facilities) ? hotel.facilities : []);
      setAmenities(Array.isArray(hotel.amenities) ? hotel.amenities : []);
      setDescription(Array.isArray(hotel.description) ? hotel.description : [{ place: "", info: [""] }]);
      
      setEditMode(true);
      setSelectedId(hotel._id);

      // Show existing images
      const hotelPreviews = {};
      for (let i = 1; i <= 5; i++) {
        if (hotel[`image${i}`]) hotelPreviews[`image${i}`] = hotel[`image${i}`];
      }
      setPreviews(hotelPreviews);
    } else {
      // Reset form for new hotel
      setForm({
        // Basic Info
        name: "",
        city: "",
        location: "",
        starCategory: "",
        star: "",
        budget: "",
        
        // Ratings & Reviews
        rating: "",
        reviewLabel: "",
        reviewCount: "",
        
        // Pricing & Offers
        price: "",
        originalPrice: "",
        tax: "",
        initialAmount: "",
        discount: "",
        promocode: "",
        
        // Booking & Availability
        availableFrom: "",
        availableTo: "",
        day: "",
        night: "",
        rooms: "",
        guests: "",
        people: "",
        perk: "",
        bookWithZero: false,
        
        // Property Info
        propertyType: "HOTEL",
        
        // Legacy fields
        descriptionAboutHotel: "",
        taxesAndFees: "",
        freeBreakfast: false,
        freeParking: false,
        freeCancellation: false,
      });
      
      // Reset complex fields
      setFacilities([]);
      setAmenities([]);
      setDescription([{ place: "", info: [""] }]);
      
      setEditMode(false);
      setSelectedId(null);
      setPreviews({});
    }
    setImages({});
    setOpen(true);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Note: Facilities and amenities are now managed via toggle switches

  const addDescriptionInfo = (descIndex) => {
    const updated = [...description];
    updated[descIndex].info.push("");
    setDescription(updated);
  };

  const updateDescriptionPlace = (index, value) => {
    const updated = [...description];
    updated[index].place = value;
    setDescription(updated);
  };

  const updateDescriptionInfo = (descIndex, infoIndex, value) => {
    const updated = [...description];
    updated[descIndex].info[infoIndex] = value;
    setDescription(updated);
  };

  const removeDescriptionInfo = (descIndex, infoIndex) => {
    const updated = [...description];
    updated[descIndex].info = updated[descIndex].info.filter((_, i) => i !== infoIndex);
    setDescription(updated);
  };

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    setImages({ ...images, [key]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => ({ ...prev, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 💾 Add or Update hotel
  const handleSubmit = async () => {
    if (!form.name || !form.location || !form.price) {
      alert("Please fill all required fields: name, location, and price");
      return;
    }
    try {
      setLoading(true);

      console.log("handleSubmit - editMode:", editMode, "selectedId:", selectedId);
      console.log("handleSubmit - form before submit:", form);

      const formData = new FormData();

      // Append all form fields
      Object.keys(form).forEach(key => {
        if (form[key] !== undefined && form[key] !== null && form[key] !== "") {
          formData.append(key, String(form[key]));
        }
      });

      // Append complex fields (filter out empty entries)
      const validFacilities = facilities.filter(f => f && f.trim() !== '');
      const validAmenities = amenities.filter(a => a && a.trim() !== '');
      const validDescription = description.filter(d => d.place && d.place.trim() !== '' && d.info.some(i => i && i.trim() !== ''));
      
      formData.append('facilities', JSON.stringify(validFacilities));
      formData.append('amenities', JSON.stringify(validAmenities));
      formData.append('description', JSON.stringify(validDescription));

      // Append images
      Object.entries(images).forEach(([k, v]) => v && formData.append(k, v));

      // Debug: list all formData entries
      console.group("handleSubmit - FormData entries");
      for (const pair of formData.entries()) {
        console.log(pair[0], "=", pair[1]);
      }
      console.groupEnd();

      const url = editMode
        ? `${API_BASE}/api/v1/hotel/${selectedId}`
        : `${API_BASE}/api/v1/hotel/create`;

      console.log("handleSubmit - sending request to:", url);

      const method = editMode ? "put" : "post";

      const res = await axios({
        method,
        url,
        data: formData,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("handleSubmit - server response:", res?.data);

      await fetchHotels();
      setOpen(false);
      setImages({});
      setPreviews({});
      
      // Reset all form state
      setForm({
        name: "",
        city: "",
        location: "",
        starCategory: "",
        star: "",
        budget: "",
        rating: "",
        reviewLabel: "",
        reviewCount: "",
        price: "",
        originalPrice: "",
        tax: "",
        initialAmount: "",
        discount: "",
        promocode: "",
        availableFrom: "",
        availableTo: "",
        day: "",
        night: "",
        rooms: "",
        guests: "",
        people: "",
        perk: "",
        bookWithZero: false,
        propertyType: "HOTEL",
        descriptionAboutHotel: "",
        taxesAndFees: "",
        freeBreakfast: false,
        freeParking: false,
        freeCancellation: false,
      });
      setFacilities([]);
      setAmenities([]);
      setDescription([{ place: "", info: [""] }]);
      
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message || err);
      if (err.response?.data) console.log("Save failed - server body:", err.response.data);
      
      // Show user-friendly error message
      const errorMessage = err.response?.data?.message || err.message || "Failed to save hotel";
      alert(`Error: ${errorMessage}`);
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // 🗑️ Delete hotel
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;
    try {
      await axios.delete(`/api/v1/hotel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHotels(hotels.filter((h) => h._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };

  // Note: Removed old toggleAmenity function since amenities are now array-based
  // Amenities are managed through the form interface


  return (
    <div className="p-8 bg-gradient-to-b from-[#f8f9ff] to-[#eef1ff] min-h-screen">
      {/* local styles for subtle motion & shimmer */}
      <style>{`
        @keyframes enterUp {
          0% { opacity: 0; transform: translateY(10px) scale(.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-enter {
          animation: enterUp 420ms cubic-bezier(.2,.9,.2,1) both;
        }
        .image-zoom {
          transition: transform 420ms ease, filter 420ms ease;
        }
        .image-zoom:hover { transform: scale(1.06); filter: brightness(.98); }
        .badge-appear { transition: transform 260ms ease, opacity 260ms ease; transform-origin: left center; }
        .badge-appear:hover { transform: scale(1.04); }
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 100%);
          background-size: 200% 100%;
          animation: shimmer 1.6s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-[#4b3fb3] tracking-tight">
          🏨 Hotel Management
        </h1>
        <div className="flex gap-3">
          <Input
            placeholder="Search by location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-64"
          />
          <Button
            onClick={fetchHotelsByLocation}
            className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] hover:opacity-90 transition-all"
          >
            Search
          </Button>
          <Button
            onClick={() => handleOpen()}
            className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-2xl"
            style={{ transitionProperty: "transform, box-shadow", transitionDuration: "260ms" }}
          >
            + Add Hotel
          </Button>
        </div>
      </div>
 
      {/* Hotel Grid */}
      {filteredHotels.length === 0 ? (
        <p className="text-center text-gray-500">No hotels found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map((hotel, idx) => (
            <div
              key={hotel._id}
              className="animate-enter h-full"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <Card
                className="shadow-md hover:shadow-2xl transition-transform duration-300 rounded-2xl overflow-hidden border border-[#e0e7ff] bg-white transform hover:-translate-y-1 hover:scale-[1.01] h-full flex flex-col p-0"
              >
                {/* IMAGE: placed at the very top, no Card padding so it sits flush */}
                <div className="w-full h-44 relative flex-shrink-0 overflow-hidden">
                  <img
                    src={hotel.image1 || "/placeholder.jpg"}
                    alt={hotel.name}
                    className="w-full h-full object-cover image-zoom block"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/28 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    📍 {hotel.location}
                  </div>
                </div>
 
                <CardHeader className="px-4 pt-4 pb-2">
                  <CardTitle className="text-lg font-semibold text-[#2b2b2b]">
                    {hotel.name}
                  </CardTitle>
                </CardHeader>
 
                <CardContent className="space-y-2 flex-1 px-4 pb-4">
                   <p className="text-sm text-gray-600 line-clamp-2">
                     {hotel.descriptionAboutHotel}
                   </p>
                   <p className="text-sm">
                     💰{" "}
                     <span className="line-through text-gray-400">
                       ₹{hotel.originalPrice}
                     </span>{" "}
                     <span className="font-semibold text-green-600">
                       ₹{hotel.priceAfterDiscount || hotel.originalPrice}
                     </span>
                   </p>
 
                   {/* Show amenities as badges */}
                   <div className="mt-3 border-t pt-3">
                     <div className="flex flex-wrap gap-2">
                       {(Array.isArray(hotel?.amenities) ? hotel.amenities : [])
                         .slice(0, 6)
                         .map((amenity, index) => (
                           <span
                             key={index}
                             className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[#eef2ff] text-xs font-medium text-[#2b2b2b] badge-appear"
                             style={{ transitionDelay: `${Math.random() * 120}ms` }}
                           >
                             <span className="text-sm" aria-hidden="true">
                               🏨
                             </span>
                             <span>{amenity}</span>
                           </span>
                         ))}
                     </div>
                   </div>
 
                  {/* action row anchored to bottom via flex layout */}
                  <div className="flex justify-between items-center pt-4">
                     <Button
                       variant="outline"
                       className="border-[#7B8EDD] text-[#5470E2] hover:bg-[#eef2ff]"
                       onClick={() => handleOpen(hotel)}
                     >
                       ✏️ Edit
                     </Button>
                     <Button
                       variant="destructive"
                       className="hover:bg-red-700"
                       onClick={() => handleDelete(hotel._id)}
                     >
                       🗑️ Delete
                     </Button>
                   </div>
                </CardContent>
              </Card>
            </div>
           ))}
         </div>
       )}
 
       {/* Dialog for Add/Edit */}
       <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl border border-[#e5e7eb] shadow-lg">
           <DialogHeader>
             <DialogTitle className="text-2xl font-semibold text-[#4b3fb3]">
               {editMode ? "Edit Hotel" : "Add New Hotel"}
             </DialogTitle>
           </DialogHeader>
 
           <div className="space-y-4 mt-2">
             {/* Basic Information */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">🏨 Basic Information</h3>
               <Input
                 name="name"
                 placeholder="Hotel Name *"
                 value={form.name}
                 onChange={handleChange}
                 required
               />
               <div className="grid grid-cols-2 gap-3">
                 <Input
                   name="city"
                   placeholder="City"
                   value={form.city}
                   onChange={handleChange}
                 />
                 <Input
                   name="location"
                   placeholder="Location *"
                   value={form.location}
                   onChange={handleChange}
                   required
                 />
               </div>
               <div className="grid grid-cols-3 gap-3">
                 <Input
                   name="starCategory"
                   placeholder="Star Category (e.g., 5 Star)"
                   value={form.starCategory}
                   onChange={handleChange}
                 />
                 <Input
                   name="star"
                   type="number"
                   placeholder="Star Rating (1-5)"
                   value={form.star}
                   onChange={handleChange}
                   min="1"
                   max="5"
                 />
                 <select
                   name="budget"
                   value={form.budget}
                   onChange={handleChange}
                   className="rounded-md border px-3 py-2"
                 >
                   <option value="">Budget Category</option>
                   <option value="Budget">Budget</option>
                   <option value="Mid-range">Mid-range</option>
                   <option value="Luxury">Luxury</option>
                 </select>
               </div>
               <select
                 name="propertyType"
                 value={form.propertyType}
                 onChange={handleChange}
                 className="w-full rounded-md border px-3 py-2"
               >
                 <option value="HOTEL">Hotel</option>
                 <option value="HOUSE">House</option>
                 <option value="INN">Inn</option>
                 <option value="MOTEL">Motel</option>
                 <option value="PALACE">Palace</option>
                 <option value="VILLAS">Villas</option>
                 <option value="FARM STAY">Farm Stay</option>
                 <option value="HOSTEL">Hostel</option>
               </select>
             </div>

             {/* Ratings & Reviews */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">⭐ Ratings & Reviews</h3>
               <div className="grid grid-cols-3 gap-3">
                 <Input
                   name="rating"
                   type="number"
                   placeholder="Rating (0-5)"
                   value={form.rating}
                   onChange={handleChange}
                   min="0"
                   max="5"
                   step="0.1"
                 />
                 <Input
                   name="reviewLabel"
                   placeholder="Review Label (e.g., Excellent)"
                   value={form.reviewLabel}
                   onChange={handleChange}
                 />
                 <Input
                   name="reviewCount"
                   type="number"
                   placeholder="Review Count"
                   value={form.reviewCount}
                   onChange={handleChange}
                 />
               </div>
             </div>

             {/* Pricing & Offers */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">💰 Pricing & Offers</h3>
               <div className="grid grid-cols-2 gap-3">
                 <Input
                   name="price"
                   type="number"
                   placeholder="Current Price *"
                   value={form.price}
                   onChange={handleChange}
                   required
                 />
                 <Input
                   name="originalPrice"
                   type="number"
                   placeholder="Original Price"
                   value={form.originalPrice}
                   onChange={handleChange}
                 />
               </div>
               <div className="grid grid-cols-3 gap-3">
                 <Input
                   name="tax"
                   type="number"
                   placeholder="Tax Amount"
                   value={form.tax}
                   onChange={handleChange}
                 />
                 <Input
                   name="initialAmount"
                   type="number"
                   placeholder="Initial Booking Amount"
                   value={form.initialAmount}
                   onChange={handleChange}
                 />
                 <Input
                   name="discount"
                   type="number"
                   placeholder="Discount Amount"
                   value={form.discount}
                   onChange={handleChange}
                 />
               </div>
               <Input
                 name="promocode"
                 placeholder="Promocode Description"
                 value={form.promocode}
                 onChange={handleChange}
               />
               <Input
                 name="perk"
                 placeholder="Special Perk (e.g., Free Breakfast)"
                 value={form.perk}
                 onChange={handleChange}
               />
             </div>

             {/* Booking & Availability */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">📅 Booking & Availability</h3>
               <div className="grid grid-cols-2 gap-3">
                 <Input
                   name="availableFrom"
                   type="date"
                   placeholder="Available From"
                   value={form.availableFrom}
                   onChange={handleChange}
                 />
                 <Input
                   name="availableTo"
                   type="date"
                   placeholder="Available To"
                   value={form.availableTo}
                   onChange={handleChange}
                 />
               </div>
               <div className="grid grid-cols-2 gap-3">
                 <Input
                   name="day"
                   type="number"
                   placeholder="Days"
                   value={form.day}
                   onChange={handleChange}
                 />
                 <Input
                   name="night"
                   type="number"
                   placeholder="Nights"
                   value={form.night}
                   onChange={handleChange}
                 />
               </div>
               <div className="grid grid-cols-3 gap-3">
                 <Input
                   name="rooms"
                   type="number"
                   placeholder="Rooms"
                   value={form.rooms}
                   onChange={handleChange}
                 />
                 <Input
                   name="guests"
                   type="number"
                   placeholder="Guests"
                   value={form.guests}
                   onChange={handleChange}
                 />
                 <Input
                   name="people"
                   type="number"
                   placeholder="People"
                   value={form.people}
                   onChange={handleChange}
                 />
               </div>
               <div className="flex items-center space-x-2">
                 <input
                   type="checkbox"
                   name="bookWithZero"
                   checked={form.bookWithZero}
                   onChange={(e) => setForm({ ...form, bookWithZero: e.target.checked })}
                   className="rounded"
                 />
                 <Label>Book with ₹0</Label>
               </div>
             </div>

             {/* Facilities */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">🛎️ Facilities</h3>
               <div className="grid grid-cols-2 gap-4 max-h-[250px] overflow-y-auto pr-2">
                 {PREDEFINED_FACILITIES.map(({ key, label, icon }) => (
                   <div
                     key={key}
                     className="flex items-center justify-between p-3 rounded-xl border border-[#e0e7ff] bg-[#f9faff] hover:shadow-sm transition-all"
                   >
                     <Label
                       htmlFor={`facility-${key}`}
                       className="text-sm font-medium text-gray-700 select-none flex items-center gap-2"
                     >
                       <span>{icon}</span>
                       {label}
                     </Label>
                     <Switch
                       id={`facility-${key}`}
                       checked={facilities.includes(label)}
                       onCheckedChange={(checked) => {
                         if (checked) {
                           setFacilities([...facilities, label]);
                         } else {
                           setFacilities(facilities.filter(f => f !== label));
                         }
                       }}
                       className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7B8EDD] data-[state=checked]:to-[#5470E2]"
                     />
                   </div>
                 ))}
               </div>
             </div>

             {/* Amenities */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">🏨 Amenities</h3>
               <div className="grid grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2">
                 {PREDEFINED_AMENITIES.map(({ key, label, icon }) => (
                   <div
                     key={key}
                     className="flex items-center justify-between p-3 rounded-xl border border-[#e0e7ff] bg-[#f9faff] hover:shadow-sm transition-all"
                   >
                     <Label
                       htmlFor={`amenity-${key}`}
                       className="text-sm font-medium text-gray-700 select-none flex items-center gap-2"
                     >
                       <span>{icon}</span>
                       {label}
                     </Label>
                     <Switch
                       id={`amenity-${key}`}
                       checked={amenities.includes(label)}
                       onCheckedChange={(checked) => {
                         if (checked) {
                           setAmenities([...amenities, label]);
                         } else {
                           setAmenities(amenities.filter(a => a !== label));
                         }
                       }}
                       className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#7B8EDD] data-[state=checked]:to-[#5470E2]"
                     />
                   </div>
                 ))}
               </div>
             </div>

             {/* Description */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">📝 Description</h3>
               {description.map((desc, descIndex) => (
                 <div key={descIndex} className="space-y-2 border p-3 rounded">
                   <Input
                     placeholder="Place/Location"
                     value={desc.place}
                     onChange={(e) => updateDescriptionPlace(descIndex, e.target.value)}
                   />
                   {desc.info.map((info, infoIndex) => (
                     <div key={infoIndex} className="flex gap-2">
                       <Textarea
                         placeholder="Description info"
                         value={info}
                         onChange={(e) => updateDescriptionInfo(descIndex, infoIndex, e.target.value)}
                         className="flex-1"
                       />
                       <Button
                         type="button"
                         variant="outline"
                         size="sm"
                         onClick={() => removeDescriptionInfo(descIndex, infoIndex)}
                       >
                         Remove
                       </Button>
                     </div>
                   ))}
                   <Button
                     type="button"
                     variant="outline"
                     onClick={() => addDescriptionInfo(descIndex)}
                     className="w-full"
                   >
                     + Add Info
                   </Button>
                 </div>
               ))}
             </div>

             {/* Legacy Fields (for backward compatibility) */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">🔧 Legacy Fields</h3>
               <Textarea
                 name="descriptionAboutHotel"
                 placeholder="Legacy Description"
                 value={form.descriptionAboutHotel}
                 onChange={handleChange}
               />
               <Input
                 name="taxesAndFees"
                 type="number"
                 placeholder="Legacy Taxes & Fees"
                 value={form.taxesAndFees}
                 onChange={handleChange}
               />
               <div className="flex gap-4">
                 <div className="flex items-center space-x-2">
                   <input
                     type="checkbox"
                     name="freeBreakfast"
                     checked={form.freeBreakfast}
                     onChange={(e) => setForm({ ...form, freeBreakfast: e.target.checked })}
                   />
                   <Label>Free Breakfast</Label>
                 </div>
                 <div className="flex items-center space-x-2">
                   <input
                     type="checkbox"
                     name="freeParking"
                     checked={form.freeParking}
                     onChange={(e) => setForm({ ...form, freeParking: e.target.checked })}
                   />
                   <Label>Free Parking</Label>
                 </div>
                 <div className="flex items-center space-x-2">
                   <input
                     type="checkbox"
                     name="freeCancellation"
                     checked={form.freeCancellation}
                     onChange={(e) => setForm({ ...form, freeCancellation: e.target.checked })}
                   />
                   <Label>Free Cancellation</Label>
                 </div>
               </div>
             </div>

             {/* Image Upload */}
             <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[#4b3fb3]">📸 Images</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                 {Array.from({ length: 5 }, (_, i) => {
                   const key = `image${i + 1}`;
                   return (
                     <div key={key} className="space-y-1">
                       <div className="w-full h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border">
                         {previews[key] ? (
                           <img
                             src={previews[key]}
                             alt="preview"
                             className="w-full h-full object-cover"
                           />
                         ) : (
                           <span className="text-gray-400 text-xs">
                             No Image
                           </span>
                         )}
                       </div>
                       <Input
                         type="file"
                         accept="image/*"
                         onChange={(e) => handleImageChange(e, key)}
                         className="text-xs"
                       />
                     </div>
                   );
                 })}
               </div>
             </div>
           </div>

           <DialogFooter className="mt-6 flex justify-end gap-3">
             <Button
               variant="outline"
               className="border-gray-300 text-gray-700 hover:bg-gray-100"
               onClick={() => setOpen(false)}
             >
               Cancel
             </Button>
             <Button
               onClick={handleSubmit}
               disabled={loading}
               className={`bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] hover:opacity-90 text-white ${loading ? 'animate-pulse' : ''}`}
             >
               {loading
                 ? editMode
                   ? "Updating..."
                   : "Adding..."
                 : editMode
                   ? "Update Hotel"
                   : "Add Hotel"}
             </Button>
           </DialogFooter>
         </DialogContent>
       </Dialog>
     </div>
   );
 }
