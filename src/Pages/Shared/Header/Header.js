import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container className="navbar">
                    <Navbar.Brand href="/">Niloy Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        
                        <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact#contact">Contact Us</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-sm btn-warning">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email || <Nav.Link as={Link} to="/register">Register</Nav.Link>}    
                         {user?.displayName &&
                             <Navbar.Text>
                             Logged in as: <span className="text-warning ps-1"> {user?.displayName}</span>
                         </Navbar.Text>
                         }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;