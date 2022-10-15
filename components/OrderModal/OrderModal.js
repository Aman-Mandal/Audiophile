import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ImCheckmark } from 'react-icons/im'
import { useSelector } from 'react-redux'

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0  h-screen w-screen bg-black/75"></div>
  )
}

const OrderModal = ({
  fullName,
  img,
  productName,
  productQuantity,
  totalPrice,
  grandTotalPrice,
}) => {
  const router = useRouter()
  const cartItems = useSelector(state => state.cart.items)
  console.log()

  const homeButtonHandler = () => {
    router.push('/')
    // Clear cart
  }

  console.log(fullName)

  return (
    <>
      <Backdrop />
      <div className="w-[35rem]  bg-white p-10 z-20 rounded-xl flex flex-col fixed top-[8rem] left-[50%] -translate-x-[50%] ">
        <div className="w-20 h-20 rounded-full bg-dark-orange text-center relative">
          <ImCheckmark className=" text-white text-2xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" />
        </div>
        <h2 className="font-semibold text-3xl uppercase tracking-wide py-8">
          Thank You <br /> For Your Order
        </h2>
        <p className="font-thin text-gray-800 mb-8">
          {fullName}, you will recieve an email confirmation shortly.
        </p>

        {/* Price */}
        <div className="flex">
          <div className="flex-[0.6] flex justify-between p-4 items-center bg-slate-200 rounded-l-xl">
            <div className="flex">
              <Image className=" rounded-lg" height={80} width={80} src={img} />
              <div className="ml-3 flex flex-col gap-1">
                <h2 className="font-semibold text-sm tracking-wide pb-1">
                  {productName?.split(' ')[0]}
                </h2>
                <p className="text-sm text-gray-400 font-medium">
                  $ {totalPrice}
                </p>
              </div>
            </div>
            <p>{`x${productQuantity}`}</p>
          </div>
          <div className="flex-[0.4] py-4 px-3 bg-black rounded-r-xl">
            <h2 className="uppercase text-gray-500 font-thin text-xl mb-4">
              Grand Total
            </h2>
            <p className="text-white font-semibold">$ {grandTotalPrice}</p>
          </div>
        </div>

        <button
          onClick={homeButtonHandler}
          className="uppercase bg-light-orange py-3 font-semibold text-white mt-3 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </>
  )
}

export default OrderModal
