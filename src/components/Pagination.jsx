import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5 // Number of page buttons shown

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2))
    let end = start + visiblePages - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - visiblePages + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  }

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page)
    }
  }

  return (
    <div className='flex justify-center mt-6 space-x-2'>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 bg-[#006169] text-white rounded disabled:opacity-50'
      >
        <GrLinkPrevious />
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? 'bg-[#006169]  text-white'
              : 'border-[#006169] text-[#006169]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 border bg-[#006169] text-white rounded disabled:opacity-50'
      >
        <GrLinkNext />
      </button>
    </div>
  )
}

export default Pagination
