import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {
    Row,
    Col,
    Image,
    ListGroup,
    
} from "react-bootstrap";
function SingleProduct({ match }) {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    const getProducts = () => {
        axios.get(`https://pratices22.vercel.app/api/products/${id}`).then((res) => {
            setProduct(res.data)
            
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getProducts()


    }, [])

    
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>Code: ${product.code}</ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.smallDescription}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Large Description: {product.largeDescription}
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>

            </Row>

        </div>
    )
}

export default SingleProduct
