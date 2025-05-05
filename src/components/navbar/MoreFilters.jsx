import { useState } from 'react'
import { IoMdOptions } from 'react-icons/io'

export default function MoreFilters() {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative inline-block text-left'>

      <button
        onClick={() => setOpen(!open)}
        className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100'
      >
        More Filters
        <span className='text-sm'>
          <IoMdOptions />
        </span>
      </button>


      {open && (
        <div className='absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50'>

          <div className='mb-4'>
            <label className='block font-semibold text-sm mb-1'>
              Down payment (EGP)
            </label>
            <div className='flex gap-2'>
              <input
                type='number'
                placeholder='0'
                className='w-1/2 border px-2 py-1 rounded'
              />
              <input
                type='text'
                placeholder='Any'
                className='w-1/2 border px-2 py-1 rounded'
              />
            </div>
          </div>


          <div className='mb-4'>
            <label className='block font-semibold text-sm mb-1'>
              Price (EGP)
            </label>
            <div className='flex gap-2'>
              <input
                type='number'
                placeholder='0'
                className='w-1/2 border px-2 py-1 rounded'
              />
              <input
                type='text'
                placeholder='Any'
                className='w-1/2 border px-2 py-1 rounded'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block font-semibold text-sm mb-1'>
              Area (Sq. M.)
            </label>
            <div className='flex gap-2'>
              <input
                type='number'
                placeholder='0'
                className='w-1/2 border px-2 py-1 rounded'
              />
              <input
                type='text'
                placeholder='Any'
                className='w-1/2 border px-2 py-1 rounded'
              />
            </div>
          </div>


          <div className='mb-4'>
            <label className='block font-semibold text-sm mb-1'>Keywords</label>
            <input
              type='text'
              placeholder='Add relevant keywords'
              className='w-full border px-2 py-1 rounded'
            />
          </div>


          <div className='mb-4'>
            <label className='block font-semibold text-sm mb-1'>
              Agent or Agency
            </label>
            <input
              type='text'
              placeholder='Select an agent or agency'
              className='w-full border px-2 py-1 rounded'
            />
          </div>


          <div className='flex gap-3 mt-4'>
            <button className='flex-1 px-4 py-1 border border-[#006169] rounded text-[#006169] hover:bg-gray-100'>
              Reset
            </button>
            <button className='flex-1 px-4 py-1 bg-[#006169] text-white rounded hover:bg-teal-800'>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
