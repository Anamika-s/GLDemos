import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

const AuthButton2 =(props) =>
{
  let {isLoggedIn} = props;
   
    switch(isLoggedIn)
    {
      case true : return <button> Logout </button>; break;
      case false: return <button> Login </button>; break;
      default: return null;
    
  
}
}

export default AuthButton2;