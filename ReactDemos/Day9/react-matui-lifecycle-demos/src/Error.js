import React, { Component } from 'react'

export default class Error extends Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
       hasError:false,
       msg:""
    }
  }
   static getDerivedStateFromError(error)
   {
     return {hasError : true};
     console.log(error)
   }

//    }
// componentDidCatch(error, info) {
//   this.setState({  hasError : true})
//   console.log("ERRORRRRRRR")
//   this.setState({msg:error})
//   console.log(info)
//   console.log(error)
// }

  render() {
    if(this.state.hasError) {
    return <h1> THERE IS SOME ERROR
         </h1>
    }
    return this.props.children
    
  }
}
