import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Questions from '../src/pages/Questions'
import Responses from '../src/pages/Responses'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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