import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Child extends Component {
  //good place where we can store initial state 
  //initialize iniial values 
  // State 
  
  constructor(props)
  {  super(props)
       this.state =
       {
         name: this.props.name
       }
       console.log("Child constructor")
  }
  // component has not mounted yet
  // com is not added to DOM
  // what we can do here
  // render has not done yet
  // sometimes depending upon props, we can change state here
  // it runs only once

  componentWillMount() {

    console.log("Child componentWillMount")
    console.log(window.innerWidth)
    if(window.innerWidth < 500)
    {
      this.setState({innerWidth: window.innerWidth})
    }
  }
  
  // do not change state
  // called everytine when you change the state
  // when you render. it goes thru all the sub/change components if they are there
  render() {
    console.log("Child render")
    return (
      <div>Child
        {this.props.name}
        {this.state.name}
      
        
      </div>
    )
  }
  // also fired once
  // this is the best place to make Ajax Calls
  // Also place where we can have some subscriptions
  // we can change state , but it renders it
  componentDidMount() {
    console.log("Child componentDidMount"); 
  }
  componentWillReceiveProps(nextProps) {
    console.log("Child componentWillReceiveProps"); 
  }
  shouldComponentUpdate(nextProps, nextState)
{
  console.log("Child shouldComponentUpdate"); 

     return true;

}
componentDidUpdate(prevProps, prevState) {
  console.log('child perv props' + prevProps)
  console.log('child perv state' + prevState)
  
    console.log("Child componentWillUpdate")
  
  }
  componentWillUnmount()
  {

    console.log("componentWillUnmount")
  }


}