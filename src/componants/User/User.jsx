import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import './User.css'

function User() {

    const {userId} = useParams();
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [userDelete,setUserDelete] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8080/company/user/${userId}`)
        .then(response=>{
            setData(response.data);
            setLoading(false);
        })
        .catch(error=>{
            setError(error);
            setLoading(false);
        })
    },[])


    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error :: {error.message}</div>
    }
    
    const deleteUser=(e)=>{
        axios.delete(`http://localhost:8080/company/user/${data.data.userId}`)
        .then(response=>{
            setUserDelete(true)
            setLoading(false)
        })
        .catch(error=>{
            setLoading(false)
            setError(error)
        })
    }

    if(userDelete){
        return  <div className='users-delete'>You Deleted This User data !!</div>
    }

    return (
        <div className='users'>
            <h2>User Details</h2>
            <p>User ID: {data.data.userId}</p>
            <p>First Name: {data.data.userFirstName}</p>
            <p>Last Name: {data.data.userLastName}</p>
            <p>Birth Date: {data.data.userBirthDate}</p>
            <p>Image: {data.data.userImage}</p>
            <p>About: {data.data.about}</p>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}

export default User
