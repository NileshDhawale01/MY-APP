import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Content.css'

function Content() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/company/user`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='content-data-head'>
          <div className='content-data'>
          {data.data.map(user => (
            <div className='users' key={user.userId}>
              <h2>User Details</h2>
              <p>User ID: {user.userId}</p>
              <p>First Name: {user.userFirstName}</p>
              <p>Last Name: {user.userLastName}</p>
              <p>Birth Date: {user.userBirthDate}</p>
              <p>Image: {user.userImage}</p>
              <p>About: {user.about}</p>
              <Link to={`/oneUser/${user.userId}`}>Go To User Data</Link>
            </div>
          ))}
        </div>
        </div>
      );
      
}

export default Content;