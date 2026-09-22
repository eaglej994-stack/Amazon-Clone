import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import Currencyformat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataPorvider'
import { Type } from '../../Utility/action.type'
function ProductCard({product,flex,renderDesk}) {
    const { image, title, id, rating, price, description}=product ||{};
    const [state,dispatch]=useContext(DataContext)
    console.log(state)

    const addToCart=()=>{
        dispatch({
            Type:Type.ADD_TO_BASKET,
            item:{
                image, title, id, rating, price, description
            }
        })
    }

  return (
    <div className={`${classes['card-container']} ${flex ? classes['product-flexed'] :''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt={title ||""} />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesk && <div style={{maxWidth:"500px"}}>{description}</div> }
            <div className={classes['rating']}>
                {/* rating */}
                <Rating value={rating.rate} precision={0.1} />
                {/* count */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* price */}
                <Currencyformat amount={price} />
            </div>
            <button className={classes['button']} onClick={addToCart}>
                add to cart
            </button>
        </div>
      
    </div>
  )
}

export default ProductCard
