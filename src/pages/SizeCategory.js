import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DeleteOutlined,  } from '@ant-design/icons';
import { message, Button } from 'antd';
import { Table, Modal } from 'react-bootstrap';


function SizeCategory() {
  const [products, setProducts] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [name, setName] = useState({});

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("https://dashboard-api1.onrender.com/api/sizeCategory", name)
      .then(res => {
        message.success('category added Successfully')
        handleClose()
        getProducts()
      })
      .catch((error) => {
        message.error('something error')
        console.log(error)
      })
  };

  const getProducts = () => {
    axios.get('https://dashboard-api1.onrender.com/api/sizeCategory').then((res) => {
      setProducts(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`https://dashboard-api1.onrender.com/api/sizeCategory/${id}`)
      .then((result) => {
        message.success('category deleted Successfully')
        getProducts();
      })
      .catch(() => {
        alert('Error in the Code');
      });


  };

  useEffect(() => {
    getProducts()
  }, [])







  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h4>Size</h4>
        <Button type='primary' onClick={handleShow}>Add Category</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((item) => (
              <tr key={item.id}>

                <td>{item.name}</td>

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


                  </div>
                  <div>

                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} />

            <button type="primary">Create</button>
          </form>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default SizeCategory
