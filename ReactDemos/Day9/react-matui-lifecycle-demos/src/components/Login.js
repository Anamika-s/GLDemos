import axios from 'axios';
import React, {useState , Component } from 'react'

export default function Login({setToken}) {
  const [user,setUser] = useState(
    {
       username:"",
       password:""
    }
  )
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
      const {username, password} = user;
      console.log(user)
      let Config = 
      { 
        headers :
        { 
          'Content-Type':'application/json'
        }
      };
      const resp = await axios.post("http://localhost:8000/login", user , Config)
      console.log(resp.data)
      let token = resp.data;
      setToken(token);
  }
  return (
      <div>
        <h1> Login Page  </h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label>
             <p> username </p>
             </label>
             <input type="text" name="username" value={user.username} onChange={handleChange}/>
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

