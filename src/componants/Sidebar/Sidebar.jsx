import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      side bar
      <div><Link to={'/user'}>User Data</Link></div>
      <div><Link to={'/addUser'}>Add User</Link></div>
    </div>
  )
}

export default Sidebar
