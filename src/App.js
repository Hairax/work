

import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"


import About from './pages/About/About'
import Services from './pages/Services/Services'

import Home from './pages/Home/Home'



function App() {
  return (
    <div className="app">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="services" element={ <Services /> } />
    </Routes>
  </div>
  );
}

export default App;


