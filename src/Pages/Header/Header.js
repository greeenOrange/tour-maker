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
                        <Link to="/home">Home</Link>
                        <Link className='m-2' to="/home#services">Services</Link>
                        {
                            user.email?(
                                <span>
                                <Link to="/manageservices">Manage all Order</Link>
                        <Link to="/addservices">Add Services</Link>
                        <Link to="/order">My Order</Link>
                        <Link></Link>
                                </span>
                            ):(
                                <div></div>
                            )
                        }
                       
                        {
        user.email ?(
        <Button className="m-2" onClick={LogOut} variant="light">LogOut</Button>
        ):(        
        <Link to="/login">Login</Link>)
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