import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './ProductsById.css'


const ProductsById = () => {
  const { id } = useParams()
  const [ProductById, setProductById] = useState()
  const [error, seterror] = useState(false)


  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProductById(res.data))
      .catch((err) => {
        console.log(err)
        seterror(true)
      });
  }, [id]);

  const navigate = useNavigate()

  const HandleBack = () => {
    navigate(`/products`)
  }
  return (
    <div className='ProductById'>
      <div className='ProductById_Container'>
        <div className="ProductById_Header">
          <div className='Btn_Back Btn_Back_2'>
            <box-icon name='chevron-left' size='4rem' onClick={HandleBack}></box-icon>
          </div>
          <h3 className='ProductById_Title'>{ProductById?.title}</h3>
        </div>
        <div className='ProductById-Image_Container'>
          <img src={ProductById?.image} alt={ProductById?.title} className="ProductById_Image" />
        </div>
        <div className='ProductById_Info'>
          <p className="ProductById_Description">
            {ProductById?.description}
          </p>
        </div>
        <div className="ProductById_Footer">
          <p className='ProductById_Price-Text'>$ {ProductById?.price}</p>
          <box-icon name='cart-add' size='2rem'></box-icon>

        </div>
      </div>

    </div>
  )
}

export default ProductsById