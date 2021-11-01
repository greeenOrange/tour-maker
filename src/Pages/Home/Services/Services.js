import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sleepy-ocean-28261.herokuapp.com/services')
        // fetch('https://sleepy-ocean-28261.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container mt-2'>
        <h2 className='text-danger'>Our Services</h2>
            <div className="row">
            {
                services.map(service =><Service
                key={service._id}
                service={service}
                ></Service>)
                
            }
                
            </div>
        </div>
    );
};

export default Services;