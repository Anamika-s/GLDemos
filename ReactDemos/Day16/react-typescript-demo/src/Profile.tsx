import React from 'react'

interface ProfileProps 
{
   name? : string,
   age : number,
   job: 'developer' | 'tester' | 'reviewer',
  //  children? : string
  children? : React.ReactNode
}

// export const Profile = (props:ProfileProps) => {
//   return (
//     <div style={{border:"2px solid", margin:"2px"}}> 
//         Profile 
//         <h1>{props.name} 
//         Your Age is  {props.age} </h1> 
//    Your job is {props.job}
//    {props.children}

//     </div>
//   )
// }


export const Profile = ({name, age,job,children}:ProfileProps) => {
  return (
    <div style={{border:"2px solid", margin:"2px"}}> 
        Profile 
        <h1>{name} 
        Your Age is  {age} </h1> 
   Your job is {job}
   {children}

    </div>
  )
}


