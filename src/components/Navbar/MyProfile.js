import React from 'react'
import Signin from '../pages/Signin'

function MyProfile() {
    // this.state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     bio: '',
    //   };
    // }
 
  
  return (
    <div className="flex gap-1 pt-[60px]   ">
    <div style={{width: "55%",position: "fixed",height: "calc(100vh - 50px - 30px)" ,marginLeft:165}} className='overflow-scroll' > 
      <div className="h-full shadow-md bg-white  p-2">
      <form className='bg-white  p-2'>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 text-left">This information will be displayed publicly so be careful what you share.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label for="username" className="block text-sm font-medium leading-6 text-gray-900 text-left">Username</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
              <input type="text" name="username" id="username" autocomplete="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"/>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label for="about" className="block text-sm font-medium leading-6 text-gray-900 text-left">About</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600 text-left">Write a few sentences about yourself.</p>
        </div>

        <div className="col-span-full">
          <label for="photo" className="block text-sm font-medium leading-6 text-gray-900 text-left">Photo</label>
          <div className="mt-2 flex items-center gap-x-3">
            <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
            <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-left">Change</button>
          </div>
        </div>

       
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 text-left">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900 text-left">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900 text-left">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="country" className="block text-sm font-medium leading-6 text-gray-900 text-left">Country</label>
          <div className="mt-2">
            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>India</option>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
             
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900 text-left">Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label for="city" className="block text-sm font-medium leading-6 text-gray-900 text-left">City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label for="region" className="block text-sm font-medium leading-6 text-gray-900 text-left">State / Province</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900 text-left">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">Notifications</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600 text-left">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

      <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900 text-left">By Email</legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label for="comments" className="font-medium text-gray-900 text-left flex items-center justify-start">Comments</label>
                <p className="text-gray-500 text-left">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label for="candidates" className="font-medium text-gray-900 text-left flex items-center justify-start">Candidates</label>
                <p className="text-gray-500 text-left">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label for="offers" className="font-medium text-gray-900 text-left flex items-center justify-start">Offers</label>
                <p className="text-gray-500 text-left">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900 text-left">Push Notifications</legend>
          <p className="mt-1 text-sm leading-6 text-gray-600 text-left">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-everything" className="block text-sm font-medium leading-6 text-gray-900 text-left">Everything</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-email" className="block text-sm font-medium leading-6 text-gray-900 text-left">Same as email</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              <label for="push-nothing" className="block text-sm font-medium leading-6 text-gray-900 text-left">No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
      
      
      </div>
      </div>
      </div>
  )
}

export default MyProfile