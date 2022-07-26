import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <>
      <div>NavBar</div>
      <NavLink to="/dashboard"> Dashboard </NavLink>
      
      <NavLink to="/preferences"> Prefernces </NavLink>
      </>
    )
  }
}
