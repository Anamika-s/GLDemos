import React, { Component } from 'react'

export default class List extends Component {
  state ={
    users:[
     {id:1,name:"Ajay",marks:90},
     {id:2,name:"Ajay",marks:90},
     {id:3,name:"Ajay",marks:90},
     {id:4,name:"Ajay",marks:90}
 ]
  }
  // render() {
  //   return (
  //     <div><h1> List of Users </h1> 
  //     <h2> {this.state.users[0].id} :: {this.state.users[0].name}</h2><br></br>
      
  //     <h2> {this.state.users[1].id} :: {this.state.users[1].name}</h2><br></br>
  //     </div>
  //   )
  render() {
    const users  = this.state.users.map((user)=>
    {
     

        return (
      <div>
        ID : {user.id} Name : {user.name} Marks : {user.marks}
           </div>
    );
  });
  return <><h1> List of Users </h1>  <div> {users} </div> </>
}
}