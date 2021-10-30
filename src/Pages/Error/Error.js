import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h3>Sorry Page is not Found 404</h3>
            <Link to='/home'><button className="btn btn-dark">Go back</button></Link>
        </div>
    );
};

export default Error;