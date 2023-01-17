import React, { useContext } from 'react'
import './AllProductsCard.css'

import { CartContext } from '../../../context/Context';

const AllProductsCard = ({ allproducts }) => {


    /*-------------CONTEXT API----------------*/
    const Globalstate = useContext(CartContext);
    const dispatch = Globalstate.dispatch;


    return (
        <div className="AllProducts_Container">
            <div className='Card'>
                <div className='Card_Container' >
                    <div className='Card_Header'>
                        <img src={allproducts.image} alt={allproducts.title} className='Card_Image' />
                    </div>
                    <div className='Card_Content'>
                        <h4 className='Card_Title'>{allproducts.title}</h4>
                        <p className='Card_Description'>{allproducts.description}</p>
                        <div className='PriceAndCar'>
                            <p className='Price_Text'>${allproducts.price} USD </p>
                            {/*BTN ADD TO CART LOGIC, AND CONTEXT API*/}
                            <button onClick={() => dispatch({ type: 'ADD', payload: allproducts })} className='Card_Btn_Add'><box-icon name='cart-add' color='#2f2f2f' size='2.5rem'></box-icon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllProductsCard