import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../../Button/Button'

const Product = ({ img, name, description, id, price, detail = false }) => {
  const router = useRouter()
  const [counter, setCounter] = useState(1)

  const showDetailsHandler = () => {
    router.push(`/${id}`)
  }

  const increaseCounterHandler = () => {
    setCounter(count => count + 1)
  }

  const decreaseCounterHandler = () => {
    if (counter > 1) {
      setCounter(count => count - 1)
    }
  }

  const addToCartHandler = () => {
    console.log('Added')
  }

  return (
    <div className="flex w-[75%] mx-auto my-28 gap-20">
      <div className="relative flex-[0.6]">
        <Image src={img} width={700} height={750} />
      </div>

      <div className="my-auto flex-[0.4]  py-20">
        <div>
          <p className=" text-dark-orange tracking-[0.7em] text-sm mb-4 uppercase">
            New Product
          </p>
          <h2 className="tracking-wide text-4xl uppercase font-semibold mb-6 ">
            {name}
          </h2>
          <p className="font-thin text-[#745455] mb-6 text-justify">
            {description}
          </p>
          {detail && (
            <p className="font-semibold text-xl mb-6">
              $ {price?.toLocaleString('en-US')}
            </p>
          )}

          {detail && (
            <div className="flex gap-6 mb-4">
              <div className="w-fit bg-neutral-100 ">
                <button
                  onClick={increaseCounterHandler}
                  className="bg-neutral-100 px-4 py-3 text-lg rounded-l-md hover:bg-neutral-200 hover:text-dark-orange"
                >
                  +
                </button>
                <span className="px-4">{counter}</span>
                <button
                  onClick={decreaseCounterHandler}
                  className="bg-neutral-100 px-4 py-3 text-lg rounded-r-md hover:bg-neutral-200 hover:text-dark-orange"
                >
                  -
                </button>
              </div>

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
    </div>
  )
}

export default Product
