import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import './BigCard.css'
import WomenModel from '../../../assets/ModelPhoto.jpg'

const BigCard = () => {
    const [Product1, setProduct1] = useState()

    return (
        <div className='BigCard'>
            <div className='BigCard_Container'>
                <div className='TextCard_Container'>
                    <div className="NewTrentContainer">
                        <div className='UnderLine_Container'></div>
                        <p className='NewTrend_Text'>New Trend</p>
                    </div>
                    <h3 className='Feeling_Text'>Feeling beautiful is for</h3>
                    <h1 className='Title_Text'>EVERYONE</h1>
                    <NavLink to='/products' className='Text_Discover'>
                        Discover More
                    </NavLink>
                </div>
                <div className='ModelsContainer'>
                    <img src={WomenModel} alt="WomenModel"  className='Model'/>
                </div>
            </div>
        </div>
    )
}

export default BigCard