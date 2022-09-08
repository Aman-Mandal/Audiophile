import Button from '../../Button/Button'
import heroImg from '../../../public/images/home/desktop/headphone-hero-image.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-center px-20 bg-black h-full pt-6 ">
      <div className="basis-1/2">
        <div className="flex flex-col justify-center h-full">
          <p className="text-white uppercase text-md font-thin tracking-[.4em] pb-4">
            New Product
          </p>
          <h1 className="text-white text-6xl font-semibold pb-7">
            XX99 Mark 11 <span>Headphones</span>
          </h1>
          <p className="text-white text-md tracking-wider font-thin w-2/3 leading-6 mb-8">
            Experience natural, life-like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            hoverColor="hover:bg-very-light-orange"
            bgColor={'light-orange'}
          >
            See Product
          </Button>
        </div>
      </div>
      <div className="">
        <Image src={heroImg} alt="Headphones" />
      </div>
    </div>
  )
}

export default Header
