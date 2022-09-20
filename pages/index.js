import Header from '../components/Homepage Components/Header/Header'
import ProductCard from '../components/Product-Card/Product-Card'
import headphoneImg from '../public/images/shared/headphones.png'
import speakersImg from '../public/images/shared/speakers.png'
import earphoneImg from '../public/images/shared/earphones.png'
import ZX9SpeakerCard from '../components/Homepage Components/ZX9-SpeakerCard/ZX9-SpeakerCard'
import ZX7SpeakerCard from '../components/Homepage Components/ZX7-SpeakerCard/ZX7-SpeakerCard'
import YX1EarphoneCard from '../components/Homepage Components/YX1-EarphoneCard/YX1-EarphoneCard'

const products = [
  { id: 'p1', title: 'Headphones', src: headphoneImg, link: '/headphones' },
  { id: 'p2', title: 'Speakers', src: speakersImg, link: '/speakers' },
  { id: 'p3', title: 'Earphones', src: earphoneImg, link: '/earphones' },
]

const Homepage = () => {
  return (
    <div className="scrollbar">
      <Header />
      <div className="flex flex-col gap-0 w-full items-center mb-48 md:flex-row md:gap-10 md:justify-center">
        {products.map(product => (
          <ProductCard
            src={product.src}
            title={product.title}
            link={product.link}
            key={product.id}
          />
        ))}
      </div>
      <ZX9SpeakerCard />
      <ZX7SpeakerCard />
      <YX1EarphoneCard />
    </div>
  )
}

export default Homepage
