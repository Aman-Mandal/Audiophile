import React from 'react'
import { fetchData } from '../../components/Helper/fetchData'
import { fetchProductDetails } from '../../components/Helper/fetchProductDetails'
import Product from '../../components/Reusable/Product/Product'

export const getStaticProps = async context => {
  const productId = context.params.productId

  // Connect to API
  const response = await fetch(
    `https://audiophile-aman-default-rtdb.firebaseio.com/${productId}.json`
  )

  const data = await response.json()
  
  console.log(data)

  return {
    props: {
      data: data,
    },
  }
}

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productId: 'h1',
        },
      },
      {
        params: {
          productId: 'h2',
        },
      },
      {
        params: {
          productId: 'h3',
        },
      },
      {
        params: {
          productId: 's1',
        },
      },
      {
        params: {
          productId: 's2',
        },
      },
      {
        params: {
          productId: 'e1',
        },
      },
    ],
  }
}

const ProductDetails = ({ data }) => {
  console.log(data)

  return (
    <>
      <Product
        id={data.id}
        img={data.img}
        detail={true}
        price={data.price}
        name={data.name}
        description={data.description}
        features={data.features}
        boxContent={data.boxContent}
        moreImgs={data.moreImgs}
      />
    </> 
  )
}

export default ProductDetails
