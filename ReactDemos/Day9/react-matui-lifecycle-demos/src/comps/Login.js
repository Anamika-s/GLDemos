import axios from 'axios';
import React, {useState ,useNavigate ,  Component } from 'react'
import { useEffect } from 'react';

export default function Login() {
  const [user,setUser] = useState(
    {
       email:"",
       password:""
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
      const {email, password} = user;
      console.log(user)
      let Config = 
      { 
        headers :
        { 
          'Content-Type':'application/json'
        }
      };
      const resp = await axios.post("http://localhost:9000/auth/login", user , Config)
      console.log(resp.data)
      let token = resp.data;
       if(token!=null)
       localStorage.setItem("token", token.access_token)
  }
  return (
      <div>
        <h1> Login Page  </h1>
        <form onSubmit={handleSubmit}>
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
             <button type="submit"> Login </button>
        </form>

      </div>
    )   


  }

