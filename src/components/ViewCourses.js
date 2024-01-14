import { School } from '@mui/icons-material'
import React from 'react'
import ReactPlayer from 'react-player'
import Progress from './Progress'
import PopularCouses from './popularcourses/PopularCouses'
import { useNavigate } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import sap from '../assets/Courses logos/Sap.png'
import python from '../assets/Courses logos/python.jpeg'
import java from '../assets/Courses logos/Java.png'
import devops from '../assets/Courses logos/Android.jpeg'
const courseList = [
  {
    title: "The Complete Core Java From Zero to Hero in java",
    professor: "Madam Begum",
    description:
      "Learn Core Java like a Professional Start from the basics and go all the way to creating your own applications and games",
    duration: "45h",
    rating: 4.5,
    raters: 4534,
    url:'https://1.bp.blogspot.com/-5iaqcKxhxgc/X1uavDbEfxI/AAAAAAAALWw/OO0wkFuXc3I0fBJS9Q3GgOKlbBSdFfHBQCLcBGAsYHQ/w1200-h630-p-k-no-nu/python-logo.png'
  },
    // {
    //   title: "The Complete HTML From Zero to Hero in html ",
    //   professor: "Chandra Sekhar",
    //   description:
    //     "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
    //   duration: "15h",
    //   rating: 5,
    //   raters: 4534,
    //   url:"https://i.pinimg.com/originals/6f/d8/3f/6fd83f6c101f85bb417448302daedfb9.png",
  
    // },
  // {
  //   title: "The Complete CSS From Zero to Hero in css",
  //   professor: "Chandra Sekhar",
  //   description:
  //     "Learn CSS like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
  //   duration: "25h",
  //   rating: 5,
  //   raters: 4534,
  //   url:"https://techbrainz.in/wp-content/uploads/2023/03/1-3.png",
  
  // },
  
];
function ViewCourses() {
  const navigate=useNavigate()
  return (
    <div className="flex gap-3 mt-14">
      <div
        style={{
          width: "56%",
          position: "fixed",
          height: "calc(100vh-50px-30px) " }}
        
      >
        <div className="h-full shadow-md bg-white rounded-2xl p-2">
          <div className='flex justify-between items-center'>
          <h4 className="text-2xl font-medium mb-5 ">Your Courses</h4>
          <div className='font-medium mb-5 flex justify-center items-center'>
            <School className='mr-1 '/><span className='text-xl underline cursor-pointer' onClick={()=>navigate('statistics')}>Statistics</span>
          </div>
          
          </div>
          <div className='  float-left'>
            <span className='bg-yellow-500 mr-3 rounded-full cursor-pointer px-2'>6</span> <span className='mr-3 cursor-pointer'>Courses</span><span className='underline mr-3 cursor-pointer'>In Progress</span>
          </div><br/><br/>
          <div class="grid grid-cols-4 gap-1">
          <div class="col-span-3 ">

          <div className='border-4 border-black  rounded-xl '>
          {/* light={<img src='https://th.bing.com/th/id/OIP.E13JkGWNBoKw9e1-WatrCgHaD_?pid=ImgDet&rs=1' alt='Thumbnail'/> } */}
        <ReactPlayer url='https://youtu.be/LfevJNCV9Aw?si=npgEIsCVI61RniLv'   controls width='604px'  />
        </div>
         </div>
         <div class="col-span-1 flex flex-col justify-center items-center shadow-md border-1 rounded-xl">
         <p className="text-lg font-semibold ">{" ReactJS Full Course"}</p>
                    <p className="text-sm font-bold mt-3 ">{''}</p>
                    <span className="text-sm ">{}</span>
                    <div className='mt-3'>
                      <StarRatings
                        starDimension="20px"
                        starSpacing="1px"
                        rating={4.5}
                        starRatedColor="#0054a6
                        "
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                      {4.5 > 0 && (
                        <span className="text-lg ml-1 ">
                          ({new Number(4.5).toLocaleString()})
                        </span>
                      )}
                    </div>
                    <div className='mt-3'>
                      <label className="text-gray-700 font-medium text-sm">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {'56h'}
                      </span>
                      </div>
                      <div className='mt-3'>
                      <button
                       
                        type="button"
                        className="text-white float-center   p-2  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-3 ml-2 hover:bg-blue-600 bg-[#0054a6]"
                        >
                        Details
                      </button>
                    </div>
            
         </div>
         </div>
         {/* First Item */}
         
         <div className="h-40 shadow-xl bg-white rounded-2xl p-2  border-gray-300 mt-2">
           <h1 className='flex justify-start items-center text-md font-sans font-semibold'>Recomended to you</h1> 
         <div  className=''style={{ height: 336,textAlign:"left" }} >
        
        
              <div   className="grid grid-cols-4 gap-4">
  
                <div className="item-box m-2  ">
                  <div className="w-full  p-1 rounded-lg  border-2 bg-blue-300">
                   
                     <p className="text-xs font-semibold text-center">
                      {"Python full course"}
                    </p>
                    {/* <p className="text-sm font-semibold">{"By Professor"}</p> */}
                    <img src={python} className='h-16 w-16 ml-12 rounded-full'/>
                    <div>
                      <label className="text-gray-700 font-medium text-xs">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {"56h"}
                      </span>
                      <button
                        type="button" onClick={()=>navigate('mycourses')}
                        className="text-white  float-right bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-xs px-2  p-1"
                      >
                        Explore
                      </button>
                    </div>
                  </div> 
                </div>
             {/* second items */}
             <div className="item-box m-2  ">
                  <div className="w-full p-1 rounded-lg border-2 bg-blue-300 ">
                   
                     <p className="text-xs font-semibold text-center">
                      {"Backed Java full course"}
                    </p>
                    {/* <p className="text-sm font-semibold">{"By Professor"}</p> */}
                    <img src={java} alt='' className='h-16 w-16 rounded-full   ml-12'/>
                    <div>
                      <label className="text-gray-700 font-medium text-xs">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {"56h"}
                      </span>
                      <button
                        type="button" onClick={()=>navigate('mycourses')}
                        className="text-white  float-right bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-xs px-2  p-1"
                      >
                        Explore
                      </button>
                    </div>
                  </div> 
                </div>
                {/* third item */}
                <div className="item-box m-2  ">
                  <div className="w-full p-1 rounded-lg border-2 bg-blue-300 ">
                   
                     <p className="text-xs font-semibold text-center">
                      {"SAP full course"}
                    </p>
                    {/* <p className="text-sm font-semibold">{"By Professor"}</p> */}
                    <img src={sap} alt='' className='h-16 w-16 rounded-full ml-12'/>
                    <div>
                      <label className="text-gray-700 font-medium text-xs">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {"56h"}
                      </span>
                      <button
                        type="button" onClick={()=>navigate('mycourses')}
                        className="text-white  float-right bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-xs px-2 p-1"
                      >
                        Explore
                      </button>
                    </div>
                  </div> 
                </div>

                {/* fouth item  */}
                <div className="item-box m-2  ">
                  <div className="w-full p-1 rounded-lg border-2 bg-blue-300">
                   
                     <p className="text-xs font-semibold text-center">
                      {"Mobile App full course"}
                    </p>
                    {/* <p className="text-sm font-semibold">{"By Professor"}</p> */}
                    <img src={devops} alt='' className='h-16 w-16 rounded-full ml-12'/>
                    <div>
                      <label className="text-gray-700 font-medium text-xs">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {"56h"}
                      </span>
                      <button
                        type="button" onClick={()=>navigate('mycourses')}
                        className="text-white  float-right bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-xs px-2 p-1"
                      >
                        Explore
                      </button>
                    </div>
                  </div> 
                </div>
              </div>
               </div>
      </div>
       
       
        </div>
     
      </div>
      
      {/* <div
        style={{ width: "19%", position: "absolute", right: 10 }}
        className="grid grid-col-1 gap-3"
      >
        <Progress />
        <PopularCouses />
      </div>  */}
    </div>  )
}

export default ViewCourses