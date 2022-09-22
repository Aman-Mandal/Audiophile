import React from 'react'
import Footer from '../Footer/Footer'
import ImageCard from '../Image Card/Image-Card'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>{children}</main>
      <ImageCard />
      <Footer />
    </div>
  )
}

export default Layout
