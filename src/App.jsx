import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Questions from '../src/pages/Questions'
import Responses from '../src/pages/Responses'


function App() {
  return (
    <>
    <Navbar/>    
    <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/responses" element={<Responses />} />
      </Routes>   
    </>
  )
}

export default App