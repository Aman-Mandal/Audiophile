import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly py-8 bg-black sticky top-0">
      <h2 className="text-2xl font-bold text-white">audiophile</h2>
      <ul className="flex space-x-10 text-sm text-white uppercase font-medium tracking-wide">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/headphones">Headphones</Link>
        </li>
        <li>
          <Link href="/speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/earphones">Earphones</Link>
        </li>
      </ul>
      <div className="text-3xl text-white hover:cursor-pointer">
        <AiOutlineShoppingCart />
      </div>
    </div>
  )
}

export default Navbar
