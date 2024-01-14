import React from 'react'
import Progress from '../Progress'
import PopularCouses from '../popularcourses/PopularCouses'

function Statistics() {
  return (
  <div classNameName='' style={{
    width: "58%",
    position: "fixed",
    height: "calc(100vh-68px-30px)",marginTop:60}}>
        <div className='grid grid-cols-3'>
        <div className="flex flex-col items-center justify-center p-3 shadow-lg h-72 mr-3 mb-3">
                    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Studnets</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-3 shadow-lg mb-3">
                    <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Courses</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-3 shadow-lg mb-3">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-3 shadow-lg h-72 mr-3 ">
                    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-3 shadow-lg">
                    <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Tutors</dd>
                </div>
                <div className="flex flex-col items-center justify-center p-3 shadow-lg">
                    <dt className="mb-2 text-3xl font-extrabold">4+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
                
             
                </div>


</div>
        
    

  )
}

export default Statistics