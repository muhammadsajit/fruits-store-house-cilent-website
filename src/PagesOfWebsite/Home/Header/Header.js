import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>

            <Navbar collapseOnSelect sticky='top' expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Fruits Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link href="home#inventory">Inventory Item</Nav.Link>
                  
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                            <Nav.Link eventKey={2}  as={Link} to='/login' >
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;