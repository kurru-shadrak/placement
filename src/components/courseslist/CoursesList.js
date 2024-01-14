import React from 'react'
import './CoursesList.css'
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

// import StarRatings from "react-star-ratings/build/star-ratings";
const courseList = [
  {
    title: " Core Java ",
    professor: "Madam Begum",
    description:
      "Learn Core Java like a Professional Start from the basics and go all the way to creating your own applications and games",
    duration: "45h",
    rating: 4.5,
    raters: 4534,
    url:"https://suchiit.com/wp-content/uploads/2023/02/logos_java-150x150.png"
  },
   {
     title: "Backed Java  ",
     professor: "Shiva",
     description:
       "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
     duration: "15h",
     rating: 5,
     raters: 4534,
     url:"https://suchiit.com/wp-content/uploads/2023/02/logos_java-150x150.png",

   },
  {
    title: "SAP PO/PI",
    professor: "Chandra Sekhar",
    description:
      "Learn CSS like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
    duration: "25h",
    rating: 5,
    raters: 4534,
    url:"https://suchiit.com/wp-content/uploads/2023/03/logos_sap-cpi-150x150.png",
  
  },
 {
     title: "SAP CPI ",
      professor: "Chandra Sekhar",
      description:
        "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
      duration: "45h",
      rating: 4.5,
      raters: 4534,
       url:"https://suchiit.com/wp-content/uploads/2023/03/logos_sap-cpi-150x150.png",
      
     },
     {
      title: "ReactJS ",
       professor: "Chandra Sekhar",
       description:
         "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
       duration: "45h",
       rating: 4.5,
       raters: 4534,
        url:"https://suchiit.com/wp-content/uploads/2023/02/logos_react-js-150x150.png",
       
      },
      {
        title: " Backed Python ",
         professor: "Chandra Sekhar",
         description:
           "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
         duration: "45h",
         rating: 4.5,
         raters: 4534,
          url:"https://suchiit.com/wp-content/uploads/2023/02/logos_python-150x150.png",
         
        },
        {
          title: "Fullstack Python ",
           professor: "Chandra Sekhar",
           description:
             "Learn JavaScipt like a Professional Start from the basics and go all the way to creating your own Dynamic web applications and games",
           duration: "45h",
           rating: 4.5,
           raters: 4534,
            url:"https://suchiit.com/wp-content/uploads/2023/02/logos_python-150x150.png",
           
          },
          {
            title: "Fullstack Java  ",
            professor: "Shiva",
            description:
              "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
            duration: "15h",
            rating: 5,
            raters: 4534,
            url:"https://suchiit.com/wp-content/uploads/2023/02/logos_java-150x150.png",
       
          },
          {
            title: "Mobile App ",
            professor: "Shiva",
            description:
              "Learn html like a Professional Start from the basics and go all the way to creating your own applications and mobile application ",
            duration: "15h",
            rating: 5,
            raters: 4534,
            url:"https://suchiit.com/wp-content/uploads/2023/02/logos_mobile-apps-1-150x150.png",
       
          },
];

function CoursesList() {
      const navigate = useNavigate();
  return (
    <div className="h-full shadow-md  rounded-xl p-2  ">
    <h4 className="text-2xl font-medium mb-5 text-[#0054a6]">Live Courses</h4>
<div className="grid grid-cols-3 ">
    {courseList.map((course, ind) => {
      return (
        <div key={ind} className="cursor-pointer   " >
          <div className="item-box m-2  ">
            <div className="w-full border p-1 rounded-lg hover:shadow border-[#0054a6] ">
              <div className="flex p-2 ">
                <div>
                 
                  <img src={course.url} className="rounded-full"
                  
                    alt='' 
                 />
                </div>
                <div className='grid grid-cols-1 rounded-lg 'style={{textAlign:"left",marginLeft:20}}>
                  <p className="text-xl font-semibold text-[#0054a6] ">{course.title}</p>
                  {/* <p className="text-sm font-semibold ">{course.professor}</p> */}
                  {/* <span className="text-sm   text-white ">{course.description}</span> */}
                  <div >
                    <StarRatings 
                      starDimension="20px"
                      starSpacing="1px"
                      rating={course.rating}
                      starRatedColor="red"
                      // changeRating={this.changeRating}
                      numberOfStars={5}
                      name="rating"
                      />
                    {course.raters  > 0 && (
                      <span className="text-sm ml-1 text-white">
                        ({new Number(course.raters).toLocaleString()})
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-yellow-300 font-medium text-sm">
                      Duration
                    </label>
                    <span className="ml-4 font-medium bg-slate-100 rounded-lg text-xs p-[3px]">
                      {course.duration}
                    </span>
                    
                    <button
                      onClick={() => navigate("python")} 
                      type="button"
                      className="text-white float-left mt-3   p-2  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2 hover:bg-blue-600 bg-blue-900"
                      >
                      BUY NOW
                    </button>
                  </div>
                </div>
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

export default CoursesList