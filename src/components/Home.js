import React from 'react'

import Progress from './Progress'
import PopularCouses from './popularcourses/PopularCouses'

import ViewCourses from './ViewCourses'

function Home() {
  return (
    <div className="flex gap-1 pt-[60px]  ">
     <div
        style={{
          width: "55%",
          position: "fixed",
          height: "calc(100vh - 68px - 30px)",marginTop:"-55px"
        }}
      >
        <ViewCourses />  
    </div>
    <div style={{ width: "20%", position: "absolute", right: 10 }} className="grid grid-col-1 gap-3">
        <Progress />
        <PopularCouses />
      </div>    
    </div>
  )
}

export default Home