import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class NavBar extends Component {
  render() {
    return (
      <> 
         <NavLink to="/dashboard"> Dashboard </NavLink>
         
         <NavLink to="/aboutus"> About Us </NavLink>
         <NavLink to="/products"> Products </NavLink>
         
         <NavLink to="/register"> Register </NavLink>
        

      </>
    )
  }
}
