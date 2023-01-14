import React, {
    useState,
    useEffect
} from 'react'
import axios from 'axios'
import AllProductsCard from './AllProductsCards/AllProductsCard'

const AllProducts = () => {
    const [AllProducts, setAllProducts] = useState()
    const URL = 'https://fakestoreapi.com/products'
    useEffect(() => {
        axios
            .get(URL)
            .then((res) => setAllProducts(res.data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <div>
        <div className='AllProducts_Container'>
        {AllProducts?.map((allproducts) =>
                    <AllProductsCard allproducts={allproducts} key={allproducts.id} />
                )}
        </div>
    </div>
  )
}

export default AllProducts