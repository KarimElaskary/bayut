import React from 'react'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import EstatesList from './components/EstatesList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <Header />
        <Navbar />
        <EstatesList />
      </div>
        <Footer />
    </div>
  )
}

export default App
