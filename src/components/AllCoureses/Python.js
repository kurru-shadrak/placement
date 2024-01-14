import React from 'react'
import python from '../../assets/final javascript.jpeg'
import css from '../../assets/css.jpeg'
import corejava from '../../assets/html.png'
const courseList = [
    {
      title: "The Complete Core Java From Zero to Hero in java",
      professor: "Madam Begum",
      description:
        "Learn Core Java like a Professional Start from the basics and go all the way to creating your own applications and games",
      duration: "45h",
      rating: 4.5,
      raters: 4534,
      url:"https://www.tecwallet.com/ImageUploaderNew/uploads/18_4_2013_16_03_190_core_java_6884011458.jpg"
    },
     {
       title: "The Complete Backed Java From Zero to Hero in Java ",
       professor: "Shiva",
       description:
         "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
       duration: "15h",
       rating: 5,
       raters: 4534,
       url:"https://th.bing.com/th/id/OIP.wmVr1W0nuF_M_OswcpjyjgHaEc?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",

     },
  //   {
  //     title: "The Complete CSS From Zero to Hero in css",
  //     professor: "Chandra Sekhar",
  //     description:
  //       "Learn CSS like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
  //     duration: "25h",
  //     rating: 5,
  //     raters: 4534,
  //     url:"https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.png",
    
  //   },
  //  {
  //      title: "The Complete JavaScript From Zero to Hero ",
  //       professor: "Chandra Sekhar",
  //       description:
  //         "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
  //       duration: "45h",
  //       rating: 4.5,
  //       raters: 4534,
  //        url:"https://ictacademy.com.ng/wp-content/uploads/2020/02/92.-JavaScript-logo.png",
        
  //      },
       {
        title: "The Complete ReactJS From Zero to Hero ",
         professor: "Chandra Sekhar",
         description:
           "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
         duration: "45h",
         rating: 4.5,
         raters: 4534,
          url:"https://th.bing.com/th/id/OIP.E13JkGWNBoKw9e1-WatrCgHaD_?pid=ImgDet&rs=1",
         
        },
        {
          title: "The Complete Python From Zero to Hero ",
           professor: "Chandra Sekhar",
           description:
             "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
           duration: "45h",
           rating: 4.5,
           raters: 4534,
            url:"https://1.bp.blogspot.com/-5iaqcKxhxgc/X1uavDbEfxI/AAAAAAAALWw/OO0wkFuXc3I0fBJS9Q3GgOKlbBSdFfHBQCLcBGAsYHQ/w1200-h630-p-k-no-nu/python-logo.png",
           
          },
  ];
function Python() {
  return (
    <div className="flex gap-3 overflow-scroll ">
    <div
      style={{
        width: "76.5%",
        position: "fixed",
        height: "calc(100vh-50px-30px) " ,marginTop:55}} className='overflow-scroll' >

    <div className=" grid grid-cols-4 gap-1  ">
<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
    <div className='flex items-center justify-center'>
        <img class="rounded-lg" src='https://th.bing.com/th/id/OIP.wmVr1W0nuF_M_OswcpjyjgHaEc?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" width='300' height='200' style={{}}/>
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backed Java Full Course</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scenes activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store. Code written by back-end developers helps browsers to communicate with database information.



</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
    <div className='flex items-center justify-center'>
        <img class="rounded-lg" src='https://th.bing.com/th/id/OIP.E13JkGWNBoKw9e1-WatrCgHaD_?pid=ImgDet&rs=1' alt="" width='300' height='200'/>
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ReactJS Full Course</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">The React.js framework is an open-source JavaScript framework and library developed for building interactive user interfaces and web applications quicklyIn React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.

</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
    <div className='flex items-center justify-center'>
        <img class="rounded-lg" src='https://1.bp.blogspot.com/-5iaqcKxhxgc/X1uavDbEfxI/AAAAAAAALWw/OO0wkFuXc3I0fBJS9Q3GgOKlbBSdFfHBQCLcBGAsYHQ/w1200-h630-p-k-no-nu/python-logo.png' alt="" width='300' height='250'/>
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Python Full Courses</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">Python is a popular high-level programming language that is widely used for web development, automation, scientific computing, data analysis, artificial intelligence and more.Python is used for server-side web development, software development, mathematics, and system scripting, and is popular for Rapid Application Development and as a scripting or glue language to tie existing components because of its high-level, built-in data structures, dynamic typing, and dynamic binding.

</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
    <div className='flex items-center justify-center'>
        <img class="rounded-lg" src='https://www.tecwallet.com/ImageUploaderNew/uploads/18_4_2013_16_03_190_core_java_6884011458.jpg' alt="" width='300' height='250'/>
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Core Java Full Courses</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scenes activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store. Code written by back-end developers helps browsers to communicate with database information.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>


    </div>
</div>
  )
}

export default Python