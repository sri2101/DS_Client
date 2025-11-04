import React, { useState } from "react";
import { Building2, Package, LogOut } from "lucide-react";
import HotelAdmin from "./HotelAdmin";
import PackageAdmin from "./PackageAdmin";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("hotels");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear auth token or admin session
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#4b3fb3] flex items-center gap-2">
            🏨 Admin Panel
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("hotels")}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              activeTab === "hotels"
                ? "bg-[#4b3fb3] text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <Building2 className="w-5 h-5" />
            Hotels
          </button>

          <button
            onClick={() => setActiveTab("packages")}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              activeTab === "packages"
                ? "bg-[#4b3fb3] text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <Package className="w-5 h-5" />
            Packages
          </button>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "hotels" && <HotelAdmin />}
        {activeTab === "packages" && <PackageAdmin />}
      </main>
    </div>
  );
}
