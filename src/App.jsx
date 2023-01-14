import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import 'boxicons'
import Footer from './Components/Footer/Footer'
import AllProducts from './Components/AllProducts/AllProducts'
import ProductsById from './Components/ProductsById/ProductsById'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductsById />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
