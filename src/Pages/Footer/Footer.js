import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faTwitterSquare,faLinkedin,faGoogle } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <div className='mt-4 bg-dark text-white p-3'>
            <div className="row">
                <div className="col-md-4">
                    <h2>social media</h2>
                    <div className="social-icon">
                    <FontAwesomeIcon className='icon' icon={faFacebook}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faTwitterSquare}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faLinkedin}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faGoogle}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="col-md-4">
                   <h2 className='text-danger'>Get in Touch</h2>
                   <div className="touch">
                       <h5>Address:</h5>
                       <p>95 South Park Avenue, Dhaka, Bangladesh</p>
                       <h5>Phone Number:</h5>
                       <p>+440 875369022- <span className="text-secondary">central Office</span></p>
                       <h5>Email Address:</h5>
                       <p>support@globals.com</p>
                   </div>
                </div>
                <div className="col-md-4">
                   <h2>Email Newsletters</h2>
                    <input className='p-2' type="email" placeholder='Email'/><br/><br/>
                    <input className='p-2' type="password" placeholder='password' /><br/><br/>
                    <button className='btn btn-danger'>Subscribe Now</button>
                </div>
            </div>
           <p className='text-danger'> &copy; 2021 TourMaker company</p>
        </div>
    );
};

export default Footer;