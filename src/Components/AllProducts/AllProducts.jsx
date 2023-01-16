import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios'
import AllProductsCard from './AllProductsCards/AllProductsCard'
import './AllProducts.css'
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {
  const navigate = useNavigate()

  const HandleBack = () => {
    navigate(`/`)
  }
  const [AllProducts, setAllProducts] = useState()
  const URL = 'https://fakestoreapi.com/products?limit=19'
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <div className='AllProducts_Container'>
        <div className='Btn_Back'>
          <box-icon name='chevron-left' size='4rem' onClick={HandleBack}></box-icon>
        </div>
        {AllProducts?.map((allproducts) => {
          allproducts.quantity = 1;
          return (
            <AllProductsCard allproducts={allproducts} key={allproducts.id} />
          )
        }
        )}
      </div>
    </div>
  )
}

export default AllProducts