import React from 'react'
import 'boxicons'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className='NavBar'>
      <div className='Navbar_Container'>
        <h3 className='NavBar_Title'>TechWave</h3>
        <NavLink to='/'>
          <box-icon name='shopping-bags' type='solid' color='#2f2f2f' size='2rem'></box-icon>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar