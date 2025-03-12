import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';



export default function Register() {

  const navigate= useNavigate();
  const handleSubmit=()=>{
      
    navigate("/menu")

  }
    return (
    
    <div className='div1' id='form'>

     <form onSubmit={handleSubmit}>
            
            <label>Username </label>
            <input type="text" name="username" required/><br/><br/>

            <label>Email </label>
            <input type="email" name="email"  required/><br/><br/>

            <label>Password </label>
            <input type="password" name="password"  required/><br/><br/>
            
            <label>Contact no</label>
            <input type="text" name='number'  required/><br/><br/>
          
           <label>Gender</label>
             <input type='radio' name='gender' value="Male"/>M
             <input type='radio' name='gender' value="Female"/>F
             <input type='radio' name='gender' value="Other"/>O<br/><br/>

            <button type='submit' >Register</button>
     </form>

    </div>
  )
}
