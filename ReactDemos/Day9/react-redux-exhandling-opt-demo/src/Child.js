import React, { Component } from 'react'

export default class Child extends Component {
  state =
  {
    name:"Anu"
    
  }
  constructor(props)
{
  // Good place to store initial state 
  super(props);
  console.log("child constructor")
  this.state=
  {
    name:this.props.name
  }
}
// COm has not mounted yet
// what we can do here 
// render has done yet
// we have state, and we can change state
// sometimes depending upon props, we can change state
// it runs only once
componentWillMount() {
  console.log("child Com mount")
  console.log(window.innerWidth)
  if(window.innerWidth<500)
  {
    this.setState({innerWidth:window.innerWidth})
  }
}  
// do not change state 
// called everytime you change state 
// when you do render , it goes thru all subcomponents if there are child components
render() {
  console.log("child render")
    return (
      <div>Child 
        {this.props.name}
      <h1>Inside child passed from parent {this.state.name}</h1>
      <h2> InnerWidth : {this.state.innerWidth}</h2>
     
      </div>
    )
  }
  componentDidMount() {
    console.log("child com did mount")
  }
  componentWillReceiveProps(nextProps) {
    console.log("child componentWillReceiveProps")
  }
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("child shouldComponentUpdate")
    return true;

  }

}
