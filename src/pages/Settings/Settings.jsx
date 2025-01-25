import React from 'react'
import {  handleSuccess } from '../../utils';
import { useNavigate } from 'react-router-dom';
function Settings() {

    const navigate = useNavigate();
    const handleLogout = (e) => {
           localStorage.removeItem('token');
           localStorage.removeItem('loggedInUser');
           console.log("User Logged out successfully")
           handleSuccess('User Logged out');
           setTimeout(()=>{
            navigate('/login')
           },1000)
        }
    
  return (
    <div>
      Settings

      <button onClick={handleLogout} className='logout-button'>Logout</button>
    </div>
  )
}

export default Settings
