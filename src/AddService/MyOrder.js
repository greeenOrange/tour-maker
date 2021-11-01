import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
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
            <h3>Manage Services</h3>
            {
                orders.map(order => <div key={order._id}>
                  <h3>{order.name}</h3>
                  <button onClick={() => handleDelete(order._id)}>Delete</button>     
                </div>)
            }
        </div>
    );
};

export default MyOrder;