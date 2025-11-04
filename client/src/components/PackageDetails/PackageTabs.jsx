// import React from 'react';

// const tabs = [
//   { id: 'overview', label: 'Overview' },
//   { id: 'itinerary', label: 'Day wise Itinerary' },
//   { id: 'inclusions', label: 'Inclusion/Exclusions' },
//   { id: 'additional', label: 'Additional Info' },
// ];

// export default function PackageTabs() {
//   return (
//     <div className="flex gap-4 mt-6 mb-4 overflow-x-auto no-scrollbar sticky top-0 bg-white z-10 py-3 shadow-sm scroll-smooth">
//       {tabs.map((tab) => (
//         <a
//           key={tab.id}
//           href={`#${tab.id}`}
//           className="text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-700 transition-all duration-200"
//         >
//           {tab.label}
//         </a>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'itinerary', label: 'Day wise Itinerary' },
  { id: 'inclusions', label: 'Inclusion/Exclusions' },
  { id: 'additional', label: 'Additional Info' },
];

export default function PackageTabs() {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    console.log("📍 Scrolling to:", id, el);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tabs.map((tab) => {
        const el = document.getElementById(tab.id);
        const top = el ? el.getBoundingClientRect().top : Infinity;
        return { id: tab.id, top };
      });

      console.log("📏 Scroll positions:", offsets);

      const current = offsets.find((section) => section.top > 0) || offsets[offsets.length - 1];
      setActiveTab(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="flex gap-4 mt-6 mb-4 overflow-x-auto no-scrollbar sticky top-0 bg-white z-10 py-3 shadow-sm scroll-smooth">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            const el = document.getElementById(tab.id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className={`text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${activeTab === tab.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
        >
          {tab.label}
        </button>

      ))}
    </div>
  );
}
