import React, { useState,useContext } from 'react'
import classes from './SignUp.module.css'
import LayOut from '../../Component/LayOut/LayOut'
import { Link ,Navigate,useNavigate,useNavigation} from 'react-router-dom'
import { auth } from '../../Utility/FireBase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { PulseLoader } from "react-spinners";


import { DataContext } from '../../Component/DataProvider/DataPorvider'
import { Type } from '../../Utility/action.type'

function Auth() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]= useState("")
  const [{user},dispatch]=useContext(DataContext)
  const [loading,setLoading]=useState({
    signIn:false,
    signUp:false
  })
  const navigate=useNavigate()
  // console.log(user)
  // console.log(email,password)

  const authHandler=async(e)=>{
    e.preventDefault()
    console.log(e.target.name)
    setError("")
    const actionName= e.nativeEvent.submitter?.name ||e.target.name
    if(e.target.name=="signIn"){

      // fire base
      setLoading({...loading,signIn:true})
      
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
        dispatch({
          Type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading, signIn:false})
        navigate("/")
      }).catch((err)=>{
        // console.log(err.message)
        setError(err.message)
         setLoading({...loading, signIn:false})
      })


    }
    else{
      setLoading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        
    
         dispatch({
          Type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({...loading, signUp:false})
      }).catch((err)=>{
        // console.log(err)
        setError(err.message)
        setLoading({...loading, signUp:false})
      })

    }


  }

  return (
    <section className={classes['logIn']}>
      
      {/* logo */}
      <Link to={"/"}>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="" />
      </Link>

      {/* form */}

      <div className={classes["login-container"]}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' placeholder='check@gmail.com' />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="pasword" id='password' placeholder='********' />
          </div>
          <button 
            type='submit' 
            onClick={authHandler} 
            className={classes['signin-btn']}
            name='signIn'
          >{
            loading.signIn? (<PulseLoader color="#36d7b7" />):("Sign In")
            }</button>
        </form>
        {/* agreement */}
        <p className={classes['description']}>
          By signing in you agree to Amazon Fake Clone consdition of use and
          &sale.please see your privacy Notice, our Cookies notice and our interst based Ads notice
        </p>
        {/* create account btn */}
        <button 
          type='submit' 
          onClick={authHandler} 
          className={classes['signUp']}
          name='signUp'
        >{
            loading.signUp? (<PulseLoader color="#36d7b7" />):("Create Your Amazon Account")
            }</button>
        {
          error && <small style={{paddingTop:"5px",color:"red"}}>
            {error}
          </small>
        }
      </div>

    </section>
  )
}

export default Auth
