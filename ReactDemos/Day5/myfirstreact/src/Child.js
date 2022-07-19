import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <div> This is a Child Component 
      <h3> {this.props.name} : {this.props.address} : {this.props.marks} </h3>
      </div>
    )
  }
}

Child.defaultProps={
  address:'Calcutta',
  marks:80
}
