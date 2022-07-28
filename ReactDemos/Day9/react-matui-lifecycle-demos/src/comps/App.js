import Dashboard  from './Dashboard'
import React, { Component, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUs from './AboutUs'
import NavBar from './NavBar'
import Login from './Login'
import Product from './Product'
import Protected from './Protected'
import Register from './Register'
export default function App() {
   
  
    return (
      <div>App 
<BrowserRouter>
<NavBar/>
<Routes>
<Route path="/login" element={<Login/>}>  </Route>
<Route path="/register" element={<Register/>}>  </Route>
   <Route path="/dashboard" element={<Protected Component={Dashboard}/>}>  </Route>
   <Route path="/products" element={<Protected Component={Product}/>}>  </Route>
   
   <Route path="/aboutus" element={<AboutUs/>}>  </Route>
  </Routes>
  </BrowserRouter>


      </div>
    )
  }

