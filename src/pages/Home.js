import React, { useState, useEffect } from 'react'
import { Col, Row, } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import Category from '../components/Category'





function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  

  const [selectedCategory, setSelectedCategoty] = useState("phone");
 

  const getCategorys = () => {
    axios.get('https://pratices22.vercel.app/api/category').then((res) => {
      setCategory(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
 

  const getProducts = () => {
    axios.get('https://pratices22.vercel.app/api/products/all').then((res) => {
      setProducts(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getProducts()
    getCategorys()
   
  }, [])

  return (

    <div>
      <div className='all-menu'>
        <h4>Choose Category</h4>
      </div>
      <div>
        <Row>
          {category.map((category) => {
            return <Col
              onClick={() => setSelectedCategoty(category.name)}
            >
              <Category category={category} />
            </Col>
          })}
        </Row>
      </div>
     
      
      <div>
        <div className='all-menu'>
          <h4>Products</h4>
        </div>
        <Row>
          {products.filter((c) => c.category.name === selectedCategory).map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>

  )
}

export default Home
