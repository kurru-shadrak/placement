import React from 'react'
import graphImage from '../assets/graph.png'

function Progress() {
  return (
    <div className="h-[200px] shadow-md bg-white rounded-2xl p-2">
    <h4 className="text-md font-bold mb-5">Progress</h4>
    <img src={graphImage} alt='' className='h-36'/>
  </div>
  )
}

export default Progress