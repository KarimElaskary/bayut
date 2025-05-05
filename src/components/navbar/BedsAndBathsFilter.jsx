import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'

const FilterDropdown = () => {
  const [open, setOpen] = useState(false);
  const [beds, setBeds] = useState(null);
  const [baths, setBaths] = useState(null);

  const options = [0, 1, 2, 3, 4, "5+"];

  const resetFilters = () => {
    setBeds(null);
    setBaths(null);
  };

  const applyFilters = () => {
    setOpen(false);
    console.log("Filters applied:", { beds, baths });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100"
      >
        Beds & Baths <FaChevronDown size={14} />
      </button>

      {open && (
        <div className="absolute mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Beds</label>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={`beds-${opt}`}
                    onClick={() => setBeds(opt)}
                    className={`px-5 py-1 rounded-full border ${
                      beds === opt ? "bg-[#e9f7f0] text-[#28b16d]" : "bg-gray-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Baths</label>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={`baths-${opt}`}
                    onClick={() => setBaths(opt)}
                    className={`px-5 py-1 rounded-full border ${
                      baths === opt ? "bg-[#e9f7f0] text-[#28b16d]" : "bg-gray-100"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={resetFilters}
                className="flex-1 px-4 py-1 border border-[#006169] rounded text-[#006169] hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                onClick={applyFilters}
                className="flex-1 px-4 py-1 bg-[#006169] text-white rounded hover:bg-teal-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
