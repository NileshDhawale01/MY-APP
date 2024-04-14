import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'

function AddUser() {

    const [user, setUserData] = useState({
        "userFirstName": "",
        "userLastName": "",
        "userBirthDate": "",
        "userImage": "",
        "about": ""
    });
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleChange = (e) => {

        const { name, value } = e.target;
        setUserData(preState => ({
            ...preState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        
        console.log('to add user....');
        e.preventDefault();
        axios.post(`http://localhost:8080/company/user`, user)
            .then(response => {
                setLoading(false);
                alert(response.data)
                console.log("user Data",response.data)
                setUserData({
                    "userFirstName": "",
                    "userLastName": "",
                    "userBirthDate": "",
                    "userImage": "",
                    "about": ""
                });
            })
            .catch(error => {
                setLoading(false)
                setError(error)
                console.log("error",error)
            });
    };
    
    return (
        <div className='add-user-div'>
            <form onSubmit={handleSubmit}>
                <div className='form-head'>Add User</div>
                <div className='form-field'>
                    <input type='text' name='userFirstName' value={user.userFirstName} onChange={handleChange} />
                </div>
                <div className='form-field'>
                    <input type='text' name='userLastName' value={user.userLastName} onChange={handleChange
                    } />
                </div>
                <div className='form-field'>
                    <input type='datetime-local' name='userBirthDate' value={user.userBirthDate} onChange={handleChange} />
                </div>
                <div className='form-field'>
                    <input type='text' name='userImage' value={user.userImage} onChange={handleChange} />
                </div>
                <div className='form-field'>
                    <input type='text' name='about' value={user.about} onChange={handleChange} />
                </div>
                <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
