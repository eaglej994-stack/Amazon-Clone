import React, { useState } from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { productUrl } from '../../API/EndPoint'
import ProductCard from '../../Component/product/ProductCard'

function ProductDtail() { 
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
      setIsLoading(true); // <-- Changed from isLoading(true) 
      axios .get(`${productUrl}/products/${productId}`) 
      .then((res) => {
        setProduct(res.data); 
        setIsLoading(false); // <-- Changed from isLoading(false) 
      }) .catch((err) => { 
          console.log(err); 
          setIsLoading(false); 
        }); }, [productId]);
  return ( 
    <LayOut>
      {isLoading ? (
        <p>Loading...</p>
      ) : product ? (
        <ProductCard 
          product={product} 
          flex={true} 
          renderDesk={true}
        />
      ) : (
        <p>Product not found.</p>
      )}
    </LayOut> 
  ); 
}
export default ProductDtail;
