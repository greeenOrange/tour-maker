import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id,name,img,place} = service
    return (
            <div className='col-md-3 service-container mb-3 p-2'>
            <img className='w-100 d-flex h-75' src={img} alt="" />
            <Link to={`/booking/${_id}`} className='service-info'>
            <h5>{name}</h5>
            <p>{place}</p>
           <button type="button" className="btn btn-outline-dark">Booking</button>
           </Link>
        </div>
    );
};

export default Service;