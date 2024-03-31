import React, { useState ,useEffect} from 'react'

 import { Details } from './details'
// import axios from 'axios'


// const Router = createBrowserRouter([

//   {
//     path:'/to',
//     element:<Details/>
//   },
  
// ])

export const Home = ({setSelect,setEvent,setDate}) => {
   const [data1,setData]=useState([])
  console.log(data1)
  const fet = async () => {
    try {
      const response = await fetch("http://localhost:5000/events");
      const jsonData = await response.json(); // Extract JSON data from the response
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{fet()},[])
  console.log(data1)

  

  return (
    <div className='Home'>

        <div className='sub'>
            <h2 style={{marginLeft:"23px"}}>Tags</h2>
        <div style={{display:"flex",flexWrap:"wrap"}} >
            
            <button className='tag'>Today</button>
            <button className='tag'>this week</button>
            <button className='tag'>This Month</button>
            <button className='tag'>Shreya Ghoshal</button>
            <button className='tag'>arr</button>
            <button className='tag'>swetha</button>
            <button className='tag'>Jonita Ganthi</button>
            <button className='tag'>Swetha Mohan</button>
            <button className='tag'>taylor Swift</button>
            <button className='tag'>KK</button>
            <button className='tag'>G.V.Parakash</button>
            <button className='tag'>Imman</button>
            <button className='tag'>Sid Sriram</button>
            <button className='tag'>Rakshitha</button>
            <button className='tag'>Arjit Singh</button>
            <button className='tag'>Sunidhi chauhan</button>
        
            

        </div>
        </div>
        <div className='main'>
          
          <h2 style={{marginLeft:"20px"}}>Upcoming Events</h2>
          <div className='chumma'>
           
            
            {data1.map((data1)=>(
            
              <div className='singleEvent' style={{backgroundImage:`url(${data1.image})`,backgroundSize:"cover"}}>
                <div style={{height:"63%"}}></div>
                <div onMouseEnter={()=>{}} style={{backgroundColor:"black",width:"100%",height:"23%",opacity:"0.6" ,color:"white"}} >
                    {/* <p style={{margin:"0px"}}></p>
                    // <p style={{margin:"0px"}}>Location: Los Angels</p> */}
                    {/* <p>Singer: Shreya Ghoshal</p>
                   <p>Location: Los Angels</p>  */}
                  <p style={{margin:"0px 0px 0px 10px",color:"white",fontWeight:"medium",opacity:"10"}}>Singer:{data1.singer_name}</p>
                  <p style={{margin:"5px 10px"}}>Location:{data1.location}</p>

                </div>
                <button style={{width:"100%",height:"18%",borderRadius:"0px",border:"0px",color:"white",backgroundColor:"black"}} onClick={()=>{setEvent(data1.singer_name);setSelect("details");setDate(data1.date)}} >Book Now</button>
                
              </div>
            ))}
          </div>
          


        </div>
    </div>
  )
}
