import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="py-8 bg-black sticky top-0 z-10">
      <div className="flex items-center justify-around">
        <h2 className="text-3xl font-bold text-white">audiophile</h2>
        <ul className="flex space-x-10 text-sm text-white uppercase font-medium tracking-widest">
          <li className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
            <Link href="/headphones">Headphones</Link>
          </li>
          <li className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
            <Link href="/speakers">Speakers</Link>
          </li>
          <li className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
            <Link href="/earphones">Earphones</Link>
          </li>
        </ul>
        <div className="text-3xl text-white hover:cursor-pointer hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Navbar
