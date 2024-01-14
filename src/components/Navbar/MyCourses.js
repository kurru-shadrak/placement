import React from 'react'
import CoursesList from '../courseslist/CoursesList'

function MyCourses() {
  return (
    <div className="flex gap-2 pt-[60px] ">
    <div style={{width: "77%",position: "fixed",height: "calc(100vh - 50px - 30px)" }} > 
      <div className="h-full shadow-md bg-white rounded-2xl p-2">
     
      <CoursesList/>
      </div>

   
      </div>
    
      </div>
  )
}

export default MyCourses