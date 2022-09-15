import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  const router = useRouter()

  const homeHandler = () => {
    router.push('/')
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
        <ul className="flex space-x-10 text-sm text-white uppercase font-medium tracking-widest">
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
        <div className="text-3xl text-white hover:cursor-pointer hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Navbar
