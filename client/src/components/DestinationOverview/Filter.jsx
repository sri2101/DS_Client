import React, { useState, useRef, useEffect } from "react";
// import DestinationPackages from '@/components/DestinationData/DestinationPackages';
import { ChevronDown, X } from "lucide-react";


// Dynamically extract unique filter options from DestinationPackages
const getUnique = (arr) => Array.from(new Set(arr));


// Helper to extract filter options from the provided packages
const getAllOptions = (packages) => ({
    allPackageTypes: getUnique(packages.map(pkg => pkg.packageType).filter(Boolean)),
    allThemes: getUnique(packages.flatMap(pkg => pkg.themes || [])),
    allFlights: getUnique(packages.map(pkg => pkg.flight).filter(Boolean)),
    allDurations: getUnique(packages.map(pkg => pkg.numNights).filter(Boolean)),
    allPrices: packages.map(pkg => pkg.priceDetails?.discountedPrice).filter(Boolean),
});


const TravelPackageFilter = ({ onFilterChange, packages }) => {
    // Extract filter options from the provided packages
    const {
        allPackageTypes,
        allThemes,
        allFlights,
        allDurations,
        allPrices
    } = getAllOptions(packages);

    const filterOptions = {
        sortBy: [
            { label: "Low to High", value: "lowToHigh" },
            { label: "High to Low", value: "highToLow" },
        ],
        packageType: allPackageTypes.map(type => ({
            label: type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1'),
            value: type
        })),
        flight: allFlights.map(flight => ({
            label: flight === 'withFlight' ? 'With Flight' : 'Without Flight',
            value: flight
        })),
        themes: allThemes.map(theme => ({
            label: theme.charAt(0).toUpperCase() + theme.slice(1),
            value: theme
        })),
        durations: allDurations.sort((a, b) => a - b),
        minPrice: Math.min(...allPrices),
        maxPrice: Math.max(...allPrices)
    };


// Accept packages prop
    const [dropdowns, setDropdowns] = useState({
        sortBy: false,
        packageType: false,
        price: false,
        duration: false,
        flight: false,
        themes: false,
    });

    const [filters, setFilters] = useState({
        sortBy: "",
        packageType: [],
        priceRange: [filterOptions.minPrice, filterOptions.maxPrice],
        maxPrice: filterOptions.maxPrice,
        duration: null, // No duration filter by default
        minDuration: Math.min(...filterOptions.durations),
        maxDuration: Math.max(...filterOptions.durations),
        flight: "",
        themes: [],
    });

    const [appliedFilters, setAppliedFilters] = useState([]);

    // Filtering and sorting logic
    let filteredPackages = packages.filter(pkg => {
        // Package Type
        if (filters.packageType.length > 0 && !filters.packageType.includes(pkg.packageType)) return false;
        // Flight
        if (filters.flight && pkg.flight !== filters.flight) return false;
        // Themes
        if (filters.themes.length > 0 && !filters.themes.some(theme => (pkg.themes || []).includes(theme))) return false;
        // Price
        if (pkg.priceDetails?.discountedPrice < filters.priceRange[0] || pkg.priceDetails?.discountedPrice > filters.priceRange[1]) return false;
        // Duration (numNights)
        if (filters.duration && pkg.numNights !== filters.duration) return false;
        return true;
    });

    // Sort by price if selected
    if (filters.sortBy === "lowToHigh") {
        filteredPackages = [...filteredPackages].sort((a, b) => (a.priceDetails?.discountedPrice || 0) - (b.priceDetails?.discountedPrice || 0));
    } else if (filters.sortBy === "highToLow") {
        filteredPackages = [...filteredPackages].sort((a, b) => (b.priceDetails?.discountedPrice || 0) - (a.priceDetails?.discountedPrice || 0));
    }

    // Notify parent of filter changes
    useEffect(() => {
        console.log('[Filter.jsx] Current filters:', filters);
        console.log('[Filter.jsx] Filtered packages:', filteredPackages);
        if (onFilterChange) {
            onFilterChange(filteredPackages, filters);
        }
    }, [JSON.stringify(filters), JSON.stringify(filteredPackages)]);
    const dropdownRefs = useRef({});

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            Object.keys(dropdownRefs.current).forEach((key) => {
                if (
                    dropdownRefs.current[key] &&
                    !dropdownRefs.current[key].contains(event.target)
                ) {
                    setDropdowns((prev) => ({ ...prev, [key]: false }));
                }
            });
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (dropdown) => {
        setDropdowns((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
            [dropdown]: !prev[dropdown],
        }));
    };

    const updateAppliedFilters = (type, value, multi = false) => {
        const filterMap = {
            sortBy: "Sort By",
            packageType: "Package Type",
            price: "Price",
            duration: "Duration",
            flight: "Flight",
            themes: "Themes",
        };

        if (multi) {
            if (filters[type].includes(value)) {
                setAppliedFilters((prev) => prev.filter((f) => f.value !== value));
            } else {
                setAppliedFilters((prev) => [
                    ...prev,
                    { type, label: filterMap[type], value },
                ]);
            }
        } else {
            setAppliedFilters((prev) => [
                ...prev.filter((f) => f.type !== type),
                { type, label: filterMap[type], value },
            ]);
        }
    };

    // Handlers
    const handleSortByChange = (value) => {
        setFilters((prev) => ({ ...prev, sortBy: value }));
        updateAppliedFilters("sortBy", value);
        setDropdowns((prev) => ({ ...prev, sortBy: false }));
    };

    const handlePackageTypeChange = (value) => {
        setFilters((prev) => ({
            ...prev,
            packageType: prev.packageType.includes(value)
                ? prev.packageType.filter((item) => item !== value)
                : [...prev.packageType, value],
        }));
        updateAppliedFilters("packageType", value, true);
    };

    const handleFlightChange = (value) => {
        setFilters((prev) => ({ ...prev, flight: value }));
        updateAppliedFilters("flight", value);
        setDropdowns((prev) => ({ ...prev, flight: false }));
    };

    const handleThemesChange = (value) => {
        setFilters((prev) => ({
            ...prev,
            themes: prev.themes.includes(value)
                ? prev.themes.filter((item) => item !== value)
                : [...prev.themes, value],
        }));
        updateAppliedFilters("themes", value, true);
    };

    const handlePriceChange = (index, newValue) => {
        setFilters((prev) => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(newValue)] }));

        // Update applied filter pill
        const existing = appliedFilters.find((f) => f.type === "price");
        if (existing) {
            setAppliedFilters((prev) =>
                prev.map((f) => (f.type === "price" ? { ...f, value: `₹${newValue}` } : f))
            );
        } else {
            setAppliedFilters((prev) => [...prev, { type: "price", label: "Price", value: `₹${newValue}` }]);
        }
    };


    const handleDurationChange = (newValue) => {
        setFilters((prev) => ({ ...prev, duration: parseInt(newValue) }));
        if (!appliedFilters.some((f) => f.type === "duration")) {
            setAppliedFilters((prev) => [
                ...prev,
                { type: "duration", label: "Duration", value: "duration" },
            ]);
        }
    };

    const removeFilter = (filterToRemove) => {
        setAppliedFilters((prev) => prev.filter((f) => f !== filterToRemove));

        if (filterToRemove.type === "sortBy") setFilters((prev) => ({ ...prev, sortBy: "" }));
        else if (filterToRemove.type === "packageType")
            setFilters((prev) => ({
                ...prev,
                packageType: prev.packageType.filter((item) => item !== filterToRemove.value),
            }));
        else if (filterToRemove.type === "flight")
            setFilters((prev) => ({ ...prev, flight: "" }));
        else if (filterToRemove.type === "themes")
            setFilters((prev) => ({
                ...prev,
                themes: prev.themes.filter((item) => item !== filterToRemove.value),
            }));
        else if (filterToRemove.type === "price") setFilters((prev) => ({ ...prev, priceRange: [15199, 35070] }));
        else if (filterToRemove.type === "duration") setFilters((prev) => ({ ...prev, duration: 5 }));
    };

    const resetAll = () => {
        const resetFilters = {
            sortBy: "",
            packageType: [],
            priceRange: [filterOptions.minPrice, filterOptions.maxPrice],
            maxPrice: filterOptions.maxPrice,
            duration: null, // No duration filter by default
            minDuration: Math.min(...filterOptions.durations),
            maxDuration: Math.max(...filterOptions.durations),
            flight: "",
            themes: [],
        };
        setFilters(resetFilters);
        setAppliedFilters([]);
        if (onFilterChange) {
            onFilterChange(packages, resetFilters);
        }
    };

    const hasPackages = filteredPackages.length > 0;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 bg-white">
            {/* Filter Bar */}
            <div className="bg-gray-50 rounded-full px-6 py-3 mb-6 border">
                <div className="flex flex-wrap gap-3 items-center">
                    {/* Sort By */}
                    <Dropdown
                        title="Sort By"
                        options={filterOptions.sortBy}
                        selected={filters.sortBy}
                        isOpen={dropdowns.sortBy}
                        toggle={() => toggleDropdown("sortBy")}
                        onChange={handleSortByChange}
                        refProp={(el) => (dropdownRefs.current.sortBy = el)}
                    />
                    {/* Package Type */}
                    <Dropdown
                        title="Package Type"
                        options={filterOptions.packageType}
                        selected={filters.packageType}
                        isOpen={dropdowns.packageType}
                        toggle={() => toggleDropdown("packageType")}
                        onChange={handlePackageTypeChange}
                        multi
                        refProp={(el) => (dropdownRefs.current.packageType = el)}
                    />
                    {/* Price */}
                    <div className="relative" ref={(el) => (dropdownRefs.current.price = el)}>
                        <button
                            onClick={() => toggleDropdown("price")}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border hover:bg-gray-200 transition-colors"
                        >
                            Price
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {dropdowns.price && (
                            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-72 p-4">
                                <h3 className="font-medium mb-3">Price</h3>
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                    <span>₹15199</span>
                                    <span>₹{filters.priceRange[1]}</span>
                                </div>
                                <input
                                    type="range"
                                    min="15199"
                                    max="73999"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handlePriceChange(1, e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        )}
                    </div>

                    {/* Duration */}
                    <div className="relative" ref={(el) => (dropdownRefs.current.duration = el)}>
                        <button
                            onClick={() => toggleDropdown("duration")}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border hover:bg-gray-200 transition-colors"
                        >
                            Duration
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {dropdowns.duration && (
                            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 w-72 p-4">
                                <h3 className="font-medium mb-3">Duration</h3>
                                <div className="relative">
                                    <div className="w-full h-6 bg-gray-200 rounded-lg relative">
                                        <div
                                            className="h-6 bg-blue-500 rounded-lg relative flex items-center"
                                            style={{
                                                width: `${((filters.duration - filters.minDuration) /
                                                    (filters.maxDuration - filters.minDuration)) *
                                                    100}%`,
                                            }}
                                        >
                                            <div className="absolute -right-3 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                                        </div>
                                        <div className="absolute inset-0 flex justify-between items-center px-4 text-sm font-medium pointer-events-none">
                                            <span className={filters.duration >= 4 ? "text-white" : "text-gray-600"}>4</span>
                                            <span className={filters.duration >= 5 ? "text-white" : "text-gray-600"}>5</span>
                                            <span className={filters.duration >= 6 ? "text-white" : "text-gray-600"}>6</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={filters.minDuration}
                                        max={filters.maxDuration}
                                        step="1"
                                        value={filters.duration}
                                        onChange={(e) => handleDurationChange(e.target.value)}
                                        className="absolute top-0 left-0 w-full h-6 opacity-0 cursor-pointer"
                                    />
                                </div>
                                <div className="text-center text-sm text-gray-600 mt-2">
                                    Current: {filters.duration} nights
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Flight */}
                    <Dropdown
                        title="Flight"
                        options={filterOptions.flight}
                        selected={filters.flight}
                        isOpen={dropdowns.flight}
                        toggle={() => toggleDropdown("flight")}
                        onChange={handleFlightChange}
                        refProp={(el) => (dropdownRefs.current.flight = el)}
                    />
                    {/* Themes */}
                    <Dropdown
                        title="Themes"
                        options={filterOptions.themes}
                        selected={filters.themes}
                        isOpen={dropdowns.themes}
                        toggle={() => toggleDropdown("themes")}
                        onChange={handleThemesChange}
                        multi
                        refProp={(el) => (dropdownRefs.current.themes = el)}
                    />

                    {/* Reset All */}
                    <button
                        onClick={resetAll}
                        className="ml-auto text-red-500 hover:text-red-600 font-medium"
                    >
                        Reset All
                    </button>
                </div>
            </div>

            {/* Applied Filters Pills */}
            {appliedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {appliedFilters.map((filter, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200"
                        >
                            <span>
                                {filter.type === "price" || filter.type === "duration"
                                    ? filter.label
                                    : filterOptions[filter.type]?.find((opt) => opt.value === filter.value)?.label ||
                                    filter.value}
                            </span>
                            <button
                                onClick={() => removeFilter(filter)}
                                className="text-blue-500 hover:text-blue-700"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Parent page will render empty-state message; don't duplicate it here */}
        </div>
    );
};

// Reusable Dropdown component
const Dropdown = React.forwardRef(({ title, options, selected, isOpen, toggle, onChange, multi, refProp }, ref) => {
    return (
        <div className="relative" ref={refProp}>
            <button
                onClick={toggle}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border hover:bg-gray-200 transition-colors"
            >
                {title}
                <ChevronDown className="w-4 h-4" />
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg z-10 min-w-48">
                    <div className="p-3">
                        {options.map((option) => (
                            <label
                                key={option.value}
                                className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer"
                            >
                                <input
                                    type={multi ? "checkbox" : "radio"}
                                    name={title}
                                    value={option.value}
                                    checked={multi ? selected.includes(option.value) : selected === option.value}
                                    onChange={() => onChange(option.value)}
                                    className="w-4 h-4 text-blue-500"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

export default TravelPackageFilter;
