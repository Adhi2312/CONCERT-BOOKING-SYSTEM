import React from 'react'
// import { useState} from 'react';
import './App.css';
import { MdOutlineClose } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";
import { GiTheater } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

import axios, { Axios } from 'axios';


export const Details = ({event,date,authName}) => {
  const [data2,setData2]=useState([])
  const [timer,setTimer] = useState("")
  const [card,setCard]=useState(false)
  const [cat,setCat]=useState("")
  const [price ,setPrice]=useState()
const [count,setCount]=useState(1)

  function onPlatinum(){
    try{axios.post("http://localhost:5000/book",{
      singer_name:data2.singer_name,
      date:data2.date,
      category:cat

     

    })
    axios.post("http://localhost:5000/tickets",
    {
      singer_name:data2.singer_name,
      username:authName,
      ticket_category:cat,
      date:data2.date,
      location:data2.location
    })
    
    console.log("Platinum booked");
    setCard(false)
    // useEffect(()=>{fe(),{}})
  
  }
    catch(err){console.log(err)}
    
  }
 
  



  const fe=async()=>{
    try{
      const response = await fetch(`http://localhost:5000/events/${event}/${date}`)
      const jsonData = await response.json();

      console.log("hello s ques me"+jsonData)
      console.log("first")
      setData2(jsonData)
      // setDate1(data2.date)
    }
    catch (err) {
          console.log(err);
        }
  }


  
  useEffect(()=>{fe()},[])
  useEffect(() => {
    if (data2 && data2.date) {
      const interval = setInterval(() => {
        setTimer(getdate(data2.date));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data2]);
  
  console.log("hai"+data2)
  
  
  function getdate(date1) {
    if (!date1) return ""; // Return an empty string if date1 is undefined or null
  
    const cur_date = new Date();
    const end_date = new Date(date1.slice(6,10) + "-" + date1.slice(3,5) + "-" + date1.slice(0,2));
    const timeDiff = end_date - cur_date;
  
    // Convert milliseconds to seconds, minutes, hours, and days
    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    // Format the countdown timer
  
    if (days > 0) {
        return days+" Days and "+hours+" hours Left"
    }
    else if(hours>0) return hours+" Hours left"
    else return minutes+" Minutes left"
  }


  
  return (
    <div style={{display:"flex",justifyContent:"center" }} className='hello'>
       <div className={!(card)?"purchase1":"purchase"}>
          <div style={{padding:"0px 20px",backgroundColor:"#14213d",display:"flex",color:"white"}} >
              <p style={{width:"90%"}}>Book Tickets</p>
              <MdOutlineClose style={{margin:"15px"}} size={25} onClick={()=>setCard(false)}/>
          </div>
          <div style={{padding:"20px"}}>
            <div style={{display:"flex"}}>
              <p style={{width:"70%"}}>Ticket catogory</p>
              <p style={{width:"30%"}}>{cat}</p>
            </div>
            <div style={{display:"flex"}}>
              <p style={{width:"70%"}}>Ticket Price</p>
              <p style={{width:"30%"}}>${price}</p>

            </div>
            
            <div style={{width:"100%",marginTop:"15px"}}>
              <button style={{width:"47%",marginRight:"15px",height:"35px",backgroundColor:"#14213d",border:"0px",color:"white",fontFamily:"Satoshi"}} onClick={()=>setCard(false)}>Cancel</button>
              <button style={{width:"47%",height:"35px",backgroundColor:"#14213d",border:"0px",color:"white",fontFamily:"Satoshi"}} onClick={onPlatinum}>Purchase</button>
            </div>
            

            
          </div>

        </div>
    <div className='Details'>

      
        <div className='desc'>
        <img style={{height:"200px",width:"200px",marginBottom:"0px"}} src={data2.image}/>

            <div className='desc2'>
       <div style={{display:'flex',marginBottom:"0px",color:"black",marginTop:"0px"}}>

<button  style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaMicrophone  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Artist
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>{data2.singer_name}</p>
  
</div>

</div>
        <hr color='grey' style={{width:"100%"}}/>
        
        <div style={{display:'flex',marginBottom:"10px",color:"black"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaLocationDot   size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Location
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>{data2.location}</p>
  
</div>

</div>
<hr color='grey' style={{width:"100%"}}/>

<div style={{display:'flex',marginBottom:"10px",color:"black"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaCalendarAlt  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Date
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>{data2.date}</p>
  
</div>

</div>
<hr color='grey' style={{width:"100%"}}/>
<div style={{display:'flex',marginBottom:"10px",color:"black"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><GiTheater  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Tickets Left
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>{data2.no_of_tickets}</p>
  
</div>

</div>

<hr color='grey' style={{width:"100%"}}/>
<div style={{display:'flex',marginBottom:"10px",color:"black"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaStopwatch  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Time Left
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>{getdate(data2.date)}</p>
  
</div>

</div>


</div>

</div>

        <div className='tickets'>
       
         
            <div className='ticket'>
                <h2 style={{marginLeft:"20px"}}>Platinum</h2>
                <div style={{display:"flex"}}>
                    <div style={{width:"55%",marginLeft:"20px"}} >  
                        <p style={{marginBottom:"30px"}}>Price</p>
                        <p style={{marginBottom:"30px"}}>Available Seats</p>
                        <p style={{marginBottom:"30px"}}>Seat Allocated</p>

                    </div>
                    <div>
                        <h3 style={{marginBottom:"25px"}}>$5000</h3>
                        <h3 style={{marginBottom:"25px"}}>{data2.platinum_tickets} left</h3>
                        <h3 style={{marginBottom:"0px"}}>first 3 rows</h3>

                    </div>

                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    <button onClick={()=>{setCat("Platinum");setPrice(5000);setCard(true)}} style={{width:"90%",padding:"10px 10px",color:"white",backgroundColor:"black"}}>Buy Now</button>

                </div>
            </div>
            <div className='ticket'>
                <h2 style={{marginLeft:"20px"}}>Gold</h2>
                <div style={{display:"flex"}}>
                    <div style={{width:"55%",marginLeft:"20px"}} >  
                        <p style={{marginBottom:"30px"}}>Price</p>
                        <p style={{marginBottom:"30px"}}>Available Seats</p>
                        <p style={{marginBottom:"30px"}}>Seat Allocated</p>

                    </div>
                    <div>
                        <h3 style={{marginBottom:"25px"}}>$2000</h3>
                        <h3 style={{marginBottom:"25px"}}>{data2.gold_tickets} left</h3>
                        <h3 style={{marginBottom:"0px"}}>b/w 3-20 rows</h3>

                    </div>

                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    <button onClick={()=>{setCat("Gold");setPrice(2000);setCard(true)}} style={{width:"90%",padding:"10px 10px",color:"white",backgroundColor:"black"}}>Buy Now</button>

                </div>
            </div>
            <div className='ticket'>
                <h2 style={{marginLeft:"20px"}}>Silver</h2>
                <div style={{display:"flex"}}>
                    <div style={{width:"55%",marginLeft:"20px"}} >  
                        <p style={{marginBottom:"30px"}}>Price</p>
                        <p style={{marginBottom:"30px"}}>Available Seats</p>
                        <p style={{marginBottom:"30px"}}>Seat Allocated</p>

                    </div>
                    <div>
                        <h3 style={{marginBottom:"25px"}}>$700</h3>
                        <h3 style={{marginBottom:"25px"}}>{data2.silver_tickets} left</h3>
                        <h3 style={{marginBottom:"0px"}}>last 10 rows</h3>

                    </div>

                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    <button onClick={()=>{setCat("Siver");setPrice(700);setCard(true)}} style={{width:"90%",padding:"10px 10px",color:"white",backgroundColor:"black"}}>Buy Now</button>

                </div>
            </div>
        </div>
        
</div>
</div>
  )
}



