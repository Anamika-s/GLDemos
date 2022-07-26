import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './comp/Dashboard';
import Preferences from './comp/Preferences';
import NavBar from './comp/NavBar';
import Protected from './comp/Protected';

import Login from './comp/Login';
function App1() {
  
   

  return (
    <div className="wrapper">
     <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path='/login' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Protected Component={Dashboard}/>}></Route>
    <Route path='/preferences' element={<Preferences/>}></Route>


         
    </Routes></BrowserRouter>
    </div>
  );
}

export default App1;
