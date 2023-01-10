import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './BigCard.css'

const BigCard = () => {
    const [Product1, setProduct1] = useState()
    const URL = 'https://fakestoreapi.com/products/1'
    useEffect(() => {
        axios
            .get(URL)
            .then((res) => setProduct1(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className='BigCard'>
            <div className='BigCard_Container'>
                <div className='BigCard-Text_Container'>
                    <h2 className='BigCard_Title'>{Product1?.title}</h2>
                    <br />
                    <p className='BigCard_Description'>{Product1?.description}</p>
                </div>
                <div className='BigCard_Image-container'>
                    <img src={Product1?.image} alt={Product1?.title} className='BigCard_Image' />
                </div>
                <br />
                <div className='BigCard_Btn-Container'>
                    <NavLink to='/' className='BigCard_Btn'>
                        More Info
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BigCard