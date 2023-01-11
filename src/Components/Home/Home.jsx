import React from 'react'
import BigCard from './BigCard/BigCard'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='Page_Start'>
        <h1 className='PageStart_Title'>Most Sold Product</h1>
        <BigCard />
      </div>
      <div className='FeaturedContent'>
        <h2 className='Featured_Title'>Top Selling Products:</h2>
        <FeaturedProducts />
      </div>
    </div>
  )
}

export default Home