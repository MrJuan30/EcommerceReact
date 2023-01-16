import 'boxicons'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/Context'
import './Cart.css'

const ShoopingCart = () => {

  const navigate = useNavigate()

  const HandleBack = () => {
    navigate(`/`)
  }
  /*CAR LOGIC*/
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className='Cart'>
      <div className='Cart_Container'>
        <div className='Cart_Title_Container'>
          <br />
          <br />
          <br />
          <br />
          <div className="Cart_Container_Top">
            <h2 onClick={HandleBack} className='GoBack_Btn'><box-icon name='chevron-left' size='4rem'></box-icon></h2>
            <h1 className='Cart_Title'>Your Cart:</h1>
          </div>

          <hr />

          <div className="Cart_Content_Container">
            {state.map((item, index) => {
              return (
                <div className="Card-Content_Container" key={index}>
                  <div className="ItemCard_Container">
                    <div className="Item_Header">
                      <img src={item.image} className='ProductImage_Cart' />
                      <div className="Item_Description">
                        <p className='Product_Title_Cart'>{item.title}</p>
                      </div>
                    </div>
                    <div className="Item_Price_Container">
                      <p className='Product_Price_Cart'>${Math.trunc(item.price * item.quantity)}</p>
                    </div>
                    <div className='Buttons_PlussAndLess'>

                      <button className='Plus_Btn'
                        onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                        <box-icon name='plus'></box-icon>
                      </button>
                      <p className='ProductQuantity_Text'>{item.quantity}</p>
                      <button className='Less_Btn'
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}><box-icon name='minus'></box-icon></button>
                    </div>
                    <div className='Delete_Btn_Container'>
                      <button className='Delete_Btn'
                        onClick={() => dispatch({ type: "REMOVE", payload: item })}><box-icon name='trash' ></box-icon></button>
                    </div>
                  </div>
                  <hr />
                </div>
              )
            })}
            <h3 className='TotalCart_Text'>Total: { Math.trunc(total)} $</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShoopingCart