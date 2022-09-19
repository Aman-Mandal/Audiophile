import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../public/images/cart/image-xx59-headphones.jpg'
import Counter from '../Counter/Counter'

const CartItem = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div>
          <Image className="rounded-lg" src={img} height={65} width={65} />
        </div>
        <div>
          <p className="text-base uppercase font-bold">ZX9</p>
          <p className="text-sm py-2 text-neutral-400">$ 4500</p>
        </div>
      </div>
      <div className="">
        <Counter />
      </div>
    </div>
  )
}

export default CartItem
