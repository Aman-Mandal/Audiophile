import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/Product-Card/Product-Card'
import headphoneImg from '../public/images/shared/headphones.png'
import speakersImg from '../public/images/shared/speakers.png'
import earphoneImg from '../public/images/shared/earphones.png'

const products = [
  { id: 'p1', title: 'Headphones', src: headphoneImg },
  { id: 'p2', title: 'Speakers', src: speakersImg },
  { id: 'p3', title: 'Earphones', src: earphoneImg },
]

const Homepage = () => {
  return (
    <>
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
    </>
  )
}

export default Homepage
