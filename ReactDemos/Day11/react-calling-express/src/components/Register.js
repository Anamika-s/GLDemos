import axios from 'axios';
import React, {useState ,useNavigate ,  Component } from 'react'
import { useEffect } from 'react';
export default function Register() {
  const [user,setUser] = useState(
    {
      firstname:"",
      lastname:"",
      city:"",
      age:0,
       email:"",
       password:"",

    }
  )
//   const navigate = useNavigate();
//   useEffect(()=>
//   {
//     let token = localStorage.getItem("token")
//     if(!token)
// navigate("/login")
//   })

  const handleChange = e=>
  {
    const {name , value} = e.target;
    setUser(
      { ... user,
        [name]:value

      }
    )
  }

  const handleSubmit = async e=>
  {
      e.preventDefault();
      console.log("Inside")
      const {firstname, lastname, city , age,email, password} = user;
      console.log(user)
      let Config = 
      { 
        headers :
        { 
          'Content-Type':'application/json'
        }
      };
      const resp = await axios.post("http://localhost:9000/auth/register", user , Config)
      if(resp.data.status===200)
      console.log("User Added")
      else 
      console.log(resp)
     
  }
  return (
      <div>
        <h1> Register Page  </h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>
             <p> firstname </p>
             </label>
             <input type="text" name="firstname" value={user.firstname} onChange={handleChange}/>
             </div>

             <div>
          <label>
             <p> lastname </p>
             </label>
             <input type="text" name="lastname" value={user.lastname} onChange={handleChange}/>
             </div>

                       

                      <div>
          <label>
             <p> city </p>
             </label>
             <input type="text" name="city" value={user.city} onChange={handleChange}/>
             </div>
             <div>
          <label>
             <p> age </p>
             </label>
             <input type="text" name="age" value={user.age} onChange={handleChange}/>
             </div>
                      <div>
          <label>
             <p> email </p>
             </label>
             <input type="text" name="email" value={user.email} onChange={handleChange}/>
             </div>

             <div>
          <label>
             <p> password </p>
             </label>
             <input type="password" name="password" value={user.password}  onChange={handleChange}/>
             </div>
             <button type="submit"> Register </button>
        </form>

      </div>
    )   


  }

