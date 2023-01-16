import React, { useContext } from 'react'
import { CartContext } from '../../context/Context'

const ShoopingCart = () => {
    const GlobalState = useContext(CartContext);
    const state = GlobalState.state
    const dispatch = GlobalState.dispatch

  return (
    <div className='Cart'>
      <div className='Cart_Container'>
        <div className='Cart_Title_Container'>
          <h1 className='Cart_Title'>Your Cart</h1>
          <hr />
        </div>
      </div>
    </div>
  )
} 

export default ShoopingCart