import { useRouter } from 'next/router'
import Button from '../../Button/Button'

const ZX7SpeakerCard = () => {
  const router = useRouter()

  const seeProductHandler = () => {
    router.push('/s2')
  }

  return (
    <div className="rounded-lg w-[85%] border mx-auto bg-speaker-img h-80 bg-cover bg-no-repeat my-9  ">
      <div className="px-20 py-24">
        <h2 className="mb-6 font-semibold text-3xl">ZX7 Speaker</h2>
        <Button
          onClick={seeProductHandler}
          hoverColor="hover:bg-neutral-800"
          bgColor="black"
        >
          See Product
        </Button>
      </div>
    </div>
  )
}

export default ZX7SpeakerCard
