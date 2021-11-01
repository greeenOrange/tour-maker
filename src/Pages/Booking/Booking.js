import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Booking = () => {
const {id} = useParams();
const { register, handleSubmit, reset } = useForm();
const {user} = UseAuth()

const [details, setDetails] = useState({})

useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
        const services = data?.find(service => service._id == id)
        setDetails(services)
    })
},[id])

const onSubmit = data =>{
  data.email = user?.email;
    axios.post('http://localhost:5000/order',data)
    .then(res => {
      if(res.data.insertedId){
        alert('successfully added');
        reset();
    }
    })
    // fetch('http://localhost:5000/order', {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
    // console.log(data);
}
    return (
            <>
        <div className="container">
        <div className="row">
        <div className='col-md-6 mx-auto'>
    <h3>This is Booking: {id}</h3>
    <img src={details?.img} alt="" />
    <h4>price: {details?.price}</h4>
    <p>{details?.discription}</p>
    <Link className='btn btn-lg btn-outline-dark' to='/'>go Back</Link>
        </div>
      <div className="col-md-6 max-auto">
      <h2 className="mt-5 text-center text-info">Please Add a Service</h2>
      <div className="login-box add-service">
        <div className="event-box border border">
          <div className="login-form ">
          <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
            <p className="m-2 mb-2">
              {/* already have account?{" "} */}
              <Link to="/login">
                <span className="text-danger">create account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
        </div>
        </div>
        </>
    );
};

export default Booking;