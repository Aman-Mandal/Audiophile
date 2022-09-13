import Image from 'next/image'
import React from 'react'
import { fetchData } from '../../components/Helper/fetchData'
import Product from '../../components/Reusable/Product/Product'
import testImg from '../../public/images/product-xx59-headphones/product-zx9-speaker/desktop/image-product.jpg'

const ProductDetails = ({}) => {
  return (
    <>
      <Product
        img={testImg}
        detail={true}
        price={499}
        name="ZX9 Speaker"
        description={`Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.`}
        features={`Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).  Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`}
        boxContent={[
          { quantity: 1, name: 'first' },
          { quantity: 2, name: 'second' },
          { quantity: 1, name: 'third' },
          { quantity: 2, name: 'fourth' },
        ]}
        // moreImgs={{ img1: testImg, img2: testImg, img3: testImg }}
      />
    </>
  )
}

export default ProductDetails
