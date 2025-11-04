import { useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function HotelSearchBar({ searchParams, setSearchParams, setVisible }) {
  
  const defaultState = {
    location: "",
    date: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 1))
    },
    rooms: 1,
    guests: 2
  };

  const [localSearch, setLocalSearch] = useState(searchParams || defaultState);
  const [roomCount, setRoomCount] = useState(localSearch.rooms || 1);
  const [guestCount, setGuestCount] = useState(localSearch.guests || 2);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = useCallback(() => {
    const updatedParams = {
      ...localSearch,
      rooms: roomCount,
      guests: guestCount,
      date: {
        ...localSearch.date,
        userPicked: true, // Mark date as user-picked
      },
    };

    setSearchParams(updatedParams);
    setHasApplied(true);
  }, [localSearch, roomCount, guestCount, setSearchParams]);

  const handleClear = useCallback(() => {
    setLocalSearch(defaultState);
    setRoomCount(1);
    setGuestCount(2);
    setSearchParams(defaultState);
    setHasApplied(false);
    setVisible(3);
  }, [setSearchParams, setVisible]);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl px-6 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">

        {/* Location */}
        <div className="flex flex-col w-full md:w-60">
          <label className="text-white text-xs mb-1">
            City name, Location or Specific hotel
          </label>
          <input
            type="text"
            value={localSearch.location}
            onChange={(e) =>
              setLocalSearch((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="Enter location"
            className="px-4 py-2 rounded-md text-black bg-white focus:outline-none"
          />
        </div>

        {/* Calendar */}
        <div className="flex flex-col w-full md:w-[290px]">
          <label className="text-white text-xs mb-1">Check-In / Check-Out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white text-black"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {localSearch.date?.from ? (
                  localSearch.date.to ? (
                    <>
                      {format(localSearch.date.from, "dd/MM/yyyy")} -{" "}
                      {format(localSearch.date.to, "dd/MM/yyyy")}
                    </>
                  ) : (
                    format(localSearch.date.from, "dd/MM/yyyy")
                  )
                ) : (
                  <span>Select dates</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <Calendar
                mode="range"
                defaultMonth={localSearch.date?.from}
                selected={localSearch.date}
                onSelect={(range) =>
                  setLocalSearch((prev) => ({ ...prev, date: range }))
                }
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Rooms/Guests */}
        <div className="flex flex-col w-full md:w-56 relative">
          <label className="text-white text-xs mb-1">Rooms/Guests</label>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="px-4 py-2 rounded-md text-black bg-white pr-8 text-left w-full"
          >
            {guestCount} Person in {roomCount} Room
            <ChevronDown className="absolute right-3 bottom-2.5 h-5 w-5 text-gray-400" />
          </button>

          {showDropdown && (
            <div className="absolute bg-white text-black shadow-lg rounded-md p-4 mt-2 z-10 w-full">
              <div className="flex justify-between items-center mb-2">
                <span>Guests</span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => guestCount > 1 && setGuestCount(guestCount - 1)}>-</button>
                  <span>{guestCount}</span>
                  <button onClick={() => setGuestCount(guestCount + 1)}>+</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Rooms</span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => roomCount > 1 && setRoomCount(roomCount - 1)}>-</button>
                  <span>{roomCount}</span>
                  <button onClick={() => setRoomCount(roomCount + 1)} >+</button>
                </div>
              </div>
              <div className="text-right mt-3">
                <button
                  onClick={() => setShowDropdown(false)}
                  className="text-blue-600 text-sm underline"
                >
                  Done
                </button>
              </div>

            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-end gap-2 mt-5 md:mt-4">
          <button
            onClick={handleApply}
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full border border-white hover:bg-gray-100 transition whitespace-nowrap"
          >
            Modify Search
          </button>
          {hasApplied && (
            <button
              onClick={handleClear}
              className="text-white text-xs underline hover:text-gray-200"
            >
              Clear All
            </button>
            )}
        </div>
      </div>
    </div>
  );
}

