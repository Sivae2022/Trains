import React from 'react'
import { Link } from 'react-router-dom'


export default function PaymentA() {
  return (
    <div>
      <div className="m-20">
  <div className="max-w-lg mx-auto p-6 bg-gray-300 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="card" className="block text-gray-700 font-semibold mb-1">Card Number</label>
        <input type="text" id="card" name="card" className="mt-1 px-4 py-2 w-full border rounded-md"/>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Cardholder Name</label>
        <input type="text" id="name" name="name" className="mt-1 px-4 py-2 w-full border rounded-md"/>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-1">Total Amount</label>
        <input type="text" id="amount" name="amount" className="mt-1 px-4 py-2 w-full border rounded-md"/>
      </div>
      <Link to="/confirm">
      <button type="submit" className="bg-blue-500 text-white w-full mt-6 rounded-md p-2">Pay now</button>
      </Link>
    </form>
  </div>
</div>

    </div>
  )
}
