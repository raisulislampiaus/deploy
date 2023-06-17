import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

import { Button, Form } from 'react-bootstrap';
function UpdatePost() {
  const [categorys, setCategorys] = useState([])
  const [categorys2, setCategorys2] = useState([])
  const [categorys3, setCategorys3] = useState([])





  const getCategory = () => {
    axios.get('https://pratices22.vercel.app/api/category').then((res) => {
      setCategorys(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }
  const getCategory2 = () => {
    axios.get('https://pratices22.vercel.app/api/colorCategory').then((res) => {
      setCategorys2(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }
  const getCategory3 = () => {
    axios.get('https://pratices22.vercel.app/api/sizeCategory').then((res) => {
      setCategorys3(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }

  const { id } = useParams();
  let history = useHistory();
  const [product, setProduct] = useState({
    name: '',
    image: '',
    code: '',
    smallDescription: '',
    largeDescription: '',
    category: '',
    colorCategory: '',
    sizeCategory: '',

  });



  
  useEffect(() => {
    // fetch product data and set it in the state
    axios.get(`https://pratices22.vercel.app/api/products/${id}`)
      .then(res => setProduct(res.data));
      getCategory()  
      getCategory2()  
      getCategory3()  
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`https://pratices22.vercel.app/api/products/${id}`, product)
      .then(res => {
        console.log(res);
        console.log(res.data);
        history.push("/products");
      });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <div className='container'>
      <Form className="row   mx-auto  p-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3"><input type="text" name="name" value={product.name} onChange={handleChange} /></div>
        
        <div className="form-group mb-3"><input type="text" name="code" value={product.code} onChange={handleChange} /></div>
        <div className="form-group mb-3"><input type="text" name="smallDescription" value={product.smallDescription} onChange={handleChange} /></div>
        <div className="form-group mb-3"><input type="text" name="largeDescription" value={product.largeDescription} onChange={handleChange} /></div>
        <div className="form-group mb-3 ">
            <select
              className='custom-select mr-sm-2'
              name='category'
              onChange={handleChange}
            >
              <option value={product.name}>
                {product.name}
              </option>
              {categorys &&
                categorys.map(c => (
                  <option
                    key={c._id}
                    value={c._id}
                  >
                    {c.name}
                  </option>
                ))}
              
            </select>
          </div>
          <div className="form-group mb-3 ">
            <select
              className='custom-select mr-sm-2'
              name='colorCategory'
              onChange={handleChange}
            >
              <option >
                select
              </option>
              {categorys2 &&
                categorys2.map(c => (
                  <option
                    key={c._id}
                    value={c._id}
                  >
                    {c.name}
                  </option>
                ))}
              
            </select>
          </div>
          <div className="form-group mb-3 ">
            <select
              className='custom-select mr-sm-2'
              name='sizeCategory'
              onChange={handleChange}
            >
              <option>
                select
              </option>
              {categorys3 &&
                categorys3.map(c => (
                  <option
                    key={c._id}
                    value={c._id}
                  >
                    {c.name}
                  </option>
                ))}
              
            </select>
          </div>
          <div className="form-group mb-3">

            <label htmlFor="file">File</label>
            <input onChange={handleChange} type="file" name="image" accept="image/*"  />

          </div>
        <div className="form-group mb-3"><Button type="submit">Update Product</Button></div>
      </Form>
    </div>
  )
}

export default UpdatePost
