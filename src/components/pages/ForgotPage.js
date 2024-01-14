import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Signinup.css'
import logo from '../../assets/download (1).jpeg'

function ForgotPage() {
    const navigate=useNavigate();
  return (
    <div className='signin text-center h-full w-1/3'>
      <div className="signin-wraper">
      <div className="logo  ">
            <div className="grid-cols-1 flex justify-center items-center   rounded-lg">
                <div className="logo  w-20 h-20 rounded-full   ">
      <img src={logo}  alt='logo' className=' rounded-full' />
      </div>
      <div className="  text-white ">
        <h1 className='font-bold text-3xl '>SUCHI IT</h1>
        <h6 className='text-sm font-bold '>Training Center</h6>
      </div>
      </div>
</div>
<div className="mt-24 px-6 py-6 lg:px-8 border-2 rounded-lg bg-white">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Forgot Password </h3>
<form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Enter Your Email Address</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required/>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    <a href="#" className="text-white bg-blue-700 p-2 px-4 rounded-lg  hover:bg-blue-800" onClick={()=>navigate('signup')}>Submit</a>
                    </div>
                    </form>
</div>
        </div>
      </div>
  )
}

export default ForgotPage