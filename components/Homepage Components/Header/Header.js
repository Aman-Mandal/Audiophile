import Button from '../../Button/Button'
import heroImg from '../../../public/images/home/desktop/headphone-hero-image.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const seeProductHandler = () => {
    router.push('/h1')
  }

  return (
    <div className="bg-black">
      <div className="flex flex-col-reverse md:flex-row justify-center w-[85%] mx-auto  h-full py-8 md:py-20 md:pt-6 ">
        <div className="basis-1/2">
          <div className="flex flex-col text-center md:text-left justify-center h-full">
            <p className="text-white  uppercase text-md font-thin tracking-[.4em] pb-4">
              New Product
            </p>
            <h1 className="text-white text-4xl  md:text-6xl font-semibold pb-7">
              XX99 Mark II <span>Headphones</span>
            </h1>
            <p className="text-white text-md tracking-wider font-thin w-full md:w-2/3 leading-6 mb-8">
              Experience natural, life-like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="sm:mx-auto md:mx-0">
              <Button
                onClick={seeProductHandler}
                hoverColor="hover:bg-very-light-orange"
                bgColor={'light-orange'}
              >
                See Product
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-12 w-72 md:mb-0 md:w-1/2 mx-auto">
          <Image src={heroImg} alt="Headphones" />
        </div>
      </div>
    </div>
  )
}

export default Header
