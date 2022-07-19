import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <div>
        <Child name='Ajay' address ='Delhi' marks={90}/>
        
        <Child name='Jay' address ='N Delhi' marks={80}/>
        
        <Child name='Vijay' address ='O Delhi' marks={87}/>
        <Child name='Sagar'/>
        <p> {this.props.name} </p> 
      </div>
    )
  }
}
