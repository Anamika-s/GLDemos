import React , {useContext} from 'react'
import { GlobalContext } from './App3'
import SuperChild from './SuperChild'
export default function Child() {
 const {AppColor} = useContext(GlobalContext)

  return (
    <>
    <div>Child Component : The color that we received here is {AppColor} </div>
    <h1 style={{color: AppColor}}> CHILD COMPONENT </h1>
    <SuperChild/>
    </>
  )
}
