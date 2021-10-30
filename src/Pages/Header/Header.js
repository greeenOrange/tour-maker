import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Header = () => {
    const {user, LogOut} = UseAuth();  
    return (
        <>
            <Navbar className='menu-bar' variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tour Maker</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to="/home#home">Home</Link>
                        <Link to="/home#services">Services</Link>
                        <Link to="/home#items">items</Link>
                        <Link to="/home#plans">Plans</Link>
                        <Link to="/home#options">options</Link>
                        <Link to="/home#blogs">Blogs</Link>
                        <Link to="/home#contact">Contact</Link>
                       
                        {
        user.email ?
        <Button onClick={LogOut} variant="light">LogOut</Button>:
        <Link to="/login">Login</Link>
      }
      <Navbar.Text>
          Sign in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;