import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../hooks/UseAuth';

const MyServices = () => {
    const {user} = UseAuth()
    console.log({user});
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        // fetch(`https://sleepy-ocean-28261.herokuapp.com/order/${user?.email}`)
        fetch(`https://sleepy-ocean-28261.herokuapp.com/order?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        .finally(data => console.log(data))
    },[]);
    return (
        <div>
             <h1>Events {orders?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Email</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map(order => <tbody 
        key={order._id}
        order={order}
        >
            <tr>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
 
            </tr>
          </tbody>
        )}
      </Table>
        </div>
    );
};

export default MyServices;