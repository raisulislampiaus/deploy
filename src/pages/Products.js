import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, } from '@ant-design/icons';
import { Button, Modal, message, Form, } from 'antd';
import { Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Products() {
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([])
  const [sizecategorys, setSizeCategorys] = useState([])
  const [colorcategorys, setColorCategorys] = useState([])



  const [isModalOpen, setIsModalOpen] = useState(false);


  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [sizeCategory, setSizeCategory] = useState("");
  const [colorCategory, setColorCategory] = useState("");
  const [smallDescription, setSmallDescription] = useState("");
  const [largeDescription, setLargeDescription] = useState("");
  const [image, setImage] = useState("")


  const send = event => {
    const data = new FormData();
    data.append("name", name);
    data.append("code", code);
    data.append("category", category);
    data.append("sizeCategory", sizeCategory);
    data.append("colorCategory", colorCategory);
    data.append("smallDescription", smallDescription);
    data.append("largeDescription", largeDescription);
    data.append("image", image);

    axios.post("https://pratices22.vercel.app/api/products", data)
      .then(res => {
        message.success('products added Successfully')
        setIsModalOpen(false)
        getProducts()
      })
      .catch((error) => {
        message.error('something error')
        console.log(error)
      })
  };


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const getProducts = () => {
    axios.get('https://pratices22.vercel.app/api/products/all').then((res) => {
      setProducts(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const getCategory = () => {
    axios.get('https://pratices22.vercel.app/api/category').then((res) => {
      setCategorys(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }

  const colorCategoryget = () => {
    axios.get('https://pratices22.vercel.app/api/colorCategory').then((res) => {
      setColorCategorys(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }

  const sizeCategoryget = () => {
    axios.get('https://pratices22.vercel.app/api/sizeCategory').then((res) => {
      setSizeCategorys(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }



  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`https://pratices22.vercel.app/api/products/${id}`)
      .then((result) => {
        message.success('products deleted Successfully')
        getProducts();
      })
      .catch(() => {
        alert('Error in the Code');
      });


  };


  useEffect(() => {
    getProducts()
    getCategory()
    colorCategoryget()
    sizeCategoryget()






  }, [])




  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h4>Products</h4>
        <Button type='primary' onClick={showModal}>Add Products</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Name</th>
            <th>Code</th>
            <th>Category</th>
            <th>colorCategory</th>
            <th>sizeCategory</th>
            <th>smallDescription</th>
            <th>largeDescription</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((item) => (
              <tr key={item._id}>

                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.category.name}</td>
                <td>{item.colorCategory}</td>
                <td>{item.sizeCategory}</td>
                <td>{item.smallDescription}</td>
                
                <td>{item.largeDescription}</td>
                
                <td>
                  <Image src={item.image} width={40} />
                </td>
                <td>
                  <div className='d-flex'>
                    <a>
                      <DeleteOutlined className='mx-2'

                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + item.name
                          )
                          if (confirmBox === true) {
                            deletePost(item._id)
                          }
                        }}

                      />
                    </a>

                    <Link to={`/product/edit/${item._id}`}><EditOutlined className='mx-2' /></Link>

                  </div>
                  <div>

                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>



      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        title='Add new Item'
        footer={false}>

        <Form onFinish={send} action="#">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="price">Code</label>
            <input
              type="text"
              id="code"
              onChange={event => {
                const { value } = event.target;
                setCode(value);
              }}
            />
          </div>
          <div className="flex">
            <label className='text-secondary'>
              Category
            </label>
            <select
              className='custom-select mr-sm-2'
              name='category'
              onChange={event => {
                const { value } = event.target;
                setCategory(value);
              }}
            >
              <option value=''>
                Choose one...
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
          <div className="flex">
            <label className='text-secondary'>
              ColorCategory
            </label>
            <select
              className='custom-select mr-sm-2'
              name='colorCategory'
              onChange={event => {
                const { value } = event.target;
                setColorCategory(value);
              }}
            >
              <option value=''>
                Choose one...
              </option>
              {colorcategorys &&
                colorcategorys.map(c => (
                  <option
                    key={c._id}
                    value={c._id}
                  >
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex">
            <label className='text-secondary'>
              sizeCategory
            </label>
            <select
              className='custom-select mr-sm-2'
              name='sizeCategory'
              onChange={event => {
                const { value } = event.target;
                setSizeCategory(value);
              }}
            >
              <option value=''>
                Choose one...
              </option>
              {sizecategorys &&
                sizecategorys.map(c => (
                  <option
                    key={c._id}
                    value={c._id}
                  >
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex">
            <label htmlFor="price">Small Description</label>
            <input
              type="text"
              id="smallDescription"
              onChange={event => {
                const { value } = event.target;
                setSmallDescription(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="price">Large Description</label>
            <input
              type="text"
              id="largeDescription"
              onChange={event => {
                const { value } = event.target;
                setLargeDescription(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="image"
              onChange={event => {
                const file = event.target.files[0];
                setImage(file);
              }}
            />
          </div>
          <button className='save' >Save</button>
        </Form>

      </Modal>
    </div>
  )
}

export default Products
