import React from 'react'

export function Avatar(props) {
  return (
    <div>
      Inside Avatar
      <img 
      src={props.user.avatarUrl}
      alt={props.user.text}
/>

    </div>
  )
}

export function UserInfo(props)
{
  return (
    
      <div>
          Inside UserInfo 
       Hello ::  {props.user.name}
      <Avatar user={props.user}/>
      
      </div>
     
  )
}

export default function Comments(props)
{
   return(
    <>
    <h1>Inside Comments</h1>
    <div> {props.text}  </div>
     
    Author Name :<UserInfo user={props.author}/>
    <b> Comment Date is {props.date} </b>  
  
    </>
   )

}

