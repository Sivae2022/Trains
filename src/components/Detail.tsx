import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Detail() {
  const [selectedTrain, setSelectedTrain] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  const handleTrainSelect = (train: string) => {
    setSelectedTrain(train);
  };

  return (
    <div className="bg-cover bg-center bg-blue-800 h-screen flex flex-col items-center justify-center text-white" >
      <h1 className="font-extrabold text-6xl ">Train Booking System</h1>
      {bookingConfirmed ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
          <p className="text-lg">You've successfully booked your ticket.</p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-20">Select Your Journey</h2>
          <ul className="mb-8">
            <li className="mt-10 from-neutral-300">
              <Link to="/search" className="text-lg font-semibold text-blue-200 hover:text-blue-300">VANDE BHARAT</Link>
            </li>
            <li className="mt-10">
              <Link to="/searchB" className="text-lg font-semibold text-blue-200 hover:text-blue-300">EXPRESS</Link>
            </li>
            <li className="mt-10">
              <Link to="/searchC" className="text-lg font-semibold text-blue-200 hover:text-blue-300">SPECIAL</Link>
            </li>
          </ul>
          {selectedTrain && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{selectedTrain}</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold" onClick={() => setBookingConfirmed(true)}>Confirm Booking</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
