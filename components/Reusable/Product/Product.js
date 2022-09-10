import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../Button/Button'

const Product = ({ img, name, description, id }) => {
  const router = useRouter()

  const showDetailsHandler = () => {
    router.push(`/${id}`)
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
          <p className="font-thin text-[#745455] mb-8 text-justify">
            {description}
          </p>
          <Button
            onClick={showDetailsHandler}
            bgColor="light-orange"
            hoverColor="hover:bg-dark-orange"
          >
            See Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Product
