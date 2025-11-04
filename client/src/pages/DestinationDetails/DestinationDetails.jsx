import PackageHeader from '@/components/DestinationDetails/PackageHeader'
import { useLocation, useParams } from 'react-router-dom';

import PriceCard from '@/components/DestinationDetails/PriceCard';
import NeedHelpCard from '@/components/DestinationDetails/NeedHelpCard';
import TripHighlights from '@/components/DestinationDetails/TripHighlights';
import DayWiseItinerary from '@/components/DestinationDetails/DayWiseItinerary';
import InclusionsExclusions from '@/components/DestinationDetails/InclusionsExclusions';
import AdditionalInfo from '@/components/DestinationDetails/AdditionalInfo';
import DurationInclusions from '@/components/DestinationDetails/DurationInclusions';
import { useState, useEffect } from 'react';
import PackageTabs from '@/components/DestinationDetails/DestinationTabs';
import DestinationPackages from '@/components/DestinationData/DestinationPackages';
import React from 'react'

export default function DestinationDetails() {
  const { state } = useLocation();
  const { packageSlug } = useParams();
  const [packageData, setPackageData] = useState(() => state?.trip || DestinationPackages.find((p) => p.slug === packageSlug));

  useEffect(() => {
    let mounted = true;
    const loadIfNeeded = async () => {
      if (packageData) return; // already have it
      try {
        const res = await fetch(`/api/v1/package/${packageSlug}`);
        if (!mounted) return;
        if (!res.ok) return; // keep fallback
        const body = await res.json();
        const pkg = body?.data ?? body ?? null;
        if (pkg) setPackageData(pkg);
      } catch (e) {
        // ignore
      }
    };
    loadIfNeeded();
    return () => { mounted = false; };
  }, [packageSlug, packageData, state]);

  useEffect(() => {
    console.log('🔍 useLocation().state:', state);
    console.log('📦 Resolved packageData:', packageData);
  }, [state, packageData]);

  const [showDialog, setShowDialog] = useState(false);

  const tabs = [
    { id: 'Trip Highlights', label: 'Trip Highlights' },
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
      {/* <BreadCrumb segments={breadcrumbs} /> */}

      <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-6">
        {/* Left Column */}
        <div className="space-y-10">
          <PackageHeader packageData={packageData} />
          <PackageTabs tabs={tabs} />

          <section id="Trip Highlights">
            <TripHighlights tripHighlights={packageData.tripHighlights} />
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

