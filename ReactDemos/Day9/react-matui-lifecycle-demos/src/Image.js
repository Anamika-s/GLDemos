import React, { Component } from 'react'

export default class Image extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    if(this.props.name==="noimage")
    {
      throw new Error("No Image provided")
    }
    return (
      <div> 
        <img src={this.props.name} alt="No image"/>
  
   
      </div>
    )
  }
}
