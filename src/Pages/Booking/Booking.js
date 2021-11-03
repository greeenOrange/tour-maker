import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Booking = () => {
const {id} = useParams();
const { register, handleSubmit, reset, formState:{errors}, } = useForm();
const {user} = UseAuth()
const history = useHistory();
const [details, setDetails] = useState({})

useEffect(()=>{
    // fetch('http://localhost:5000/services')
    fetch('https://sleepy-ocean-28261.herokuapp.com/services')
    .then(res => res.json())
    .then(data => {
        const services = data?.find(service => service._id == id)
        setDetails(services)
    })
},[id])

const onSubmit = data =>{
  data.status = "pending"
  delete data._id;
  data.email = user?.email;
    // axios.post('http://localhost:5000/order',data)
    axios.post('https://sleepy-ocean-28261.herokuapp.com/order',data)
    .then(res => {
      if(res.data.insertedId){
        alert('successfully added');
        reset();
        history.push('/home')
    }
    })
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
      <h2 className="mt-5 text-center text-info">Please Place Booking</h2>
      <div className="login-box add-service">
        <div className="event-box border border">
          <div className="login-form ">
          <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" value={details.name} />
                <input {...register("email", { required: true})} placeholder="Email" value={user.email} />
                <input className='p-2' {...register("address", { required: true})} placeholder="Address"/>
                <input type="number" {...register("price")} placeholder="price"  value={details?.price}/>
                <input {...register("phone")} placeholder="phone" />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
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