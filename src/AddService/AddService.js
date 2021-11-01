import axios from 'axios';
import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }
    return (
         <div>
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
    );
};

export default AddService;