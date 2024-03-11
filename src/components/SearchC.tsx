import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchA() {
  return (
    <div>
      <div className="m-40">
    <div className="max-w-md w-full p-8 bg-slate-400 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 mx-36">Search</h2>
        <form>
            <div className="mb-4">
                <label  className="block text-gray-700 font-semibold"></label>
                <input type="text" id="username" name="username" className="mt-1 px-4 py-2 w-full border rounded-md" placeholder="Enter Your Boarding"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-semibold"></label>
                <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border rounded-md" placeholder="Enter Your Destination"/>
            </div>
            <Link to="//userC/:id">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Book Now</button>
            </Link>
        </form>
    </div>
    </div>

    </div>
  )
}
