import React from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { DataContext } from '../../Component/DataProvider/DataPorvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import Currencyformat from '../../Component/CurrencyFormat/CurrencyFormat'
import ProductCard from '../../Component/product/ProductCard'
import { Type } from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{basket,user}, dispatch]=useContext(DataContext)
  const tatal=basket.reduce((amount,item)=>{
    return item.price * item.amount + amount

  },0)

  const increament=(item)=>{
    dispatch({
      Type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decreament=(id)=>{
    dispatch({
      Type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  console.log(basket)
  return (
    <LayOut>
      <section className={classes['container']}>
        <div className={classes['cart-container']}>
          <h2>HELLO</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! no item in your cart</p>):(
              basket?.map((item,i)=>{
                return <section className={classes['card-prooduct']}>
                  <ProductCard
                    key={i}
                      product={item}
                      renderDesk={true}
                      renderAdd={false}
                      flex={true}
                  />
                  <div className={classes['btn-container']}>
                    <button onClick={()=>increament(item)}><IoIosArrowUp /></button>
                    <span className={classes['amount']}>{item.amount}</span>
                    <button onClick={()=>decreament(item.id)}><IoIosArrowDown /></button>
                    
                  </div>
                </section>
                 
              })
            )
          }
        </div>
        {basket?.length !==0&&(
          <div className={classes['subTotal']}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <Currencyformat amount={tatal} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gif</small>
            </span>
            <button className={classes['checkout']}>Contiue to checkout</button>
          </div>
        )}
      </section>
        
    </LayOut>
  )
}

export default Cart
