import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import './App.css';


export default function Menu() {
    
    const [qty1,setqty1]= useState(0);
    const [qty2,setqty2]= useState(0);
    const [qty3,setqty3]= useState(0);
    const [qty4,setqty4]= useState(0);
    const [qty5,setqty5]= useState(0);
    const [qty6,setqty6]= useState(0);
    const [qty7,setqty7]= useState(0);

    const q1=qty1*50;
    const q2=qty2*180;
    const q3=qty3*160;
    const q4=qty4*150;
    const q5=qty5*160;
    const q6=qty6*190;
    const q7=qty7*180;

    const total=q1+q2+q3+q4+q5+q6+q7;

 const navigate= useNavigate();

 const handleSubmit2=()=>{

    navigate("/rice",{state:{total}});
    
    
 }

 const handleSubmit3=()=>{
    navigate("/paneer")
 }

    const handleSubmit1=()=>{

        navigate("/home",{state:{total}})
        
    }

    return (
    <div className='div1'>
      
      <h2 style={{textDecoration:"underline"}} className='name'>Starters</h2>
        
        <div className='menu'>
         <h4>1.Masala papad : {qty1}</h4>
         <p>(50/-)</p>
         <button onClick={()=>setqty1(qty1-1)}className='buttons'>-</button><button onClick={()=>setqty1(qty1+1)}className='buttons'>+</button>
         </div>
         
         <div className='menu'>
         <h4>2.Paneer tikka : {qty2}</h4>
         <p>(180/-)</p>
         <button onClick={()=>setqty2(qty2-1)} className='buttons'>-</button><button onClick={()=>setqty2(qty2+1)} className='buttons'>+</button>
         </div>
         <div className='menu'>
         <h4>3.Noodles : {qty3}</h4>
         <p>(160/-)</p>
         <button onClick={()=>setqty3(qty3-1)} className='buttons'>-</button><button onClick={()=>setqty3(qty3+1)} className='buttons'>+</button>
         </div>
         <div className='menu'>
         <h4>4.Veg Manchurian : {qty4}</h4>
         <p>(150/-)</p>
         <button onClick={()=>setqty4(qty4-1)} className='buttons'>-</button><button onClick={()=>setqty4(qty4+1)} className='buttons'>+</button>
         </div>
         <div className='menu'>
         <h4>5.Crispy corn chat : {qty5}</h4>
         <p>(160/-)</p>
         <button onClick={()=>setqty5(qty5-1)} className='buttons'>-</button><button onClick={()=>setqty5(qty5+1)} className='buttons'>+</button>
         </div>
         <div className='menu'>
         <h4>6.Dahi ke kabab : {qty6}</h4>
         <p>(190/-)</p>
         <button onClick={()=>setqty6(qty6-1)} className='buttons'>-</button><button onClick={()=>setqty6(qty6+1)} className='buttons'>+</button>
         </div>
         <div className='menu'>
         <h4>7.Bharwan Aloo : {qty7}</h4>
         <p>(180/-)</p>
         <button onClick={()=>setqty7(qty7-1)} className='buttons'>-</button><button onClick={()=>setqty7(qty7+1)} className='buttons'>+</button>
         </div>

         <br/><br/>
       <div className='total'>
       <h2>Starters:{total}</h2>
        <button onClick={handleSubmit1}>Main course</button>
        </div>
        {/* <button onClick={handleSubmit3}>Paneer</button> */}
       
        {/* <button onClick={handleSubmit2}>Submit</button> */}
    </div>
  )
}

