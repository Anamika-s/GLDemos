import React, { Component } from 'react'

export default class StateDemo extends Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      name:"ajay",
      // address :"New Delhi"
      address: this.props.address
    }
  }
  updateAddress =()=>
  {
    this.setState({name:'Sagar', address:'New Delhi'})
  }
  ChangeName=(event)=>
  {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    
    
    this.setState(
      {name:event.target}
    )
  }
  render() {
    return (
      <div>
Hello {this.state.name} , you stay at {this.state.address}
<button onClick={this.updateAddress}> Update Address </button>
{/* <h1> Using input Element </h1>
<label for="txtName"> Enter Name </label>
<input type="text" id="name" onChange={this.ChangeName}/>
 You have typed {this.state.name} */}
      </div>
    )
  }
}
