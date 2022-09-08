import Image from 'next/image'
import React from 'react'
import Button from '../../Button/Button'
import xx99headphone from '../../../public/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'

const Product = () => {
  return (
    <div className="flex w-[80%] mx-auto my-28 gap-24">
      <Image className="" src={xx99headphone} />
      <div className="my-auto w-4/5">
        <div>
          <p className=" text-dark-orange tracking-[0.7em] text-sm mb-4 uppercase">
            New Product
          </p>
          <h2 className="tracking-wide text-4xl uppercase font-semibold mb-6 ">
            XX99 Mark 11 <br /> Headphones
          </h2>
          <p className="font-thin text-[#745455] mb-8 text-justify">
            The new XX99 Mark 11 Headphones is the pinnacle of pristine audio.
            It redifines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Button bgColor="light-orange" hoverColor="hover:bg-dark-orange">
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Product
