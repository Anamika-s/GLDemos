import React  from 'react'
import {useSelector , useDispatch} from "react-redux";
import { decrement, increment } from './actions';
const App1 = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>   <h1> {count} </h1>
      <button onClick={()=> dispatch(increment())}> Increment </button>
      <button onClick={()=> dispatch(decrement())}> Decrement </button>
    </div>
  )
 }

export default App1;