import Dashboard  from './Dashboard'
import React, { Component, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import NavBar from './NavBar'
import Login from './Login'
export default function App() {
   const [token, setToken] = useState();
 if(!token)
  return <Login setToken={setToken}/>
    return (
      <div>App  
<BrowserRouter>
<NavBar/>
<Routes>
   <Route path="/dashboard" element={<Dashboard/>}>  </Route>
   
   <Route path="/aboutus" element={<AboutUs/>}>  </Route>
  </Routes>
  </BrowserRouter>


      </div>
    )
  }

