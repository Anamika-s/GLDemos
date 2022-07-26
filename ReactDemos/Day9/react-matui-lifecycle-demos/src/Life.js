import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'
import Child from './Child'

export default class Life extends Component {
  //good place where we can store initial state 
  //initialize iniial values 
  // State 
  state = 
  {
     name:"Ajay"
  }
  constructor(props)
  {  super(props)
       this.state =
       {
         name:this.props.name
       }
       console.log("constructor")
  }
  // component has not mounted yet
  // com is not added to DOM
  // what we can do here
  // render has not done yet
  // sometimes depending upon props, we can change state here
  // it runs only once

  componentWillMount() {

    console.log("componentWillMount")
    console.log(window.innerWidth)
    if(window.innerWidth < 500)
    {
      this.setState({innerWidth: window.innerWidth})
    }
  }
  ChangeState()
  {
    this.setState({name:'newname'})
  }
  unMountChild()
  {
    this.setState({name:"last value"});
  }
  // do not change state
  // called everytine when you change the state
  // when you render. it goes thru all the sub/change components if they are there
  render() {
    console.log("render")
    if(this.state.name==='last value')
    return <div/>
    return (
      <div>Life 
        {this.state.name}
        InnerWidth : {this.state.innerWidth}
        <Child name={this.state.name}/> 
        <button onClick={this.ChangeState.bind(this)}> Change State </button>
        <button onClick={this.unMountChild.bind(this)}> Unmount Child </button>
      </div>
    )
  }
  // also fired once
  // this is the best place to make Ajax Calls
  // Also place where we can have some subscriptions
  // we can change state , but it renders it
  componentDidMount() {
    console.log("componentDidMount"); 
  }
 componentWillReceiveProps() {
  console.log("componentWillReceiveProps"); 
}

shouldComponentUpdate(nextProps, nextState)
{
  console.log("shouldComponentUpdate"); 

   return true;
}
componentWillUpdate() {
  console.log("componentWillUpdate")
  }

}
