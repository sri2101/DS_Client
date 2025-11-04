// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import EnquiryDialog from '@/components/CorporatePackages/EnquiryDialog';
// import PackageHeader from '@/components/PackageDetails/PackageHeader';
// import PriceCard from '@/components/PackageDetails/PriceCard';
// import NeedHelpCard from '@/components/PackageDetails/NeedHelpCard';
// import OverviewCard from '@/components/PackageDetails/OverviewCard';
// import DayWiseItinerary from '@/components/PackageDetails/DayWiseItinerary';
// import InclusionsExclusions from '@/components/PackageDetails/InclusionsExclusions';
// import AdditionalInfo from '@/components/PackageDetails/AdditionalInfo';
// import DurationInclusions from '@/components/PackageDetails/DurationInclusions';
// import { useState, useEffect } from 'react';
// import PackageTabs from '@/components/PackageDetails/PackageTabs';

// export default function PackageDetails() {
//   const { state } = useLocation();
//   const packageData = state?.trip;

//   useEffect(() => {
//     console.log("🔍 useLocation().state:", state);
//     console.log("📦 packageData:", packageData);
//   }, [state, packageData]);

//   const [showDialog, setShowDialog] = useState(false);

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'itinerary', label: 'Day wise Itinerary' },
//     { id: 'inclusions', label: 'Inclusion/Exclusions' },
//     { id: 'additional', label: 'Additional Info' },
//   ];

//   if (!packageData) return <div className="text-center py-20">Package not found.</div>;


//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6"> */}
//       <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6">


//         {/* Left Column */}
//         <div className="space-y-10">
//           <PackageHeader packageData={packageData} />
//           <PackageTabs />

//           <section id="overview">
//             <OverviewCard overview={packageData.overview} />
//           </section>

//           <section id="itinerary">
//             <DayWiseItinerary itinerary={packageData.itinerary} />
//           </section>

//           <section id="inclusions">
//             <InclusionsExclusions
//               inclusions={packageData.inclusions}
//               exclusions={packageData.exclusions}
//             />
//           </section>

//           <section id="additional">
//             <AdditionalInfo additionalInfo={packageData.additionalInfo} />
//           </section>
//         </div>

//         {/* ✅ Right Column */}
//         <div className="space-y-6 sticky top-20 h-fit mt-12">
//           <div className='w-full sm:w-[320px] md:w-[350px] lg:w-[380px] min-h-[280px]'>
//             <PriceCard
//               price={packageData.priceDetails}
//               onEnquire={() => setShowDialog(true)}
//             />
//           </div>

//           <DurationInclusions
//             duration={packageData.duration}
//             location={packageData.location}
//             includes={packageData.includes}
//           />
//           <NeedHelpCard contact={packageData.contact} />
//         </div>
//       </div>

//       {/* Enquiry Dialog */}
//       {showDialog && (
//         <EnquiryDialog
//           packageName={packageData.title}
//           onClose={() => setShowDialog(false)}
//         />
//       )}
//     </div>
//   );
// }


// import { useLocation } from 'react-router-dom';
// import EnquiryDialog from '@/components/CorporatePackages/EnquiryDialog';
// import PackageHeader from '@/components/PackageDetails/PackageHeader';
// import PriceCard from '@/components/PackageDetails/PriceCard';
// import NeedHelpCard from '@/components/PackageDetails/NeedHelpCard';
// import OverviewCard from '@/components/PackageDetails/OverviewCard';
// import DayWiseItinerary from '@/components/PackageDetails/DayWiseItinerary';
// import InclusionsExclusions from '@/components/PackageDetails/InclusionsExclusions';
// import AdditionalInfo from '@/components/PackageDetails/AdditionalInfo';
// import DurationInclusions from '@/components/PackageDetails/DurationInclusions';
// import { useState, useEffect } from 'react';
// import PackageTabs from '@/components/PackageDetails/PackageTabs';

// export default function PackageDetails() {
//   const { state } = useLocation();
//   const packageData = state?.trip;

//   useEffect(() => {
//     console.log("🔍 useLocation().state:", state);
//     console.log("📦 packageData:", packageData);
//   }, [state, packageData]);

//   const [showDialog, setShowDialog] = useState(false);

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'itinerary', label: 'Day wise Itinerary' },
//     { id: 'inclusions', label: 'Inclusion/Exclusions' },
//     { id: 'additional', label: 'Additional Info' },
//   ];

