import React, { Component } from 'react'

export default class Form2 extends Component {
 
  constructor(props)
    {
      super(props)
      // this.SubmitData = this.SubmitData.bind(this);
      this.state={
        firstName:"",
        lastName:"",
        eMail:""
    }


          
  }

  
  // handle1=event=>
  // {
  //   console.log(event.target.value);
  //   this.setState({firstName:event.target.value})

  // }

  
  // handle2=event=>
  // {
  //   console.log(event.target.value);
  //   this.setState({lastName:event.target.value})

  // }

  
  // handle3=event=>
  // {
  //   console.log(event.target.value);
  //   this.setState({eMail:event.target.value})

  // }

handle=event=>
  {
    // console.log(event.target.name)
    // console.log(event.target.value);
    this.setState({[event.target.name]:event.target.value})

  }

  //  SubmitData(event) 
  // {
  //   event.preventDefault();
  //   console.log(this.state)

  // }
   
   SubmitData = (event)=> 
  {
    event.preventDefault();
    console.log(this.state)

  }

  render() {
    return (
      <div> 
       <h1> Data Entry Form </h1>
       <form onSubmit={this.SubmitData}>
        <div>
          <label for="firstName"> First Name </label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handle}/>
        </div>

        <div>
          <label for="lastName"> Last Name </label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handle}/>
        </div>

        <div>
          <label for="eMail"> EMail  </label>
          <input type="text" name="eMail" value={this.state.eMail} onChange={this.handle}/>
        </div>

        <button type="submit"> Submit Data </button>
       </form>
      </div>
    )
  }
}
