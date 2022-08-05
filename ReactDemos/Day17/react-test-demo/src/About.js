import React, { Component } from 'react'

export default class About extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      name:'ajay',
      age:20
    }
  }
  render() {
    return (
      <div>About</div>
    )
  }
}
