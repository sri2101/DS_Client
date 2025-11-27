// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <img src="logo_DS.png" alt="DeltaSafari" className="w-60"/>
//           </div>
//           <div>
//             <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Login or Signup</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Corporate Packages</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Refer & Earn</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">B2B Enquries</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Activities</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Hotels</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-white font-medium mb-4 text-lg">Information</h3>
//             <ul className="space-y-2">
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">FAQ'S</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Cancellation Policy</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Terms & Conditions</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Privacy Policy</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Refund Policy</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Blogs</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-white font-medium mb-4 text-lg">Popular Destination</h3>
//             <ul className="space-y-2">
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Group Packages</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Domestic Packages</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">International Packages</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Foreigner's Corner</a></li>
//               <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Customize Packages</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-16 text-sm text-gray-400 text-right">
//           <p>&copy; Copyright 2024 Delta Safari, All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <img src="logo_DS.png" alt="DeltaSafari" className="w-60" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">

              <li>
                <Link
                  to="/auth"
                  className="text-gray-400 hover:text-white text-[16px]"
                >
                  Login or Signup
                </Link>
              </li>


              {/* Corporate Packages (REAL NAV) */}
              <li>
                <Link to="/corporatepackages" className="text-gray-400 hover:text-white text-[16px]">
                  Corporate Packages
                </Link>
              </li>

              {/* Refer & Earn */}
              <li>
                <Link to="/referearn" className="text-gray-400 hover:text-white text-[16px]">
                  Refer & Earn
                </Link>
              </li>

              {/* B2B → Corporate Packages */}
              <li>
                <Link to="/corporatepackages" className="text-gray-400 hover:text-white text-[16px]">
                  B2B Enquiries
                </Link>
              </li>

              {/* Activities */}
              <li>
                <Link to="/activities" className="text-gray-400 hover:text-white text-[16px]">
                  Activities
                </Link>
              </li>

              {/* Hotels */}
              <li>
                <Link to="/hotels-intro" className="text-gray-400 hover:text-white text-[16px]">
                  Hotels
                </Link>
              </li>

            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Information</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-[16px]">FAQ'S</span></li>
              <li><span className="text-gray-400 text-[16px]">Cancellation Policy</span></li>
              <li><span className="text-gray-400 text-[16px]">Terms & Conditions</span></li>
              <li><span className="text-gray-400 text-[16px]">Privacy Policy</span></li>
              <li><span className="text-gray-400 text-[16px]">Refund Policy</span></li>
              <li><span className="text-gray-400 text-[16px]">Blogs</span></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Popular Destination</h3>
            <ul className="space-y-2">

              {/* Group Packages → Corporate */}
              <li>
                <Link to="/corporatepackages" className="text-gray-400 hover:text-white text-[16px]">
                  Group Packages
                </Link>
              </li>

              {/* Domestic → Destinations */}
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white text-[16px]">
                  Domestic Packages
                </Link>
              </li>

              {/* International → Destinations */}
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white text-[16px]">
                  International Packages
                </Link>
              </li>

              {/* Foreigner's Corner → Destinations */}
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white text-[16px]">
                  Foreigner's Corner
                </Link>
              </li>

              {/* Customize → Destinations */}
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white text-[16px]">
                  Customize Packages
                </Link>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-16 text-sm text-gray-400 text-right">
          <p>&copy; Copyright 2024 Delta Safari, All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;



