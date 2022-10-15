import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { ImCheckmark2 } from 'react-icons'
import { useSelector } from 'react-redux'

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

  const homeButtonHandler = () => {
    router.push('/home')
    cartItems.splice(0, cartItems.length)
  }

  return (
    <div className="w-[25rem] h-[80%] bg-white p-5 flex flex-col">
      <div className="w-28 h-28 rounded-full bg-dark-orange text-center">
        <ImCheckmark2 />
      </div>
      <h2 className="font-semibold text-2xl uppercase tracking-wider py-5">
        Thank You <br /> For Your Order
      </h2>
      <p className="font-thin mb-5">
        {fullName}, you will recieve an email confirmation shortly.
      </p>

      {/* Price */}
      <div className="flex rounded-lg">
        <div className="flex-[0.6] flex justify-between px-2 items-center bg-slate-100">
          <Image className="mr-3 rounded-md" height={60} width={60} src={img} />
          <div>
            <h2 className="font-semibold pb-2">{productName}</h2>
            <p className="text-sm text-gray-400 font-medium">$ {totalPrice}</p>
          </div>
          <p>x {productQuantity}</p>
        </div>
        <div className="flex-[0.4] py-4 px-3 bg-black">
          <h2 className="uppercase text-gray-500 font-thin text-xl mb-4">
            Grand Total
          </h2>
          <p className="text-white font-semibold">$ {grandTotalPrice}</p>
        </div>
      </div>

      <button
        onClick={homeButtonHandler}
        className="uppercase bg-light-orange py-3 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  )
}

export default OrderModal
