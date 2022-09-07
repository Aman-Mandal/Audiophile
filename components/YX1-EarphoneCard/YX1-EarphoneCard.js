import React from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import earphone from '../../public/images/home/desktop/image-earphones-yx1.jpg'

const YX1EarphoneCard = () => {
  return (
    <div className="w-full ">
      <div className="flex w-[85%] mx-auto gap-12">
        <Image className="rounded-lg" src={earphone} />
        <div className="flex bg-neutral-200 w-1/2 rounded-lg">
          <div className="m-auto ">
            <h2 className="text-3xl font-semibold mb-6">YX1 Earphones</h2>
            <Button bgColor="black" hoverColor="hover:bg-neutral-800">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YX1EarphoneCard
