import Dashboard  from './Dashboard'
import React, { Component, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import NavBar from './NavBar'
import Login2 from './Login2'
import Protected from './Protected'
export default function App1() {
   
  
    return (
      <div>App1 
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/login" element={<Login2/>}>  </Route>
   <Route path="/dashboard" element={<Protected Component={Dashboard}/>}>  </Route>
   
   <Route path="/aboutus" element={<AboutUs/>}>  </Route>
  </Routes>
  </BrowserRouter>


      </div>
    )
  }

