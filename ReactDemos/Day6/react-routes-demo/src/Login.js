import { useLocation } from "react-router-dom";
const Login =()=>
{
  let location = useLocation()
console.log(location)
  return(
    <>
     <h1> Login Page </h1>
     <h2> {location.state.msg} </h2>
     </>
  )
}

export default Login;