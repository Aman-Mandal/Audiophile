import Button from '../Button/Button'

const ZX7SpeakerCard = () => {
  return (
    <div className="rounded-lg w-[85%] border mx-auto bg-speaker-img h-80 bg-cover bg-no-repeat my-12  ">
      <div className="px-20 py-24">
        <h2 className="mb-6 font-semibold text-3xl">ZX7 Speaker</h2>
        <Button hoverColor="hover:bg-neutral-800" bgColor={'black'}>
          See Product
        </Button>
      </div>
    </div>
  )
}

export default ZX7SpeakerCard
