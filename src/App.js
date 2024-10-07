

import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'

function App() {
  return (
    <div className="app bg-slate-200 min-h-screen">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="about" element={ <About /> } />
      <Route path="services" element={ <Services /> } />
    </Routes>
  </div>
  );
}

export default App;


