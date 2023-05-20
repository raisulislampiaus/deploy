import React from 'react'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

import { LinkContainer } from "react-router-bootstrap";
import { UserOutlined  } from '@ant-design/icons';


function Headerss() {

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1">
          <Container fluid>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <LinkContainer to="/">
              <Navbar.Brand >
               <Image className='avatar' src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png' width={42}/>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}

            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Hi'Raisul
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav >
                  <LinkContainer to="/">
                    <Nav.Link >Dashboard</Nav.Link>
                  </LinkContainer>
                  

                  <LinkContainer to="/products">
                    <Nav.Link >Products</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/category">
                    <Nav.Link >Category</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/colorCategory">
                    <Nav.Link >colorCategory</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/sizeCategory">
                    <Nav.Link >sizeCategory</Nav.Link>
                  </LinkContainer>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Headerss;