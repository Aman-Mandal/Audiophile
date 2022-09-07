import Image from 'next/image'
import React from 'react'
import imageCard from '../../public/images/shared/desktop/image-best-gear.jpg'

const ImageCard = () => {
  return (
    <div className="flex w-[85%] mx-auto my-44">
      <div className="flex-1 flex flex-col justify-center ">
        <div className="w-[68%] ">
          <h2 className="text-4xl uppercase font-semibold mb-8">
            Bringing you the <span className="text-light-orange">best</span>{' '}
            audio gear
          </h2>
          <p className="text-[#745455] font-thin text-md text-justify">
            Located at the heart of New York City, Audiophile is the premier
            store for high end earphones, headphones and speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <Image className="rounded-lg" src={imageCard} />
    </div>
  )
}

export default ImageCard
