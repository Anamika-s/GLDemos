import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import NavBar from './components/NavBar';
import {useState} from 'react';
import Login from './components/Login';
function App() {
  
   const[token , setToken] = useState();
   console.log("Token is " + token)
   if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
     <BrowserRouter>
     <NavBar/>
     <Routes>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/preferences' element={<Preferences/>}></Route>


         
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;
