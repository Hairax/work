

import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About/About'
import Services from './pages/Services'

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


