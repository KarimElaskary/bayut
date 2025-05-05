import { GrLanguage } from 'react-icons/gr'
import { IoMdSettings } from 'react-icons/io'
import { FaHeart, FaStar, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto py-2 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-11">
            <div className="flex items-center gap-2 cursor-pointer">
              <GrLanguage />
              <h1 className="text-sm sm:text-base">العربية</h1>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <IoMdSettings />
              <h1 className="text-sm sm:text-base">Site Settings</h1>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <FaHeart />
              <h1 className="text-sm sm:text-base text-center">Favourite</h1>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaStar />
              <h1 className="text-sm sm:text-base text-center">Saved</h1>
            </div>
            <div className="flex items-center gap-2 text-[#006169] cursor-pointer">
              <FaUserCircle />
              <h1 className="text-sm sm:text-base text-center">Log in</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
