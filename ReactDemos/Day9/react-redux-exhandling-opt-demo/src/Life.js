import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'
import { isDOMComponent } from 'react-dom/test-utils';
import Child from './Child';
export default class Life extends Component {
  state =
  {
    name:"Anu"
    
  }
  constructor()
{
  // Good place to store initial state 
  super();
  console.log("constructor")
  this.state=
  {
    name:"Delhi"
  }
}
// COm has not mounted yet
// what we can do here 
// render has done yet
// we have state, and we can change state
// sometimes depending upon props, we can change state
// it runs only once
componentWillMount() {
  console.log("Com mount")
  console.log(window.innerWidth)
  if(window.innerWidth<500)
  {
    this.setState({innerWidth:window.innerWidth})
  }
}  

ChangeState()
{
   
this.setState({name:'new name'})
}
// do not change state 
// called everytime you change state 
// when you do render , it goes thru all subcomponents if there are child components
render() {
  console.log("render")
    return (
     
      <div>Life   {this.state.name}
      <h1> {this.state.name}</h1>
      <h2> InnerWidth : {this.state.innerWidth}</h2>
      <h2> Child </h2>
      <Child name={this.state.name}/>
      <button onClick={this.ChangeState.bind(this)}> Change State </button>
     
      </div>
    )
  }
  // Runs only once
  // you can make Ajax Calls here
  // Also place for subscriptions
  // we can do setState , but it does rerenders
  componentDidMount() {
    console.log("com did mount")
  }
componentWillReceiveProps(nextProps) {
  console.log("componentWillReceiveProps")
}
shouldComponentUpdate(nextProps, nextState)
  {
    console.log("shouldComponentUpdate")
    return true;

  }
  // dont run setState here
  componentWillUpdate() {
    console.log("com componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("com componentDidUpdate")
  }

}
