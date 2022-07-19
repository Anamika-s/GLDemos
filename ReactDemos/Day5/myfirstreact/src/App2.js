import React, { Component } from 'react'
import './App2.css'
import AuthButton from './AuthButton'
import AuthButton2 from './AuthButton2'

export default class App2 extends Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
      isLoggedIn:true
    }
  }
  render() {
   
    let {isLoggedIn} = this.state
    let AuthButton;
    if(isLoggedIn)
    AuthButton = <button> Logout </button>
    else 
    AuthButton = <button> Login </button>
    
    return (
      <div>App2
<h1> This is a Demo showing several ways to implement Conditional Rendering </h1>
{/* 
// <AuthButton isLoggedIn={this.state.isLoggedIn}/> */}
{/* 
// <AuthButton2 isLoggedIn={this.state.isLoggedIn}/> */}
{/* {AuthButton} */}

 {/* {isLoggedIn ? <button> Logout </button> : <button> Login </button>} */}
 {isLoggedIn &&
 <button> Logout </button>}

{!isLoggedIn &&
 <button> Login </button>}




















      </div>
    )
  }
}
