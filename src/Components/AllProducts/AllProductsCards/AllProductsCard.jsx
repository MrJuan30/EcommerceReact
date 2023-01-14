import React from 'react'
import './AllProductsCard.css'
import { useNavigate } from "react-router-dom";

const AllProductsCard = ({ allproducts }) => {
    const navigate = useNavigate()

    const HandleClick = () => {
        navigate(`/products/${allproducts.id}`)
    }
    return (
        <div className="Featured_Container">
            <div className='Card'>
                <div className='Card_Container' onClick={HandleClick}>
                    <div className='Card_Header'>
                        <img src={allproducts.image} alt={allproducts.title} className='Card_Image' />
                    </div>
                    <div className='Card_Content'>
                        <h4 className='Card_Title'>{allproducts.title}</h4>
                        <p className='Card_Description'>{allproducts.description}</p>
                        <div className='PriceAndCar'>
                            <p className='Price_Text'>${allproducts.price} USD </p>
                            <p className='Card_Price'><box-icon name='cart-add' color='#2f2f2f' size='2.5rem'></box-icon></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllProductsCard