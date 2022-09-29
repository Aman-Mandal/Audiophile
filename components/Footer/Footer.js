import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const router = useRouter()

  return (
    <div className="bg-black py-20">
      <div className="w-[95%] md:w-[85%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-3xl font-bold pb-6 md:pb-0">
            audiophile
          </h2>
          <ul className=" md:inline-flex md:space-y-0 space-y-8 text-center md:space-x-10 text-sm text-white uppercase font-medium tracking-widest">
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
        </div>

        <div className="flex flex-col md:flex-row my-10">
          <p className="flex-[0.5] tracking-wider text-center md:text-justify text-white font-thin">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most of personal audio. Come and visit our
            demo facility - we're open 7 days a week.
          </p>
          <div className="flex-[0.5] ">
            <div className=" text-white text-2xl flex justify-center py-10 md:py-0 md:justify-end space-x-8">
              <FaFacebookSquare className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
              <FaInstagram className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
              <FaTwitterSquare className="hover:text-dark-orange hover:scale-110 transition ease-in-out duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-center md:text-left text-lg font-semibold">
            Copyright 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
