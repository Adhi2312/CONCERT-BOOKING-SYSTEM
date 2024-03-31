import React, { useState,useEffect } from 'react'

export const MyTickets = ({authName}) => {

    const [data1,setData]=useState([])
    const fet = async () => {
      console.log(authName)
        try {
          const response = await fetch(`http://localhost:5000/tickets/:${authName}`);
          const jsonData = await response.json(); // Extract JSON data from the response
          setData(jsonData);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(()=>{fet()},[])
  return (
    <div className='myticket'>
         {data1.map((data1)=>(
            <div className='mySingleTicket'>
            <h2 style={{marginBottom:"0px",color:"#7E2100"}}>{data1.date}</h2>
            <h3 style={{marginBottom:"0px",marginTop:"5px",color:"#7E2100"}}>{data1.location}</h3>
        </div> 
           
          ))}
        

        

    </div>
  )
}
