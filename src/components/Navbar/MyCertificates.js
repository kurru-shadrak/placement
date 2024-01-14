import { ArrowDropDown, ArrowDropDownOutlined, ArrowDropDownRounded, ArrowDropUp, School } from '@mui/icons-material'
import React, { useState } from 'react'





function MyCertificates() {
 
  
  

const [isOpen,SetIsOpen]=useState(false)
  return (
    <div className="flex gap-2 pt-[60px] ">
    <div style={{width: "77%",position: "fixed",height: "calc(100vh - 50px - 30px)" }} > 
      <div className="h-full shadow-md bg-white rounded-2xl p-2 mb-20">
         
      <div className="realative flex flex-col items-center rounded-lg w-[340px] h-[340px] ">
       <button onClick={()=>SetIsOpen((prev)=>!prev)} className='bg-[#0054a6] p-4 flex w-full items-center justify-center font-bold text-white rounded-lg text-lg tracking-wider border-4 border-transparen active:border-white duration-300 active:text-white ' > <School className='mr-1'/>
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
    <div className="bg-[#0054a6] absolute top-20 flex flex-col items-center justify-start rounded-lg p-2 w-[340px] ">
<div className=' float-left text-left w-full'>
  <h2 className='hover:bg-white hover:text-[#0054a6] rounded-lg p-2 font-semibold text-white cursor-pointer'>Recording Courses</h2>
  <h2 className='hover:bg-white hover:text-[#0054a6] rounded-lg p-2 font-semibold text-white cursor-pointer'>Online Courses</h2>
  <h2 className='hover:bg-white hover:text-[#0054a6] rounded-lg  p-2 font-semibold text-white cursor-pointer'>Digital Library</h2>
</div>
    </div>
  )
}
      </div>
     
   </div>
   

      </div>
      </div>
  )
}

export default MyCertificates