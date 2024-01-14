import React from 'react'
import './YourCourses.css'
import { Player } from 'video-react'
import video from '../../assets/video.mp4'
import ReactPlayer from 'react-player'

function YourCourses() {
    // const navigate = useNavigate();
  return (
    
    <div className="h-full shadow-md bg-white rounded-2xl p-2  ">
    <h4 className="text-2xl font-medium mb-5 ">Your Courses</h4>
    
    
<div>
    
        <ReactPlayer url='https://youtu.be/LfevJNCV9Aw?si=npgEIsCVI61RniLv'   controls/>
    
</div>


      
        
      
  </div> 
  )
}

export default YourCourses
        
     

     
{/*






     <div className="recentcoureses">
        <h3 className='text-lg mt-2 float-left font-bold'>Recent Courses<ArrowDropDown/></h3>
     </div>
          
              <div  className="grid grid-cols-3 gap-1 border p-1 rounded-lg hover:shadow mt-10  ">
                
                
                <div className=" border p-1 ">
                <div className=' rounded-lg 'style={{textAlign:"left"}}>
                    
                    <div>
                    <p className="text-sm font-semibold ">{"The Complete Core Java From Zero to Hero in java"}</p>
                    <p className="text-sm font-semibold ">{"Chandra Sekar"}</p>
                    <span className="text-sm "></span>
                    </div>

                    <div>
                    <img src="https://th.bing.com/th/id/OIP.0NKy1lGlIzN-xQ545IipOwHaCt?w=294&h=128&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='' style={{width:200,height:100,borderRadius:10}}
                   />
                    </div>

                    <div >
                      <StarRatings
                        starDimension="20px"
                        starSpacing="1px"
                        rating={4}
                        starRatedColor="#000"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                      {4 > 0 && (
                        <span className="text-sm ml-1">
                          ({new Number(4).toLocaleString()})
                        </span>
                      )}
                    </div>

                    <div>
                     <label className="text-gray-700 font-medium text-sm ">Duration</label>
                      <span className=" font-medium bg-slate-100 rounded-lg text-xs p-[3px]"> {'45h'}</span>
                     
                      <button onClick={() => navigate("course-details/1234")} type="button"className="text-white float-right focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2  hover:bg-blue-600 bg-[#0054a6] mr-5">
                        Start Leaning
                      </button>
                    </div>

                    
                </div>
                 </div>
                 <div className=" border p-1 ">
                <div className=' rounded-lg 'style={{textAlign:"left"}}>
                    
                    <div>
                    <p className="text-sm font-semibold ">{"The Complete Core Java From Zero to Hero in java"}</p>
                    <p className="text-sm font-semibold ">{"Chandra Sekar"}</p>
                    <span className="text-sm "></span>
                    </div>

                    <div>
                    <img src="https://th.bing.com/th/id/OIP.0NKy1lGlIzN-xQ545IipOwHaCt?w=294&h=128&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='' style={{width:200,height:100,borderRadius:10}}
                   />
                    </div>

                    <div >
                      <StarRatings
                        starDimension="20px"
                        starSpacing="1px"
                        rating={4}
                        starRatedColor="#000"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                      {4 > 0 && (
                        <span className="text-sm ml-1">
                          ({new Number(4).toLocaleString()})
                        </span>
                      )}
                    </div>

                    <div>
                     <label className="text-gray-700 font-medium text-sm ">Duration</label>
                      <span className=" font-medium bg-slate-100 rounded-lg text-xs p-[3px]"> {'45h'}</span>
                     
                      <button onClick={() => navigate("course-details/1234")} type="button"className="text-white float-right focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2  hover:bg-blue-600 bg-[#0054a6] mr-5">
                        Start Leaning
                      </button>
                    </div>

                    
                </div>
                 </div>
                 <div className=" border p-1 ">
                <div className=' rounded-lg 'style={{textAlign:"left"}}>
                    
                    <div>
                    <p className="text-sm font-semibold ">{"The Complete Core Java From Zero to Hero in java"}</p>
                    <p className="text-sm font-semibold ">{"Chandra Sekar"}</p>
                    <span className="text-sm "></span>
                    </div>

                    <div>
                    <img src="https://th.bing.com/th/id/OIP.0NKy1lGlIzN-xQ545IipOwHaCt?w=294&h=128&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='' style={{width:200,height:100,borderRadius:10}}
                   />
                    </div>

                    <div >
                      <StarRatings
                        starDimension="20px"
                        starSpacing="1px"
                        rating={4}
                        starRatedColor="#000"
                        // changeRating={this.changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                      {4 > 0 && (
                        <span className="text-sm ml-1">
                          ({new Number(4).toLocaleString()})
                        </span>
                      )}
                    </div>

                    <div>
                     <label className="text-gray-700 font-medium text-sm ">Duration</label>
                      <span className=" font-medium bg-slate-100 rounded-lg text-xs p-[3px]"> {'45h'}</span>
                     
                      <button onClick={() => navigate("course-details/1234")} type="button"className="text-white float-right focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-md text-sm px-2  hover:bg-blue-600 bg-[#0054a6] mr-5">
                        Start Leaning
                      </button>
                    </div>

                    
                </div>
                 </div>
                  </div>
                  </div> */}
                 
            