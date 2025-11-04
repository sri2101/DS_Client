import { useState } from "react";
import { User } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function TravelerSelector({ count, setCount, pricePerPerson = 6099 }) {
  const [open, setOpen] = useState(false);

  const min = 1;
  const max = 10;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal pl-10 relative"
        >
          <User className="absolute left-3 h-4 w-4 text-gray-500" />
          {count} adult{count > 1 ? "s" : ""}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-medium">
            <div>
              Adult <span className="text-xs text-gray-500">(5 to 99 years)</span>{" "}
              <span className="text-red-600 font-semibold">(₹{pricePerPerson.toLocaleString()})</span>
              <p className="text-xs text-gray-500">Minimum : {min}, Maximum : {max}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-2 border rounded"
                onClick={() => setCount(Math.max(count - 1, min))}
              >
                -
              </button>
              <span className="w-4 text-center">{count}</span>
              <button
                className="px-2 border rounded"
                onClick={() => setCount(Math.min(count + 1, max))}
              >
                +
              </button>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full text-center border-2 border-blue-500 text-blue-500"
            onClick={() => setOpen(false)}
          >
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
