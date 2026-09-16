import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <section>
        <section>
            <div className={classes['header-container']}>
                <div className={classes['logo-container']}>
                    {/* logo */}
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon-logo" />
                </a>
                {/* delivery */}
                <span>
                   <SlLocationPin />
                </span>
                <div className={classes['delivery']}>
                    <p>Deliverd To</p>
                    <span>ETHIOPIA</span>
                </div>
            </div>
            <div className={classes['search']}>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='search product' />
                <FaSearch />
            </div>
            <div className="">
                {/* right side link */}
                <div>
                    <div className={classes['order-container']}>
                        <a href="" className={classes['language']}>
                            <img src="https://www.shutterstock.com/image-vector/united-states-flag-vector-graphics-600w-2382611959.jpg" alt="" />
                            <select>
                                <option value="">En</option>
                            </select>
                        </a>
                        <div className={classes['three-components']}>
                            {/* three components */}
                            <a href="">
                                <div>
                                    <p>Sign In</p>
                                    <span>Acconunt & Lists</span>
                                </div>
                            </a>
                            {/* orders */}
                            <a href="">
                                <p>Returns</p>
                                <span>$Order</span>
                            </a >
                           <a href="" className={classes['cart']}>
                                <FaShoppingCart size={35} />
                                <span>0</span>                       
                           </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <LowerHeader />
    </section>
    
  )
}

export default Header
