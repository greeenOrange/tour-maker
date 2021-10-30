import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Link } from 'react-router-dom';


const Login = () => {
    const {signInWithGoogle} = UseAuth();
    return (
        <div>
         <h2>Please Log In</h2>
            <button onClick={signInWithGoogle} className='btn btn-lg btn-outline-dark'>Google Sign In</button>
            <Link to='/home'><button className='btn btn-dark d-block mx-auto'>Go Back</button></Link>
        </div>
    );
};

export default Login;