import { fetchData } from '../../components/Helper/fetchData'
import Header from '../../components/Reusable/Header/Header'
import Product from '../../components/Reusable/Product/Product'

export const getStaticProps = async () => {
  const data = await fetchData('headphones')
  return {
    props: {
      headphones: data,
    },
  }
}

const Headphones = ({ headphones }) => {
  return (
    <>
      <Header name="Headphones" />
      {headphones.map(headphone => (
        <Product
          key={headphone.id}
          id={headphone.id}
          name={headphone.name}
          img={headphone.img}
          description={headphone.description}
          price={headphone.price}
        />
      ))}
    </>
  )
}

export default Headphones
