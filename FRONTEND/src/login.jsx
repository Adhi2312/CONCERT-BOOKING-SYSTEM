import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";


export const  LoginPage=({setAuthName,setSelect})=> {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hi")
      console.log(username);
      console.log(password);
      const response = await axios.post("http://localhost:5000/login", {
        userName: username,
        password: password,
      });
      console.log(response.data);
      
      if(response.data === 'login sucess'){
        setErrorMessage("Login successful");
        setAuthName(username)
      
        // navigate('/search'); 
      }
      else{
        
      setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Invalid username or password");
      
    }

  };

  return (
    
    <div className='signup'>
    <div className='signup2'>
      <form style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
        <h2>Sign Up</h2>
        <p style={{textAlign:"left",color:"red"}}>{errorMessage}</p>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Enter username' id='1'/>
       
        
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password ' id='4'/>

        {/* <input type='email' placeholder='Enter your email address'/> */}
        <button  className="button1" type='submit' onClick={handleSubmit} >Login</button>
        <p onClick={()=>{setSelect("Signup")}}>Dont have an account?SignUp</p>
        </form>
    </div>
</div>
  );
}