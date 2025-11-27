import React, { useState } from "react";
import {
  Menu,
  X,
  House,
  MapPinHouse,
  Package,
  Hotel,
  Activity,
  Images,
  RefreshCw,
  Contact,
  Phone,
  Mail,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/app/features/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);

  const navItems = [
    { label: "Home", icon: <House />, to: "/" },
    { label: "Destinations", icon: <MapPinHouse />, to: "/destinations" },
    { label: "Packages", icon: <Package />, to: "/corporatepackages" },
    { label: "Hotels", icon: <Hotel />, to: "/hotels-intro" },
    { label: "Activities", icon: <Activity />, to: "/activities" },
    { label: "Gallery", icon: <Images />, to: "/gallery" },
    { label: "Referals", icon: <RefreshCw />, to: "/referearn" },
    { label: "Contact", icon: <Contact />, to: "/contact" },
  ];

  const countries = [
    { code: "IN", name: "India", flag: "/flags/india.svg" },
    { code: "AE", name: "UAE", flag: "/flags/uae.svg" },
    { code: "UK", name: "UK", flag: "/flags/uk.svg" },
    { code: "TH", name: "Thailand", flag: "/flags/thailand.svg" },
  ];

  const currencies = ["INR", "AED", "THB", "USD", "GBP"];

  const languages = [
    "English",
    "Hindi",
    "Assamese",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
    "Tamil",
    "Telugu",
    "Urdu",
    "Arabic",
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <header className="bg-white shadow-sm w-full relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="flex items-center flex-col space-x-2">
          <img
            src="logo_DS.png"
            alt="Delta Safari Logo"
            className=" w-18 h-9 md:h-13"
          />
          <span className="text-sm text-gray-600 italic hidden md:inline">
            Delta Safari
          </span>
        </div> */}
        {/* Logo */}
        <div className="flex items-center h-16">
          <div className="h-16 overflow-hidden flex items-center">
            <img
              src="logo_DS.png"
              alt="Delta Safari Logo"
              className="h-50 w-auto object-contain"
            />
          </div>
        </div>



        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className={`flex flex-col items-center text-sm font-medium ${item.active
                ? "bg-blue-100 rounded-md px-2 py-1 text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex flex-col items-end space-y-1">
          {/* Small row: Customer Service + Country */}
          <div className="flex items-center space-x-1">
            {/* Customer Service */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowSupport(!showSupport);
                  setShowSettings(false); // CLOSE settings popup
                }}

                className="text-[10px] text-gray-600 flex items-center gap-1 border rounded px-1 py-[1px] hover:bg-gray-50"
              >
                <Headphones size={12} className="text-blue-500" />
                Support ▼
              </button>
              {showSupport && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-3 z-50">
                  <div className="flex items-start gap-2 border-b pb-2 mb-2">
                    <Phone className="text-blue-500" size={14} />
                    <div>
                      <p className="font-medium text-gray-800 text-xs">Call Support</p>
                      <p className="text-blue-600 text-xs">
                        Tel: 011 - 43131313, 43030303
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="text-blue-500" size={14} />
                    <div>
                      <p className="font-medium text-gray-800 text-xs">Mail Support</p>
                      <p className="text-blue-600 text-xs">Care@easemytrip.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Country Selector */}
            <button
              onClick={() => {
                setShowSettings(!showSettings);
                setShowSupport(false); // CLOSE support popup
              }}

              className="text-[10px] text-gray-600 flex items-center gap-1 border rounded px-1 py-[1px] hover:bg-gray-50"
            >
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-3.5 h-3.5"
              />
              {selectedCountry.name} ▼
            </button>
          </div>

          {/* Login / Signup (bigger below) */}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">{user.fullname || user.email}</span>
              <button
                onClick={async () => {
                  try {
                    const token = localStorage.getItem('token');
                    if (token) {
                      // attempt server logout (best-effort)
                      await fetch('/api/v1/user/logout', {
                        method: 'POST',
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      });
                    }
                  } catch (e) {
                    console.error('logout error', e);
                  }
                  dispatch(logoutUser());
                  localStorage.removeItem('token');
                  navigate('/', { replace: true });
                }}
                className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/auth"}>
              <button className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold cursor-pointer">
                Login / Signup
              </button>
            </Link>
          )}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Settings Popup */}
      {showSettings && (
        <div className="absolute right-10 top-16 z-50 bg-white shadow-lg rounded-lg p-4 w-80">
          <div className="flex justify-between gap-2 mb-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Choose Country
              </label>
              <select
                className="w-full border rounded-md px-2 py-1 text-sm"
                value={selectedCountry.code}
                onChange={(e) =>
                  setSelectedCountry(
                    countries.find((c) => c.code === e.target.value)
                  )
                }
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Choose Currency
              </label>
              <select
                className="w-full border rounded-md px-2 py-1 text-sm"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {currencies.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Choose Language
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto border rounded-md p-2">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    name="language"
                    value={lang}
                    checked={selectedLanguage === lang}
                    onChange={() => setSelectedLanguage(lang)}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-3">
          {/* Customer Support */}
          <div className="relative">
            <button
              onClick={() => setShowSupport(!showSupport)}
              className="text-sm text-gray-600 flex items-center gap-2 border rounded-md px-2 py-1 w-full"
            >
              <Headphones size={18} className="text-blue-500" />
              Customer Service ▼
            </button>
            {showSupport && (
              <div className="mt-2 w-full bg-white shadow-md rounded-lg p-3">
                <div className="flex items-start gap-3 border-b pb-3 mb-3">
                  <Phone className="text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      Call Support
                    </p>
                    <p className="text-blue-600 text-sm">
                      Tel: 011 - 43131313, 43030303
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      Mail Support
                    </p>
                    <p className="text-blue-600 text-sm">
                      Care@easemytrip.com
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Country Selector */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-sm text-gray-600 flex items-center gap-2 border rounded-md px-2 py-1 w-full"
          >
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-5 h-5"
            />
            {selectedCountry.name} ▼
          </button>

          {/* Nav Items */}
          <div className="grid grid-cols-3 gap-3 pt-3">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`flex flex-col items-center text-xs ${item.active
                  ? "bg-blue-100 text-blue-600 rounded-md p-2"
                  : "text-gray-700"
                  }`}
              >
                <div className="text-lg">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Login / Signup or Logout (mobile) */}
          {user ? (
            <button
              onClick={async () => {
                try {
                  const token = localStorage.getItem('token');
                  if (token) {
                    await fetch('/api/v1/user/logout', {
                      method: 'POST',
                      headers: { Authorization: `Bearer ${token}` },
                    });
                  }
                } catch (e) {
                  console.error('logout error', e);
                }
                dispatch(logoutUser());
                localStorage.removeItem('token');
                navigate('/', { replace: true });
              }}
              className="w-full mt-3 bg-gray-100 text-gray-800 py-2 rounded-full text-sm font-semibold cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to={"/auth"}>
              <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-full text-sm font-semibold cursor-pointer">
                Login / Signup
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
