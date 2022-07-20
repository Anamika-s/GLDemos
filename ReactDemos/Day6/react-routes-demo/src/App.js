import logo from './logo.svg';
import './App.css';
 import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';
import NavBar from './NavBar';
import Post  from './Post';
import {BrowserRouter , Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import Logout from './Logout';
function App() {
  let isLoggedIn = true;
  let data={
    'msg' :"User has not logged in"
  }
  return ( 
    <> 
      <BrowserRouter>
      <NavBar/>
      <Routes>
      {/* <Route path="/" element={<h1> Routing Demo </h1>}/> */}
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
       <Route path="/post/:category" element={<Post/>}/>
       <Route path="/post/:category/:id" element={<Post/>}/>
       <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/login" state={data}/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/logout" element={<Logout/>}/>
      
       <Route path="*" element = {<h1> 404 Page not found  </h1>}/>
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
