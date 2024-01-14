import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signinup.css'
import logo from '../../assets/download (1).jpeg'

function Signin() {
  const emailRef=useRef();
  const passwordRef=useRef();
  
  const submitForm =(e)=>{
    e.preventDefault();
    console.log({email:emailRef.current.value,passwod:passwordRef.current.value})

  }
     const navigate=useNavigate();
   
  return (
    <div className='signin text-center h-full w-1/3'>
      <div className="signin-wraper">
      
        <div className="logo  ">
            <div className=" flex flex-col items-center justify-center    rounded-lg ">
            <div className="logo  w-24 h-24 rounded-full    "style={{marginTop:'-50px'}}>
      <img src='https://th.bing.com/th/id/OIP.qpYyRiNLhzR4OIUXyC_JbwHaHa?pid=ImgDet&rs=1'  alt='logo' className=' rounded-full' />
      </div>
      <div className=' grid-cols-1 flex items-center justify-center w-full bg-[#0054a6] rounded-lg mt-5 p-4' >
      <div className="logo  w-20 h-20 rounded-full mr-2   ">
      <img src={logo}  alt='logo' className=' rounded-full' />
      </div>
      <div className=" text-white   ">
        <h1 className='font-bold text-3xl '>SUCHI IT</h1>
        <h6 className='text-sm font-bold '>Training Center</h6>
      </div>
      </div>
      </div>
</div>
<div className="relative rounded-lg  dark:bg-gray-700 mt-3 bg-white">
           
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium  dark:text-white"> </h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-[#0054a6] dark:text-white text-left ">User Id</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-[#0054a6] dark:text-white text-left"> Password</label>
                        <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-[#0054a6] dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-[#0054a6] hover:underline dark:text-white" onClick={()=>navigate('forgot')}>Forgot Password</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>navigate('home')}>Login </button>
                    <div className="text-sm font-medium text-[#0054a6] dark:text-gray-300">
                        Not registered? <a href="#" className="text-white  dark:text-blue-500 bg-green-700 p-2 px-4 rounded-lg  hover:bg-green-800" onClick={()=>navigate('signup')}>Sign up</a>
                    </div>
                </form>
            </div>
        </div>
</div>
</div>
  )
}

export default Signin