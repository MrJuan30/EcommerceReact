import React, { useContext } from 'react'
import './AllProductsCard.css'
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../../context/Context';

const AllProductsCard = ({ allproducts }) => {

    const navigate = useNavigate()
    const HandleClick = () => {
        navigate(`/products/${allproducts.id}`)
    }

    const Globalstate=useContext(CartContext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate)





    return (
        <div className="Featured_Container">
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
                            <button onClick={() => dispatch({type: 'ADD', payload: allproducts})} className='Card_Btn_Add'><box-icon name='cart-add' color='#2f2f2f' size='2.5rem'></box-icon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllProductsCard