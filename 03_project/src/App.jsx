import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Game from './components/game/Game.jsx'
import Center from './components/main/Center.jsx'
function App() {

  return (
    <>
    <Router> 
    <Routes>
    
    <Route path="/" element={<Home/>}/>
     <Route path="/game" element={<><Game /> < Center /></> }/>
    </Routes>
    </Router>
    </>
  )
}

export default App
