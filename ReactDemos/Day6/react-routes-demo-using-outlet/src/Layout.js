import { Link,NavLink, Outlet } from "react-router-dom";
const Layout =()=>
{
  return (
    <>
     <ul>
      <li><NavLink to="/" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Home Page </NavLink></li>
      <li> <NavLink to="/about" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> About Us </NavLink></li>
      <li> <NavLink to="/contact" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Contact Us </NavLink></li>
      <li> <NavLink to="/post/mobile" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Post Data  </NavLink></li>
      <li> <NavLink to="/post/mobile/1" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Post Data  </NavLink></li>
      <li> <NavLink to="/dashboard" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}> Dashboard </NavLink></li>
      <li> <NavLink to="/login" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}>  Login  </NavLink></li>
      <li> <NavLink to="/logout" style={({isActive})=> {return{backgroundColor: isActive ? 'red' : ''}}}>  Logout  </NavLink></li>
     </ul>
    
    <Outlet/>
    
    </>
  )
}


export default Layout;