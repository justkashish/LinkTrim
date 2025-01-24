import React, { useEffect, useState } from 'react'
import { handleSuccess } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function Home() {
    const [loggedInUser , setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[])

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
      <h1>Hello {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>

      <ToastContainer />
    </div>

    
  )
}

export default Home
