import React, { Component } from 'react'

export default class Error1 extends Component {
  constructor(props)
  {
    super(props);
    this.state=
      {hasError:false};
    
  }
   componentDidCatch(error,info)
   {console.log("ERRRRRR")
    this.setState({hasError:true});
    console.log("aaa" + this.state.hasError)
   }

  render() {
    console.log(this.state.hasError)
    if(this.state.hasError){
    return <h1> ERROR </h1>
    }
    return this.props.children;
  }  

}
