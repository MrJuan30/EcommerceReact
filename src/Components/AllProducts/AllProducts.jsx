import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios'
import AllProductsCard from './AllProductsCards/AllProductsCard'
import './AllProducts.css'
import { useNavigate } from 'react-router-dom'
import LoadingPage from '../LoadingPage/LoadingPage'

const AllProducts = () => {
  const navigate = useNavigate()

  const HandleBack = () => {
    navigate(-1)
  }
  const [AllProducts, setAllProducts] = useState()
  const URL = 'https://fakestoreapi.com/products?limit=19'
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err))
  }, [])


  const [Loading, setLoading] = useState()
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])


  return (
    <div>
      {Loading ?

        <LoadingPage />

        :
        <div>
          <div className='Btn_Back'>
            <box-icon name='chevron-left' size='4rem' onClick={HandleBack}></box-icon>
          </div>
          <div className='AllProducts_Container'>
            {AllProducts?.map((allproducts) => {
              allproducts.quantity = 1;
              return (
                <AllProductsCard allproducts={allproducts} key={allproducts.id} />
              )
            }
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default AllProducts