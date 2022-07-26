import React, { Component } from 'react'

export default class Error extends Component {
  state = 
  {
    hasError : false
  }
  static getDerivedStateFromError(error)
  {
    return {hasError:true};
  }
   
  render() {
    if(this.state.hasError)
    {
      return <h3> hjhjh ERROR </h3>;
    }

    return this.props.children;
    
  }
}
