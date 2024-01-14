import React from 'react'

function OrderHistory() {
  return (
    <div className="flex gap-2 pt-[60px]">
    <div style={{width: "77%",position: "fixed",height: "calc(100vh - 50px - 30px)" }} > 
      <div className="h-full shadow-md bg-white rounded-2xl p-2">
        <h4 className="text-2xl font-medium mb-5 "> Order History
</h4>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-md text-[#0054a6] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-sans">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Courses
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3 text-red-500">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className='text-md'>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1000
                </th>
                <td className="px-6 py-4">
                    Core java
                </td>
                <td className="px-6 py-4">
                    Recording classNamee
                </td>
                <td className="px-6 py-4">
                    Free
                </td>
                <td className="px-6 py-4">
                    30-10-2023
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1001
                </th>
                <td className="px-6 py-4">
                    Backed java
                </td>
                <td className="px-6 py-4">
                    Recording classNamee
                </td>
                <td className="px-6 py-4">
                    Free
                </td>
                <td className="px-6 py-4">
                    30-10-2023
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1002
                </th>
                <td className="px-6 py-4">
                    Reactjs
                </td>
                <td className="px-6 py-4">
                    Recording classNamee
                </td>
                <td className="px-6 py-4">
                    free
                </td>
                <td className="px-6 py-4">
                    10-30-2023
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1003
                </th>
                <td className="px-6 py-4">
                    Python
                </td>
                <td className="px-6 py-4">
                    Recording classNamee
                </td>
                <td className="px-6 py-4">
                    free
                </td>
                <td className="px-6 py-4">
                    10-30-2023
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1004
                </th>
                <td className="px-6 py-4">
                    Data Science
                </td>
                <td className="px-6 py-4">
                    Online classNamee
                </td>
                <td className="px-6 py-4">
                    $200
                </td>
                <td className="px-6 py-4">
                    01-01-2024
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1005
                </th>
                <td className="px-6 py-4">
                Machine Learning
                </td>
                <td className="px-6 py-4">
                    Online classNamee
                </td>
                <td className="px-6 py-4">
                    $150
                </td>
                <td className="px-6 py-4">
                    01-01-2024
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1006
                </th>
                <td className="px-6 py-4">
                SAP PO/FI
                </td>
                <td className="px-6 py-4">
                    Online classNamee
                </td>
                <td className="px-6 py-4">
                    $150
                </td>
                <td className="px-6 py-4">
                    01-01-2024
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1007
                </th>
                <td className="px-6 py-4">
                Devops
                </td>
                <td className="px-6 py-4">
                    Online classNamee
                </td>
                <td className="px-6 py-4">
                    $150
                </td>
                <td className="px-6 py-4">
                    01-01-2024
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1008
                </th>
                <td className="px-6 py-4">
                Artificial Inteligence
                </td>
                <td className="px-6 py-4">
                    Online classNamee
                </td>
                <td className="px-6 py-4">
                    $250
                </td>
                <td className="px-6 py-4">
                    01-01-2024
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>

          
        </tbody>
    </table>
</div>

      </div>

      

      </div>
      
      </div>
  )
}

export default OrderHistory