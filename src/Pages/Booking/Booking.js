import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
const {id} = useParams()
const [details, setDetails] = useState({})
// const [fullDetails, setFullDetails] = useState({})
useEffect(()=>{
    fetch(`http://localhost:5000/services/${id}`)
    .then(res => res.json())
    .then(data => setDetails(data))
},[])
// useEffect(()=>{
//     const matchDetails = details.find(detail => detail.id==id)
//     setFullDetails(matchDetails);
// },[details])
    return (
        <div className='col-md-8 mx-auto'>
    <h3>This is Booking: {id}</h3>
    <img src={details?.img} alt="" />
    <h4>price: {details?.price}</h4>
    <p>{details?.discription}</p>
    <Link className='btn btn-lg btn-outline-dark' to='/'>go Back</Link>
        </div>
    );
};

export default Booking;