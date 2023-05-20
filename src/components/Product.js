import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

function Product({ product }) {
  
  return (
    <div className='product' >
      <h4 className='name'>{product.name}</h4>
      <img className='imageItem' src={product.image} alt="" height='100' width='100' />
      <h4 className='price'><b>Code : </b>{product.code}</h4>
      <Link to={`/details/${product._id}`}><Button variant="success">Show More</Button></Link>
    </div>
  )
}

export default Product