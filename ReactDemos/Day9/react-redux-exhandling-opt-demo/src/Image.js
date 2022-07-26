 
import React, { Component } from 'react'

export default class Image extends Component {
 
  render() {
    if(this.props.image ==='no image')
    {
      throw new Error("There is no image");
    }
    return (
      <div>
<img src={this.props.image} width="100px" height="100px"/>
<img src={this.props.image} width="100px" height="100px"/>
<img src={this.props.image} width="100px" height="100px"/>        
   </div>
    )
  }
}
