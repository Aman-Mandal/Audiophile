import Image from 'next/image'
import React from 'react'
import imageCard from '../../public/images/shared/desktop/image-best-gear.jpg'

const ImageCard = () => {
  return (
    <div className="flex flex-col-reverse w-[95%] mx-auto my-44 md:flex-row md:w-[85%] max-w-6xl">
      <div className="flex-[1] flex flex-col items-center text-center md:justify-center md:items-start md:text-left">
        <div className="w-full mt-20 md:m-0 md:w-[68%] ">
          <h2 className="text-3xl uppercase font-semibold mb-8">
            Bringing you the <span className="text-light-orange">best</span>{' '}
            audio gear
          </h2>
          <p className="text-[#745455] px-4 font-thin text-md text-center md:text-justify">
            Located at the heart of New York City, Audiophile is the premier
            store for high end earphones, headphones and speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <Image className=" rounded-md" src={imageCard} />
    </div>
  )
}

export default ImageCard
