import React, { useState } from 'react'
import axios from 'axios';

export const Create = () => {

        const [name,setName]=useState("");
        const [loc,setLoc]=useState();
        const [date,setDate]=useState();
        const [tot,setTot]=useState();
        const [plat,setPlat]=useState();
        const [gold,setGold]=useState();
        const [silver,setSilver]=useState();
        const [images,setImages]=useState();


    
    function format(date1)
    {
        console.log(date1);
        var parts = date1.split('-');
        // Rearrange the parts to construct the new date string
        return parts[2] + "-" + parts[1] + "-" + parts[0];
    

    }
    const handle=async()=>
    {
        
       const fet=await axios.post("http://localhost:5000/events",{
            singer_name:name,
            image: images,
    location:loc,
    date:format(date),
    no_of_tickets:tot,
    platinum_tickets:plat,
    gold_tickets:gold,
    silver_tickets:silver
        }, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
    }
  return (
   <div style={{padding:"100px",display:"flex",flexDirection:"column",alignItems:"center"}} >
    <div style={{backgroundColor:"#14213d",width:"792px",padding:"15px 0px",color:"white"}}>
        <h1 style={{textAlign:"center",margin:"0px",fontSize:"xx-large",fontFamily:"Satoshi"}}>Event Details</h1>
        <p style={{textAlign:"center",margin:"0px",marginTop:"10px",fontFamily:"Satoshi"}}>Enter the details of your Upcoming Event</p>

    </div>
    
    <div className='container' >
        
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3 style={{marginLeft:"20px"}}>Artist Details</h3>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Artist Name</label>
        <div className='input-d '>
        <input value={name} onChange={(e)=>setName(e.target.value)} className='input-c'/>
        </div>
        </div>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Artist Image</label>
        <div className='input-d'>
        <input  id='img'  onChange={(e)=>setImages(e.target.files[0])} className='input-c'  type='file'/>
        </div>
        </div>
        </div>


        <div style={{display:"flex",flexDirection:"column"}}>
        <h3 style={{marginLeft:"20px"}}>Event Details</h3>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Event Location</label>
        <div className='input-d '>
        <input value={loc} onChange={(e)=>setLoc(e.target.value)} className='input-c'/>
        </div>
        </div>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Event Date</label>
        <div className='input-d'>
        <input id="date" value={date} onChange={(e)=>{setDate(e.target.value)}} className='input-c' type='date'  />
        </div>
        </div>
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
        <h3 style={{marginLeft:"20px"}}>Ticket Details</h3>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Total Tickets</label>
        <div className='input-d '>
        <input value={tot} onChange={(e)=>setTot(e.target.value)} className='input-c'/>
        </div>
        </div>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Platinum Tickets</label>
        <div className='input-d'>
        <input value={plat} onChange={(e)=>setPlat(e.target.value)} className='input-c'  />
        </div>
        </div>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Gold Tickets</label>
        <div className='input-d'>
        <input className='input-c' value={gold} onChange={(e)=>setGold(e.target.value)}  />
        </div>
        </div>
        <div style={{margin:"10px 20px",display:"flex"}}>
        <label>Silver Tickets</label>
        <div className='input-d'>
        <input className='input-c' value={silver} onChange={(e)=>setSilver(e.target.value)}  />
        </div>
        </div>
        </div>

       <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
        <button className='button-c' onClick={handle} >Submit</button>

       </div>
    </div>
    
   </div>
  )
}
