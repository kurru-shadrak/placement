import React from 'react'
import { useState } from 'react'
import person from '../..//assets/kurru shadrak.jpg'
function ProfileButton() {
    const [isOpen,SetIsOpen]=useState(false)
  return (
    <div>
        
<div class=" w-[250px] h-[150px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-2 pt-2">
        <button onClick={()=>SetIsOpen((prev)=>!prev)} id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            
             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        {isOpen  && (
        <div id="dropdown" class=" h-[140px] w-[110px] absolute text-left  z-10  ml-5 mt-5   grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
            </li>
            </ul>
        </div>)}
    </div>
    <div class="flex flex-col items-center pb-10" style={{marginTop:"-30px"}}>
        <img class="w-16 h-16 mb-0 rounded-full shadow-lg object-cover" src={person} alt="Bonnie image"/>
        <h5 class="mb-0 text-md font-medium text-gray-900 dark:text-white">Kurru Shadrak</h5>
        <h6 class="mb-0 text-sm font-medium text-gray-900 dark:text-white">Kurrushadrak@gmail.com</h6>
        <span class="text-sm text-gray-500 dark:text-gray-400 font-semibold">STIC_50001</span>
        
    </div>
</div>

    </div>
  )
}

export default ProfileButton
