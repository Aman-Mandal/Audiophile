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
      <div className="flex w-[85%] mx-auto gap-12">
        <Image className="rounded-lg flex-[1]" src={earphone} />
        <div className="flex flex-[1] bg-neutral-200 w-1/2 rounded-lg">
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
