import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import 'boxicons'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
