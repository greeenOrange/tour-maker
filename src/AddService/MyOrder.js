import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    const handleDelete = id =>{
        const url = `http://localhost:5000/order/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('successfully Delete')
                const remainOrder = orders.filter(order => order._id !== id);
                setOrders(remainOrder);
            }
            
        })
    }
    return (
        <div>
            <h3>My Orders</h3>
            {/* {
                
                  <h3>{order.name}</h3>
                  <p>{order.price}</p>
                  <img className='w-25' src={order.img} alt="" />
                   
               
            } */}
            <>
            <div className='container'>
            <div className="row">
                <div className="d-flex">
                {
                orders.map(order => <div className='col-md-4' key={order?._id}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={order.img} />
  <Card.Body>
    <Card.Title>{order.name}</Card.Title>

    <Card.Text>
      {order.price}
    </Card.Text>
    <Button className='primary' variant="primary">Place Order</Button>
    <button onClick={() => handleDelete(order._id)}>Delete</button>    
  </Card.Body>
</Card>
 </div>)
            }
                </div>
            </div>
            </div>
            </>
        </div>
    );
};

export default MyOrder;