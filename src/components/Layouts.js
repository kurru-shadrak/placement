import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import CoursesList from './courseslist/CoursesList'

function Layouts() {
  return (
    <div className="flex gap-1 mt-0">
        <div
          style={{
            width: "19%",
            position: "fixed",
            height: "calc(100vh - 10px)",
          }}
        >
          <Sidebar />
        </div>
        <div
          className=""
          style={{ width: "100%", paddingLeft: "calc(20% + 15px)" }}
        >
          <div style={{ position: "fixed", width: "calc(98% - 20% - 20px)"}}>
            <Header />
          </div>
          


          <Outlet />
          


        </div>
      </div>
  )
}

export default Layouts