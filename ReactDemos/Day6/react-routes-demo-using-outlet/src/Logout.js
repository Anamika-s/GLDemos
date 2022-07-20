import { useLocation } from "react-router-dom";
const Logout =()=>
{
  let location = useLocation();
  console.log(location)
  return(
    <>
    <h2>Logout Page </h2> 
    <h2> {location.state.name} has logged out </h2>
    </>
  )
}

export default Logout;