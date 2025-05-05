import bayut from '../../assets/bayut.png'
import mybayut from '../../assets/mybayut.png'
import newlogo from '../../assets/newlogo.png'
import MoreFilters from '../navbar/MoreFilters'
import BedsAndBathsFilter from '../navbar/BedsAndBathsFilter'
import PropertyTypeDropdown from './PropertyTypeDropdown'
import Purpose from './Purpose'
import Status from './Status'
import Location from './Location'

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mb-7 px-4">
        {/* Top bar with logos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={bayut} alt="Logo" className="w-[120px]" />

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <img src={mybayut} alt="MyBayut" className="w-[70px]" />
            <a
              href="#"
              className="hover:text-[#006169] flex items-center text-sm sm:text-base"
            >
              Find my agent
              <img
                src={newlogo}
                alt="New Logo"
                className="w-[70px] relative bottom-1 sm:bottom-3"
              />
            </a>
          </div>
        </div>

        {/* Filters row */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Purpose />
          <Location />
          <Status />
          <MoreFilters />
          <BedsAndBathsFilter />
          <PropertyTypeDropdown />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
