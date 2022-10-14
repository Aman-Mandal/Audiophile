import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Footer/Footer'
import ImageCard from '../Image Card/Image-Card'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  const router = useRouter()

  if (router.pathname !== '/checkout') {
    return (
      <div className="bg-white">
        <Navbar />
        <main>{children}</main>
        <ImageCard />
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
