import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import CarouselEffect from './Component/Carousel/Carousel'
import Catagory from './Component/Catagory/Catagory'
import Product from './Component/product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <CarouselEffect />
    <Catagory />
    <Product />
      
    </>
  )
}

export default App
