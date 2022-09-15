import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ title, src, link }) => {
  return (
    <div className=" flex relative flex-col items-center justify-end h-48 w-[350px] rounded-lg bg-neutral-200 shadow-lg mt-48 pb-8">
      <div className=" absolute -top-24">
        <Image src={src} width={130} height={150} className="" />
      </div>
      <h2 className="uppercase text-xl font-medium tracking-wide pb-4">
        {title}
      </h2>
      <div className="uppercase font-semibold text-light-orange text-sm hover:scale-110 transition-all ease-in-out duration-200">
        <Link href={link}>Shop</Link>
      </div>
    </div>
  )
}

export default ProductCard
