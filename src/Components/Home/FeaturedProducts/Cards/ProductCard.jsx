import React from 'react'
import './Card.css'

const ProductCard = ({ products }) => {
    return (
        <div className='Card'>
            <div className='Card_Container'>
                <div className='Card_Header'>
                    <img src={products.image} alt={products.title} />
                </div>
                <div className='Card_Content'>
                    <h4 className='Card_Title'>{products.title}</h4>
                    <p className='Card_Description'>{products.description}</p>
                    <p className='Card_Price'>{products.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard