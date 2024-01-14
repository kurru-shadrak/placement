import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Signinup.css'
import logo from '../../assets/download (1).jpeg'


function SignUp() {
     const navigate=useNavigate();
   
  return (
    <div className='signup text-center '>
      <div className="signup-wraper overflow-scroll">
      <div className="logo mb-6 ">
            <div className="grid-cols-1 flex justify-center items-center   rounded-lg  bg-[#0054a6]">
                <div className="logo  w-20 h-20 rounded-full   ">
      <img src={logo}  alt='logo' className=' rounded-full' />
      </div>
      <div className="  text-white ">
        <h1 className='font-bold text-3xl '>SUCHI IT</h1>
        <h6 className='text-sm font-bold '>Training Center</h6>
      </div>
      </div>
</div>
        <h1 className='text-2xl font-serif mb-6'>Create your Account</h1>
    
<div className=' rounded-xl'>

<form>
    <div className="grid gap-3 mb-2 md:grid-cols-3">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">First Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Middle Name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Last Name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        </div>
        
    <div className="mb-2">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
    <div className="mb-2">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  text-left">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    <div className="mb-2">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    <div className="grid gap-6 mb-2 md:grid-cols-2">
        <div>
            <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Address</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>  
        
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">City/District</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Pin/Zip Code</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Country</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        </div>

        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Referred by (ID)</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
   
    <div className="flex items-start mt-2">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Payment {">>"}</button>
</form>

</div>
</div>
    </div>
  )
}

export default SignUp