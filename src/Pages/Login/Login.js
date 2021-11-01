import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Link, useLocation,useHistory } from 'react-router-dom';


const Login = () => {
    const {signInWithGoogle} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div>
         <h2>Please Log In</h2>
            <button onClick={handleGoogleLogin} className='btn btn-lg btn-outline-dark'>Google Sign In</button>
            <Link to='/home'><button className='btn btn-dark d-block mx-auto'>Go Back</button></Link>
        </div>
    );
};

export default Login;