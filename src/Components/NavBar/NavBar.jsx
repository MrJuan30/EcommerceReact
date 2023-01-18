import React, { useContext } from 'react'
import 'boxicons'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { CartContext } from '../../context/Context';

const NavBar = () => {

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  const state = Globalstate.state;


  return (
    <div className='NavBar'>
      <div className='Navbar_Container'>
        <h3 className='NavBar_Title'>TechWave</h3>
        <div className='Bags_Container'>
          <NavLink to='/MyCart' className='ProductsCar_Link'>
            {
              state.length > 0 ?
                <div className='Cart_Logo_Items'>{state?.length}</div>
                :
                <></>
            }
            <box-icon name='shopping-bags' type='solid' color='#2f2f2f' size='2.5rem'></box-icon>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default NavBar