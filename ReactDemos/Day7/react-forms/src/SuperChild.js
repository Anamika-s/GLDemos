import React , {useContext} from 'react'
import { GlobalContext } from './App3'
export default function SuperChild() {
 const {AppColor, getDay} = useContext(GlobalContext)
 const day ="Sunday"
  return (
    <>
    <div>Child Component : The color that we received here is {AppColor} </div>
    <h1 style={{color: AppColor}}> SuperChild COMPONENT </h1>
    <button onClick={()=>getDay(day)}> Click Me </button>
    </>
  )
}
