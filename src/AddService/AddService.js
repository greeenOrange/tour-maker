import axios from 'axios';
import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://sleepy-ocean-28261.herokuapp.com/services',data)
        // axios.post('https://sleepy-ocean-28261.herokuapp.com/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
         <div>
      <h2 className="mt-5 text-center text-info">Add Services</h2>
      <div className="login-box add-service">
        <div className="event-box border border">
        <div className="login-form ">
          <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("image", { required: true })}
                placeholder="Image Link"/>
                <input {...register("text", { required: true, maxLength: 20 })} placeholder="place name"/>
                <input {...register("text", { required: true})} placeholder="Country"  />
                <input type="submit" value="submit" />
                <br />
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
    );
};

export default AddService;