import './FeaturedProducts.css'
import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import ProductCard from './Cards/ProductCard'

const FeaturedProducts = () => {
    const [Products, setProducts] = useState()
    const URL = 'https://fakestoreapi.com/products?limit=8'
    useEffect(() => {
    axios
    .get(URL)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
    }, [])
    console.log(Products)

    return (
        <div className='Featured'>
            <div className='Featured_Container'>
                {Products?.map((products) => 
                <ProductCard products={products} key={products.id}/>
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts