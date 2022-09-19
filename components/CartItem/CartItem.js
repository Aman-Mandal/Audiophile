import Image from 'next/image'
import React, { useState } from 'react'
import Counter from '../Counter/Counter'

const CartItem = ({ img, name, price }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div>
          <Image className="rounded-lg" src={img} height={65} width={65} />
        </div>
        <div>
          <p className="text-base uppercase font-bold">{name}</p>
          <p className="text-sm py-2 text-neutral-400">$ {price}</p>
        </div>
      </div>
      <div className="">
        <Counter />
      </div>
    </div>
  )
}

export default CartItem
