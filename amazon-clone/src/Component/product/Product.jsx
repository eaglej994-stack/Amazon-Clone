import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loading from '../Loading/Loading'

function Product() {
  const [products,setProducts]=useState([])
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      // console.log(res)
      setProducts(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <>
    {
      isLoading?(<Loading />) : (

        <section className={classes['product-container']}>
          {
            products.map((singleProduct)=>{
              return <ProductCard product={singleProduct} key={singleProduct.id} />
            })
          }
        </section>
      )
    }

    </>

  )
}

export default Product