//   if (!packageData) return <div className="text-center py-20">Package not found.</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-6">
//         {/* Left Column */}
//         <div className="space-y-10">
//           <PackageHeader packageData={packageData} />
//           <PackageTabs />

//           <section id="overview">
//             <OverviewCard overview={packageData.overview} />
//           </section>

//           <section id="itinerary">
//             <DayWiseItinerary itinerary={packageData.itinerary} />
//           </section>

//           <section id="inclusions">
//             <InclusionsExclusions
//               inclusions={packageData.inclusions}
//               exclusions={packageData.exclusions}
//             />
//           </section>

//           <section id="additional">
//             <AdditionalInfo additionalInfo={packageData.additionalInfo} />
//           </section>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-6 sticky top-20 h-fit mt-19">
//           <div className="w-full sm:w-[320px] md:w-[350px] lg:w-[380px] min-h-[280px]">
//             <PriceCard
//               price={packageData.priceDetails}
//               onEnquire={() => setShowDialog(true)}
//             />
//           </div>

//           <DurationInclusions {...packageData.durationAndInclusions} />

//           <NeedHelpCard
//             phoneNumbers={packageData.contact?.phones}
//             email={packageData.contact?.email}
//           />

//         </div>
//       </div>

//       {/* Enquiry Dialog */}
//       {showDialog && (
//         <EnquiryDialog
//           packageName={packageData.title}
//           onClose={() => setShowDialog(false)}
//         />
//       )}
//     </div>
//   );
// }


import { useLocation, useParams } from 'react-router-dom';
import EnquiryDialog from '@/components/CorporatePackages/EnquiryDialog';
import PackageHeader from '@/components/PackageDetails/PackageHeader';
import PriceCard from '@/components/PackageDetails/PriceCard';
import NeedHelpCard from '@/components/PackageDetails/NeedHelpCard';
import OverviewCard from '@/components/PackageDetails/OverviewCard';
import DayWiseItinerary from '@/components/PackageDetails/DayWiseItinerary';
import InclusionsExclusions from '@/components/PackageDetails/InclusionsExclusions';
import AdditionalInfo from '@/components/PackageDetails/AdditionalInfo';
import DurationInclusions from '@/components/PackageDetails/DurationInclusions';
import { useState, useEffect } from 'react';
import PackageTabs from '@/components/PackageDetails/PackageTabs';
import tripPackages from '@/components/PackageData/PackageData';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

export default function PackageDetails() {
  const { state } = useLocation();
  const { slug } = useParams();

  const packageData = state?.trip || tripPackages.find((p) => p.slug === slug);

  useEffect(() => {
    console.log('🔍 useLocation().state:', state);
    console.log('📦 Resolved packageData:', packageData);
  }, [state, packageData]);

  const [showDialog, setShowDialog] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Day wise Itinerary' },
    { id: 'inclusions', label: 'Inclusion/Exclusions' },
    { id: 'additional', label: 'Additional Info' },
  ];

  const generateBreadcrumbs = () => {
    const paths = window.location.pathname.split('/').filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      path: `/${paths.slice(0, index + 1).join('/')}`,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  if (!packageData) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-red-600">
        Package not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <BreadCrumb segments={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-10">
          <PackageHeader packageData={packageData} />
          <PackageTabs tabs={tabs} />

          <section id="overview">
            <OverviewCard overview={packageData.overview} />
          </section>

          <section id="itinerary">
            <DayWiseItinerary itinerary={packageData.itinerary} />
          </section>

          <section id="inclusions">
            <InclusionsExclusions
              inclusions={packageData.inclusions}
              exclusions={packageData.exclusions}
            />
          </section>

          <section id="additional">
            <AdditionalInfo additionalInfo={packageData.additionalInfo} />
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6 sticky top-20 h-fit mt-19">
          <div className="w-full sm:w-[320px] md:w-[350px] lg:w-[380px] min-h-[280px]">
            <PriceCard
              price={packageData.priceDetails}
              onEnquire={() => setShowDialog(true)}
            />
          </div>

          {packageData.durationAndInclusions && (
            <DurationInclusions {...packageData.durationAndInclusions} />
          )}

          <NeedHelpCard
            phoneNumbers={packageData.contact?.phones}
            email={packageData.contact?.email}
          />
        </div>
      </div>

      {/* Enquiry Dialog */}
      {showDialog && (
        <EnquiryDialog
          packageName={packageData.title}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}





