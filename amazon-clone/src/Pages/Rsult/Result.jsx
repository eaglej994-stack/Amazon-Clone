import React,{useState} from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import classes from './Result.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/EndPoint'
import { useEffect } from 'react'
import ProductCard from '../../Component/product/ProductCard'

 function Result() {
   const [results, setResults] = useState([]); 
   const { catagoryName } = useParams();
  useEffect(() => { 
    console.log("Category param:", catagoryName); // <-- Check this in browser console!
    if (!catagoryName) return;

    axios.get(`${productUrl}/products/category/${catagoryName}`)
    .then((res) => {
      console.log("API Response:", res.data); // <-- Verify data comes back
      setResults(res.data);
    })
    .catch((err) => {
      console.log("Fetch Error:", err);
    });
  }, [catagoryName]); // <-- Add catagoryName to dependency array
  return (
    <LayOut>
      <section>
        <h1 style={{padding:"30px"}}>Result</h1>
        <p style={{padding:"30px"}}>Catagory/{catagoryName}</p>
        <hr />
        <div className={classes['product-container']}>
          {results?.map((product)=>(
            <ProductCard
              key={[product.id]}

              product={product}
            />  
          ))}
        </div>

      </section>
      
    </LayOut>
  )
}

export default Result

