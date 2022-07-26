import React from 'react'
import {useState,useMemo} from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(1);
  const [item,setItem] = useState(10);
  const multiplyCount = useMemo(function Multiply()
  {
    console.log("Within Multiply")
    return count * 5;
  }, [count,item])

  return (
    <div>UseMemoDemo  : <h2>Count : {count} </h2> 
    <h3> Product : {item} </h3>
    {multiplyCount}
<button onClick={()=>setCount(count+1)} > Update Count </button>

<button onClick={()=>setItem(count*10)} > Update Item </button>

    </div>
  )
}
