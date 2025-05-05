import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const PropertyTypeDropdown = () => {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const propertyTypes = {
    Residential: ['Apartment', 'House', 'Townhouse', 'Condo'],
    Commercial: ['Office', 'Retail', 'Warehouse', 'Land'],
  }

  const resetFilter = () => {
    setCategory(null)
    setSelectedOption(null)
  }

  const applyFilter = () => {
    setOpen(false)
    console.log('Property type filter applied:', selectedOption)
  }

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={() => setOpen(!open)}
        className='px-4 py-2 bg-white border rounded shadow flex items-center gap-2'
      >
        Property Type <FaChevronDown size={14} />
      </button>

      {open && (
        <div className='absolute mt-2 w-64 bg-white border rounded shadow-lg z-10'>
          <div className='p-4'>
            {!category ? (
              <>
                <p className='text-sm font-medium mb-2'>Select Category</p>
                <div className='flex flex-col gap-2'>
                  {Object.keys(propertyTypes).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className='px-4 py-2 border rounded border-[#006169] text-[#006169]'
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className='text-sm font-medium mb-2'>{category} Options</p>
                <div className='flex flex-col gap-2 mb-4'>
                  {propertyTypes[category].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedOption(type)}
                      className={`px-4 py-2 border rounded ${
                        selectedOption === type
                          ? 'bg-[#006169] text-white'
                          : 'border-[#006169] text-[#006169]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCategory(null)}
                  className='text-sm text-[#006169] mb-2'
                >
                  ← Back to Categories
                </button>
              </>
            )}

            <div className='flex gap-3 mt-4'>
              <button
                onClick={resetFilter}
                className='flex-1 px-4 py-1 border border-[#006169] rounded text-[#006169]'
              >
                Reset
              </button>
              <button
                onClick={applyFilter}
                className='flex-1 px-4 py-1 bg-[#006169] text-white rounded'
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyTypeDropdown
