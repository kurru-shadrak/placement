import React from 'react'
import Progress from '../Progress'
import PopularCouses from '../popularcourses/PopularCouses'

function Dashboard() {
  return (
    
    <div className="flex gap-2 pt-[60px] ">
      <div style={{width: "57%",position: "fixed",height: "calc(100vh - 50px - 30px)" }} > 
        <div className="h-full shadow-md bg-white rounded-2xl p-2">
          <h4 className="text-2xl font-medium mb-5">Dashboard</h4>
        </div>

     
        </div>
        <div style={{ width: "20%", position: "absolute", right: 10 }} className="grid grid-col-1 gap-3">
        <Progress />
        <PopularCouses />
      </div> 
      </div>
    
  )
}

export default Dashboard