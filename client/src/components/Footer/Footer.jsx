import React from 'react'

function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src="logo_DS.png" alt="ReadymadeUI" className="w-60"/>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Login or Signup</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Corporate Packages</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Refer & Earn</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">B2B Enquries</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Activities</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Hotels</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Information</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">FAQ'S</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Cancellation Policy</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Terms & Conditions</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Privacy Policy</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Refund Policy</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Popular Destination</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Group Packages</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Domestic Packages</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">International Packages</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Foreigner's Corner</a></li>
              <li><a href="javascript:void(0)" className="text-gray-400 hover:text-white text-[16px]">Customize Packages</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 text-sm text-gray-400 text-right">
          <p>&copy; Copyright 2024 Delta Safari, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer