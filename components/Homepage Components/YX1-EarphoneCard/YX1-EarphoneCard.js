import React from 'react'
import Image from 'next/image'
import Button from '../../Button/Button'
import earphone from '../../../public/images/home/desktop/image-earphones-yx1.jpg'
import { useRouter } from 'next/router'

const YX1EarphoneCard = () => {
  const router = useRouter()

  const seeProductHandler = () => {
    router.push('/e1')
  }

  return (
    <div className="w-full ">
      <div className="flex flex-col w-[85%] mx-auto gap-5 md:flex-row md:gap-8">
        <Image className="rounded-lg flex-[0.5]" src={earphone} />
        <div className="flex bg-neutral-200 w-full py-20 rounded-lg md:w-1/2">
          <div className="m-auto ">
            <h2 className="text-3xl font-semibold mb-6">YX1 Earphones</h2>
            <Button
              onClick={seeProductHandler}
              bgColor="black"
              hoverColor="hover:bg-neutral-800"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YX1EarphoneCard
