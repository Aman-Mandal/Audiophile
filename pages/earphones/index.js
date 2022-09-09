import { fetchData } from '../../components/Helper/fetchData'
import Header from '../../components/Reusable/Header/Header'
import Product from '../../components/Reusable/Product/Product'

export const getStaticProps = async () => {
  const data = await fetchData('earphones')

  return {
    props: {
      earphones: data,
    },
  }
}

const Earphones = ({ earphones }) => {
  return (
    <>
      <Header name="Earphones" />
      {earphones.map(earphone => (
        <Product
          key={earphone.id}
          name={earphone.name}
          description={earphone.description}
          img={earphone.img}
        />
      ))}
    </>
  )
}

export default Earphones
