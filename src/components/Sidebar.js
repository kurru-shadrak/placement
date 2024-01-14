import React from 'react'
import logo from '../assets/blue-logo.png'


import {  ArrowDropDownRounded, ArrowDropUp, BarChart, HelpCenter, History, House, Logout, Money, Person, Person2Rounded, Power, PowerOff, PowerSettingsNew, RateReviewSharp, School, SchoolOutlined, Settings, WorkspacePremium } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ProfileButton from './Buttons/ProfileButton'


function Sidebar() {
  const [isOpen,SetIsOpen]=useState(false)
  const navigate=useNavigate()
  return (
    <div className="h-[700px] shadow-md  rounded-2xl p-2 justify-start  text-white bg-[#0054a6] ">
      {/* <h4 className="text-2xl font-medium mb-5">Dashboard</h4>
       */}
       <div className="rounded-2xl p-1  cursor-pointer " ><ProfileButton/></div>
       {/* <hr className="hrline mt-2" /> */}
       <div className=" text-xl text-black-300 text-start ">
       
      <div className="p-1 mt-5 ml-4 items-center flex justify-start	hover:bg-white hover:text-[#0054a6] hover:rounded-xl">
        <House className='mr-1 ds'/><span className="font-semibold cursor-pointer  "><button  onClick={()=>navigate('app')}>Home</button></span>
      </div>
      <div className="p-1 mt-3 ml-4 items-center  flex justify-start	 		hover:bg-white  hover:text-[#0054a6] hover:rounded-xl">
        <Person2Rounded className='mr-1'/><span className="font-semibold cursor-pointer ">  <button onClick={()=>navigate('myprofile')}>My Account </button></span>
      </div>
     
      <div className=" flex flex-col items-center rounded-lg w-[160px] h-[35px] hover:bg-white hover:text-[#0054a6]  ">
       <button onClick={()=>SetIsOpen((prev)=>!prev)} className=' hover:text-[#0054a6] p-2 flex w-full items-center justify-center font-bold rounded-lg text-lg tracking-wider  border-transparen active:border-white duration-300 active:text-white ' > <School className='mr-2'/>
Courses
{!isOpen ? (
<ArrowDropDownRounded className='h-88'/>
  ):
  (
    <ArrowDropUp className='h-8'/>
  )
}
</button>
{
  isOpen && (
    <div className="bg-blue-500  absolute  flex flex-col items-center justify-start rounded-lg p-2 w-[240px]  " style={{marginLeft:80,marginTop:50}}>
<div className=' float-left text-left w-full'>
  <h2 className='hover:bg-white hover:text-[#0054a6] rounded-lg p-2 font-semibold text-white cursor-pointer' onClick={()=>navigate('recording')}>Recording Courses</h2>
  <h2 className='hover:bg-white hover:text-[#0054a6] rounded-lg p-2 font-semibold text-white cursor-pointer' onClick={()=>navigate('live')}>Online Courses</h2>
 
</div>
    </div>
  )
}
      </div>

        
     
      


      {/* <div className="p-1 mt-3 items-center flex justify-start			hover:bg-white  hover:text-[#0054a6] hover:rounded-xl	 ">
       <Person className='mr-1'/> <span className="font-semibold cursor-pointer  "><button onClick={()=>navigate('myprofile')}> Profile</button></span>
      </div> */}
      
      <div className="p-1 z-1 mt-3 ml-4 items-center  flex justify-start		 		hover:bg-white  hover:text-[#0054a6] hover:rounded-xl">
      <WorkspacePremium className='mr-1'/>  <span className="font-semibold cursor-pointer "><button onClick={()=>navigate('wishlist')}>Wishlist</button></span>
      </div>
      
      {/* <hr className='font-bold' style={{marginTop:190}}/> */}
      <div className="p-1 mt-3 ml-4 items-center flex  justify-start hover:bg-white  hover:text-[#0054a6] hover:rounded-xl		">
        <Money className='mr-1'/><span className=" cursor-pointer  "><button onClick={()=>navigate('rewards')} className=''>Rewards</button></span>
      </div>
      {/* <div className="p-1 mt-3 items-center flex  justify-start	hover:bg-white  hover:text-[#0054a6] hover:rounded-xl	 ">
        <BarChart className='mr-1'/><span className=" cursor-pointer  "><button onClick={()=>navigate('setting')} className=''>Reports</button></span>
      </div> */}
      <div className="p-1 mt-3 ml-4  items-center  flex justify- hover:bg-white  hover:text-[#0054a6] hover:rounded-xl	 ">
        <RateReviewSharp className='mr-1'/><a className=" cursor-pointer  " onClick={()=>navigate('mycertificates')} >Certificates</a>
      </div>
      {/* <div className="p-1 mt-3 ml-4  items-center  flex justify- hover:bg-white  hover:text-[#0054a6] hover:rounded-xl	 ">
        <Logout className='mr-1'/><a className=" cursor-pointer  ">Log Out</a>
      </div> */}
      
      </div>
    
    </div>
  )
}

export default Sidebar