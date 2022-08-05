import React, { Component } from 'react'
import axios from "axios"

export default class ApiCall extends Component {
  state={
     title:"",
     body:""
  } 
   componentDidMount() 
  {
       this.func(2,3)         
  }
  func = async() =>
  {
    let url ="";
    let options=
    {
       method:'GET',
       url:"https://jsonplaceholder.typicode.com/posts"
    }
    try { 
       let response = await axios(options)
// console.log(response.json());
     this.setState(
      {
        // age:response.data.studentAge,
        // name:response.data.name,
        // error:false
        title:response.title,
        body: response.body 
      }
     )
      console.log(response)
    } catch (error){
      console.log(error)
    } }

  render() {
    return (
      <div>ApiCall 
  


      </div>
    )
  }
}
