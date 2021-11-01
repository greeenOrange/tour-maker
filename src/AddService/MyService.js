import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';

const MyService = () => {
    const {user} = UseAuth()
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myEvents/${user?.email}`)
        // fetch(`https://sleepy-ocean-28261.herokuapp.com/myEvents/${user?.email}`)
        .then((res) =>res.json())
        .then((data) => setEvents(data))
    },[user.email]);
    console.log(events);
    return (
        <div>
            <h3>my Events: {events.length}</h3>
        </div>
    );
};

export default MyService;