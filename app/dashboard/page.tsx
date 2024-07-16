"use client"
import React from 'react'
import { useSession } from "next-auth/react"
export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>

      <div className='flex flex-col justify-center items-center py-28'>
        <h1
          className='font-bold text-3xl text-center '
        >WELCOME TO THE DASHBOARD</h1>
        <div className='w-[80%] sm:w-[50%] mt-10 z-10' >


          <form

          >
            <div className="grid gap-6 mb-6 md:grid-cols-2 ">
              <div className=''>
                <label htmlFor="first_name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sumit" required />

              </div>
              <div>
                <label htmlFor="last_name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" id="last_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jhaldiyal" required />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2   text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" id="company" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9917931212" pattern="(\+91[-\s]?)?[1-9]{1}[0-9]{9}|(\+91[-\s]?)?([0-9]{2,5}[-\s]?[0-9]{6,8})" required />
              </div>
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Profile Picture</label>
                <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />

              </div>
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Cover Picture</label>
                <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />

              </div>

            
            </div>
            <div className="mb-6">
              <label htmlFor="razorpayid" className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
              <input type="text" id="razorpayid" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Razorpay ID" required />
            </div>
            <div className="mb-6">
              <label htmlFor="razorpaysec" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Razorpay Secrect</label>
              <input type="text" id="razorpaysec" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Razorpay Secret" required />
            </div>

            <div className="flex items-start mb-6 ">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Save Details</button>
          </form>

        </div>


      </div>
    </>
  )
}


