import React from 'react'
import './Card.css'
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`/products/${products.id}`)
    }
    return (
        <div className='Card'>
            <div className='Card_Container'>
                <div className='Card_Header'>
                    <img src={products.image} alt={products.title} className='Card_Image' />
                </div>
                <div className='Card_Content'>
                    <h4 className='Card_Title'>{products.title}</h4>
                    <p className='Card_Description'>{products.description}</p>
                    <div className='PriceAndCar'>
                        <p className='Price_Text'>${products.price} USD </p>
                        <p className='Card_Price'><box-icon name='cart-add' color='#2f2f2f' size='2.5rem'></box-icon></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard