import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Purpose = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Buy')

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option: string) => setSelected(option)

  const handleReset = () => setSelected('Buy')

  const handleDone = () => setIsOpen(false)

  return (
    <div className="relative inline-block">
      {/* Dropdown trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center border rounded-lg border-[#006169] text-[#006169] py-2 px-6 gap-2"
      >
        {selected}
        <FaChevronDown size={14} />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg border rounded-lg z-10 p-4">
          <h3 className="text-gray-700 text-sm font-semibold mb-3">Purpose</h3>

          <div className="flex justify-between mb-4">
            <button
              className={`flex-1 py-2 border rounded-l-lg ${
                selected === 'Buy'
                  ? 'bg-[#e6f4f4] text-[#006169] font-medium'
                  : 'bg-white text-gray-600 border-gray-300'
              }`}
              onClick={() => handleSelect('Buy')}
            >
              Buy
            </button>
            <button
              className={`flex-1 py-2 border rounded-r-lg ${
                selected === 'Rent'
                  ? 'bg-[#e6f4f4] text-[#006169] font-medium'
                  : 'bg-white text-gray-600 border-gray-300'
              }`}
              onClick={() => handleSelect('Rent')}
            >
              Rent
            </button>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-[#006169] border border-[#006169] rounded-md hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              onClick={handleDone}
              className="px-4 py-2 bg-[#006169] text-white rounded-md hover:bg-[#004f56]"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Purpose
