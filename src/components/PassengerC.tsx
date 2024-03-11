import React from 'react'
import { Link } from 'react-router-dom'

export default function Passenger() {
  return (
    <div>
      
<div className="p-14 ">
    <div className="max-w-lg mx-auto p-6 bg-slate-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Passenger Booking Details</h2>
        <form>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-1">Passenger Name</label>
                <input type="text" id="name" name="name" className="mt-1 px-4 py-2 w-full border rounded-md"/>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border rounded-md"/>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-1">Age</label>
                <input type="text" id="phone" name="phone" className="mt-1 px-4 py-2 w-full border rounded-md"/>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-1">Number Of Tickets</label>
                <input type="text" id="flight" name="flight" className="mt-1 px-4 py-2 w-full border rounded-md"/>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold mb-1">Date</label>
                <input type="text" id="seat" name="seat" className="mt-1 px-4 py-2 w-full border rounded-md"/>
            </div>
            <Link to="/paymentC/:id">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Submit</button>
            </Link>
        </form>
    </div>
    </div>


    </div>
  )
}