export function Home() {
   
    const location=useLocation();
    const {total}=location.state 

    const [qty1,setqty1]= useState(0);
    const [qty2,setqty2]= useState(0);
    const [qty3,setqty3]= useState(0);
    const [qty4,setqty4]= useState(0);
    const [qty5,setqty5]= useState(0);
    const [qty6,setqty6]= useState(0);
    const [qty7,setqty7]= useState(0);
    const [qty8,setqty8]= useState(0);
    const [qty9,setqty9]= useState(0);
    const [qty10,setqty10]= useState(0);

    const q1=qty1*450;
    const q2=qty2*475;
    const q3=qty3*460;
    const q4=qty4*480;
    const q5=qty5*450;
    const q6=qty6*500;
    const q7=qty7*50;
    const q8=qty8*55;
    const q9=qty9*40;
    const q10=qty10*55;

    const maintotal=q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
     const strtMainTotal=total+maintotal;


 const navigate= useNavigate();
 const handleSubmit2=()=>{

    navigate("/rice",{state:{strtMainTotal}});
    
    
 }

 const handleSubmit3=()=>{
    navigate("/paneer",{state:{strtMainTotal}})
 }

    const handleSubmit1=()=>{

        navigate("/menu")
        
    }
    
    return (
        <div className='div1'>
          
          <h2 style={{textDecoration:"underline"}} className='name'>Main Course</h2>
          <div className='menu'>
        <h4>1.Paneer Btr Masala : {qty1}</h4>
        <p>(450/-)</p>
        <button onClick={()=>setqty1(qty1-1)}className='buttons'>-</button><button onClick={()=>setqty1(qty1+1)}className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>2.Shahi Paneer : {qty2}</h4>
        <p>(475/-)</p>
        <button onClick={()=>setqty2(qty2-1)} className='buttons'>-</button><button onClick={()=>setqty2(qty2+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>3.Paneer Burji : {qty3}</h4>
        <p>(460/-)</p>
        <button onClick={()=>setqty3(qty3-1)} className='buttons'>-</button><button onClick={()=>setqty3(qty3+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>4.Paneer Tava masal : {qty4}</h4>
        <p>(480/-)</p>
        <button onClick={()=>setqty4(qty4-1)} className='buttons'>-</button><button onClick={()=>setqty4(qty4+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>5.Dum Aloo : {qty5}</h4>
        <p>(450/-)</p>
        <button onClick={()=>setqty5(qty5-1)} className='buttons'>-</button><button onClick={()=>setqty5(qty5+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>6.Kaju curry : {qty6}</h4>
        <p>(500/-)</p>
        <button onClick={()=>setqty6(qty6-1)} className='buttons'>-</button><button onClick={()=>setqty6(qty6+1)} className='buttons'>+</button>
        </div>
          {<h2 /* style={{textDecoration:"underline" , backgroundColor:"#a5bdfd", padding:"10px"}}*/ className='name'>Tandoori Delights</h2> }
        
          <div className='menu'>
          <h4>1.Butter Naan : {qty7}</h4>
        <p>(50/-)</p>
        <button onClick={()=>setqty7(qty7-1)} className='buttons'>-</button><button onClick={()=>setqty7(qty7+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>2.Garlic Naan : {qty8}</h4>
        <p>(55/-)</p>
        <button onClick={()=>setqty8(qty8-1)} className='buttons'>-</button><button onClick={()=>setqty8(qty8+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>3.Tandoori Roti : {qty9}</h4>
        <p>(40/-)</p>
        <button onClick={()=>setqty9(qty9-1)} className='buttons'>-</button><button onClick={()=>setqty9(qty9+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>4.Roomali Roti : {qty10}</h4>
        <p>(55/-)</p>
        <button onClick={()=>setqty10(qty10-1)} className='buttons'>-</button><button onClick={()=>setqty10(qty10+1)} className='buttons'>+</button>
         </div>


        <br/><br/>
        <div className='total'> 
      <h2>Main Course :{maintotal}</h2>
      <h4>Starters :{total}</h4>
      
       {/* <button onClick={handleSubmit1}>Starter</button> */}
       <button onClick={handleSubmit3}>Drinks&Dessert</button>
       </div>
       {/* <button onClick={handleSubmit2}>Submit</button> */}
   </div>
    )
  }

  export function Rice() {
   
    const navigate= useNavigate();

    const refresh=()=>{
      alert("Payment Received !")
        navigate("/")
        
        
    }

        
    const location=useLocation();
    const {strMainDrink}=location.state
    
    
    
    return (
      <div className='div1'><p>Great Choice!</p>
          <p>Now sit back, Relax and Let the Magic happen!</p>
          <h1>Total Amount : {strMainDrink}</h1>
          <button onClick={refresh}> Pay</button>
      </div>
    )
  }

  export function Paneer() {
    const location=useLocation();
    const {strtMainTotal}=location.state 

    const [qty1,setqty1]= useState(0);
    const [qty2,setqty2]= useState(0);
    const [qty3,setqty3]= useState(0);
    const [qty4,setqty4]= useState(0);
    const [qty5,setqty5]= useState(0);
    const [qty6,setqty6]= useState(0);
    const [qty7,setqty7]= useState(0);
    const [qty8,setqty8]= useState(0);
    const [qty9,setqty9]= useState(0);

    const q1=qty1*170;
    const q2=qty2*180;
    const q3=qty3*200;
    const q4=qty4*240;
    const q5=qty5*250;
    const q6=qty6*200;
    const q7=qty7*200;
    const q8=qty8*220;
    const q9=qty9*250;

    const total=q1+q2+q3+q4+q5+q6+q7+q8+q9;
     const strMainDrink = strtMainTotal+total;


 const navigate= useNavigate();
 const handleSubmit2=()=>{

    navigate("/rice",{state:{strMainDrink}});
    
    
 }

 const handleSubmit3=()=>{
    navigate("/paneer")
 }

    const handleSubmit1=()=>{

        navigate("/menu")
        
    }
    
    return (
        <div className='div1'><h2 style={{textDecoration:"underline"}} className='name'>Drinks</h2>
        
        <div className='menu'>
        <h4>1.Virgin Mojito : {qty1}</h4>
        <p>(170/-)</p>
        <button onClick={()=>setqty1(qty1-1)}className='buttons'>-</button><button onClick={()=>setqty1(qty1+1)}className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>2.Blue Lagoon : {qty2}</h4>
        <p>(180/-)</p>
        <button onClick={()=>setqty2(qty2-1)} className='buttons'>-</button><button onClick={()=>setqty2(qty2+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>3.Watermelon Fizz : {qty3}</h4>
        <p>(200/-)</p>
        <button onClick={()=>setqty3(qty3-1)} className='buttons'>-</button><button onClick={()=>setqty3(qty3+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>4.Mango Tango : {qty4}</h4>
        <p>(240/-)</p>
        <button onClick={()=>setqty4(qty4-1)} className='buttons'>-</button><button onClick={()=>setqty4(qty4+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>5.Berry Bliss : {qty5}</h4>
        <p>(250/-)</p>
        <button onClick={()=>setqty5(qty5-1)} className='buttons'>-</button><button onClick={()=>setqty5(qty5+1)} className='buttons'>+</button>
        </div>

      { <h2/* style={{textDecoration:"underline", backgroundColor:"#a5bdfd", padding:"10px"}} */className='name'>Dessert </h2> }
       
      <div className='menu'>
        <h4>1.Basundi : {qty6}</h4>
        <p>(200/-)</p>
        <button onClick={()=>setqty6(qty6-1)} className='buttons'>-</button><button onClick={()=>setqty6(qty6+1)} className='buttons'>+</button>
        </div>
        <div className='menu'>
        <h4>2.Gajar Halwa : {qty7}</h4>
        <p>(200/-)</p>
        <button onClick={()=>setqty7(qty7-1)} className='buttons'>-</button><button onClick={()=>setqty7(qty7+1)} className='buttons'>+</button>
       </div>
       <div className='menu'>
        <h4>3.Rasmalai : {qty8}</h4>
        <p>(220/-)</p>
        <button onClick={()=>setqty8(qty8-1)} className='buttons'>-</button><button onClick={()=>setqty8(qty8+1)} className='buttons'>+</button>
       </div>
       <div className='menu'>
        <h4>4.Anjeer Halwa : {qty9}</h4>
        <p>(250/-)</p>
        <button onClick={()=>setqty9(qty9-1)} className='buttons'>-</button><button onClick={()=>setqty9(qty9+1)} className='buttons'>+</button>
      </div>
        <div className='total'>
      <h2>For soul : {total}</h2>
      <h4>Starters + Main :{strtMainTotal}</h4>
       {/* <button onClick={handleSubmit1}>Starter</button> */}
       {/* <button onClick={handleSubmit3}>Paneer</button> */}
     
       <button onClick={handleSubmit2}>Place Order</button>
         </div>
   </div>
    )
  }
  
 export function Thanks(){
  return(
    <h1>Thank You</h1>
  )
 }
  
 export function Thanks(){
  return(
    <h1>Thank You</h1>
  )
 }
