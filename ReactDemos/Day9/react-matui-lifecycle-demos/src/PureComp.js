import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  constructor()
  {
    super();
    this.state=
    {
       count : 1
    }
  }
  render() {
    console.log("Rendering")
    return (
      <div> 
        <h1> Pure Component : {this.state.count} </h1>
  <button onClick={()=> this.setState({count : this.state.count+1})}> Update Count </button>
      </div>
    )
  }
}
