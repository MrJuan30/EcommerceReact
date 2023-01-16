import './FeaturedProducts.css'
import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import ProductCard from './Cards/ProductCard'
import { NavLink } from 'react-router-dom'


const FeaturedProducts = () => {
    const [Products, setProducts] = useState()
    const URL = 'https://fakestoreapi.com/products?limit=8'
    useEffect(() => {
        axios
            .get(URL)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div className='Featured'>
            <div className='Featured_Container'>
                {Products?.map((products) => {
                    products.quantity = 1;
                    return (
                        <ProductCard products={products} key={products.id} />
                    )
                }
                )}
                <NavLink to='/products' className='Text_More Text_Discover'>
                    More
                </NavLink>
            </div>
        </div>
    )
}

export default FeaturedProducts