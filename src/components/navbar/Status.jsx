import { useState } from 'react'

const tabs = ['All', 'Ready', 'Off-Plan']
const Status = () => {
  const [activeTab, setActiveTab] = useState('All')
  return (
    <div>
      <div className='inline-flex rounded-lg border border-gray-300 overflow-hidden p-1'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 lg:py-2 text-sm font-medium ${
              activeTab === tab ? 'bg-green-100 text-[#28b16d] rounded-md' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Status
