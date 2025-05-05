import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const Location = () => {
  return (
    <div className="relative lg:w-1/3">

      <FaLocationDot className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#006169]" />


      <input
        type="text"
        placeholder="Enter location"
        className="border rounded-lg w-full border-[#006169] placeholder:text-black py-2 pl-10 pr-4"
      />
    </div>
  )
}

export default Location
