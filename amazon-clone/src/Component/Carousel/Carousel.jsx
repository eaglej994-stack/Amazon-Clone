import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { img } from './Carousel-image/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classes from'./Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        stopOnHover={false}
        stopOnFocus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {
          img.map((imageItemLink, index) => {
            return <img key={index} src={imageItemLink} />
          })
        }
      </Carousel>
      <div className={classes['hero-img']}>

      </div>
    </div>
  )
}

export default CarouselEffect