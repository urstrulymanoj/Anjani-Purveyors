import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <div className="container">
        <Footer/>
      </div>
    </div>
  )
}

export default RootLayout
