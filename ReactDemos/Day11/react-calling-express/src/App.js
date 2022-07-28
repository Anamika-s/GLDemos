
import React, { Component, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register   from './components/Register';
import Protected from './components/Protected'
import Products from './components/Products'
import Dashboard from './components/Dashboard'
export default function App() {
   
  
    return (
      <div>App  
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/login" element={<Login/>}>  </Route>
<Route path="/register" element={<Register/>}>  </Route>
   <Route path="/dashboard" element={<Protected Component={Dashboard}/>}>  </Route>
   <Route path="/products" element={<Protected Component={Products}/>}>  </Route>
   
   <Route path="/aboutus" element={<AboutUs/>}>  </Route>
  </Routes>
  </BrowserRouter>


      </div>
    )
  }

