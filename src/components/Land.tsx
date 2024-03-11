import React from 'react'
import { Link } from 'react-router-dom'

export default function Land() {
  return (
    <div>
      


<div className="bg-blue-900 py-20 text-white">
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-bold md:text-6xl">Book Your Train Tickets Online</h1>
    <p className="mt-4 text-lg md:text-xl">Fast, easy, and convenient way to plan your journey.</p>
    <div className="mt-10">
        
        <Link to="/main">
      <a href="#" className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-900 hover:bg-blue-100">Get Started</a>
      </Link>
    </div>
  </div>
</div>


<div className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
    <p className="mt-4 text-lg text-gray-600 md:text-xl">Choose our Train Booking System for seamless travel planning. Enjoy 24/7 availability, easy booking process, and dedicated customer support. Experience hassle-free journeys with us !!!.</p>
    <div className="mt-12 flex flex-wrap justify-center">
      <div className="p-6 md:w-1/3">
        <i className="fas fa-clock mb-4 text-4xl text-blue-600"></i>
        <h3 className="mb-2 text-xl font-semibold">24/7 Availability</h3>
        <p className="text-gray-700">Book your tickets anytime, anywhere.</p>
      </div>
      <div className="p-6 md:w-1/3">
        <i className="fas fa-ticket-alt mb-4 text-4xl text-blue-600"></i>
        <h3 className="mb-2 text-xl font-semibold">Easy Booking Process</h3>
        <p className="text-gray-700">Simple and straightforward booking steps.</p>
      </div>
      <div className="p-6 md:w-1/3">
        <i className="fas fa-users mb-4 text-4xl text-blue-600"></i>
        <h3 className="mb-2 text-xl font-semibold">Customer Support</h3>
        <p className="text-gray-700">Dedicated support team to assist you.</p>
      </div>
    </div>
  </div>
</div>


<div className="bg-blue-600 py-8 text-white">
  <div className="container mx-auto text-center">
    <p>&copy; 2024 Train Booking System. All rights reserved.</p>
  </div>
</div>

    </div>
  )
}
