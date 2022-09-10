import React from 'react'
import { fetchData } from '../../components/Helper/fetchData'
import Header from '../../components/Reusable/Header/Header'
import Product from '../../components/Reusable/Product/Product'

export const getStaticProps = async () => {
  const data = await fetchData('speakers')

  return {
    props: {
      speakers: data,
    },
  }
}
const Speakers = ({ speakers }) => {
  return (
    <>
      <Header name="Speakers" />
      {speakers.map(speaker => (
        <Product
          key={speaker.id}
          id={speaker.id}
          name={speaker.name}
          description={speaker.description}
          img={speaker.img}
        />
      ))}
    </>
  )
}

export default Speakers
