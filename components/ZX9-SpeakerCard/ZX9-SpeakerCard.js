import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import speaker from '../../public/images/home/desktop/image-speaker-zx9.png'

const ZX9SpeakerCard = () => {
  return (
    <div className="rounded-lg w-[85%] border mx-auto bg-light-orange ">
      <div className="bg-circle-pattern bg-left-top bg-no-repeat">
        <div className="flex items-center gap-16">
          <div className="w-1/2 pt-24 px-20">
            <Image height={600} width={500} src={speaker} />
          </div>
          <div>
            <h2 className="text-white text-6xl font-semibold uppercase mb-8">
              ZX9 <br /> Speaker
            </h2>
            <p className="w-72 text-white font-thin tracking-wider mb-8">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button hoverColor='hover:bg-neutral-800' bgColor={'black'}>
              See Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZX9SpeakerCard
