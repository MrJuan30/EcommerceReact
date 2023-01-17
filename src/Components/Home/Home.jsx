import React, { useEffect, useState } from 'react'
import LoadingPage from '../LoadingPage/LoadingPage'
import BigCard from './BigCard/BigCard'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import './Home.css'

const Home = () => {
  const [Loading, setLoading] = useState()
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)

  }, [])

  return (
    <div>
      {
        Loading ?
        <LoadingPage/>
        :
          <div>
            <div className='Page_Start'>
              <BigCard />
            </div>
            <div className='FeaturedContent'>
              <h2 className='Featured_Title'>Top Selling Products:</h2>
              <FeaturedProducts />
            </div>
          </div>

      }

    </div>
  )
}

export default Home