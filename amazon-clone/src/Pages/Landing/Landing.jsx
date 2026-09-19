import React from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import Catagory from '../../Component/Catagory/Catagory'
import CarouselEffect from '../../Component/Carousel/Carousel'
import Product from '../../Component/product/Product'



function Landing() {
  return (
    <LayOut>
    <CarouselEffect />
    <Catagory />
    <Product />
    </LayOut>
 
  )
}

export default Landing
