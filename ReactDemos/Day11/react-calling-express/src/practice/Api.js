import React, { Component } from 'react'
import axios from 'axios'

export default class Api extends Component {
  state ={
    name:"",
    age:0,
    error:false
  }
  componentDidMount() {
   this.func(10,20);
  }
  func = async (no1,no2)=>
  {
    let url = "";
    let options=
    {
      method:'get',
      url:url
    }
    try{
let response = await axios(options)
this.setState({age:response.data.studentAge})
    }

    catch(error)
    {

    }
  }
  render() {
    return (
      <div>Api</div>
    )

  }
}