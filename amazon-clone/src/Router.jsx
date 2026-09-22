import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Landing from './Pages/Landing/Landing'
import Order from './Pages/Order/Order'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Rsult/Result'
import ProductDtail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Landing/>} /> 
                <Route path='/auth' element={<SignUp/>} /> 
                <Route path='/payment' element={<Payment/>} /> 
                <Route path='/order' element={<Order/>} /> 
                <Route path="/catagory/:catagoryName" element={<Result/>} />
                <Route path="/products/:productId" element={<ProductDtail />} />
                <Route path='/cart' element={<Cart/>} />               
            </Routes>
        </Router>
    </div>
  )
}

export default Routing
