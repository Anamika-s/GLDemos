import React from 'react'
import Error1 from './Error1'
export default function App5() {
  return (
    <div>App5 
      <Error1>
      <Alert message=""/>
      </Error1>
    </div>
  )
}

function Alert({message})
{
  console.log(message)
if(typeof(message)!=='string' || !message){
  throw new Error("Its not string OR its empty")
}
return(
  <h1>{message}</h1> )
}
 