import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageServices = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://sleepy-ocean-28261.herokuapp.com/order`)
        // fetch(`http://localhost:3000/order/order`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sleepy-ocean-28261.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>
            <h3>Total Users Orders {orders.length}</h3> 
            <div className='container'>
            <div className="row">
                <div className="col-md-12 mx-auto">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                        </tr>
                    </thead>
             {
                    orders.map(orders => <tbody
                        key={orders._id}
                    ><tr>
                        <td>{orders.name}</td>
                        <td>{orders.email}</td>
                        <td>{orders.phone}</td>
                        <td>{orders.address}</td>
                        <button className='btn btn-dark' onClick={() => handleDelete(orders._id)}>Delete</button>
                        </tr>
                        </tbody>)
                }
                </Table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageServices;