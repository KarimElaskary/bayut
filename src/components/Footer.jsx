import facebook from '../assets/facebook.webp'
import youtube from '../assets/youtube.webp'
import instagram from '../assets/instagram.webp'
import linkedin from '../assets/linkedin.webp'
import { FaAngleUp } from 'react-icons/fa'

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-[#1e1e1e] text-white mt-10'>
      <div className='container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8'>

        <div className='flex flex-col items-center md:items-start gap-4'>
          <div className='flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium'>
            <a href='#' className='hover:underline'>ABOUT US</a>
            <span className='hidden md:inline'>|</span>
            <a href='#' className='hover:underline'>CONTACT US</a>
            <span className='hidden md:inline'>|</span>
            <a href='#' className='hover:underline'>TERMS & PRIVACY POLICY</a>
          </div>

          <div className='flex items-center gap-2'>
            <span>COUNTRY:</span>
            <select className='bg-transparent border border-white px-2 py-1 rounded text-sm bg-black'>
              <option>Egypt</option>
              <option>Saudi Arabia</option>
              <option>Jordan</option>
            </select>
          </div>

          <p className='text-xs'>&#169; 2008 - 2025 Bayut.eg</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-4'>
            <a href="#"><img src={facebook} alt='facebook' className='w-16 h-16' /></a>
            <a href="#"><img src={youtube} alt='youtube' className='w-16 h-16' /></a>
            <a href="#"><img src={instagram} alt='instagram' className='w-16 h-16' /></a>
            <a href="#"><img src={linkedin} alt='linkedin' className='w-16 h-16' /></a>
            
            
            
          </div>
          <button
            onClick={handleClick}
            className='bg-[#006169] hover:bg-[#004f52] transition rounded-full p-2 shadow-lg'
          >
            <FaAngleUp className='text-xl' />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
