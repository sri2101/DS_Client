import React from 'react';
import { PartyPopper, Mountain, Users } from 'lucide-react';

export default function WhyBook() {
    const features = [
        {
            number: '01',
            title: 'Fun Activities',
            description: 'Have an immersive experience with our awesome activity packages.',
            icon: <PartyPopper className="h-6 w-6 text-blue-500" />,
        },
        {
            number: '02',
            title: 'Adventure Activities',
            description: 'From high altitudes to layers of the sea, explore every layer of adventure with us.',
            icon: <Mountain className="h-6 w-6 text-blue-500" />,
        },
        {
            number: '03',
            title: 'Family Activities',
            description: 'Create joyful moments with your loved ones by diving into astonishing adventures.',
            icon: <Users className="h-6 w-6 text-blue-500" />,
        },
    ];

    return (
        <div className="px-4 py-10 max-w-7xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:text-left">Why Book with DeltaSafari Only?</h2>
            <p className="text-gray-700 text-base">
                Welcome to DeltaSafari, your ultimate destination with a vision to offer an extraordinary travel experience. Dive
                into a world of possibilities as we provide an extensive array of activities designed to elevate your journey
                from ordinary to unforgettable. </p>
            <p className="text-gray-700 text-base my-2"> So, kickstart your thrilling adventures with DeltaSafari and craft memorable
                memories.
            </p>
            <p className="text-lg font-medium mb-8 text-left my-3">Here are some of the various activities you can book through our website :</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left py-3">
                {features.map((item, idx) => (
                    <div key={idx} className="relative pt-8">
                        <div className="absolute -top-9 left-0 text-[6rem] font-bold text-blue-200/50 dark:text-sky-50/50 leading-none  tracking-wide z-0">
                            {item.number}
                        </div>
                        <div className="relative z-10 pl-14">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
}
