import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>

            <Navbar collapseOnSelect sticky='top' expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Fruits Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="home#inventoryItem">Inventory Item</Nav.Link>
                            <Nav.Link href="home#quality">Quality</Nav.Link>
                            <Nav.Link href="home#contact">Contact Us</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                            {
                                user && <><Nav.Link as={Link} to="/addItem">AddItem </Nav.Link>
                                    <Nav.Link as={Link} to="/manageInventory">
                                        ManageInventory </Nav.Link>
                                    </>

                            }
                            {
                                user ? <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Log Out</button> :
                                    <Nav.Link eventKey={2} as={Link} to='/login' >
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;