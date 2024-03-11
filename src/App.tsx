import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Land from './components/Land.tsx'
import Detail from './components/Detail.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchA from './components/SearchA.tsx'
import Passenger from './components/Passenger.tsx'
import PaymentA from './components/PaymentA.tsx'
import ConfirmA from './components/ConfirmA.tsx'
import SearchB from './components/SearchB.tsx'
import PassengerB from './components/PassengerB.tsx'
import PaymentB from './components/PaymentB.tsx'
import ConfirmB from './components/ConfirmB.tsx'


function App() {

  return (
   
      <BrowserRouter>
      
      <Routes>

      <Route path='/' Component={Land}/>

        <Route path='/main' Component={Detail}/>
        <Route path='/search' Component={SearchA}/>
        <Route path='/user/:id' Component={Passenger}/>
        <Route path='/payment/:id' Component={PaymentA}/>
        <Route path="/confirm" Component={ConfirmA}/>
       

        <Route path="/" Component={Detail}/>
        <Route path='/searchB' Component={SearchB}/>
        <Route path='/userB/:id' Component={PassengerB}/>
        <Route path='/paymentB/:id' Component={PaymentB}/>
        <Route path="/confirmB" Component={ConfirmB}/>


        <Route path="/" Component={Detail}/>
        <Route path='/searchC' Component={SearchB}/>
        <Route path='/userC/:id' Component={PassengerB}/>
        <Route path='/paymentC/:id' Component={PaymentB}/>
        <Route path="/confirmC" Component={ConfirmB}/>

      </Routes>
      </BrowserRouter>
    
  )
}

export default App
