import React, { useContext } from 'react'
import './Card.css'
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../../../context/Context';


const ProductCard = ({ products }) => {

    const Globalstate = useContext(CartContext);
    const dispatch = Globalstate.dispatch;

    const navigate = useNavigate()

    const HandleClick = () => {
        navigate(`/products/${products.id}`)
    }
    return (
        <div className='Card'>
            <div className='Card_Container' >
                <div className='Card_Header'>
                    <img src={products.image} alt={products.title} className='Card_Image' onClick={HandleClick} />
                </div>
                <div className='Card_Content'>
                    <h4 className='Card_Title'>{products.title}</h4>
                    <p className='Card_Description'>{products.description}</p>
                    <div className='PriceAndCar'>
                        <p className='Price_Text'>${products.price} USD </p>
                        <button onClick={() => dispatch({ type: 'ADD', payload: products })} className='Card_Price'><box-icon name='cart-add' color='#2f2f2f' size='2.5rem'></box-icon></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard