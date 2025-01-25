import React from 'react';
import { useState,useEffect } from 'react';
import { FaSun, FaMoon, FaCloudSun, FaSearch,FaPlus } from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const greetings = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';
  const emoji = hours < 12 ? <FaSun color='yellow' /> : hours < 18 ? <FaCloudSun /> : <FaMoon />;
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = days[currentTime.getDay()];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = currentTime.getDate();
  const month = monthNames[currentTime.getMonth()];
  const currentDate = `${dayOfWeek}, ${month} ${day}`;
  const [loggedInUser , setLoggedInUser] = useState('');
   

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[])
 
 
  

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>{emoji}{greetings}, {loggedInUser}</h2>
        <p>{currentDate}</p>
      </div>
      <div className="navbar-right">
      <button className="create-button"><FaPlus />Create new</button>
      <div className="search-bar">
      <FaSearch size={18} /> <input type="text" placeholder="Search by Remarks" />
          
        </div>
        
        <div className="profile-pic">{loggedInUser.charAt(0).toUpperCase()}{name.charAt(1).toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Navbar;
