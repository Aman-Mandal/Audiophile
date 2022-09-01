import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/Product-Card/Product-Card'
import headphoneImg from '../public/images/shared/headphones.png'
import speakersImg from '../public/images/shared/speakers.png'
import earphoneImg from '../public/images/shared/earphones.png'
import ZX9SpeakerCard from '../components/ZX9-SpeakerCard/ZX9-SpeakerCard'
import ZX7SpeakerCard from '../components/ZX7-SpeakerCard/ZX7-SpeakerCard'
import YX1EarphoneCard from '../components/YX1-EarphoneCard/YX1-EarphoneCard'

const products = [
  { id: 'p1', title: 'Headphones', src: headphoneImg },
  { id: 'p2', title: 'Speakers', src: speakersImg },
  { id: 'p3', title: 'Earphones', src: earphoneImg },
]

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="flex gap-10 justify-center mb-48">
        {products.map(product => (
          <ProductCard
            src={product.src}
            title={product.title}
            key={product.id}
          />
        ))}
      </div>
      <ZX9SpeakerCard />
      <ZX7SpeakerCard />
      <YX1EarphoneCard/>
    </div>
  )
}

export default Homepage
