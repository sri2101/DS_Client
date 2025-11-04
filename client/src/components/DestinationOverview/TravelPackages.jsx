import React, { useState } from 'react';
import { 
  Building2, 
  Camera, 
  Car, 
  Compass, 
  Check, 
  ArrowRight,
  CreditCard,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DestinationPackages from '@/components/DestinationData/DestinationPackages';

// EMI Modal Component
const EMIModal = ({ isOpen, onClose, emiOptions }) => {
  const [activeTab, setActiveTab] = useState("noCost");

  if (!isOpen) return null;

  const plans = activeTab === "noCost" 
    ? emiOptions?.noCostPlans || []
    : emiOptions?.standardPlans || [];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900">EMI plan with EMT</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-1 rounded-full">
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-5 py-3 flex-shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("noCost")}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "noCost"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              No Cost EMI
            </button>
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "standard"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Standard EMI
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* EMI Plans Table */}
          <div className="px-5">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-1 font-semibold text-gray-700 text-sm">Months</th>
                  <th className="text-left py-2 px-1 font-semibold text-gray-700 text-sm">Monthly EMI</th>
                </tr>
              </thead>
              <tbody>
                {plans.length > 0 ? (
                  plans.map((plan, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-1 text-gray-900 text-sm">{plan.months}</td>
                      <td className="py-3 px-1 text-gray-900 text-sm">₹ {plan.amount.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="py-6 px-1 text-center text-gray-500 text-sm">No plans available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Contact Form */}
          <div className="p-5 bg-gray-50 mt-4">
            <h3 className="font-semibold mb-3 text-gray-900">Get in touch with us.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-md px-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 text-sm"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-300 rounded-md px-3 py-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 text-sm"
              />
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-md font-semibold transition-colors">
              APPLY
            </button>
          </div>

          {/* Note Section */}
          <div className="px-5 py-3 bg-white">
            <p className="text-sm font-semibold text-gray-900 mb-2">Please Note:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• EMI is inclusive of the processing fee and applicable GST.</li>
              <li>• Loan Protector Insurance: 1% of the package amount is mandatory and included in the EMI.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelPackages = ({ packages, onCompareChange, existingCompare = [] }) => {
  const [compareList, setCompareList] = useState(existingCompare);
  const [emiModalOpen, setEmiModalOpen] = useState(false);
  const [selectedEmiOptions, setSelectedEmiOptions] = useState(null);
  const navigate = useNavigate();

  const toggleCompare = (slug) => {
    setCompareList(prev => {
      const next = prev.includes(slug) ? prev.filter(id => id !== slug) : [...prev, slug];
      onCompareChange && onCompareChange(next);
      return next;
    });
  };

  const handleEmiOptionsClick = (emiOptions) => {
    setSelectedEmiOptions(emiOptions);
    setEmiModalOpen(true);
  };

  const ActivityIcon = ({ index }) => {
    const icons = [Building2, Camera, Car, Compass];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6 text-gray-600" />;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div 
            key={pkg.slug} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative">
              <img 
                src={pkg.images[0]} 
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              
              {/* Duration Badge */}
              <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {pkg.duration}
              </div>

              {/* Top Controls */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                <button 
                  onClick={() => toggleCompare(pkg.slug)}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 ${
                    compareList.includes(pkg.slug) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/90 text-blue-600 border border-blue-600'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border ${
                    compareList.includes(pkg.slug) 
                      ? 'bg-white border-white' 
                      : 'bg-white border-blue-600'
                  } flex items-center justify-center`}>
                    {compareList.includes(pkg.slug) && 
                      <Check className="w-3 h-3 text-blue-600" />
                    }
                  </div>
                  <span className="hidden sm:inline">Add to Compare</span>
                  <span className="sm:hidden">Compare</span>
                </button>
                
                {/* Recommended badge */}
                {pkg.additionalInfo?.highlights?.length > 0 && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    RECOMMENDED
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title and Location */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{pkg.location}</p>

              {/* Activity Icons */}
              <div className="flex items-center gap-4 mb-4">
                <ActivityIcon index={0} />
                <ActivityIcon index={1} />
                <ActivityIcon index={2} />
                <ActivityIcon index={3} />
              </div>

              {/* Highlights List */}
              {pkg.additionalInfo?.highlights?.length > 0 && (
                <div className="mb-4 flex-grow">
                  {pkg.additionalInfo.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {!pkg.additionalInfo?.highlights?.length && <div className="mb-4 flex-grow"></div>}

              {/* Pricing Section */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Starting From</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-gray-400 line-through">
                        ₹{pkg.priceDetails.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{pkg.priceDetails.discountedPrice.toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-600">Per Person on twin sharing</p>
                  </div>
                  
                  {/* Book Now Button */}
                  <button 
                    onClick={() => navigate(`/destination-details/${pkg.slug}`)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors text-sm"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* EMI Option */}
                {pkg.priceDetails.emiOptions?.standardPlans?.length > 0 && (
                  <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                    <CreditCard className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-green-700 flex-grow">
                      No Cost EMI Starts from{" "}
                      <span className="font-semibold">
                        ₹ {pkg.priceDetails.emiOptions.standardPlans[0].amount.toLocaleString()}
                      </span>
                    </span>
                    <button 
                      onClick={() => handleEmiOptionsClick(pkg.priceDetails.emiOptions)}
                      className="text-blue-500 text-xs underline hover:text-blue-700 transition-colors whitespace-nowrap"
                    >
                      See option
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMI Modal */}
      <EMIModal 
        isOpen={emiModalOpen}
        onClose={() => setEmiModalOpen(false)}
        emiOptions={selectedEmiOptions}
      />
    </div>
  );
};

export default TravelPackages;