import { useState } from 'react'
import Pagination from './Pagination'
import EstatesCard from './EstateCard'
import property1 from '../assets/property1.webp'
import property2 from '../assets/property2.webp'
import property3 from '../assets/property3.webp'
import reala from '../assets/reala.png'

const tabs = ['All', 'Furnished', 'Unfurnished']

const properties = [
  {
    id: 1,
    price: 'EGP 9,120,000',
    type: 'Chalet',
    bedrooms: 2,
    bathrooms: 2,
    area: 112,
    location: 'Makadi Heights, Hurghada, Red Sea',
    description: 'Fully Finished Chalet With Prime View, 0% Dp Over 8 Years',
    imageUrl: property1,
    logoUrl: reala,
    isSignature: true,
    isOffPlan: true,
  },
  {
    id: 2,
    price: 'EGP 6,750,000',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    location: 'New Cairo, Cairo',
    description: 'Modern Apartment With Balcony, Flexible Payment Plan',
    imageUrl: property2,
    logoUrl: reala,
    isSignature: false,
    isOffPlan: false,
  },
  {
    id: 3,
    price: 'EGP 6,750,000',
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    location: 'New Cairo, Cairo',
    description: 'Modern Apartment With Balcony, Flexible Payment Plan',
    imageUrl: property3,
    logoUrl: reala,
    isSignature: false,
    isOffPlan: false,
  },
]

const EstatesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-center">
          Properties for sale in Egypt
        </h1>


        <div className="flex flex-wrap justify-center  gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="border rounded-lg border-[#006169] text-[#006169] py-2 px-4 text-sm sm:text-base hover:bg-[#006169] hover:text-white transition"
            >
              {tab}
            </button>
          ))}
        </div>


        <div className="flex flex-col gap-6">
          {properties.map((property) => (
            <EstatesCard key={property.id} property={property} />
          ))}
        </div>


        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default EstatesList
