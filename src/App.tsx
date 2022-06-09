import React,  { useState }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro  from "./Intro"; 
import ThankYou  from "./ThankYou"; 
import GuestList  from "./GuestList";  

import './App.css';  
 
export default function App() {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} /> 
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/guestlist" element={<GuestList />} />
            </Routes>
        </BrowserRouter> 
    );
} 