import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DestinationPackages from '@/components/DestinationData/DestinationPackages';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const fields = [
  { key: 'picture', label: 'Picture' },
  { key: 'numNights', label: 'No. of Nights' },
  { key: 'flight', label: 'Flight' },
  { key: 'hotel', label: 'Hotels' },
  { key: 'transfer', label: 'Transfer' },
  { key: 'visa', label: 'Visa' },
  { key: 'location', label: 'City Includes' },
  { key: 'price', label: 'Price Per Person' },
];

const ComparePackages = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const origin = query.get('origin');
  const slugsParam = query.get('slugs') || '';
  const initialSlugs = slugsParam.split(',').filter(Boolean);
  const [activeSlugs, setActiveSlugs] = useState(initialSlugs);

  const packages = DestinationPackages.filter(p => activeSlugs.includes(p.slug));

  const remove = (slug) => setActiveSlugs(prev => prev.filter(s => s !== slug));
  const view = (slug) => navigate(`/destination-details/${slug}`);
  const addPackages = () => navigate(origin ? `/destinations-overview/${origin}` : '/destinations');

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Compare Packages</h1>
        <button
          onClick={addPackages}
          className="border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 text-sm font-medium"
        >Add Packages</button>
      </div>
      <div className="overflow-x-auto border rounded-md">
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 w-48 text-sm font-semibold">Items</th>
              {packages.map(pkg => (
                <th key={pkg.slug} className="p-3 text-sm font-semibold">{pkg.title}</th>
              ))}
              {packages.length === 0 && <th className="p-3 text-sm font-semibold">&nbsp;</th>}
            </tr>
          </thead>
          <tbody>
            {fields.map(field => (
              <tr key={field.key} className="border-t">
                <td className="p-3 align-top text-sm font-medium w-48">{field.label}</td>
                {packages.map(pkg => {
                  let content = '-';
                  if (field.key === 'picture') {
                    content = <img src={pkg.images?.[0] || '/placeholder.webp'} alt={pkg.title} className="w-full h-40 object-cover rounded-md" />;
                  } else if (field.key === 'numNights') {
                    content = pkg.numNights;
                  } else if (field.key === 'flight') {
                    content = pkg.flight === 'withFlight' ? 'Yes' : 'No';
                  } else if (field.key === 'hotel') {
                    content = pkg.packageType === 'customizable' ? '4 Star' : 'Included';
                  } else if (field.key === 'transfer') {
                    content = 'Yes';
                  } else if (field.key === 'visa') {
                    content = 'No';
                  } else if (field.key === 'location') {
                    content = pkg.location || '-';
                  } else if (field.key === 'price') {
                    content = (
                      <div className="text-blue-600 font-semibold">
                        ₹{pkg.priceDetails?.discountedPrice?.toLocaleString()}
                      </div>
                    );
                  }
                  return <td key={pkg.slug + field.key} className="p-3 align-top text-sm">{content}</td>;
                })}
                {packages.length === 0 && (
                  <td className="p-3 text-sm text-gray-400">No Packages Selected</td>
                )}
              </tr>
            ))}
            <tr className="border-t">
              <td className="p-3" />
              {packages.map(pkg => (
                <td key={pkg.slug + 'actions'} className="p-3 space-y-2">
                  <button
                    onClick={() => view(pkg.slug)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium"
                  >View Package</button>
                  <button
                    onClick={() => remove(pkg.slug)}
                    className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-md text-sm"
                  >Remove</button>
                </td>
              ))}
              {packages.length === 0 && (
                <td className="p-6 text-center text-sm text-gray-500">Select packages to compare</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      {packages.length === 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={addPackages}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold"
          >Add Packages</button>
        </div>
      )}
    </div>
  );
};

export default ComparePackages;