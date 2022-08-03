import React, { useContext } from 'react'
import { UserContext } from './App'

export const User = () => {
  const {state,dispatch} = useContext(UserContext);
    return (
      <div>User {state.name} 
       User {state.age} 
      <button onClick={()=> {dispatch({type:"UPDATE_NAME", payload:"222 Name"})
      }}> update name</button>

<button onClick={()=> {dispatch({type:"UPDATE_AGE", payload:30})
      }}> update age</button>
      </div>
    )
  }
  
  