import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


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

  console.log(ProductById)

  return (
    <div>
      <h1>{ProductById?.title}</h1>
    </div>
  )
}

export default ProductsById