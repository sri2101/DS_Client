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

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });

  const [previews, setPreviews] = useState({});
  const [facilities, setFacilities] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState([]);
  
  const API_BASE = import.meta.env.VITE_API_BASE?.replace(/\/$/, "");

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

  const fetchHotels = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/v1/hotel/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (res.data.data || []).map((h) => {
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

  const fetchHotelsByLocation = async () => {
    if (!searchLocation.trim()) {
      setFilteredHotels(hotels);
      return;
    }
    
    try {
      setError(null);
      const res = await axios.get(`${API_BASE}/api/v1/hotel/location/${searchLocation}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (res.data.data || []).map((h) => {
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
      console.error("Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to fetch hotels");
    }
  };

  const resetForm = () => {
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
    setDescription([]);
    setImages({
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
    });
    setPreviews({});
  };

  const handleOpen = (hotel = null) => {
    if (hotel) {
      setForm({
        name: hotel.name || "",
        city: hotel.city || "",
        location: hotel.location || "",
        starCategory: hotel.starCategory || "",
        star: hotel.star || "",
        budget: hotel.budget || "",
        rating: hotel.rating || "",
        reviewLabel: hotel.reviewLabel || "",
        reviewCount: hotel.reviewCount || "",
        price: hotel.price || "",
        originalPrice: hotel.originalPrice || "",
        tax: hotel.tax || "",
        initialAmount: hotel.initialAmount || "",
        discount: hotel.discount || "",
        promocode: hotel.promocode || "",
        availableFrom: hotel.availableFrom ? new Date(hotel.availableFrom).toISOString().split('T')[0] : "",
        availableTo: hotel.availableTo ? new Date(hotel.availableTo).toISOString().split('T')[0] : "",
        day: hotel.day || "",
        night: hotel.night || "",
        rooms: hotel.rooms || "",
        guests: hotel.guests || "",
        people: hotel.people || "",
        perk: hotel.perk || "",
        bookWithZero: hotel.bookWithZero || false,
        propertyType: hotel.propertyType || "HOTEL",
        descriptionAboutHotel: hotel.descriptionAboutHotel || "",
        taxesAndFees: hotel.taxesAndFees || "",
        freeBreakfast: hotel.freeBreakfast || false,
        freeParking: hotel.freeParking || false,
        freeCancellation: hotel.freeCancellation || false,
      });
      
      setFacilities(Array.isArray(hotel.facilities) ? hotel.facilities : []);
      setAmenities(Array.isArray(hotel.amenities) ? hotel.amenities : []);
      
      let hotelDescription = [];
      if (Array.isArray(hotel.description) && hotel.description.length > 0) {
        hotelDescription = hotel.description.map(d => ({
          place: d.place || "",
          info: Array.isArray(d.info) ? d.info : []
        }));
      }
      setDescription(hotelDescription);
      
      setEditMode(true);
      setSelectedId(hotel._id);

      const hotelPreviews = {};
      for (let i = 1; i <= 5; i++) {
        if (hotel[`image${i}`]) hotelPreviews[`image${i}`] = hotel[`image${i}`];
      }
      setPreviews(hotelPreviews);
    } else {
      resetForm();
      setEditMode(false);
      setSelectedId(null);
    }
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const addDescriptionSection = () => {
    setDescription([...description, { place: "", info: [""] }]);
  };

  const removeDescriptionSection = (index) => {
    setDescription(description.filter((_, i) => i !== index));
  };

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
    if (updated[descIndex].info.length > 1) {
      updated[descIndex].info = updated[descIndex].info.filter((_, i) => i !== infoIndex);
      setDescription(updated);
    }
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

  const handleSubmit = async () => {
    if (!form.name || !form.location || !form.price) {
      alert("Please fill all required fields: name, location, and price");
      return;
    }
    
    try {
      setLoading(true);
      const formData = new FormData();

      Object.keys(form).forEach(key => {
        const value = form[key];
        if (value !== undefined && value !== null && value !== "") {
          formData.append(key, String(value));
        }
      });

      const validFacilities = facilities.filter(f => f && f.trim() !== '');
      const validAmenities = amenities.filter(a => a && a.trim() !== '');
      
      const validDescription = description
        .filter(d => {
          const hasPlace = d.place && d.place.trim() !== '';
          const hasValidInfo = Array.isArray(d.info) && d.info.some(i => i && i.trim() !== '');
          return hasPlace && hasValidInfo;
        })
        .map(d => ({
          place: d.place.trim(),
          info: d.info.filter(i => i && i.trim() !== '').map(i => i.trim())
        }));
      
      formData.append('facilities', JSON.stringify(validFacilities));
      formData.append('amenities', JSON.stringify(validAmenities));
      formData.append('description', JSON.stringify(validDescription));

      Object.entries(images).forEach(([k, v]) => {
        if (v) formData.append(k, v);
      });

      const url = editMode
        ? `${API_BASE}/api/v1/hotel/${selectedId}`
        : `${API_BASE}/api/v1/hotel/create`;

      const method = editMode ? "put" : "post";

//  const method = editMode ? "post" : "post"; // both POST
// const url = editMode
//   ? `${API_BASE}/api/v1/hotel/${selectedId}`
//   : `${API_BASE}/api/v1/hotel/create`;



      await axios({
        method,
        url,
        data: formData,
        headers: { Authorization: `Bearer ${token}` },
      });

      await fetchHotels();
      setOpen(false);
      resetForm();
      
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message || err);
      const errorMessage = err.response?.data?.message || err.message || "Failed to save hotel";
      alert(`Error: ${errorMessage}`);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;
    try {
      await axios.delete(`${API_BASE}/api/v1/hotel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchHotels();
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
      alert("Failed to delete hotel");
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-[#f8f9ff] to-[#eef1ff] min-h-screen">
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
            className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] hover:opacity-90 transition-all"
          >
            + Add Hotel
          </Button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
 
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
              <Card className="shadow-md hover:shadow-2xl transition-transform duration-300 rounded-2xl overflow-hidden border border-[#e0e7ff] bg-white transform hover:-translate-y-1 hover:scale-[1.01] h-full flex flex-col p-0">
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
                      ₹{hotel.price}
                    </span>
                  </p>
 
                  <div className="mt-3 border-t pt-3">
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(hotel?.amenities) ? hotel.amenities : [])
                        .slice(0, 6)
                        .map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[#eef2ff] text-xs font-medium text-[#2b2b2b]"
                          >
                            <span className="text-sm">🏨</span>
                            <span>{amenity}</span>
                          </span>
                        ))}
                    </div>
                  </div>
 
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
 
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-[#4b3fb3]">
              {editMode ? "Edit Hotel" : "Add New Hotel"}
            </DialogTitle>
          </DialogHeader>
 
          <div className="space-y-6 mt-4">
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
                  placeholder="Star Category"
                  value={form.starCategory}
                  onChange={handleChange}
                />
                <Input
                  name="star"
                  type="number"
                  placeholder="Star (1-5)"
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

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">⭐ Ratings & Reviews</h3>
              <div className="grid grid-cols-3 gap-3">
                <Input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  value={form.rating}
                  onChange={handleChange}
                  step="0.1"
                />
                <Input
                  name="reviewLabel"
                  placeholder="Review Label"
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

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">💰 Pricing</h3>
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
                  placeholder="Tax"
                  value={form.tax}
                  onChange={handleChange}
                />
                <Input
                  name="initialAmount"
                  type="number"
                  placeholder="Initial Amount"
                  value={form.initialAmount}
                  onChange={handleChange}
                />
                <Input
                  name="discount"
                  type="number"
                  placeholder="Discount"
                  value={form.discount}
                  onChange={handleChange}
                />
              </div>
              <Input
                name="promocode"
                placeholder="Promocode"
                value={form.promocode}
                onChange={handleChange}
              />
              <Input
                name="perk"
                placeholder="Special Perk"
                value={form.perk}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">📅 Availability</h3>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="availableFrom"
                  type="date"
                  value={form.availableFrom}
                  onChange={handleChange}
                />
                <Input
                  name="availableTo"
                  type="date"
                  value={form.availableTo}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-5 gap-3">
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
                  onChange={handleChange}
                  className="rounded"
                />
                <Label>Book with ₹0</Label>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">🛎️ Facilities</h3>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto p-2">
                {PREDEFINED_FACILITIES.map(({ key, label, icon }) => (
                  <div key={key} className="flex items-center justify-between p-2 rounded-lg border bg-gray-50">
                    <Label className="text-sm flex items-center gap-2">
                      <span>{icon}</span>
                      {label}
                    </Label>
                    <Switch
                      checked={facilities.includes(label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFacilities([...facilities, label]);
                        } else {
                          setFacilities(facilities.filter(f => f !== label));
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">🏨 Amenities</h3>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto p-2">
                {PREDEFINED_AMENITIES.map(({ key, label, icon }) => (
                  <div key={key} className="flex items-center justify-between p-2 rounded-lg border bg-gray-50">
                    <Label className="text-sm flex items-center gap-2">
                      <span>{icon}</span>
                      {label}
                    </Label>
                    <Switch
                      checked={amenities.includes(label)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setAmenities([...amenities, label]);
                        } else {
                          setAmenities(amenities.filter(a => a !== label));
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#4b3fb3]">📝 Description</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addDescriptionSection}
                >
                  + Add Section
                </Button>
              </div>
              {description.length === 0 ? (
                <p className="text-sm text-gray-500 italic p-4 border rounded-lg bg-gray-50">
                  No description sections added yet. Click "+ Add Section" to begin.
                </p>
              ) : (
                description.map((desc, descIndex) => (
                  <div key={descIndex} className="space-y-3 border p-4 rounded-lg bg-gray-50">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Place/Location (e.g., Map-IconA-45, Sector-19)"
                        value={desc.place}
                        onChange={(e) => updateDescriptionPlace(descIndex, e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeDescriptionSection(descIndex)}
                      >
                        Remove Section
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      {desc.info.map((info, infoIndex) => (
                        <div key={infoIndex} className="flex gap-2">
                          <Textarea
                            placeholder={`Description line ${infoIndex + 1}`}
                            value={info}
                            onChange={(e) => updateDescriptionInfo(descIndex, infoIndex, e.target.value)}
                            className="flex-1"
                            rows={2}
                          />
                          {desc.info.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeDescriptionInfo(descIndex, infoIndex)}
                            >
                              ✕
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addDescriptionInfo(descIndex)}
                      className="w-full"
                    >
                      + Add Info Line
                    </Button>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">🔧 Legacy Fields</h3>
              <Textarea
                name="descriptionAboutHotel"
                placeholder="Legacy Description"
                value={form.descriptionAboutHotel}
                onChange={handleChange}
                rows={3}
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
                    onChange={handleChange}
                    className="rounded"
                  />
                  <Label>Free Breakfast</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="freeParking"
                    checked={form.freeParking}
                    onChange={handleChange}
                    className="rounded"
                  />
                  <Label>Free Parking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="freeCancellation"
                    checked={form.freeCancellation}
                    onChange={handleChange}
                    className="rounded"
                  />
                  <Label>Free Cancellation</Label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#4b3fb3]">📸 Images</h3>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 5 }, (_, i) => {
                  const key = `image${i + 1}`;
                  return (
                    <div key={key} className="space-y-2">
                      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border">
                        {previews[key] ? (
                          <img
                            src={previews[key]}
                            alt="preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-sm">
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
              onClick={() => {
                setOpen(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className={`bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] hover:opacity-90 text-white ${loading ? 'opacity-50' : ''}`}
            >
              {loading
                ? (editMode ? "Updating..." : "Adding...")
                : (editMode ? "Update Hotel" : "Add Hotel")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}