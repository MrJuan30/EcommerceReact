import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import 'boxicons'
import Footer from './Components/Footer/Footer'
import AllProducts from './Components/AllProducts/AllProducts'
import ProductsById from './Components/ProductsById/ProductsById'
import ShoopingCart from './Components/Cart/ShoopingCart'
import { Context } from './context/Context'

function App() {

  return (
    <div className="App">
      <Context>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductsById />} />
          <Route path="/MyCart" element={<ShoopingCart />} />
        </Routes>
        <Footer />
      </Context>


    </div>
  )
}

export default App
