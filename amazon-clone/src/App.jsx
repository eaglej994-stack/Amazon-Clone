import { useState } from 'react'

import './App.css'
import Header from './Component/Header/Header'
import CarouselEffect from './Component/Carousel/Carousel'
import Catagory from './Component/Catagory/Catagory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <CarouselEffect />
    <Catagory />
      
    </>
  )
}

export default App
