import React , {createContext, useState} from 'react'
import Child from './Child'

export const GlobalContext = createContext();
export default function App3() {
    const [color,setColor] = useState("Green")
    const [day,setDay] = useState("Monday")
    const getDay=(item)=>
    {
      console.log(item)
      setDay(item)
    }
    
  return (
    <GlobalContext.Provider value={{AppColor:color, getDay:getDay}}>
    <div>Main Component <h2> Today is {day} </h2>
     <Child/>

    </div>
    </GlobalContext.Provider>
  )
}

 
