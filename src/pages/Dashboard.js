import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import c3 from 'c3';


function Dashboard() {
    const [products, setProducts] = useState()


    const getProducts = () => {
        axios.get('https://dashboard-api1.onrender.com/api/products/gets/count').then((res) => {
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

   


    var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ],
          axes: {
            data2: 'y2'
          },
          types: {
            data2: 'bar' // ADD
          }
        },
        axis: {
          y: {
            label: {
              text: 'Y Label',
              position: 'outer-middle'
            }
          },
          y2: {
            show: true,
            label: {
              text: 'Y2 Label',
              position: 'outer-middle'
            }
          }
        }
    });

    var chart = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 100, 140, 200, 150, 50]
            ]
        }
    });
    
    setTimeout(function () {
        chart.transform('donut');
    }, 1000);
    
    setTimeout(function () {
        chart.transform('line');
    }, 2000);
    
    setTimeout(function () {
        chart.transform('pie');
    }, 3000);
    
    setTimeout(function () {
        chart.transform('donut');
    }, 4000);


   
 

    useEffect(() => {
        getProducts();
       

    }, [])



    return (

        <div className='main'>
            <Container>
                <Row>
                    <Col className='cards'>
                        <div className='uitem'>
                            <h2>20</h2>
                            <p>Total Users</p>
                        </div>
                    </Col>
                    <Col className='cradtwo'>
                        <div className='pitem'>
                            <h2>{products}</h2>
                            <p>Total Products</p>
                        </div>
                    </Col>
                    <Col className='cradthree'>
                        <div className='oitem'>
                            <h2>16</h2>
                            <p>Total Order</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                      <div id="chart"></div>
                    </Col>
                    <Col>
                      <div id="chart2"></div>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>

    )
}

export default Dashboard
