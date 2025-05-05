import React from "react";
import { FaBed, FaBath, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiWhatsappLogoBold } from "react-icons/pi";


const EstateCard = ({ property }) => {

  const {
    price,
    type,
    bedrooms,
    bathrooms,
    area,
    location,
    description,
    imageUrl,
    logoUrl,
    isSignature,
    isOffPlan,
  } = property;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border">
      <div className="md:w-1/2 relative">
        <img
          src={imageUrl} 
          alt="Chalet"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
          {isOffPlan ? "Off-Plan" : "Signature"}
        </span>
        <button className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
          <FaHeart className="text-gray-500" />
        </button>
      </div>


      <div className="md:w-1/2 p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-gray-800 font-bold text-xl">{price}</div>
            <div className="text-sm text-gray-500 mt-1">{type}</div>
            <div className="flex items-center space-x-4 text-sm mt-1 text-gray-600">
              <span className="flex items-center">
                <FaBed className="mr-1" /> {bedrooms}
              </span>
              <span className="flex items-center">
                <FaBath className="mr-1" /> {bathrooms}
              </span>
              <span>{area}</span>
            </div>
          </div>
          <span className="text-xs text-blue-500 border border-blue-400 rounded px-2 py-1">
            {isSignature ? "Signature" : "Off-Plan"}
          </span>
        </div>

        <p className="text-sm text-blue-600 font-medium">
          {location}
        </p>
        <p className="text-sm text-gray-600">
          {description}
        </p>

        <div className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded font-medium">
          {isSignature ? "Signature" : "Off-Plan"}
        </div>

        <div className="flex space-x-3 pt-4">
          <button className="flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">
            <HiOutlineMail className="mr-2" /> Email
          </button>
          <button className="flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">
            <FaPhoneAlt className="mr-2" /> Call
          </button>
          <button className="flex items-center px-4 py-2 text-sm bg-green-100 hover:bg-green-200 text-green-800 rounded">
            <PiWhatsappLogoBold className="mr-2" /> WhatsApp
          </button>
        </div>

        <img
          src={logoUrl}
          alt="Reala Properties"
          className="w-20 mt-2"
        />
      </div>
    </div>
  );
};

export default EstateCard;
