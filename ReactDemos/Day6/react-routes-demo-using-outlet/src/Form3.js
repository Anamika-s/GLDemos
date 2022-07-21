import React, { Component } from 'react'

export default class Form3 extends Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
       name:""
    }
    this.myRef = React.createRef();
  } 
  handleSubmit =(event)=>
  {
    event.preventDefault();
    console.log(this.myRef.current.value)
    this.setState({name : this.myRef.current.value})
  }

  render() {
    return (
      <>      <div>Form3</div>
      <h2>Your Name is {this.state.name} </h2> 
      <form onSubmit={this.handleSubmit}>
        User Name : <input type="text" ref={this.myRef}/>
        <button type='submit'> Submit </button>
      </form>
      </>

    )
  }
}
