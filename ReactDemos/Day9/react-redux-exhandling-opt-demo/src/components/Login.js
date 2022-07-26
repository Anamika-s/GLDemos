import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';


export default function Login({ setToken }) {
   
  const[user,setUser] = useState(
    {
    username:"",
    password:""
    })
   
const handleChange = e=>
{
  console.log(e.target)
  const {name , value} = e.target
  setUser(
    {
    ...user,
    [name] : value
    })
}
 
  const handleSubmit = async e => {
    e.preventDefault();
    const {username, password} = user;
    console.log(user)
    let customConfig = {
      headers: {
      'Content-Type': 'application/json'
      }
  };
    const result = await axios.post("http://localhost:8082/login", user,customConfig)
     
    console.log(result.data);
    let token = result.data;
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" name="username"  value={user.username} onChange={handleChange}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password"  value={user.password} onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
  }
  
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};