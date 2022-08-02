import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { decrement, increment } from './actions';
import Posts from './Posts';
const App1 = () => {
  // const count  = useSelector(state=>state)
  // const dispatch = useDispatch();

  return (
    <div> 
      <Posts/>
      {/* <h1>{count}</h1>
    <button onClick={()=> dispatch(increment())}> INC </button>
<button  onClick={()=> dispatch(decrement())}> DEC </button> */}


    </div>
  )
}

export default App1