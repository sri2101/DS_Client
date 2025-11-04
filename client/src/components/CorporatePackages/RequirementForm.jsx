import React from 'react';

export default function RequirementForm() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Drop Your Requirements</h2>
      <form className="space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">Name of Organization</label>
          <input type="text" placeholder="Name of Organization" className="w-full p-3 border rounded" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input type="text" placeholder="+91-xxxxxxxxxx" className="w-full p-3 border rounded" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Email ID</label>
            <input type="email" placeholder="xyz@gmail.com" className="w-full p-3 border rounded" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Contact Person</label>
            <input type="text" placeholder="Contact Person" className="w-full p-3 border rounded" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Place to Visit</label>
            <input type="text" placeholder="Place to Visit" className="w-full p-3 border rounded" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Total Room Needed</label>
            <input type="text" placeholder="Total Room Needed" className="w-full p-3 border rounded" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Number of Persons</label>
            <input type="text" placeholder="Number of Persons" className="w-full p-3 border rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Other Requirements</label>
          <textarea placeholder="Other Requirements" className="w-full p-3 border rounded min-h-[100px]" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Submit Requirement
        </button>
      </form>
    </div>
  );
}
