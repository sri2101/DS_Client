import React, { useState } from 'react';
import { X, User, Phone, Mail, MapPin } from 'lucide-react';

export default function EnquiryDialog({ packageName, onClose }) {
    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    const adjust = (setter, value) => {
        setter((prev) => Math.max(0, prev + value));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="bg-white w-full max-w-2xl rounded-md p-6 shadow-xl relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <h2 className="text-2xl font-bold mb-4">
                    Want to Go For A Memorable Holiday?
                </h2>

                {/* Package Name */}
                <label className="text-sm font-medium block mb-1">Package Name</label>
                <div className="relative mb-5">
                    <input
                        type="text"
                        value={packageName}
                        readOnly
                        className="w-full border rounded-lg p-3 pr-10"
                    />
                    <MapPin
                        size={18}
                        className="absolute right-3 top-6 bottom-5 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>

                {/* Section Title */}
                <h3 className="text-lg font-bold border-b pb-2 mb-4 py-2">Personal Details</h3>

                {/* Name & Mobile */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    {/* Name */}
                    <div className="relative w-full">
                        <label className="text-sm font-medium block mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3 pr-10"
                        />
                        <User
                            size={18}
                            className="absolute right-3 top-12 bottom-6 my-auto text-gray-400 pointer-events-none"
                        />
                    </div>


                    {/* Mobile No. */}
                    <div className="relative w-full">
                        <label className="text-sm font-medium block mb-1">Mobile No.</label>
                        <div className="flex relative">
                            <span className="px-3 py-3 border border-r-0 rounded-l-lg bg-gray-50 text-sm">
                                +91
                            </span>
                            <input
                                type="text"
                                placeholder="Mobile No."
                                className="w-full border border-l-0 rounded-r-lg p-3 pr-10"
                            />
                            {/* <Phone
                                size={18}
                                className="absolute right-3 top-4 bottom-5 -translate-y-1/2 text-gray-400 pointer-events-none"
                            /> */}
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="relative w-full mb-6">
                    <label className="text-sm font-medium block mb-1">Email ID</label>
                    <input
                        type="email"
                        placeholder="Your E-Mail Address"
                        className="w-full border rounded-lg p-3 pr-10"
                    />
                    <Mail
                        size={18}
                        className="absolute right-3 top-12 bottom-11 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>

                {/* Counters */}
                <div className="flex flex-wrap justify-between gap-4 mb-6">
                    {[{ label: 'Adult', value: adult, setter: setAdult },
                    { label: 'Child', value: child, setter: setChild },
                    { label: 'Infant', value: infant, setter: setInfant }
                    ].map(({ label, value, setter }) => (
                        <div key={label} className="flex flex-col items-center flex-1">
                            <span className="font-medium mb-1">{label}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => adjust(setter, -1)}
                                    className="w-10 h-10 text-xl rounded border"
                                >-</button>
                                <span className="w-6 text-center">{value}</span>
                                <button
                                    onClick={() => adjust(setter, 1)}
                                    className="w-10 h-10 text-xl rounded border"
                                >+</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-lg font-semibold">
                    Enquire Now
                </button>
            </div>
        </div>
    );
}

