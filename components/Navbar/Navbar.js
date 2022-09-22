import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../Cart/Cart'

const Navbar = () => {
  const [showCart, setShowCart] = useState(false)
  const router = useRouter()

  const homeHandler = () => {
    router.push('/')
  }

  const showCartHandler = () => {
    setShowCart(!showCart)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <div className="py-8 bg-black sticky top-0 z-10 ">
      <div className="flex items-center justify-around">
        <h2
          onClick={homeHandler}
          className="text-3xl font-bold cursor-pointer text-white"
        >
          audiophile
        </h2>
        <ul className="flex hidden  text-sm text-white uppercase font-medium tracking-widest">
          <li
            className={`${
              router.pathname == '/'
                ? 'text-dark-orange '
                : 'hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200'
            } `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              router.pathname == '/headphones'
                ? 'text-dark-orange '
                : 'hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200'
            } `}
          >
            <Link href="/headphones">Headphones</Link>
          </li>
          <li
            className={`${
              router.pathname == '/speakers'
                ? 'text-dark-orange '
                : 'hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200'
            } `}
          >
            <Link href="/speakers">Speakers</Link>
          </li>
          <li
            className={`${
              router.pathname == '/earphones'
                ? 'text-dark-orange '
                : 'hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200'
            } `}
          >
            <Link href="/earphones">Earphones</Link>
          </li>
        </ul>
        <div
          onClick={showCartHandler}
          className="text-3xl text-white hover:cursor-pointer hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200"
        >
          <AiOutlineShoppingCart />
        </div>

        {showCart && <Cart onClose={hideCartHandler} />}
      </div>
    </div>
  )
}

export default Navbar
