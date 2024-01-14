import React from 'react'
import suchilogo from '../assets/download (1).jpeg'
import {  NotificationsNone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';






function Header() {
  const navigate=useNavigate()
  // style={{backgroundColor:"#0054a6"}}
  return (
    <nav className="w-full h-[50px]  rounded-xl mb-3  bg-black shadow-md shadow-blue-600 " >
      <div className='flex items-center justify-center  text-[#0054a6] text-xl'>
          <div className='flex justify-center items-center  text-white'>
          
       <div className="p-1 mr-5 ">
        <button onClick={()=>navigate('recording')}  className="font-semibold cursor-pointer bg-[#0054a6] px-2 rounded-md text-lg hover:bg-white hover:text-[#0054a6] hover:rounded-lg p-1 ">Recorded Classes</button>
       </div>
       <div className="p-1 mr-5 ">
        <button onClick={()=>navigate('live')} className="font-semibold cursor- bg-[#0054a6] px-2 rounded-md text-lg hover:bg-white hover:text-[#0054a6] hover:rounded-lg p-1 ">Live Classes</button>
       </div>
       <div className="p-1 mr-5 ">
        <button onClick={()=>navigate('degital')}  className="font-semibold cursor-pointer bg-[#0054a6] px-2 rounded-md text-lg hover:bg-white hover:text-[#0054a6] hover:rounded-lg p-1 ">Digital Library</button>
       </div>
          <div className="p-1 mr-2 ">
        <button onClick={()=>navigate('reports')} className="font-semibold cursor-pointer bg-[#0054a6] px-2 rounded-md text-lg hover:bg-white hover:text-[#0054a6] hover:rounded-lg p-1 mr-[250px]">Reports</button>
       </div>
       </div>
       
       
        <div className='flex items-center justify-center ml-20'>
      
      <div className="p-1 mr-2 dropdown">
        <button className="font-bold cursor-pointer text-3xl text-white ">SITC</button>
       </div>
      <div className=" mr-2 -z-1 animate-spin">
      <img src={suchilogo} alt="" className="persologo cursor-pointer rounded-full " width="40px" height="40px"/>
        
      </div>
   
      </div> 


      </div>
     
    </nav>
  )
}

export default Header