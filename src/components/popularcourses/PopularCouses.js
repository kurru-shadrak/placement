import React from 'react'
import'./PopularCourses.css'
import CoursesList from '../courseslist/CoursesList'
import { Navigate, useNavigate } from 'react-router-dom';
const courseList = [
  {
    title: "The Complete Core Java From Zero to Hero in java",
    professor: "Madam Begum",
    description:
      "Learn Core Java like a Professional Start from the basics and go all the way to creating your own applications and games",
    duration: "45h",
    rating: 4.5,
    raters: 4534,
    url:'https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1626244975/hevo-learn/datascience-1024x511-1.png'
  },
  {
    title: "The Complete HTML From Zero to Hero in html ",
    professor: "Chandra Sekhar",
    description:
      "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
    duration: "15h",
    rating: 5,
    raters: 4534,
    url:"https://i.pinimg.com/originals/6f/d8/3f/6fd83f6c101f85bb417448302daedfb9.png",
  
  },
  {
    title: "The Complete CSS From Zero to Hero in css",
    professor: "Chandra Sekhar",
    description:
      "Learn CSS like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
    duration: "25h",
    rating: 5,
    raters: 4534,
    url:"https://techbrainz.in/wp-content/uploads/2023/03/1-3.png",
  
  },
  
];
function PopularCouses() {
  const navigate=useNavigate();
  return (
    <div className="h-full shadow-md bg-white rounded-2xl p-2">
      <h4 className="text-md font-bold mb-5">Popular Courses</h4>

       <div style={{ height: 336, overflow: "scroll" ,textAlign:"left"}}>
        
        {
          courseList.map((course, ind) => {
            return (
              <div key={ind} className="grid grid-cols-1 ">
                <div className="item-box m-2  flex">
                  <div className="w-full p-2 rounded-lg border-4 h-44">
                   
                     <p className="text-sm font-semibold">
                      {"Master of computer and Information Technology"}
                    </p>
                    {/* <p className="text-sm font-semibold">{"By Professor"}</p> */}
                    <img src={course.url} alt='' className='h-20 w-60 rounded-lg'/>
                    <div>
                      <label className="text-gray-700 font-medium text-sm">
                        Duration
                      </label>
                      <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                        {"56h"}
                      </span>
                      <button
                        type="button" onClick={()=>navigate('course-details/1234')}
                        className="text-white float-right bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2 ml-2 p-1"
                      >
                        Explore
                      </button>
                    </div>
                  </div> 
                </div>
              </div>
            );
          })} 
      </div>
    </div>

  )
}

export default PopularCouses