import React, { createContext, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { actionType, initialState, reducer } from './reducer';
import {User} from './User';
type ctxType =
{
  state: typeof initialState,
  dispatch:React.Dispatch<actionType>
}

export const UserContext = createContext({} as ctxType)
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
<User/>   
</UserContext.Provider> </div>
  );
}

export default App;

