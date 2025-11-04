import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';

const useHotelData = () => {
    const hotel = useSelector((state) => state.hotelInfo.hotel);
    const [hotelData, setHotelData] = useState(null);

    useEffect(() => {
        if (hotel && Object.keys(hotel).length > 0) {
            setHotelData(hotel);
        } else {
            const localHotel = JSON.parse(localStorage.getItem('selectedHotel'));
            if (localHotel) setHotelData(localHotel);
        }
    }, [hotel]);

    return hotelData;
};

const HotelDetails = () => {
    const hotel = useHotelData();
    const [selectedPayment, setSelectedPayment] = useState('full');
    const [showGST, setShowGST] = useState(false);

    if (!hotel) return null;

    return (
        <Card className="rounded-lg shadow-sm border overflow-hidden">
            <div className="px-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {hotel.name} <span className="text-yellow-500">{'★'.repeat(Math.floor(hotel.rating))}{hotel.rating % 1 >= 0.5 ? '☆' : ''}</span>
                        </h2>
                        <p className="text-sm text-gray-500">{hotel.location}</p>
                    </div>
                    <a href="#" className="text-sm text-blue-600">[Change Hotel]</a>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mt-4">
                    <div className="w-full lg:w-[35%]">
                        <img
                            src={hotel.images[0]}
                            alt="Hotel"
                            className="rounded-md w-full object-cover h-[220px]"
                        />
                    </div>
                    <div className="w-full lg:w-[65%] space-y-4">
                        <div className="grid grid-cols-3 bg-[#e7f3ff] p-4 rounded border text-sm">
                            <div>
                                <p className="text-gray-500">Check-In</p>
                                <p className="font-semibold">{hotel.availableFrom}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Check-Out</p>
                                <p className="font-semibold">{hotel.availableTo}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Guest</p>
                                <p className="font-semibold">{hotel.guests} Adults</p>
                                <p className="text-xs text-gray-500">{hotel.rooms} Room</p>
                            </div>
                        </div>
                        <div className="border rounded p-4 text-sm space-y-4">
                            <div className="flex justify-between mb-1">
                                <p className="font-semibold">
                                    Room Type: Superior Room (3 Hours stay between 11:00 to 20:00)
                                </p>
                                <a href="#" className="text-blue-600">[Change Room]</a>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="space-y-1">
                                <p className="font-semibold">Inclusions:</p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Room only</li>
                                </ul>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="space-y-1">
                                <p className="font-semibold">Cancellation Policy:</p>
                                <p className="text-gray-700">
                                    Free cancellation (Rs.0) before <strong>{hotel.availableFrom}</strong><br />
                                    100% Deduction From: <strong>{hotel.availableFrom}</strong> till check-in
                                </p>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="w-full space-y-2 mt-4">
                                <div className="text-green-600 font-semibold text-sm flex items-center gap-2">
                                    <span className="text-lg">✔</span> Free cancellation before {hotel.availableFrom}
                                </div>
                                <div className="w-full">
                                    <div className="flex items-center gap-2 w-full">
                                        <span className="text-sm font-bold">NOW</span>
                                        <div className="relative flex-1 h-3 flex items-center">
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-green-600 rounded-l-full" style={{ width: '45%' }}></div>
                                            <div className="absolute left-[45%] top-1/2 -translate-y-1/2 h-2 bg-gray-300 rounded-r-full w-[55%]"></div>
                                            <div className="absolute left-0 w-3 h-3 bg-white border-2 border-green-600 rounded-full"></div>
                                            <div className="absolute left-[45%] w-3 h-3 bg-white border-2 border-green-600 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-2 text-xs sm:text-sm font-medium text-gray-700">
                                        <span className="ml-[3.2rem] font-bold text-black">{hotel.availableFrom}</span>
                                        <div className="flex items-end gap-2 ml-auto">
                                            <span className="text-orange-500 font-medium">(Non Refundable)</span>
                                            <div className="text-right">
                                                <div className="text-blue-600 font-semibold">{hotel.availableTo}</div>
                                                <div className="text-[11px] text-gray-500 -mt-1">Check-in</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Guest Details */}
            <div className="px-5 pb-6">
                <Card className="border shadow-sm overflow-hidden p-0">
                    <div className="bg-gradient-to-r from-[#d0e8ff] to-[#e7f3ff] px-5 py-2 flex items-center gap-2 text-sm font-semibold mb-0">
                        <span className="bg-white border w-6 h-6 flex items-center justify-center rounded-full text-xs">👤</span>
                        Guest Details
                    </div>
                    <div className="px-5 pt-3 pb-6 space-y-6 bg-white">
                        {[...Array(hotel.rooms || 1)].map((_, roomIndex) => (
                            <div
                                key={roomIndex}
                                className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr_1fr_1fr] gap-x-4 gap-y-4 items-start"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="border-l border-dashed border-gray-300 h-2" />
                                    <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-sm">
                                        Room {roomIndex + 1}
                                    </div>
                                    <div className="border-l border-dashed border-gray-300 h-2" />
                                </div>
                                <div className="flex items-center h-full text-sm font-semibold text-gray-700 whitespace-nowrap">
                                    Adult 1
                                </div>
                                <div>
                                    <label className="text-sm font-medium block mb-1">Title</label>
                                    <select className="w-full border rounded px-3 py-2 text-sm">
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium block mb-1">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="ENTER FIRST NAME"
                                        className="w-full border rounded px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium block mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="ENTER LAST NAME"
                                        className="w-full border rounded px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Contact Details */}
                        <h4 className="text-sm font-semibold text-gray-700 mt-4 mb-2">Contact Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium block mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="ENTER EMAIL ADDRESS"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium block mb-1">Mobile Number</label>
                                <div className="flex">
                                    <span className="border border-r-0 rounded-l px-3 py-2 text-sm bg-gray-100">+91</span>
                                    <input
                                        type="tel"
                                        placeholder="ENTER MOBILE NUMBER"
                                        className="w-full border rounded-r px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Your booking details will be sent to this email address and mobile number.
                        </p>
                        <hr className="border-t mt-4" />
                    </div>
                </Card>
            </div>


            {/* Payment Section */}
            <div className="px-5 pb-6">
                <Card className="rounded-xl border shadow-sm overflow-hidden p-0">
                    <div className="bg-gradient-to-r from-[#c2ddf7] to-[#f1b5c1] px-4 py-2 flex items-center gap-2">
                        <h3 className="font-semibold text-sm">Payment Options</h3>
                        <span className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full font-medium">NEW</span>
                    </div>
                    <div className="bg-white p-4 space-y-4 text-sm">
                        {[
                            {
                                label: "Book with ₹0 Payment",
                                value: "zero",
                                amount: "₹0",
                                note: `Pay ₹${hotel.price} before 15-Jun-2025 12PM to avoid auto-cancellation.`,
                                disclaimer: "Note: Bank coupons are not applicable.",
                            },
                            {
                                label: "Pay Full Amount Now",
                                value: "full",
                                amount: `₹${hotel.price}`,
                            },
                        ].map((opt) => (
                            <label
                                key={opt.value}
                                onClick={() => setSelectedPayment(opt.value)}
                                className={`rounded-md flex items-start p-4 cursor-pointer border-2 transition-all duration-200 ${selectedPayment === opt.value
                                    ? "border-blue-500 bg-gradient-to-r from-[#c2ddf7] to-[#f1b5c1] shadow-sm"
                                    : "border-gray-300 bg-[#f5f5f5]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={selectedPayment === opt.value}
                                    readOnly
                                    className="mt-1 accent-blue-500"
                                />
                                <div className="ml-3 w-full">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-blue-700">{opt.label}</span>
                                        <span className="text-lg font-bold">{opt.amount}</span>
                                    </div>
                                    {opt.value === "zero" && (
                                        <>
                                            <p className="text-gray-700 mt-1 text-sm">
                                                {opt.note}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">{opt.disclaimer}</p>
                                        </>
                                    )}
                                </div>
                            </label>
                        ))}

                    </div>
                </Card>
            </div>
            {/* GST Details Section - No card wrapper */}
            <div className="px-5 pb-3">
                <hr className="border-gray-300 mb-4" />
                <div
                    className="text-sm font-semibold text-gray-800 flex items-center gap-1 cursor-pointer select-none"
                    onClick={() => setShowGST((prev) => !prev)}
                >
                    <span>{showGST ? "(-)" : "(+)"}</span> GST Details{" "}
                    <span className="text-gray-500 font-normal">(Optional)</span>
                </div>

                {showGST && (
                    <div className="mt-3 space-y-4 text-sm text-gray-700">
                        <p className="text-xs text-gray-600">
                            DeltaSafari will pass-on Traveller’s company GST details if mentioned at the time of booking to the booked hotel (Only for Indian properties). DeltaSafari will not be responsible in case GST Invoice is not collected by Traveller at the time Check-Out.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 font-medium">GST No</label>
                                <input
                                    type="text"
                                    placeholder="ENTER GST NUMBER"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="ENTER COMPANY NAME"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">GST Email</label>
                                <input
                                    type="email"
                                    placeholder="ENTER GST EMAIL"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 font-medium">GST Mobile</label>
                                <input
                                    type="tel"
                                    placeholder="ENTER MOBILE NUMBER"
                                    className="w-full border rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Address</label>
                            <textarea
                                rows={2}
                                placeholder="ENTER ADDRESS"
                                className="w-full border rounded px-3 py-2 text-sm"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="px-5 py-0 text-sm text-gray-700 space-y-4 bg-white">
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 accent-blue-600 rounded border-gray-300"
                    />

                    <p>
                        I understand and agree to the rules of this fare, the <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a> of DeltaSafari
                    </p>
                </div>
                <Button className="w-full bg-[#f26522] hover:bg-[#e55d1c] text-white text-base py-4 rounded-full">
                    {selectedPayment === 'zero' ? 'Book with ₹0' : 'Continue Booking'}
                </Button>
            </div>
        </Card>
    );
};
export default HotelDetails;


