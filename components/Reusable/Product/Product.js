import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartActions } from '../../../redux/cartSlice'

const Product = ({
  img,
  name,
  description,
  features,
  moreImgs,
  boxContent,
  id,
  price,
  detail = false,
}) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const showDetailsHandler = () => {
    router.push(`/${id}`)
  }

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        img,
        price,
        name,
        description,
      })
    )
  }

  return (
    <div className="md:w-[85%] w-[90%] mx-auto">
      <section className="flex md:flex-row flex-col my-12 md:my-28 md:gap-20">
        <div className="relative flex-[0.6]">
          <Image src={img} width={700} height={750} />
        </div>

        <div className="my-auto flex-[0.4]  py-20">
          <div className="text-center md:text-left">
            {detail ? (
              <>
                <p className=" text-dark-orange tracking-[0.7em] text-left text-sm mb-4 uppercase">
                  New Product
                </p>
                <h2 className="tracking-wide text-3xl md:text-4xl text-left uppercase font-semibold mb-6 ">
                  {name}
                </h2>
                <p className="font-thin text-[#745455] mb-6 md:px-0 text-left md:text-justify">
                  {description}
                </p>
              </>
            ) : (
              <>
                <p className=" text-dark-orange tracking-[0.7em] text-sm mb-4 uppercase">
                  New Product
                </p>
                <h2 className="tracking-wide text-3xl md:text-4xl uppercase font-semibold mb-6 ">
                  {name}
                </h2>
                <p className="font-thin text-[#745455] mb-6 px-4 md:px-0 md:text-justify">
                  {description}
                </p>
              </>
            )}

            {detail && (
              <p className="font-semibold text-left text-xl mb-6">
                $ {price?.toLocaleString('en-US')}
              </p>
            )}

            {detail && (
              <div className="flex gap-6 mb-4">
                <Button
                  onClick={addToCartHandler}
                  bgColor="light-orange"
                  hoverColor="hover:bg-dark-orange"
                >
                  Add to Cart
                </Button>
              </div>
            )}

            {!detail && (
              <Button
                onClick={showDetailsHandler}
                bgColor="light-orange"
                hoverColor="hover:bg-dark-orange"
              >
                See Product
              </Button>
            )}
          </div>
        </div>
      </section>

      {detail && (
        <>
          <section className="flex flex-col md:flex-row">
            <div className="flex-[0.5]">
              <h2 className="font-semibold text-3xl md:text-4xl uppercase mb-6">
                Features
              </h2>
              <p className="text-[#937674] font-thin text-justify">
                {features}
              </p>
            </div>
            <div className="flex-[0.5]">
              <div className="h-full pt-10 md:pt-0 md:mx-auto w-fit">
                <h2 className="font-semibold text-3xl md:text-4xl uppercase mb-6">
                  In the Box
                </h2>
                {boxContent?.map(content => (
                  <div key={content.id} className="flex gap-5 py-1 ">
                    <p className="px-2 text-dark-orange font-semibold">
                      {content.quantity}x
                    </p>
                    <p className="text-lg text-[#937674] font-thin">
                      {content.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="grid md:grid-cols-8 md:grid-rows-4 gap-4 md:gap-8 h-[88vh] mt-32 ">
              <div className=" col-span-5 md:col-span-3 row-span-4 md:row-span-2 relative">
                <Image
                  // objectFit="contain"
                  layout="fill"
                  src={moreImgs[0].imgSrc}
                  className="rounded-md"
                />
              </div>
              <div className="row-span-4 col-span-5 relative ">
                <Image
                  layout="fill"
                  // objectFit="contain"
                  src={moreImgs[1].imgSrc}
                  className="rounded-md"
                />
              </div>
              <div className="col-span-5 md:col-span-3 row-span-4 md:row-span-2 relative">
                <Image
                  layout="fill"
                  // objectFit="contain"
                  src={moreImgs[2].imgSrc}
                  className="rounded-md"
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Product
