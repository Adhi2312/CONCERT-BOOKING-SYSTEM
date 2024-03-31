import React from 'react'
import "./signup.css"
import axios from 'axios'
import { Navbar } from './App'

export const Signup = ({setAuthName,setSelect}) => {
  function onSignup(){
    console.log("hai")
    try{
      console.log("hello")
      axios.post("http://localhost:5000/signup",{
        userName:document.getElementById("1").value,
        password:document.getElementById("4").value,
        email:document.getElementById("2").value,
        mobileno:document.getElementById("3").value

      })
      console.log("signup successful")
      setSelect("Home")
      setAuthName(document.getElementById("1").value)
      
      

    }
    catch(err){console.log("Couldn't connect to")}
    
  }
  return (
    <div>
      <Navbar/>
    <div className='signup'>
        <div className='signup2'>
          <form style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
            <h2>Sign Up</h2>
            <input type='text' placeholder='Enter username' id='1'/>
           
            <input type='email' placeholder='Enter your email address' id='2'/>
            <input  placeholder='Enter your Mobile number' id='3'/>
            <input type='password' placeholder='Enter password ' id='4'/>
            <input type='password' placeholder='Confirm password'/>
            {/* <input type='email' placeholder='Enter your email address'/> */}
            <button  className="button1" type='submit' onClick={onSignup} >Sign Up</button>
            <p onClick={()=>{setSelect("Login")}}>already have an account?Login</p>
            </form>
        </div>
    </div>
    </div>
  )
}
